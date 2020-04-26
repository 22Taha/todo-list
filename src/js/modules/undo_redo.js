import { getStorageData, updateLocalStorage } from "./storage";

// get data from localStorage
let data = getStorageData();

// get todo list
export const todos = () => {
    return data.present;
}

// add changes to history states 
const updatePast =() => {
    data.futur = []; 
    data.past.push(JSON.parse(JSON.stringify(data.present)))
    while(data.past.length > 5)
        data.past.shift();
}

// add a todo 
export const addTask = (todo) => {
    updatePast();
    data.present.push(todo);
    updateLocalStorage(data);
}

// change a todo state 
export const updateTask = (todoName, state) => {
    updatePast();

    let pos = data.present.map(function(e) { return e.name; }).indexOf(todoName);
    data.present[pos].state=state;
    
    updateLocalStorage(data);
}

// delete a todo 
export const removeTask = (todoName) => {
    updatePast();

    let pos = data.present.map(function(e) { return e.name; }).indexOf(todoName);
    data.present.splice(pos, 1);
    updateLocalStorage(data);
}

// go back 
export const back = () => {
    if(data.past.length > 0){
        data.futur.push(data.present);
        data.present = data.past.pop();
        updateLocalStorage(data);
        return data.present;
    }
    return null;
}

// go forward 
export const forward = () => {
    if(data.futur.length > 0){
        data.past.push(data.present);
        data.present = data.futur.pop();
        updateLocalStorage(data);
        return data.present;
    }
    return null;
}