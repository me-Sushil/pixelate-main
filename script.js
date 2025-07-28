// Your code here
//npm start

let table = document.getElementById("table");
let add = document.getElementById("add-row");
function makeRow() {
  let row = document.createElement("tr");
  for (let i = 0; i < 20; i++) {
    let td = document.createElement("td");
    row.appendChild(td);
  }
  table.appendChild(row);
}
makeRow();
makeRow();
makeRow();
makeRow();

add.addEventListener("click", makeRow);
table.addEventListener("click", colorize);


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