"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { z } from "zod";
import { sendContactForm } from "@/app/contato/actions";

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
      className="rounded-full bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-70"
    >
      {pending ? "Enviando..." : "Enviar"}
    </button>
  );
}

export function ContactForm() {
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

    const res = await sendContactForm(result.data);
    if (res.success) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-primary/30 bg-primary/5 dark:bg-primary/10 p-6">
        <p className="font-medium text-graphite dark:text-white">
          Mensagem enviada com sucesso. Em breve entraremos em contato.
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
          className="mt-1 w-full rounded-lg border border-graphite/20 px-4 py-2.5 text-graphite focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
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
        <label htmlFor="email" className="block text-sm font-medium text-graphite">
          E-mail *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-lg border border-graphite/20 px-4 py-2.5 text-graphite focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
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
        <label htmlFor="company" className="block text-sm font-medium text-graphite">
          Empresa
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="mt-1 w-full rounded-lg border border-graphite/20 px-4 py-2.5 text-graphite focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>
      <div>
        <label htmlFor="role" className="block text-sm font-medium text-graphite">
          Cargo
        </label>
        <input
          id="role"
          name="role"
          type="text"
          className="mt-1 w-full rounded-lg border border-graphite/20 px-4 py-2.5 text-graphite focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-graphite">
          Serviço de interesse
        </label>
        <select
          id="service"
          name="service"
          className="mt-1 w-full rounded-lg border border-graphite/20 px-4 py-2.5 text-graphite focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
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
        <label htmlFor="message" className="block text-sm font-medium text-graphite">
          Mensagem *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1 w-full rounded-lg border border-graphite/20 px-4 py-2.5 text-graphite focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
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
