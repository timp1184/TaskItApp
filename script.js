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
		row.classList.add("ls");
		row.innerHTML =
		 `		<div>
        		<input type="checkbox" class="checkbox"><p class="taskitem">${t.name}</p>
        		<span class="gg">+</span>
				<a href="#" class="delete">X</a>
    			</div>
    		`;
		

		ul.appendChild(row);
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

		


		
		
	



	static completeTask(){

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


