// //Revisão de operadores

// let a = 2;
// let b = 1;

// //a =- b //errada
// a -= b //certa

// // += -= *= /=

// //console.log(a)

// //------------------
// //Propriedades de String/texto/textual

// //Pode ser chamada com "" , '' ou ``

// //TRETA
// let frase = `Gatos são melhores amigos do humano`

// frase = frase.replace ("Gatos", "Preguiça")

// //console.log(frase)

// //replace: troca uma pedaço da sua string por outra coisa

// //----------If Else
// //Caracteres que podem começar um nome de variável _ ou $

// // let $nome = "Eduardo"
// // let _nome = "Felipe"

// // if ($nome.length < 6){
// // console.log("Eduardo tem menos de 6 letras")
// // } else {
// //     console.log(`${$nome}  tem mais de 6 letras`)
// // }


// // let animal = "Dinossauro"
// // if (animal.substring (0,1) === "L"){
// // console.log("Seu nome começa com a letra L")
// // } else {
// //     console.log(`Seu animal é ${animal}`)
// // }

// //substring: percorre as unidades de uma string (inicia, para)


// // Matéria nova
// //Funções em JS

// //Estrutura básica de uma função

// // function identificador(){
// // tarefa
// // }
// // identificador () /invocando/chamando/ativando/ativar

// //Função em js são invocadas utilizando o operador ()

// //Posso atribuir variáveis dentro de uma função

// // function mostrar (nome){
// // console.log(`Meu nome é ${nome}`)
// // }

// // mostrar(`Lorena`)
// // mostrar (`Ànísio`)
// // mostrar (`Matheus`)

// //parâmetro (nome) ()
// //argumento (`Lorena`, `Anísio`, `Matheus`)
// //Os parâmetro invocados precisam estar na mesma ordem que o parâmetro da função

// //-------

// // let infos = function (nome , idade , cidade){
// //     console.log(nome);
// //     console.log(idade);
// //     console.log(cidade);
// //     console.log(` Meu nome é ${nome}, tenho ${idade} e moro no ${cidade} `)
// // }

// // infos(`Karynne`, "18 anos", "Rio de Janeiro")

// //---------

// let nome = "Mari"
// let cidade = "São Paulo"

// function mostrarNome(nome){
// console.log(`Meu nome é ${nome} e moro em ${cidade}`)
// }
// mostrarNome(nome, cidade)


// //---- Função com return

// function soma (n1, n2){
// return n1 + n2 //tarefa 
// }
// console.log (soma (20, 4))
// //-----

// function soma2 (k1, k2){
// return k1 + k2
// }
// console.log(soma2 (150, 17))
// //k1 = 150
// //k2 = 17

//-----Multiplicação

// function dobro (numero){
// return numero * 2
// }
// console.log(dobro(150))

//---- exemplo 1

// function vitamina (fruta1, fruta2){
//     return fruta1 + fruta2
// }
// console.log("banana", "mamão")

//---- exemplo 2

// let fruta1 = "banana"
// let fruta2 = "mamaão"

// function vitamina (fruta1, fruta2){
//     console.log(`Quero uma vitamina de ${fruta1} com ${fruta2}`)
// }
// vitamina(fruta1 , fruta2)


//FUNÇÃO COM PARÂMETRO 

//ex 1

// function mostrarNome(nome){
// console.log(`Meu nome é ` + nome)
// }
// mostrarNome(`Batata`)

//ex2

// function mostrarAnimais(animal1, animal2, animal3){
//    console.log("Esses são meus animais:" + animal1, animal2, animal3) 
// }
// mostrarAnimais("macaco","papagaio", "papagaio")

//macaco = animal1
//girafa = animal2
//papagaio = animal3

//ex3

// function nomeDaFuncao(valor){
// console.log("Mostra pra mim o meu valor " + valor)
// }

// nomeDaFuncao("1real")

//ex4

// function nomeParaMinhaFuncao(guarda_um_espaco_que_ainda_nao_sei_qual_e_o_valor){
// console.log("Mostra pra mim, qual é o meu valor: " + guarda_um_espaco_que_ainda_nao_sei_qual_e_o_valor)
// }
// nomeParaMinhaFuncao("amendoim")


//FUNÇÃO COM RETURN

// ex1
// function dobro(numero){ //criei uma função com o nome dobro, guardei no parâmetro o (numero - uma caixinha que está reservada para receber uma informação) 
//     return numero * 2 //retorna pra mim essa caixinha(numero) * 2
// }

// ex2

// console.log(dobro(2)) //pedi para o meu console mostrar a minha função (dobro), e coloquei o 2 para ser o valor da caixinha (numero) 

// ex3

// function triplo (numero2){
//     return numero2 * 3
// }
// console.log(triplo(15))



//UTILIZANDO VARIÁVEL DENTRO DE UM PARÂMETRO 

//ex1


// let hortfruti = `Morango` //declarando uma variável

// function mostrarFruta(fruta){ //chamei a função e dentro do parâmetro dela() definimos como valor "fruta"
// console.log(`Eu sou a fruta: ${fruta}`)
// }
// mostrarFruta(hortfruti) //chamamos a variável como argumento na chamada da função.
// //Dessa forma redefinimos o valor do parâmetro () como o valor da variável.


//ex2

// let concessionaria = "Honda"

// function mostrarConcessionaria (marca){
//     console.log(`Minha concessionaria trabalha com a marca: ${marca}`)
// }
// mostrarConcessionaria(concessionaria)


//Switch - É uma estrutura condicional. Avalia uma expressão, combinando o valor da expressão para a cláusula case, e executa as instruções associadas ao case.

//Estrutura básica do switch

// switch (variável){
//     case condição:
//         console.log (ação)
//         break //fechamento da condição (Se for verdadeira)
//defaul: se não for, me mostra uma mensagem.
// }
//Se a condição for verdadeira, executar a {tarefa}

//ex1

// let fruta = "Melão"

// switch (fruta) {
//     case "Abacaxi":
//         console.log("Tem certeza que é essa fruta?")
//         break; //se for a fruta certa, para aqui.
//     default: //se não for, me mostra uma mensagem
//         console.log("Não trabalhamos com essa fruta")
// }

//ex2

// let carro = "uno"
// switch (carro) {
//     case "uno":
//         console.log("Você é um uninho")
//         break; //parar
//     default:
//         console.log("Você não é pálio para o uninho")
// }

//ex3

// let idade = 24
// switch (idade) {
//     case 26:
//         console.log("Você é maior de idade")
//         break;
//     case 17:
//         console.log("Você é menor de idade")
//         break;
//     default:
//         console.log("Não foi possível verificar")
// }

//ex4

// let mercado = "leite"

// switch (mercado){
//     case "pão":
//         console.log("Sim, temos esse produto!")
//         break;
//         default: 
//         console.log(`O produto que tenho é só  ${mercado}`)
// }

//Dinâmica
// Uma pessoa decidiu ir à uma revenda comprar um perfume. Ele deseja comprar um perfume amadeirado, e a revenda possui, além de perfumes amadeirados, florais, cítrico e frutal. Utilizando uma estrutura switch/case, caso o comprador queira o floral,retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza que não prefere outro aroma?”. Caso seja especificado um aroma que não está disponível, retorne no console: “Não trabalhamos com este tipo de perfume aqui”





//Para treinar!!!
// Crie uma variável chamada “food”. Esta variável deve receber uma string com o nome de uma comida. Após, crie uma estrutura condicional switch que receba esta variável e que possua três casos: caso lasanha, retorne no console: “Não vendemos esta comida aqui”. Caso pizza, retorne: “Estamos com escassez de pizza” e caso salada, retorne: “Aqui está, são 3 reais”. Teste com estas três opções e verifique o console do seu navegador. Crie também um default , que retornará uma mensagem de erro no console. 