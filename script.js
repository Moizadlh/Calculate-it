let str1 = ""
let backspace =document.getElementById("backspace")

let numbers = document.querySelectorAll("button")
Array.from(numbers).forEach((element) => {
    element.addEventListener('click',input)   
});

function input(num){
    if (num.target.innerHTML === "=") {
        for (let i = 0; i < str1.length ; i++) {
            if (str1[i] === '^') {
                n = str1.split('^')
                str1 = eval(n[0] ** eval(n[1]))
                str1 = String(str1)
                document.querySelector("input").value = str1
                return
            }
        }
        str1 = eval(str1)
        str1 = String (str1)
        document.querySelector("input").value = str1
    }
    else if(num.target.innerHTML === "C"){
        str1 = ""
        document.querySelector("input").value = str1
    }
    else if(num.target.innerHTML === backspace.innerHTML){
        let len = (str1.length) -1
        str1 = str1.slice(0,len)
        document.querySelector('input').value=str1
    }
    else {
        str1 = str1 + num.target.innerHTML;
        document.querySelector("input").value = str1   
    }

}