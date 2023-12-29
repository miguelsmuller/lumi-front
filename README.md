# Teste Desenvolvedor Full Stack - Lumi

O projeto `Lumi Front` é uma Dashboard em React que interage com a API do projeto `Lumi`.

## **Monorepo e Projetos Relacionados**

- **[Monorepo Lumi Challenge](https://github.com/miguelsmuller/lumi-challenge)**
  
- **[Lumi Extraction](https://github.com/miguelsmuller/lumi-extraction)**

- **[Lumi Back](https://github.com/miguelsmuller/lumi-back)**

## **Aspectos Técnicos**

Os detalhes completos do desafio, incluindo especificações para o projeto do front-end, estão disponíveis no PDF do monorepo. Você pode acessar o PDF através do link abaixo:

- **[Detalhes do Desafio - Lumi Challenge](https://github.com/miguelsmuller/lumi-challenge/blob/e8622d0e399c3e2c4802c0c3a1911dc5d86953a8/docs/Teste%20Pr%C3%A1tico%20-%20Dev%20Full%20Stack%20-%20Lumi.pdf)**


## **Estrutura do Projeto**
```
.
├── docs/
├── public/
├── src/
│   ├── pages/
│   │   ├── dashboard/
│   │   └── invoices/
│   ├── shared/
│   │   ├── components/
│   │   │   ├── side-menu/
│   │   │   └── tool-bar/
│   │   ├── contexts/
│   │   ├── environment/
│   │   ├── layouts/
│   │   └── services/
│   ├── routes/
│   ├── react-app-env.d.ts
│   ├── App.tsx
│   └── index.tsx
├── tsconfig.json
├── package.json
└── README.md
```


## **Scripts do Projeto**

- **`npm run start`**: Inicia o servidor de desenvolvimento da aplicação React.

- **`npm run build`**: Gera uma build de produção da aplicação, pronta para ser colocada em um servidor web.

- **`npm run test`**: Executa os testes unitários da aplicação.

- **`npm run lint`**: Executa o linter ESLint para verificar e corrigir problemas no código JavaScript/TypeScript.



## **Rodando Localmente**

Para executar o front-end localmente, siga os passos abaixo:

1. Certifique-se de ter a API do **[Lumi Back](https://github.com/miguelsmuller/lumi-back)** em execução.

2. Instale as dependências:
```bash
npm install
```

3. Inicie o front-end em modo de desenvolvimento:
```bash
npm run start
```

## **Screenshot**

### **Dashboard Screenshot**
![Dashboard Screenshot](./docs/invoices_dashboard.jpeg)

### **Invoice List Screenshot**
![Invoice List Screenshot](./docs/invoices_list.jpeg)

