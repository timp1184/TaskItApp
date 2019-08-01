class Task {
	constructor(name, id){
		this.name = name;
		this.id = name;

		
	}
}

class UI {

	static displayTask(t){
		const task = Store.getTask();

		const taskList = task;
		taskList.forEach((t) => UI.addTaskToList(t));
	}

	static addTaskToList(t){
		let id = t.id;
		const ul = document.querySelector('#taskList');
		const row = document.createElement('div');
		row.classList.add("ls");
		row.innerHTML =
		 `	<li>
        		<input type="checkbox" class="checkbox"><p class="taskitem">${t.name}</p>
        		<span class="gg">+</span>
				<a href="#" class="delete">X</a>

				<div class="sbTask">
						<input type="text" class="sbText" placeholder="subTask"/>
    					<button>add</button>
   						<span></span>
   						<button>delete</button>
   				</div>
    		</li>
    		`;
		

		ul.appendChild(row);
		id++;
	}

	static deleteTask(el){
		if(el.classList.contains('delete')){
			el.parentElement.parentElement.remove();
		}
		
	}

	static clearTask(){
		const input = document.querySelector('#inputbox').value = '';

	}

	static editTask(e){
		
		if (e.classList.contains('editTask')) {
			e.setAttribute('contenteditable', 'true');
		}		
		

	}

	static addSubTask(el){	
		if (el.classList.contains('plus')) {
			var taskList = el.parentElement.parentElement;
			taskList.style.height = "400px";

			var sub = taskList.lastElementChild;
			var displaySub = sub.style.display = "block";

			console.log(sub);		
			}

	}
}


class Store {
	static getTask(){
		let tasks;
		if(localStorage.getItem('tasks') == null){
			tasks = [];
		}else{
			tasks = JSON.parse(localStorage.getItem('tasks'));
		}
		return tasks;

	}

	static addTask(task){
		const tasks = Store.getTask();
			tasks.push(task);
			localStorage.setItem('tasks',JSON.stringify(tasks));

	}


	static removeTask(){

	}
}



//display saved tasks
document.addEventListener('DOMContentLoaded', UI.displayTask);


//submit a task
document.querySelector('#addTask').addEventListener('click', Submit);
function Submit(){

	const input = document.querySelector('#inputbox').value;
	const t = new Task(input);
	UI.addTaskToList(t);
	UI.clearTask();
	Store.addTask(t);
}


//delete task
document.querySelector('#taskList')
.addEventListener('click', (e) => {
	UI.deleteTask(e.target);

	});

//edit task
document.querySelector('#taskList')
.addEventListener('click', (e) => {
UI.editTask(e.target);
});


//add sub-task

var plus = document.querySelector('#taskList')
.addEventListener('click', (e) => {
	UI.addSubTask(e.target);


});




