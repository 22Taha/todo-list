
export default class Todo {
    
    constructor(name, isImportant = false, state = "todo", date = null){
        this.name = name;
        this.isImportant = isImportant;
        this.state = state;
        this.date = date;
    }
}