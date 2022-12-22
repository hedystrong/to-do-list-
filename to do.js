document.getElementById("title").innerHTML = "Todo List App";
document.getElementById("title").style.fontSize = "80px";
document.getElementById("date").innerHTML = "Он сар өдөр : 2022-12-14";
// const d = new Date("2022-12-14");
// document.getElementsByClassName("nowDate").innerHTML = d;
// console.log(d);
let input = document.createElement("input");
input.type = "text"
input.id = "inputTask"

document.body.appendChild(input);

let button = document.createElement("button");
button.innerHTML = "+нэмэх";

document.body.appendChild(button);

// document.getElementById("input").innerText = "Таскын нэрээ оруулна уу";

let dd = document.createElement("div");
dd.id = "ooo"
dd.innerText = "Жагсаалт";
document.body.appendChild(dd);

let ff = document.createElement("div");

//<div> <div>input icon icon icon </div><div>input icon icon icon </div></div>

button.addEventListener("click", function() {
    let subDiv = document.createElement("div")
    //addTask
    let input2  = document.createElement("input")
    input2.id ="w"
    input2.type = "text"
        input2.value = input.value

    subDiv.appendChild(input2)

    ff.appendChild(subDiv)
})

document.body.appendChild(ff);





