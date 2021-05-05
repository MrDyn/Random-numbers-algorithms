var randomNumbersLehmer = document.getElementById("p1");
var dataLehmer = document.getElementById("data1");
const randomNumbersVector = [0, 0, 0, 0, 0, 0];

    

randomNumbersLehmer.innerHTML = randomNumbersVector.join(" ");

window.addEventListener("click", function(e){
    randomNumbersLehmer.innerHTML = randomNumbersVector.join(" ");
})

window.addEventListener("mousemove", function(e){
    var mouse = {
        page: {
            x: e.pageX,
            y: e.pageY
        }
    };
    let firstSeed =  SeedGeneration(mouse.page.x, mouse.page.y);
    let newSeed;

    if(PrimeNumber(firstSeed)){
        newSeed = LehmerAlgorithm(firstSeed);
        randomNumbersVector[0] = newSeed;
        for(let i = 1; i <= 5; i++){
            newSeed = LehmerAlgorithm(newSeed);
            randomNumbersVector[i] = newSeed;
        }
        
    }
    
    //randomNumbersLehmer.innerHTML = randomNumbersVector;

    
    dataLehmer.innerHTML = 
        "X: " + mouse.page.x +
        "<br>" + 
        "Y: " + mouse.page.y +
        "<br>" + 
        "First Seed: " + firstSeed;

    
});


function PrimeNumber(value){
    if(value == 0 || value == 1){
        return value;
    }

    for(let i = 2; i < value; i++){
        if(value % i == 0){
            return value
        }
    }
    return value;
}

function CoprimeNumber(a, b){
    if(primeNumber(a) && primeNumber(b)){
        return true;
    }
        
    return false;
}

function SeedGeneration(a, b){
    if(a % b == 0){
        return 1
    }else{
        return a % b;
    }
}

function LehmerAlgorithm(seed){

    return (3 * seed) % 61
}