input = document.getElementById("input")

btn = document.querySelector(".btn")

Tasks = document.querySelector(".Tasks");

op = document.getElementById("op");

remove = document.getElementById("remove");

const add=(e)=>{
    e.preventDefault();
   const val = input.value;
   if(!val){
    alert("Please enter Task");
   }
   else{
     
    //Create new Row
    const newelem = document.createElement("tr");

    //forTask
    const taskcell = document.createElement("td");
    taskcell.textContent = val;
    newelem.appendChild(taskcell);

    //for delete
    const deleteCell = document.createElement("td");
    const deletebtn = document.createElement("button");
    deletebtn.textContent = "Delete";
    deletebtn.addEventListener('click' , ()=>{del(newelem)});
    deleteCell.appendChild(deletebtn);
    newelem.appendChild(deleteCell);

    //new Row;
    Tasks.appendChild(newelem);
    

   }
   input.value="";
}
const del=(e)=>{
   e.remove();
}


btn.addEventListener( 'click', (e)=>{
    add(e);
});

remove.addEventListener('click', (e)=>{
    del(e);
})