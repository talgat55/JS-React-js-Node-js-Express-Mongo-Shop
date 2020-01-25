const {Router} = require('express');
const router = Router();


router.post(
    '/upload-file',
    async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    let sampleFile = req.files.file;
    let uploadPath = process.cwd()+`/client/upload/${sampleFile.name}`;
    let webPath = `/client/upload/${sampleFile.name}`;
    sampleFile.mv(uploadPath, function(err) {
        if (err)
            return res.status(500).send(err);
        res.send(webPath );
    });
});

module.exports = router;