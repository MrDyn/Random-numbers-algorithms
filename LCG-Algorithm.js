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

var randomNumbersLcg = document.getElementById("p2");
var dataLcg = document.getElementById("data2");

randomNumbersLcg.innerHTML = "0 0 0 0 0 0";

window.addEventListener("click", function(e){

    let firstSeedLCG = LinearCongruentialGenerator(RandomSeed());
    let aux = [];
    let lastSeed;
    let time = new Date;
    let contador = 0;

    aux.push(firstSeedLCG);
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

    randomNumbersLcg.innerHTML = aux.join(" ");
    dataLcg.innerHTML = "Time: " + time.getMilliseconds() + "<br>" + "First Seed: " + firstSeedLCG;
})

