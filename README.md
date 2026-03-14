# Cactus System - Site Institucional

Site institucional da Cactus System. Empresa de tecnologia com foco em desenvolvimento de software, dados e IA.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide Icons
- Zod

## Execução

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Estrutura

```
/app              Rotas e layouts
/components       Componentes React
/content          Conteúdo editável (empresa, serviços, clientes, etc.)
/lib              Utilitários
/public/brand     Logos e assets de marca
/types            Tipos TypeScript
```

## Conteúdo editável

Centralize alterações em:

- `content/company.ts` - Dados da empresa
- `content/contact.ts` - E-mail, WhatsApp, endereço
- `content/clients.ts` - Lista de clientes
- `content/services.ts` - Serviços da home
- `content/servicesDetail.ts` - Detalhes dos serviços
- `content/solutions.ts` - Soluções por resultado
- `content/cases.ts` - Cases de clientes
- `content/about.ts` - Sobre a empresa
- `content/navigation.ts` - Links do menu e footer
- `content/seo.ts` - SEO e URL do site

## Validação antes de publicar

- [ ] Grafia de clientes em `content/clients.ts`
- [ ] Contatos oficiais em `content/contact.ts` (WhatsApp, telefone, endereço)
- [ ] URL em `content/seo.ts` para produção
- [ ] Integração do formulário de contato com serviço de e-mail (ver `app/contato/actions.ts`)
- [ ] Links de redes sociais em `content/seo.ts` se houver
