var randomizeSeed = document.getElementById("main");

window.addEventListener("mousemove", function(e){
    var mouse = {
        page: {
            x: e.pageX,
            y: e.pageY
        }
    };


    randomizeSeed.innerHTML =  "X: " + mouse.page.x + "<br>" + "Y: " + mouse.page.y;
})

function primeNumber(value){
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

function coprimeNumber(a, b){
    if(primeNumber(a) && primeNumber(b)){
        return true;
    }
        
    return false;
}


