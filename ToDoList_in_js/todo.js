
const addbtn = document.getElementById('addbtn')
const input = document.getElementById('userinput')


function addnewTask() {

    if (input.value == 0) {
        alert("Please enter a task");
    }
    else {
        const taskList = document.querySelector('.taskList')
        let newtask = document.createElement('div');
        taskList.append(newtask)
        newtask.className = "task"
        const userinput = input.value.trim();
      newtask.innerHTML=`<input type="text" id="todo" class="taskvalue" /> <div id="btns"><i class="fa-solid fa-pen-to-square edit"></i> <i class="fa-solid fa-trash del-btn"></i></div>`
      const input1=newtask.querySelector('input')
      input1.value = userinput
    
      newtask.querySelector('.del-btn').addEventListener('click', () => {
          newtask.remove()

    })
      

    let editbtn=newtask.querySelector('.edit')
     editbtn.addEventListener('dblclick',(e)=>{
      input1.focus()
      input1.value=""
      userinput="";
      e.target.classList.remove('fa-pen-to-square')
      e.target.classList.add('fa-save')
    })



    }
}
addbtn.addEventListener('click', (e) => {
    addnewTask(e)
    input.value = " ";
})



















