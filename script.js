const taskinput = document.getElementById('taskinput');
const addTaskBtn = document.getElementById('addTaskBtn');
const tasklist = document.getElementById('tasklist');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const inputText = taskinput.value.trim();
    const li = document.createElement('li')
    li.textContent = inputText;
    
    li.addEventListener('click', () => {
        li.classList.toggle();
    } );

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "✖";
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = () => {
    li.remove();
    }

    li.appendChild(deleteBtn);
    tasklist.appendChild(li);
 }