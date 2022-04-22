## JavaScript Assíncrono 👨‍💻
Estudos de Funções Callback, Promises e Async/Await no JavaScript Moderno - ECMAScript 6.

### - Callback
Uma função callback é uma função passada a outra função como argumento, que será chamada sempre que alguma rotina ou ação estiver completa.

### - Promises
Uma Promise é um objeto que representa a eventual conclusão ou falha de uma operação assíncrona. Essencialmente, uma Promise é um objeto retornado para o qual você adiciona callbacks, em vez de passar callbacks para uma função.

### - Async/Await
Já sabemos que quando uma função assíncrona é chamada, ela retorna uma Promise. Com isso, uma função assíncrona pode conter uma expressão await, que pausa a execução da função assíncrona e espera pela resolução da Promise passada, e depois retoma a execução da função assíncrona e retorna o valor resolvido. Ou seja, o async/await nada mais é que uma forma mais "bonita" de resolver as Promises, dando a aparência de síncrono para um código assíncrono.

https://www.maiconsilva.com/js-callbacks-promises-aw/

## Fetch API utilizando AXIOS
### O que é o Axios?
Axios é um cliente HTTP baseado-em-promessas para o node.js e para o navegador. É isomórfico (= pode rodar no navegador e no node.js com a mesma base de código). No lado do servidor usa o código nativo do node.js - o modulo http, enquanto no lado do cliente (navegador) usa XMLHttpRequests.
### Como instalar? 
Usando o npm:
$ npm install axios

Usando o bower:
$ bower install axios

Usando o yarn:
$ yarn add axios
