# Monetização e anúncios

## Google Analytics vs Google AdSense

- **Google Analytics (GA)** – não paga por clique. Mede tráfego, eventos, tempo na página, rejeição e origem do acesso.
- **Google AdSense** – programa de anúncios que paga por impressões/cliques. Quem gera receita com anúncios é o AdSense (ou outro programa de ads).

O Analytics ajuda a **decidir** onde e como monetizar com ads: quais páginas têm mais tráfego, maior tempo na página e menor taxa de rejeição são bons candidatos a exibir anúncios ou conteúdo focado em monetização.

## Uso atual do site (leads)

O foco do site da Cactus é **geração de leads** (formulário, WhatsApp, CTA “Falar com especialistas”). Os eventos configurados no GA (`whatsapp_click`, `form_contact_submit`, `cta_primary_click`) servem para ver o que gera contato e potencial receita via projetos.

## AdSense no projeto

O script do AdSense já está integrado via componente `GoogleAdSense` no layout. O ID do cliente é lido de `NEXT_PUBLIC_ADSENSE_CLIENT_ID` (ex.: `ca-pub-XXXXXXXXXXXXXXXX`). Se a variável não estiver definida, o script não é carregado.

Para exibir anúncios em páginas específicas, use os blocos de anúncio que o AdSense fornece (código de unidade de anúncio) nos locais desejados. Use os relatórios do **Analytics** (páginas mais visitadas, tempo na página, rejeição) para decidir onde colocar as unidades.

## Verificação do site no AdSense

O AdSense só consegue verificar o site se:

1. **O site estiver no ar e público** – em produção (ex.: Vercel, Netlify), não em localhost. Faça o deploy antes de solicitar a verificação.
2. **A meta tag de verificação estiver na página** – No painel do AdSense (Configurações → Gerenciamento de sites → Verificar site), escolha o método **“Tag HTML”** e copie o valor do atributo `content` da meta tag. No projeto, defina no `.env.local`:
   ```bash
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=valor_copiado_do_content
   ```
   O layout já está preparado: quando essa variável existir, a meta tag `google-site-verification` é incluída automaticamente no `<head>`.
3. **Dar tempo para o rastreador** – Após o deploy com a meta tag, clique em “Verificar” no AdSense. Se falhar, aguarde algumas horas e tente de novo; evite bloquear o rastreador (robots.txt, login obrigatório na home).
