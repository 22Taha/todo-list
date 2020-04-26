
// get data from storage 
export const getStorageData = () => {
    if(localStorage.getItem("storage")){
        let data = JSON.parse(localStorage.getItem("storage"));
        return data;
    }
    let empty = {
        past: [],
        present: [],
        futur: []
    };    
    localStorage.setItem("storage",JSON.stringify(empty));
    return empty;
}

// push element to localStorage
export const updateLocalStorage = (data) => {
    localStorage.setItem("storage",JSON.stringify(data));
}
