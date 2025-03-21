const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/img')
    },
    filename: (req, file, cb) => {
        const timestamp = new Date().getTime()
        const originalname = file.originalname

        cb(null, `${timestamp}-${originalname}`)
    }
})

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 2 * 1000 * 1000 // 2MB
    }
})

module.exports = upload