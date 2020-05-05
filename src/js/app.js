import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/style.css"
import Todo from './modules/Todo'
import {createItems, createTask, resetFields} from './modules/DOM'
import { todos, addTask, back, forward } from './modules/undo_redo'


// get existing todos
let data = todos();
if(data){
    createItems(data,"globalDiv");
}

// go back
document.getElementById('backBtn').onclick = function(){
    data = back();
    if(data){
        createItems(data, "globalDiv");
    }
}

// go forward
document.getElementById('forwardBtn').onclick = function(){
    data = forward();
    if(data){
        createItems(data, "globalDiv");
    }
}

// alerts by Date
let dataL = null;
const alertPopup = () => {
    if(data!=null){
        dataL = JSON.parse(JSON.stringify(data))
        setInterval(function(){
            let diff = null;
            dataL.forEach(element => {
                if(element.date!=""){
                    diff = (new Date(Date.now()).getTime() - new Date(element.date).getTime())/1000;
                    // console.log(diff);
                    if( diff < 3 && diff > 0)
                        alert(element.name);
                }
            });            
        }, 1000);
    }
}
alertPopup();

// add task using button
document.getElementById('addBtn').onclick = function(){
    let task = document.getElementById('task').value;
    let todo = new Todo(task);
    if(task){
        todo.date = document.getElementById('date').value;
        if(document.getElementById('importantCheck').checked){
            todo.isImportant=true;
        }
        createTask(todo, "globalDiv");
        addTask(todo);
        resetFields();
        dataL.push(todo);
    }
};

// add task using Enter key on task field
document.getElementById('task').onkeypress = function(event){
    if(event.keyCode==13){
        addBtn.onclick();
    }
}

// add task using Enter key on date field
document.getElementById('date').onkeypress = function(event){
    if(event.keyCode==13){
        addBtn.onclick();
    }
}