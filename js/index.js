console.log("Im Ready")
// Iteration 1: Names and Input
let hacker1 = "Juan"
let hacker2 = "Pepito"
console.log(`The driver´s name is ${hacker1}`)
console.log(`The navigator´s name is ${hacker2}`)
// Iteration 2: Conditionals

if (hacker1.length === hacker2.length) { 
    console.log("WOw , ambos nombres son igual de largos!!")
} else if (  hacker1.length < hacker2.length){
    console.log("El pasajero tiene el nombre mas largo, tiene "+ hacker2.length +" caracteres")
} else if ( hacker1.length > hacker2.length){
    console.log("El conductor tiene el nombre mas largo, tiene "+ hacker1.length + " caracteres")
}
// Iteration 3: Loops
for (let i = 0; i < hacker1.length; i++){
    console.log(hacker1[i].toUpperCase())
}


for (let i = hacker2.length - 1; i > -1; i--){
console.log(hacker2[i] )
}

for (let i = 0; i < 1 && hacker1[0] > hacker2[0]; i++ ){
 console.log("el conductor va primero")}

 for (let i = 0; i < 1 && hacker1[0] < hacker2[0]; i++ ){
    console.log("Yo, el pasajero voy primero definitavemente")}

    for (let i = 0; i < 1 && hacker1[0] === hacker2[0]; i++){
        console.log("Que?? ambos tenemos el mismo nombre??")
    }
