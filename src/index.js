document.addEventListener("DOMContentLoaded", () => { 
  const form=document.getElementById('create-task-form');

  form.addEventListener('submit', function(y){y.preventDefault()
      addtask()
  })
  function addtask() {
      const text=document.getElementById('new-task-description');
      const tasktext=text.value.trim();
      
 const li = document.createElement('li');
      li.textContent=tasktext;
  
  const deletebutton=document.createElement('button');
         deletebutton.textContent='delete';
      deletebutton.addEventListener('click', function(){
          li.remove();
      })
      li.appendChild(deletebutton)
      const tasklist=document.getElementById('tasks');
      tasklist.appendChild(li);
      
      text.value='';
  }
})

