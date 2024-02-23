let tname=document.getElementById('name');
let create=document.getElementById('create');
let output=document.getElementById('output');
let tasks;

if(localStorage.task!=null)
{
     tasks=JSON.parse(localStorage.task);
     show_data();
}
else
{
     tasks=[];
}

create.onclick=function(){
     let newtask=
     {
          name:tname.value,  
          st:Boolean(false)   
     }
     if(newtask.name!='')
     {
          tasks.push(newtask);
     }
     cleardata();
     localStorage.setItem('task', JSON.stringify(tasks));
     show_data();
}

function cleardata()
{
     tname.value=''
}

function show_data()
{
     let table='';
     for (let i = 0; i < tasks.length ; i++)
     {
          if(tasks[i].name!='')
          {
               table += `
               <div >
                    <span><button  id="${i}" onclick="done(this.id)" href="">${tasks[i].name}</button></span>
                    <span><button class="x" onclick="delet(${i})" type="button">x</button></span>
               </div>
          `;
          }
     }
      output.innerHTML = table;
     for (let i = 0; i < tasks.length ; i++)
     {
          
          if(tasks[i].st)
          {
               let el=document.getElementById(i);
               el.style.textDecoration='line-through';
          }
     }
     let dbtn=document.getElementById('deleteall');
     if(tasks.length>0)
     {
          dbtn.innerHTML=`
          <button onclick="deleteAll()" type="button">Delete All</button>
          `;
     }
     else
     {
          dbtn.innerHTML='';
     }
}

function done(id) 
{
     let el=document.getElementById(id);
     if(tasks[id].st)
     {
          el.style.textDecoration='none';
     }
     else
     {
          el.style.textDecoration='line-through';
     }
     tasks[id].st= !tasks[id].st;
     localStorage.task=JSON.stringify(tasks);
}

function delet(id)
{
     tasks.splice(id,1);
     localStorage.task=JSON.stringify(tasks);
     show_data();
}

function deleteAll()
{
     tasks.splice(0);
     localStorage.setItem('task', JSON.stringify(tasks));
     show_data();
}
show_data(); 