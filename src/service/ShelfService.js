import axios from 'axios';

class ShelfService {
    constructor(){
        const baseURL='localhost:3000';
        //method that gets the different shelves
        
    }
    getItems(){
        return axios.get(`${baseURL}/api/shelf/:id`)
    }
}