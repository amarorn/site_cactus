# Observações Finais - Validação Antes de Publicar

## Dados que precisam de validação

### Clientes (`content/clients.ts`)
- Conferir grafia oficial de cada nome (ex.: Libert/Liberty, Beanalityc/Beanalytic, ArcelorMittal, Havan)
- Comentário TODO no arquivo indica necessidade de validação

### Contatos (`content/contact.ts`)
- E-mail: validar se é o oficial
- WhatsApp: preencher e validar número
- Telefone: preencher se houver
- Endereço: preencher quando houver endereço completo validado

### Cases (`content/cases.ts`)
- Casos usam descrições genéricas e qualitativas, sem números inventados
- Para cases detalhados com métricas, adicionar dados reais após validação

### SEO (`content/seo.ts`)
- `siteUrl`: alterar para domínio de produção
- Redes sociais: preencher URLs quando disponíveis

### Formulário de contato (`app/contato/actions.ts`)
- Implementar integração com serviço de e-mail (Resend, SendGrid, etc.)
- Atualmente retorna sucesso como stub
