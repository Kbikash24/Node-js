const inputbox=document.getElementById("input-box")
const listcontiner=document.getElementById("list-container")
const addbtn= document.querySelector("button")
addbtn.addEventListener("click",addTask)

function addTask()
{
    if(inputbox.value==='')
    {
        alert ("You must write something")
    }
    else {
         let li=document.createElement("li")
         li.innerHTML=inputbox.value
         listcontiner.appendChild(li)
         let span =document.createElement("span")
         span.innerHTML="\u00d7"
         li.appendChild(span)
    }
    inputbox.value=''
    saveData ()
}

listcontiner.addEventListener("click",function(e)
{
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked")
        saveData ()
    }
    else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
        saveData ()
    }
},false)


function saveData ()
{
    localStorage.setItem("data",listcontiner.innerHTML)
}
function showtask (){
    listcontiner.innerHTML=localStorage.getItem("data")
}
showtask();