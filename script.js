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
		${t.name}
		<span class="delete"><a href="#" 
		class="btn btn-danger delete">X</a>
		</span>
		`;

		ul.appendChild(row);
	}

	static deleteTask(el){
		if(el.classList.contains('delete')){
			el.parentElement.parentElement.remove();
		}
		
	}

	static clearTask(){
		const input = document.querySelector('#newTask').value = '';



	}	
}



document.addEventListener('DOMContentLoaded', UI.displayTask);
document.querySelector('#buttonContainer').addEventListener('click', Submit);
document.querySelector('#taskList')
.addEventListener('click', (e) => {
	UI.deleteTask(e.target);

	});
function Submit(){

	const input = document.querySelector('#newTask').value;
	const t = new Task(input);
	UI.addTaskToList(t);
	UI.clearTask();
}
