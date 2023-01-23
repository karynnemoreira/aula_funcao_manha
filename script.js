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

let fruta1 = "banana"
let fruta2 = "mamaão"

function vitamina (fruta1, fruta2){
    console.log(`Quero uma vitamina de ${fruta1} com ${fruta2}`)
}
vitamina(fruta1 , fruta2)
