//Formação Lógica de Programação DIO
 
//Desafio 1: Classificador de Nível de Herói
//💡 Sobre o projeto
//O programa consiste em determinar a classificação de personagens de jogo com base na sua quantidade de experiência (XP). Para cada personagem, é solicitado nome e XP, os quais serão armazenados em uma variável. Em seguida, é utilizado estruturas de decisão para determinar o nível do herói com base na sua experiência. Além disso, o programa conta com uma característica de autonomia, a partir de estrutura de repetição, permitindo que o usuário o utilize diversas vezes e decida quando encerrar sua execução. Por fim, o programa exibe uma mensagem indicando o nome do herói, quantidade de XP e classificação.
 
//Classificações baseadas em XP
//Experiência menor ou igual a 1.000 -> Classificação Ferro
//Experiência entre 1.001 e 2.000 -> Classificação Bronze
//Experiência entre 2.001 e 5.000 -> Classificação Prata
//Experiência entre 5.001 e 7.000 -> Classificação Ouro
//Experiência entre 7.001 e 8.000 -> Classificação Platina
//Experiência entre 8.001 e 9.000 -> Classificação Ascendente
//Experiência entre 9.001 e 10.000 -> Classificação Imortal
//Experiência acima de 10.000 -> Classificação Radiante"
 

//variaveis nome e quantidade de Xp na mesma variável
let nome="batman"
let numXp=1000

function atribuir(nome,numXp){
  let modelo=nome+ " "+numXp+" de xp"
  console.log(modelo)
return modelo}

atribuir(nome,numXp)



 //encontrar classificação paralela do heroi e mensagem com name+xp+classificação 

   if (numXp>=0&&numXp<=1000){console.log(nome +" " + numXp + " xp " +" classificaçao ferro")}



   else if(numXp>=1001&&numXp<=2000){console.log(nome +" "+ numXp + " xp," +" classificaçao bronze ")}



   else if(numXp>=2001&&numXp<=5000){console.log(nome +" "+ numXp +" xp,"+ "classificaçao prata")}


 else if(numXp>=5001&&numXp<=7000){console.log(nome +" "+ numXp +" xp,"+ " classificaçao ouro")}



   else if(numXp>=7001&&numXp<=8000){console.log(nome+" "+ numXp +" xp,"+ " classificaçao platina")}



   else if(numXp>=8001&&numXp<=9000){console.log(nome+" "+ numXp +  "xp ," +" classificaçao ascendente")}



   else if(numXp>=9001&&numXp<=10000){console.log(nome+" "+ numXp + " xp," + "classificaçao Imortal")}


   else{console.log( nome+" "+ numXp + ", classificaçao radiante")}




