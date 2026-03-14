import Link from "next/link";
import Image from "next/image";
import { company } from "@/content/company";
import { footerLinks } from "@/content/navigation";
import { contact } from "@/content/contact";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-graphite text-white">
      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block" aria-label="Cactus System">
              <Image
                src="/brand/logo-primary-dark.png"
                alt="Cactus System"
                width={140}
                height={40}
                className="h-9 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/80">
              {company.shortDescription}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/60">
              Serviços
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/90 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/60">
              Empresa
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/90 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/60">
              Contato
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/90">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="transition-colors hover:text-primary"
                >
                  {contact.email}
                </a>
              </li>
              {contact.whatsapp ? (
                <li>
                  <a
                    href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-primary"
                  >
                    WhatsApp
                  </a>
                </li>
              ) : null}
              <li>{company.location.full}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/60">
            {currentYear} {company.name}. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/60 transition-colors hover:text-white/90"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
