class Task {
	constructor(name, id){
		this.name = name;
		this.id = id;

		
	}
}

class UI {

	static displayTask(t){
		const task = Store.getTask();

		const taskList = task;
		taskList.forEach((t) => UI.addTaskToList(t));


	}

	static addTaskToList(t){
	
		const ul = document.querySelector('#taskList');
		const row = document.createElement('div');
		row.classList.add("ls");
		row.innerHTML =
		 `	<li class ="list">
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
		
		var newItemList = ul.prepend(row);
		newItemList;


			
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
		if (el.classList.contains('gg')) {
			var subTask = document.querySelector(".sbTask");
			var taskItem = document.querySelector(".ls");
		
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
function Submit(e){
	e.preventDefault();


	const input = document.querySelector('#inputbox').value;
	


		

	var id = 0;

	

	const t = new Task(input, id);
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


//priority


//add sub-task

 document.querySelector('#taskList')
.addEventListener('click', (e) => {
	UI.addSubTask(e.target);
});




