/*
Crie uma função que recebe uma lista não necessariamente ordenada de numeros inteiros e retorne desta lista qual numero mais se repete. Caso algum numero se repita igualmente a outro, retorne o maior entre eles.
*/
//Testes de retorno da função
const ret_1 = [1,1,2,3,2,4,5,1]
const ret_2 = [2,1,2,1,2,3,2,4,5,1]
const ret_3 = [0,3,1,2,3,4]
const ret_4 = [4,4,3,3]
const ret_5 = [5,4,3,2,1,0]
const ret_6 = [5,5,6,6]
const ret_7 = [1,1,2,2,3,3,7,7,5,5,6,6,8,9]
const ret_8 = [3,3,2,2,3,3,8,8,5,8,8,8,6,8,9,9]

function ArrayList ( array ) {
  let number1 = 0
  let qtdVezes1 = 0

  array.sort()
  let newArray = []

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
    number1 = element
  
    if (number1 == array[index-1] || index == 0 ) {
        qtdVezes1++
        if (index == (array.length -1)) {
          newArray.push({ number: array[index], qtde: qtdVezes1 })
        }
    }
    else { 
      const obj  = { number: array[index-1], qtde: qtdVezes1 }
      newArray.push(obj)
      qtdVezes1 = 1
      //
      if (index == (array.length -1)) {
        newArray.push({ number: array[index], qtde: 1 })
        qtdVezes1 = 1
      }
    }
  }
  
  newArray.sort(compare);

  console.log(newArray)
  if (newArray[0].qtde === newArray[1].qtde 
    && newArray[0].number < newArray[1].number) {
      console.log(newArray[1])
  }
  else console.log(newArray[0])
}

function compare(a, b) {
  let comparison = 0;
  if (a.qtde > b.qtde) {
    comparison = -1;
  } else if (a.qtde < b.qtde) {
    comparison = 1;
  }
  else if (a.number > b.number) {
    comparison = -1;
  } else if (a.number < b.number) {
    comparison = 1;
  }
  return comparison;
}

ArrayList(ret_1)
ArrayList(ret_2)
ArrayList(ret_3)
ArrayList(ret_4)
ArrayList(ret_5)
ArrayList(ret_6)
ArrayList(ret_7)
ArrayList(ret_8)