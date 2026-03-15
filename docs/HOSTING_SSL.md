# Certificado SSL no Firebase Hosting

O aviso **"A conexão não é segura" / "Certificado inválido"** no navegador indica que o domínio `cactussystems.com.br` não está com um certificado SSL válido. Isso se resolve na configuração do provedor de hospedagem, não no código.

## Se o site está no Firebase Hosting

1. **Console do Firebase**
   - Acesse [Firebase Console](https://console.firebase.google.com) e selecione o projeto.
   - Vá em **Hosting** e em **Domínios** (ou "Adicionar domínio personalizado").

2. **Adicionar domínio personalizado**
   - Clique em **Adicionar domínio personalizado**.
   - Informe `cactussystems.com.br` (e, se quiser, `www.cactussystems.com.br`).
   - O Firebase vai mostrar os **registros DNS** que você deve criar no seu provedor de domínio (TXT para verificação e A/AAAA para apontar ao Hosting).

3. **Configurar DNS**
   - No painel do registrador do domínio (Registro.br, GoDaddy, Cloudflare, etc.), crie exatamente os registros indicados pelo Firebase (TXT e A/AAAA).
   - Aguarde a propagação (pode levar até 48h, em geral menos).

4. **Certificado**
   - Depois que o DNS estiver correto, o Firebase provisiona o certificado SSL automaticamente.
   - Enquanto isso, o status do domínio pode aparecer como "Pendente" ou "Verificando". Quando mudar para "Conectado", o certificado estará ativo e o aviso deve sumir.

## Verificações rápidas

- **Domínio está no Firebase?** Em Hosting > Domínios deve aparecer `cactussystems.com.br` com status "Conectado".
- **DNS correto?** Use `dig cactussystems.com.br` ou [whatsmydns.net](https://www.whatsmydns.net) e confira se os A/AAAA apontam para os IPs do Firebase.
- **Acesso:** Use sempre `https://cactussystems.com.br`. Evite IP ou URL de preview do Firebase para produção.

## Se o site está em outro provedor (Vercel, Netlify, etc.)

- **Vercel:** Domínios em Project > Settings > Domains; o SSL é provisionado ao adicionar o domínio e configurar o DNS conforme as instruções.
- **Netlify:** Domain management > Add custom domain; siga os registros DNS indicados.
- Em todos os casos, o certificado é emitido depois que o DNS do domínio aponta para o serviço correto.
