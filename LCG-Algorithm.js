function LinearCongruentialGenerator(seedParam){
    let m = 61;
    let a = 3;
    let c = 1;
    let newSeed;

    newSeed = (a * seedParam + c) % m;

    return newSeed;
}

function RandomSeed(){
    let time = new Date;
    let seed = Math.round(time.getMilliseconds()/10);
    
    return seed;
}

let firstSeed = LinearCongruentialGenerator(RandomSeed());
let aux = [];
let lastSeed;
let time = new Date;
let contador = 0;


aux.push(firstSeed);
lastSeed = aux[aux.length - 1];

do{
    let newSeed = LinearCongruentialGenerator(lastSeed);
    

    if(newSeed == 0){
        lastSeed = newSeed;
        newSeed = LinearCongruentialGenerator(lastSeed);
        aux.push(LinearCongruentialGenerator(lastSeed));
        lastSeed = aux[aux.length - 1];
        contador++;
    }else{
        aux.push(LinearCongruentialGenerator(lastSeed));
        lastSeed = aux[aux.length - 1];
        contador++;
    }

}while(contador < 5);




console.log(aux);