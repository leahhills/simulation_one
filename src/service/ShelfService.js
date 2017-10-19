import axios from 'axios';

export default class ShelfService {
    constructor() {
        this.baseURL = 'http://localhost:3000';        
    }

    //shelves
    getShelves() {
        return axios.get(`${this.baseURL}/api/shelf`);
    }
    getShelf(ShelfId) {
        return axios.get(`${this.baseURL}/api/shelf/${ShelfId}`)
    }
    createShelf(Shelf) {
        return axios.post(`${this.baseURL}/api/shelf`, Shelf);
    }
    updateShelf(Shelf) {
        return axios.put(`${this.baseURL}/api/shelf`, Shelf);
    }
    deleteShelf(ShelfId) {
        return axios.delete(`${this.baseURL}/api/shelf/${ShelfId}`);
    }

    //bins
    getBins(ShelfId) {
        return axios.get(`${this.baseURL}/api/bins/${ShelfId}`);
    }
    getBin(BinId) {
        return axios.get(`${this.baseURL}/api/bin/${BinId}`);
    }
    createBin(Bin) {
        return axios.put(`${this.baseURL}/api/bin`, Bin);
    }
    updateBin(BinId, Bin) {
        return axios.post(`${this.baseURL}/api/bin/${BinId}`, Bin);
    }
    deleteBin(BinId) {
        return axios.delete(`${this.baseURL}/api/bin/${BinId}`);
    }

}
