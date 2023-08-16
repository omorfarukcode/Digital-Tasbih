const subhanAllahDisplay = document.getElementById("subhan-allah-display");
const subhanAllahIncrimentBtn = document.getElementById("subhan-allah-incriment-btn");
const subhanAllahDecrimentBtn = document.getElementById("subhan-allah-decriment-btn");

const alhamdulilahDisplay = document.getElementById("alhamdulilah-display");
const alhamdulilahIncrimentBtn = document.getElementById("alhamdulilah-incriment-btn");
const alhamdulilahDecrimentBtn = document.getElementById("alhamdulilah-decriment-btn");

const allahuakbarDisplay = document.getElementById("allahuakber-display");
const allahuakbarIncrimentBtn = document.getElementById("allahuakber-incriment-btn");
const allahuakbarDecrimentBtn = document.getElementById("allahuakber-decriment-btn");

const resetBtn = document.getElementById("reset-btn");

// console.log(subhanAllahDisplay);


// Subhan Allah Button 
let subhanAllahInitialValue = 0 ;
subhanAllahIncrimentBtn.addEventListener("click", function(){
    if (subhanAllahInitialValue === 33){
        alert("Your Subhan Allah Tasbih Complited");
        return;
    }

    subhanAllahInitialValue += 1 ;
    // console.log(subhanAllahInitialValue);
    subhanAllahDisplay.innerText = subhanAllahInitialValue ;
})
subhanAllahDecrimentBtn.addEventListener("click", function(){
    if (subhanAllahInitialValue === 0){
        alert("You Can't added  Nagetive Value");
        return;
    }

    subhanAllahInitialValue -= 1 ;
    // console.log(subhanAllahInitialValue);
    subhanAllahDisplay.innerText = subhanAllahInitialValue ;
})

// Allhamdulilah Button 
let alhamdulilahInitialValue = 0 ;
alhamdulilahIncrimentBtn.addEventListener("click", function(){
    if (alhamdulilahInitialValue === 33){
        alert("Your Alhamdulilah Tasbih Complited");
        return;
    }

    alhamdulilahInitialValue += 1 ;
    // console.log(subhanAllahInitialValue);
    alhamdulilahDisplay.innerText = alhamdulilahInitialValue ;
})

alhamdulilahDecrimentBtn.addEventListener("click", function(){
    if (alhamdulilahInitialValue === 0){
        alert("You Can't added  Nagetive Value");
        return;
    }

    alhamdulilahInitialValue -= 1 ;
    // console.log(subhanAllahInitialValue);
    alhamdulilahDisplay.innerText = alhamdulilahInitialValue ;
})

// Allahuakbar Button 
let allahuakbarInitialValue = 0 ;
allahuakbarIncrimentBtn.addEventListener("click", function(){
    if (allahuakbarInitialValue === 33){
        alert("Your Allahuakbar Tasbih Complited");
        return;
    }

    allahuakbarInitialValue += 1 ;
    // console.log(subhanAllahInitialValue);
    allahuakbarDisplay.innerText = allahuakbarInitialValue ;
})

allahuakbarDecrimentBtn.addEventListener("click", function(){
    if (allahuakbarInitialValue === 0){
        alert("You Can't added  Nagetive Value");
        return;
    }

    allahuakbarInitialValue -= 1 ;
    // console.log(subhanAllahInitialValue);
    allahuakbarDisplay.innerText = allahuakbarInitialValue ;
})

// All Reset Button 
resetBtn.addEventListener("click", function(){
    subhanAllahDisplay.innerText = 0 ;
    alhamdulilahDisplay.innerText = 0 ;
    allahuakbarDisplay.innerText = 0 ;

    subhanAllahInitialValue = 0 ;
    alhamdulilahInitialValue = 0 ;
    allahuakbarInitialValue = 0 ;

})