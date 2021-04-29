//1. Escreva uma função soma que retorna a soma dos números de um array usando spread operator
const array = [1, 5, 23, 76, 87, 34, 687, 86, 98, 103, 489, 423, 89];
const soma = (array) =>{
   return [...array].reduce((acumula, value) => acumula + value);
}
soma(array)
//*reduce


//2. Faça fetch dos dados através da aPI (https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772) e retorne a ficha desta refeição com id, nome, área (país de origem), ingredientes (em uma única string) e as intruções.
   async function req(){
     const res = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
     const json = await res.json();
     const value = json.meals[0]
     const {strMeal, idMeal, strArea, strInstructions} = value

    
     const ficha =`
      Nome: ${strMeal}
      ID: ${idMeal}
      Região: ${strArea}
      Ingredientes:${ingre(value)}
      Instruções: ${strInstructions}
     `
     console.log(ficha)
   }
   //*Dica: Filter ou map, usando method para compara string, usando includes e replace
   req()
  
   function ingre(receita) {
      const listIngre = [];
      for(let elemento in receita) {
          const ingre = elemento
          if(ingrediente.match('strIngredient') && receita[ingre]) {
              listaIngredientes.push(receita[ingre])
          }
      }
      return listIngre;
   }

//3. Faça fetch dos dados através da API (https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood) e retorne uma lista(array) com os nomes dos primeiros 10 resultados.
 async function list (){
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood&results=10')
    const json = await res.json();
    const meals = json.meals
    const result = meals.filter((prato, i) => i < 10)
    console.log(result)
    
 }
 list()
 