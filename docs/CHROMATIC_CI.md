# Chromatic + Storybook no CI

O pipeline em `.github/workflows/nextjs.yml` inclui:

1. **Job `storybook`** – roda `npm run build-storybook`. Se o Storybook nao construir, o workflow falha.
2. **Job `chromatic`** – publica o Storybook no [Chromatic](https://www.chromatic.com) e executa testes visuais. So roda se o secret `CHROMATIC_PROJECT_TOKEN` estiver definido.

## Configurar Chromatic

1. Crie uma conta em [www.chromatic.com](https://www.chromatic.com) (login com GitHub).
2. Adicione o projeto (vincule o repo do GitHub).
3. Em **Manage** > **Configure** copie o **Project token**.
4. No GitHub: **Settings** > **Secrets and variables** > **Actions** > **New repository secret**.
   - Nome: `CHROMATIC_PROJECT_TOKEN`
   - Valor: o token copiado do Chromatic.

Apos o proximo push em `main`, o job `chromatic` vai publicar o Storybook e mostrar o link do build no Chromatic. Alteracoes visuais aparecem como “changes” para revisar e aceitar como nova baseline.

## Comportamento

- **exitZeroOnChanges: true** – o job nao falha quando ha apenas mudancas visuais (voce revisa no Chromatic). Se quiser que o pipeline falhe ate aceitar as mudancas, altere para `false` no workflow.
