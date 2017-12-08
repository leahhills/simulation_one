module.exports = {
    buildEndPoints: function(app, controller) {
        // Shelf
        app.post('/api/shelf', controller.createShelf);
        app.get('/api/shelf/:id', controller.getShelf);
        app.get('/api/shelf', controller.getShelves);
        app.delete('/api/shelf/:id', controller.deleteShelf);

        // Bin
        app.get('/api/bins/:id', controller.getBins);
        app.get('/api/bin/:id', controller.getBin);
        app.get('/api/bins', controller.getAllBins);
        app.post('/api/bin', controller.createBin);
        app.delete('/api/bin/:id', controller.deleteBin);
        app.put('/api/bin/:id', controller.updateBin);

    }
}