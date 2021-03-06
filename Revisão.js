//*Transforme as funções declarativas abaixo em Arrow Functions
const upperName = (name) => {
   return name.toUpperCase();
 };
 const myFunction = (p1, p2) => {
   return p1 * p2;
 }
  const toCelsius =(fahrenheit) => {
   return (5 / 9) * (fahrenheit - 32);
 }

 //?Destructuring - Desestruturação
//*Tendo a função abaixo, usando destructuring, reescreva-a de modo que fique em apenas 2 linhas de código
function handleMouseMove(event) {
   const {clientX, clientY} = event
   console.log(clientX, clientY);
 }
 
 //*A partir do objeto abaixo, instancie apenas uma variável que receba ​first utilizando destructuring
 const obj = { first: 'Jane', last: 'Doe' };
 
 const {first} = obj
 //*A partir do objeto abaixo, instancie uma variavel que receba ​name​ e outra para colors
 company = {
   name: 'ACME Corp',
   address: 'Nowhere st',
   products: {
     shirts: {
       colors: ['red', 'green', 'blue'],
     },
     socks: {
       colors: ['cyan', 'magenta', 'yellow'],
     },
   },
 };
 const {name} = company
 const {products:{shirts:{shirtsColors}}, products:{socks:{socksColors}}} = company;
 
 //?Rest & Spread
//*Utilizando um operador clone o objeto c​lothes
const clothes = {
  pants: { colors: ['black', 'blue'] },
  shirts: { colors: ['white', 'red'] },
  socks: { colors: ['beige', 'gray'] },
}; 

const {...clone} = clothes

//*Novamente utilizando um operador, clone o objeto c​lothes​ acima e adicione a este clone um objeto ​shoes​ com propriedade​ colors: ['yellow', 'purple'] ​de modo que fique igual aos objetos p​ants, shirts ​e​ socks

const clone2 = {...clothes, shoes:{
  colors: ['yellow', 'purple']
}}
//?Arrays e seus métodos
//*A partir da variável abaixo e utilizando um método de array, retorne a raiz quadrada de todos os valores do array original em um novo array
var numbers = [4, 9, 16, 25];
const result = numbers.map(value => Math.sqrt(value))

//*A partir da variável abaixo e utilizando um método de array, multiplique todos os valores do array por 10. Utilize arrow function.
var numbers2 = [65, 44, 12, 4];
const result2 = numbers2.map(number => number*10)
//*A partir da variável abaixo retorne um array com valores de ​age​ (idade) maiores ou iguais a 18 com arrow function e filter
var ages = [32, 33, 16, 40];
const resultAge = ages.filter(age => age >= 18)

//*A partir do objeto abaixo, retorne somente os nomes dos objetos do tipo cachorro (​type: dog)​ com filter
data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog',
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog',
  },

  {
    name: 'Red',
    age: 1,
    type: 'cat',
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog',
  },
];

let name = data.filter(value=> value.type == 'dog');
//*Por fim, ainda utilizando o array acima, retorne a soma da idade de todos os cachorros (​type: dog)​
const ages = name.reduce((sum,{age}) => sum+age,0)
//?Parte B - Hora do Jogo!
//*Passe a expressão abaixo para Arrow Function e então use destructuring para pegar ​colors
var getShirtsColorsAmount =  (company) => {
  const {products:{shirts:{colors:shirtsColors}}} =company;
  return shirtsColors.length;
};

//*A partir do objeto abaixo, desestruture e utilize ​spread operator​ para instaciar uma variável que tenha apenas os dados de roupas que não são calças, ou seja, somente ​shirts e​ ​ socks
const clothes = {
  pants: { colors: ['black', 'blue'] },
  shirts: { colors: ['white', 'red'] },
  socks: { colors: ['beige', 'gray'] },
};
//*Utilizando os dois arrays abaixo, desestruture cada array com spread para clonar todos itens menos o primeiro
const arr = [1, 2, 3];
const [fisrt, ...arr2] = arr

const arr2 = [4, 5, 6];
const [fisrt, ...arr3] = arr2


//*A partir do objeto abaixo, retorne um array onde cada item é o nome completo de cada pessoa no array. Utilize arrow function.
var persons = [
  { firstname: 'Malcom', lastname: 'Reynolds' },
  { firstname: 'Kaylee', lastname: 'Frye' },
  { firstname: 'Jayne', lastname: 'Cobb' },
];

const result = persons.map(name => `${name.firstname} ${name.lastname}`)
