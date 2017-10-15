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
        const {itemname,itemprice} = req.body;
        dbInstance.create_bin([itemname,itemprice,req.params.id])
        .then( ()=>res.status(200).send())
        .catch(() => res.status(500).send());

    },

    deleteBin: (req,res,next) => {
        const dbInstance = req.app.get('db')
    
        dbInstance.delete_bin([req.params.id])
        .then( () =>res.status(200).send())
        .catch(() => res.status(500).send());
    },

    getShelf: (req,res,next) =>{
        const dbInstance = req.app.get('db')

        dbInstance.read_shelf([req.params.id])
        .then(items =>res.status(200).send(items))
        .catch(()=>res.status(500).send());

    },

    updateBin: (req,res,next)=>{
        const dbInstance =req.app.get('db')
        const {itemname,itemprice}= req.body;
        
        dbInstance.update_bin([req.params.id,itemname,itemprice])
        .then( () =>res.status(200).send())

    }
}