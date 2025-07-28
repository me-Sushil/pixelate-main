// Your code here
//npm start

let table = document.getElementById("table");
let add = document.getElementById("add-row");

function makeRow() {
  let row = document.createElement("tr");
  for (let i = 0; i < 610; i++) {
    let td = document.createElement("td");
    row.appendChild(td);
  }
  table.appendChild(row);
}

let count = 250;
function makeTable(){
    while(count > 0){
        count--;
        makeRow();
    }
}

makeTable()


table.addEventListener("mouseup", ()=>{
    isMouseDown = false;
});

add.addEventListener("click", makeRow);
table.addEventListener("click", colorize);


let isMouseDown = false;
table.addEventListener("mousedown", (event)=>{
    isMouseDown = true;
    //colorize(event);
});
let mouseover = table.addEventListener("mouseover", (event)=>{
    if(isMouseDown){
        colorize(event);
    }
});

let choseColor = "red";
function colorize(event) {
  const target = event.target;
  if(target.tagName === "TABLE") return; 
  if (target.className === choseColor) {
    target.className = "";
  } else {
    target.className = choseColor;
  }
}

let select = document.getElementById("select");
select.addEventListener("change", (event)=>{
    choseColor = event.target.value;   
})

