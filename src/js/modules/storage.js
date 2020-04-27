
// get data from storage 
export const getStorageData = () => {
    if(localStorage.getItem("storage")){
        return JSON.parse(localStorage.getItem("storage"));
    }
    return null;
}

// push element to localStorage
export const updateLocalStorage = (data) => {
    localStorage.setItem("storage",JSON.stringify(data));
}
