<!-- data: 2022-11-13T16:45:07.660Z -->

# Intenção oficial

> Separar a construção de um objeto complexo da sua representação de modo que o mesmo processo de construção possa criar diferentes representações.

## Visão geral do **Builder**

- O padrão segura a separação do código que cria, e o código que usa o objeto:
  O código que utiliza o padrão builder e chamado de código client, ele visa separar o construção de um objeto complexo do código client, e ele deixa o código client mas limpo.

- Exemplo de um objeto complexo seria um com constructor muito grande
