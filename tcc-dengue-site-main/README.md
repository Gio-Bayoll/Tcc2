
# Projeto: Web App com React-TS, Vite, Tailwind, ShadCN e Gemini Chatbot

Este projeto é uma aplicação web construída com React utilizando TypeScript e Vite para um desenvolvimento rápido e leve. O design responsivo é criado com o auxílio de Tailwind CSS, e a estrutura de componentes é gerada com ShadCN. Além disso, o projeto integra o chatbot Gemini para fornecer interações automatizadas aos usuários. O gerenciamento de dependências é feito com PNPM.

## Tecnologias Utilizadas

- **React** (com TypeScript): Biblioteca JavaScript para construção de interfaces.
- **Vite**: Ferramenta de build rápida para projetos front-end.
- **Tailwind CSS**: Framework CSS utilitário para design responsivo e customizável.
- **ShadCN**: Biblioteca de componentes estilizados.
- **Gemini Chatbot**: Solução de chatbot inteligente integrada.
- **PNPM**: Gerenciador de pacotes rápido e eficiente.

## Requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- **Node.js** (>= 16.x)
- **PNPM** (>= 7.x)

Você pode instalar o PNPM com o comando:

```bash
npm install -g pnpm
```

## Instalação

Siga os passos abaixo para configurar o projeto em seu ambiente local:

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

2. Acesse o diretório do projeto:

```bash
cd nome-do-repositorio
```

3. Instale as dependências:

```bash
pnpm install
```

## Configuração do Chatbot Gemini

Este projeto integra o chatbot Gemini. Para configurá-lo, siga os passos abaixo:

1. **Obtenha uma chave de API** do Gemini, acessando o portal da plataforma.

2. Crie um arquivo `.env` na raiz do projeto e adicione sua chave de API da seguinte forma:

```bash
VITE_GEMINI_API_KEY=your-gemini-api-key
```

3. No código do chatbot, a API Gemini será consumida utilizando esta chave para gerenciar as interações automatizadas.

## Rodando o Projeto

Para iniciar o servidor de desenvolvimento, execute:

```bash
pnpm dev
```

O projeto estará disponível em [http://localhost:3000](http://localhost:3000).

## Build para Produção

Para gerar uma versão otimizada do projeto, execute:

```bash
pnpm build
```

Os arquivos de build serão gerados na pasta `dist`.

## Estrutura do Projeto

- **/src**: Contém todos os arquivos fonte da aplicação.
  - **/components**: Componentes React reutilizáveis.
  - **/pages**: Páginas principais da aplicação.
  - **/services**: Integração com serviços externos (como o chatbot Gemini).
  - **/styles**: Configurações de estilo com Tailwind CSS.
  - **/utils**: Utilitários e funções auxiliares.

## Personalizando o Tailwind

O Tailwind já está configurado para uso no projeto. Caso precise customizar ainda mais as classes de estilo, edite o arquivo `tailwind.config.js`.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir pull requests ou reportar issues.

## Licença

Este projeto está sob a licença [MIT](LICENSE).
