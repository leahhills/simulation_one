import axios from 'axios';

class ShelfService {
    constructor(){
        const baseURL='localhost:3000';
        //method that gets the different shelves
        
    }
    getBinItems(id){
        return axios.get(`${baseURL}/api/bin/${id}`);
    }
}
