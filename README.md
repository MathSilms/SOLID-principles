# SOLID-principles

> APIrest com typescript baseado nos princípios do SOLID e packege-by-feature 
           
<img src="solid.jpg" alt="solid" width="550" heigth="90"/>                                     


**No SOLID, cada letra do nome significa um de seus princípios. Assim, temos no total 5 para serem seguidos.**

**S-ingle responsibility principle** - Cada arquivo e classe da sua aplicação deve ter apenas uma única responsabilidade.

**O-pen closed principle** - Uma classe deve ser aberta para extensões, porém, não para modificações.

**L-iskov substitution principle** - As classes derivadas devem ser substituíveis por suas classes bases. Este princípio está bem ligado ao anterior, e nos alerta sobre o uso de herança.

**I-nterface segregation principle** - O principio prega que uma interface não deve forçar uma classe a implementar coisas que ela não irá utilizar. Isso facilita a manutenção.

**D-ependency inversion principle** - Básicamente, utilizar níveis de abstração corretos. Classes não devem depender de implementações e sim de interfaces. 


## Instalação

Baixe ou clone o repositório para ter acesso ao código e desenvolver.

no seu editor de código preferencial, abra o terminal e digite:

### NPM

```sh
npm install
```

### yarn

```sh
yarn install
```

essa ação irá instalar os seguintes módulos:
#### Dependências 
```sh

    express: ^4.17.1,
    nodemailer: ^6.4.11,
    uuidv4: ^6.2.3
```
#### Dependências de desenvolvimento
```sh
    @types/nodemailer: ^6.4.0,
    @types/express: ^4.17.8,
    ts-node-dev: ^1.0.0-pre.62,
    typescript: ^4.0.2
```

## Configuração para Desenvolvimento

Depois de instalado os módulos, execute o script criado para inicializar o projeto: 

### NPM

```sh
npm start
```
### yarn

```sh
yarn start
```

Isso irá executar a aplicação e gerar rodar o servidor na porta 3333 que está configurada. Caso haja conflito de portas, va para o arquivo server.js e altere o número da porta.
```sh
    app.listen(NOVA-PORTA,()=>{
        console.log('server rodando na porta NOVA-PORTA');
    })
```

 Após isso, sua instância seu servidor estará rodando em uma porta nova e evitando entrar em conflito com outros serviços já existentes no seu computador.

 agora é mão no código ;)

qualquer duvida ou sugestão:


Matheus de Oliveira Mendonça – [Linkedin](https://www.linkedin.com/in/mathsilms/) – Mateheusoliver@gmail.com