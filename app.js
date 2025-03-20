let display = document.querySelector(".display");
let btns = document.querySelectorAll("button");
for (btn of btns){
    btn.addEventListener("click",function(){
        console.log("Btn clicked");
        let value = this.getAttribute("data-value");
        if (value === "clear"){
            display.value = "";
        }
        else if(value === "equals"){
            try{display.value = eval(display.value);}
            catch(err){
                console.log("Error caught!");
            }
        }
        else {
            display.value = display.value + value;
        }
    })
}
display.style.color="white";
display.style.fontSize="32px";