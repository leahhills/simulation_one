module.exports = {
    getBin: (req, res, next) => {
        const dbInstance = req.app.get('db');
        // const { params } = req;

        dbInstance.read_bin([req.params.id])
        .then(item => res.status(200).send(item))
        .catch(() => res.status(500).send());
    },
    createBin: (req,res,next)=>{
        const dbInstance = req.app.get('db')
        const {BinName, ShelfId} = req.body;
        dbInstance.create_bin([BinName, ShelfId])
        .then( ()=>res.status(200).send())
        .catch(() => res.status(500).send());

    },
    updateBin: (req,res,next)=>{
        const dbInstance =req.app.get('db')
        const {BinName, ShelfId, BinItem, BinItemPrice }= req.body;
        
        dbInstance.update_bin([req.params.id, BinName, ShelfId, BinItem, BinItemPrice])
        .then( () =>res.status(200).send())

    },
    deleteBin: (req,res,next) => {
        const dbInstance = req.app.get('db');
        dbInstance.delete_bin(req.params.id)
        .then( () =>res.status(200).send())
        .catch(() => res.status(500).send());
    },
    getShelves: (req, res, next) => {
        const dbInstance = req.app.get('db');
        dbInstance.read_shelves()
        .then(shelves => res.status(200).send(shelves))
        .catch(err => res.status(500).send(err));
    },
    getShelf: (req, res, next) => {
        const dbInstance = req.app.get('db');
        dbInstance.read_shelf(req.params.id)
        .then(shelf => res.status(200).send(shelf))
        .catch(err => res.status(500).send());
    },
    createShelf: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const body = req.body;
        dbInstance.create_shelf(body.ShelfName)
        .then(() => res.status(200).send('Successfully created shelf.'))
        .catch(err => res.status(500).send(err));
    },
    deleteShelf: (req, res, next) => {
        const dbInstance = req.app.get('db');
        dbInstance.delete_shelf(req.params.id)
        .then(() =>res.status(200).send('Succesfully deleted shelf.'))
        .catch(err => res.status(500).send(err));
    }
}