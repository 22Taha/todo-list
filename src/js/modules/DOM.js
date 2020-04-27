import { updateTask, removeTask } from "./undo_redo";


// create existing tasks in list();
export const createItems = (todos, element) => {
    document.getElementById(element).innerHTML= "";
    todos.forEach(todo => {
        createTask(todo, element)
    });
}

// create task in list 
export const createTask = (todo, element) => {
    const taskDiv = document.getElementById(element);
    const newChild = document.createElement('li');
    let important="";
    let imp = 0;
    if(todo.isImportant){
        important = "<span class=\"badge badge-pill badge-danger m-2\">Important</span>"
    }else{
        important = "";
    }
    let color;
    if(todo.state=="done") 
        color = "success"; 
    else color = "primary";
        
    newChild.innerHTML = "<label>"+todo.name+"</label> <span name=\"state\" class=\"badge badge-pill badge-"+color+" m-2\">"+todo.state+"</span>"+important+"<button class=\"close m-2 rmv float-right\">X</button><select class=\"custom-select float-right\" style=\"width:auto;\"><option value=\"todo\" selected>todo</option><option value=\"done\">done</option></select><span class=\"mt-2 mr-1 float-right\">"+todo.date+"</span>";
    
    if(important == ""){
        newChild.children[3].value = todo.state;
    }else{
        newChild.children[4].value = todo.state;
        imp++;
    }

    // remove task from todo
    newChild.children[2+imp].addEventListener('click', function(){
        removeTask(this.parentElement.firstChild.textContent)
        this.parentElement.remove()
    });

    // change task state
    newChild.children[3+imp].addEventListener('change', function(){
        updateTask(this.parentElement.firstChild.textContent ,this.value)
        if(this.value=="done"){
            this.parentElement.querySelector('span[name="state"]').classList.remove('badge-primary')
            this.parentElement.querySelector('span[name="state"]').classList.add('badge-success')
            this.parentElement.querySelector('span[name="state"]').innerHTML="done"
        }
        else{
            this.parentElement.querySelector('span[name="state"]').classList.remove('badge-success')
            this.parentElement.querySelector('span[name="state"]').classList.add('badge-primary')
            this.parentElement.querySelector('span[name="state"]').innerHTML="todo"
        }
    });
    
    taskDiv.insertBefore(newChild, taskDiv.firstChild);
}

//  reset inputs and fields 
export const resetFields = () => {
    const inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        if(inputs[i].type=="checkbox"){
            inputs[i].checked=false;
        }else{
            inputs[i].value = "";
        }
    }
}
