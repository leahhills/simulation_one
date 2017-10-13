module.exports = {
    getBin: (req, res, next) => {
        const dbInstance = req.app.get('db');
        // const { params } = req;

        dbInstance.read_bin([req.params.id])
        .then(item => res.status(200).send(item))
        .catch(() => res.status(500).send());
    }
}