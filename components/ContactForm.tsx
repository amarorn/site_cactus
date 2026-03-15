"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { z } from "zod";
import { contact } from "@/content/contact";

const schema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  company: z.string().optional(),
  role: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
  honeypot: z.string().max(0),
});

type FormData = z.infer<typeof schema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white btn-primary-cta hover:bg-primary-hover disabled:opacity-70 disabled:hover:transform-none disabled:hover:shadow-none"
    >
      {pending ? "Enviando..." : "Enviar"}
    </button>
  );
}

type ContactFormProps = {
  defaultService?: string;
};

export function ContactForm({ defaultService }: ContactFormProps) {
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(formData: unknown) {
    if (!(formData instanceof FormData)) return;
    setErrors({});
    setStatus("idle");

    const raw = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      role: formData.get("role") as string,
      service: formData.get("service") as string,
      message: formData.get("message") as string,
      honeypot: formData.get("honeypot") as string,
    };

    const result = schema.safeParse(raw);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      for (const iss of result.error.issues) {
        const path = Array.isArray(iss.path) ? iss.path[0] : (iss as { path?: unknown[] }).path?.[0];
        const msg = "message" in iss ? (iss as { message: string }).message : String(iss);
        if (path && typeof path === "string" && !fieldErrors[path as keyof FormData]) {
          fieldErrors[path as keyof FormData] = msg;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    if (contact.formEndpoint) {
      const body = new URLSearchParams();
      Object.entries(result.data).forEach(([k, v]) => {
        if (v != null && v !== "") body.append(k, String(v));
      });
      const res = await fetch(contact.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } else {
      const params = new URLSearchParams({
        subject: `Contato Cactus: ${result.data.name}`,
        body: [
          `Nome: ${result.data.name}`,
          `Email: ${result.data.email}`,
          result.data.company && `Empresa: ${result.data.company}`,
          result.data.role && `Cargo: ${result.data.role}`,
          result.data.service && `Serviço: ${result.data.service}`,
          "",
          result.data.message,
        ]
          .filter(Boolean)
          .join("\n"),
      });
      window.location.href = `mailto:${contact.email}?${params.toString()}`;
      setStatus("success");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-primary/30 bg-primary/5 dark:bg-primary/10 p-6">
        <p className="font-medium text-graphite dark:text-white">
          Mensagem enviada com sucesso. Responderemos em até 24h úteis.
        </p>
      </div>
    );
  }

  return (
    <form action={handleSubmit} className="mt-6 space-y-4">
      <input
        type="text"
        name="honeypot"
        className="absolute -left-[9999px]"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
      />
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-graphite dark:text-white">
          Nome *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-lg border border-graphite/20 dark:border-white/20 bg-white dark:bg-white/5 px-4 py-2.5 text-graphite dark:text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.name}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-graphite dark:text-white">
          E-mail *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-lg border border-graphite/20 dark:border-white/20 bg-white dark:bg-white/5 px-4 py-2.5 text-graphite dark:text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.email}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-graphite dark:text-white">
          Empresa
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="mt-1 w-full rounded-lg border border-graphite/20 dark:border-white/20 bg-white dark:bg-white/5 px-4 py-2.5 text-graphite dark:text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>
      <div>
        <label htmlFor="role" className="block text-sm font-medium text-graphite dark:text-white">
          Cargo
        </label>
        <input
          id="role"
          name="role"
          type="text"
          className="mt-1 w-full rounded-lg border border-graphite/20 dark:border-white/20 bg-white dark:bg-white/5 px-4 py-2.5 text-graphite dark:text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-graphite dark:text-white">
          Serviço de interesse
        </label>
        <select
          id="service"
          name="service"
          defaultValue={defaultService ?? ""}
          className="mt-1 w-full rounded-lg border border-graphite/20 dark:border-white/20 bg-white dark:bg-white/5 px-4 py-2.5 text-graphite dark:text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        >
          <option value="">Selecione</option>
          <option value="mobile">Aplicativos mobile</option>
          <option value="web">Aplicações web</option>
          <option value="systems">Sistemas sob medida</option>
          <option value="data-arch">Arquitetura de dados</option>
          <option value="data-eng">Engenharia de dados</option>
          <option value="analytics">Analytics e BI</option>
          <option value="data-science">Ciência de dados</option>
          <option value="ai">IA aplicada</option>
          <option value="llm">LLMs e automação</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-graphite dark:text-white">
          Mensagem *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1 w-full rounded-lg border border-graphite/20 dark:border-white/20 bg-white dark:bg-white/5 px-4 py-2.5 text-graphite dark:text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p
            id="message-error"
            className="mt-1 text-sm text-red-600"
            role="alert"
          >
            {errors.message}
          </p>
        )}
      </div>
      {status === "error" && (
        <p className="text-sm text-red-600" role="alert">
          Ocorreu um erro ao enviar. Tente novamente ou use o e-mail diretamente.
        </p>
      )}
      <SubmitButton />
    </form>
  );
}
