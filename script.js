class Task {
	constructor(name){
		this.name = name;
		
	}
}

class UI {

	static displayTask(t){
		const task = [{
			name: "first task"
			
		},{
			name: "second task"
		
		}];

		const taskList = task;
		taskList.forEach((t) => UI.addTaskToList(t));
	}

	static addTaskToList(t){
		const ul = document.querySelector('#taskList');
		const row = document.createElement('li');
		row.classList.add("added");
		row.innerHTML = `
		<div class="adtask">
		<p>${t.name}</p>
		</div>
		<div>
		<a href="#" class="plus">+</a>
		</div>
		<div class="delete"><a href="#" 
		class="remove btn">X</a>
		</div>
		`;

		ul.appendChild(row);
	}

	static deleteTask(el){
		if(el.classList.contains('remove')){
			el.parentElement.parentElement.remove();
		}
		
	}

	static clearTask(){
		const input = document.querySelector('#newTask').value = '';

	}

	static editTask(e){
		
		
		
		

	}
}


//display saved tasks
document.addEventListener('DOMContentLoaded', UI.displayTask);


//submit a task
document.querySelector('#buttonContainer').addEventListener('click', Submit);
function Submit(){

	const input = document.querySelector('#newTask').value;
	const t = new Task(input);
	UI.addTaskToList(t);
	UI.clearTask();
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