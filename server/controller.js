module.exports = {
    getBin: (req, res, next) => {
        const dbInstance = req.app.get('db');
        dbInstance.read_bin(req.params.id)
        .then(bin => res.status(200).send(bin))
        .catch(err => res.status(500).send(err));
    },
    getBins: (req, res, next) => {
        const dbInstance = req.app.get('db');
        dbInstance.read_bins(req.params.id)
        .then(bins => res.status(200).send(bins))
        .catch(err => res.status(500).send(err));
    },

    getAllBins: (req, res, next) => {
        const dbInstance = req.app.get('db');
        dbInstance.read_allbins()
        .then(allbins => res.status(200).send(allbins))
        .catch(err=> res.status(500).send(err));
    },


    createBin: (req,res,next)=>{
        const dbInstance = req.app.get('db')
        const {BinName, ShelfId} = req.body;
        dbInstance.create_bin([BinName, ShelfId])
        .then(() => res.status(200).send('Bin was created'))
        .catch(err => res.status(500).send(err));

    },
    updateBin: (req, res, next)=>{
        console.log('getting here?')
        const dbInstance = req.app.get('db');
        console.log(req.body);
        const {binname, shelfid, binitemname, binitemprice} = req.body;
        dbInstance.update_bin([req.params.id, binname, shelfid, binitemname, binitemprice])
        .then(() => res.status(200).send('Bin updated successfully.'))
        .catch(err => res.status(500).send(err));

    },

    deleteBin: (req,res,next) => {
        const dbInstance = req.app.get('db');
        dbInstance.delete_bin(req.params.id)
        .then( () =>res.status(200).send())
        .catch(err => res.status(500).send(err));
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