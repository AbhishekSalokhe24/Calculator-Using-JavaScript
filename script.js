let allBtns = document.querySelectorAll(".btn");

let allNumBtns = document.querySelectorAll("#nums");

let exp = document.querySelector("#expression");

let finalAns = document.querySelector("#ans");

let clearBtn = document.querySelector("#clrBtn");

let equalBtn = document.querySelector(".equalBtn");

let delBtn  = document.querySelector("#delBtn");

let string = "";

clearBtn.addEventListener("click",()=>{
    exp.innerHTML = "0";
    finalAns.innerHTML = "0"
    string = "";
})


Array.from(allNumBtns).forEach((num_buttons)=>{
   
    num_buttons.addEventListener("click",(evt)=>{

        string = string + evt.target.innerHTML;
        exp.innerHTML = string;
        let numVal = evt.target.innerHTML;
        // console.log(numVal);
    })
})

Array.from(allBtns).forEach((funcBtns)=>{
        funcBtns.addEventListener("click",(evt)=>{
            string = string + evt.target.innerHTML;
            exp.innerHTML = string;
            let val = evt.target.innerHTML;
            // console.log(val);
        })

});


equalBtn.addEventListener("click",()=>{
     finalAns.innerHTML = eval(string);
});

const Erase = ()=>{
   // Remove last character of string
    string = string.substring(0, string.length - 1);
    exp.innerHTML = string;
}

delBtn.addEventListener("click",()=>{
    Erase();
})

