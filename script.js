// Your code here
//npm start

let table = document.getElementById("table");

function makeRow() {
  let row = document.createElement("tr");
  for(let i=0; i<20; i++){
    let td = document.createElement("td");
    row.appendChild(td);
  }
  table.appendChild(row);
}
makeRow();
makeRow();
makeRow();
makeRow();
makeRow();
makeRow();
makeRow();
makeRow();
makeRow();
