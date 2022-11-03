// Ejercicio 1

// function sumImp(arr) {
//     let add = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             console.log('este es el array', arr[i])
//             add = arr[i] + add
//         }
//     }
//     return add
// }

//nums = [2, 3, 5, 6, 8, 9]
// console.log(sumImp(nums))

//Ejercicio 2

// function acepArr(arr) {

// console.log(arr.reverse()) //se puede utilizando el metodo reverse o el for que deje comentado

//     // for(let i =arr.length; i>=0; i--){  // funciona el ciclo
//     //     console.log(arr[i]);
//     // }
    
// }


//acepArr(nums)

//Ejercicio 3

// function sumArr(arr1,arr2) {
//     let longitud =Math.max(arr1.length, arr2.length)
//  let arr3=[]
//     for(let i=0; i<longitud; i++){
        
//         let num1=0
//         let num2=0
//       if (arr1[i]){
//           num1 = arr1[i]
//         } 
    
//         if (arr2[i]){
//           num2 = arr2[i]
//         } 
    
//         let pairSum = num1 + num2
//         arr3.push(pairSum)
       
//     }
// return arr3
// }

// arrayFirts = [1,0,2,3,4];  
// arraySecond = [3,5,6,7,8,13];

// console.log(sumArr(arrayFirts,arraySecond));

//Ejercicio 4
let jump = prompt('Ingrese el número de veces que desea saltar en el array')*1
let array = ["apple", "orange", "banana", "mango", "watermelon", "grape"]

function salto (arr,num) {
let res = num-1
    for(let i=0; i<arr.length; i++){
       if(i===i%num){
        arr.splice(arr[i],res)
       }
        console.log(arr[i],i)
          
        
    }
    
}

salto(array,jump)

