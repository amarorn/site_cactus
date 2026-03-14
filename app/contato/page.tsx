import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { contact } from "@/content/contact";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Contato | Cactus System",
  description:
    "Entre em contato com a Cactus System. Desenvolvimento de software, dados e IA.",
};

export default function ContatoPage() {
  return (
    <div>
      <section className="border-b border-graphite/10 bg-light-gray px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            CONTATO
          </p>
          <h1 className="mt-2 text-3xl font-bold text-graphite sm:text-4xl lg:text-5xl">
            Fale conosco
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-graphite/80">
            Conte sobre seu projeto ou dúvida. Responderemos o mais breve
            possível.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-xl font-bold text-graphite">
                Formulário
              </h2>
              <ContactForm />
            </div>
            <div>
              <h2 className="text-xl font-bold text-graphite">
                Outras formas de contato
              </h2>
              <ul className="mt-6 space-y-4 text-graphite/90">
                <li>
                  <strong className="text-graphite">E-mail:</strong>{" "}
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-primary hover:underline"
                  >
                    {contact.email}
                  </a>
                </li>
                {contact.whatsapp ? (
                  <li>
                    <strong className="text-graphite">WhatsApp:</strong>{" "}
                    <a
                      href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Abrir conversa
                    </a>
                  </li>
                ) : null}
                <li>
                  <strong className="text-graphite">Localização:</strong>{" "}
                  {company.location.full}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
