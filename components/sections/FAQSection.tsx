"use client";

import { useId } from "react";
import { faqItems } from "@/content/faq";

/**
 * FAQ with question-based H2s and short answers for SEO and LLM citation.
 * Optional technical table can be passed per item or as a single table below.
 */
export function FAQSection() {
  const baseId = useId();

  return (
    <section
      className="relative overflow-hidden section-spacing bg-white dark:bg-graphite"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <h2 id="faq-heading" className="text-h2 font-bold text-graphite dark:text-white">
          Perguntas frequentes
        </h2>
        <p className="mt-2 text-graphite/80 dark:text-white/80 max-w-2xl">
          Respostas objetivas sobre serviços, atendimento e tecnologias.
        </p>

        <dl className="mt-10 space-y-8">
          {faqItems.map((item, i) => (
            <div key={item.id}>
              <dt>
                <h3
                  id={`${baseId}-${i}`}
                  className="text-lg font-semibold text-graphite dark:text-white"
                >
                  {item.question}
                </h3>
              </dt>
              <dd className="mt-2 text-graphite/90 dark:text-white/90 leading-relaxed">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 rounded-xl border border-graphite/10 dark:border-white/10 overflow-hidden">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">
              Resumo de serviços e formas de contato
            </caption>
            <thead>
              <tr className="border-b border-graphite/10 dark:border-white/10 bg-light-gray/50 dark:bg-graphite/50">
                <th className="px-4 py-3 font-semibold text-graphite dark:text-white">
                  Tópico
                </th>
                <th className="px-4 py-3 font-semibold text-graphite dark:text-white">
                  Resposta resumida
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-graphite/10 dark:border-white/10">
                <td className="px-4 py-3 text-graphite dark:text-white/90">
                  Serviços
                </td>
                <td className="px-4 py-3 text-graphite/80 dark:text-white/80">
                  Software, dados e IA (mobile, web, sistemas, arquitetura de dados, analytics, IA/LLM).
                </td>
              </tr>
              <tr className="border-b border-graphite/10 dark:border-white/10">
                <td className="px-4 py-3 text-graphite dark:text-white/90">
                  Atendimento
                </td>
                <td className="px-4 py-3 text-graphite/80 dark:text-white/80">
                  Nacional; sede em Natal/RN. Contato por formulário, e-mail ou WhatsApp.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-graphite dark:text-white/90">
                  Resposta
                </td>
                <td className="px-4 py-3 text-graphite/80 dark:text-white/80">
                  Até 24h úteis para primeiro retorno.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
