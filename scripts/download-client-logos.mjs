#!/usr/bin/env node
/**
 * Tenta baixar logos dos clientes do Clearbit. Se o serviço estiver
 * indisponível (domínio encerrado/rede), orienta a adicionar logos manualmente.
 * Rode: npm run download-logos
 */

import { mkdir, writeFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "..", "public", "logos", "clients");

const clients = [
  { domain: "bv.com.br", slug: "banco-bv" },
  { domain: "eduzz.com", slug: "eduzz" },
  { domain: "libert.com.br", slug: "libert" },
  { domain: "usp.br", slug: "usp" },
  { domain: "beanalityc.com", slug: "beanalityc" },
  { domain: "zummit.com.br", slug: "zummit" },
  { domain: "arcelormittal.com", slug: "arcelormittal" },
  { domain: "havan.com.br", slug: "havan" },
];

const LOGO_BASE = "https://logo.clearbit.com";

const fetchOptions = {
  headers: {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
    Accept: "image/*",
  },
};

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

await mkdir(OUT_DIR, { recursive: true });

let clearbitUnavailable = false;

for (const { domain, slug } of clients) {
  const url = `${LOGO_BASE}/${domain}`;
  try {
    const res = await fetch(url, fetchOptions);
    if (!res.ok) {
      console.warn(`[${slug}] ${res.status} - ${url}`);
      continue;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 100) {
      console.warn(`[${slug}] Resposta inválida, ignorando`);
      continue;
    }
    const path = join(OUT_DIR, `${slug}.png`);
    await writeFile(path, buf);
    console.log(`[${slug}] OK -> ${path}`);
  } catch (err) {
    const code = err.cause?.code || err.cause?.message || "";
    if (code.includes("ENOTFOUND") || code.includes("getaddrinfo")) {
      clearbitUnavailable = true;
      break;
    }
    console.warn(`[${slug}] Erro: ${err.message}`);
  }
  await sleep(300);
}

if (clearbitUnavailable) {
  console.log("\nO serviço Clearbit (logo.clearbit.com) não está acessível.");
  console.log("Adicione os logos manualmente em: public/logos/clients/\n");
  console.log("Arquivos esperados (PNG ou SVG):");
  clients.forEach((c) => console.log(`  - ${c.slug}.png`));
  console.log("\nVeja public/logos/clients/README.md para mais detalhes.");
}

console.log("Concluído.");
