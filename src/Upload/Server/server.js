import express from "express"
import cors from "cors"
import multer from "multer"
import fs from "fs"
import path from "path"


const app = express()
app.use(cors())


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        try {
            fs.mkdirSync(path.join(process.cwd(), "./src/Upload/Server", "uploads"))
        } catch (error) {

        }

        cb(null, path.join(process.cwd(), "./src/Upload/Server", "uploads"))
    },
    filename: function (req, file, cb) {
        const buffer = Buffer.from(file.originalname, 'binary');
        const fileName = Date.now() + Math.round(Math.random() * 1E9) + buffer.toString('utf8')
        cb(null, fileName)
    }
})


const upload = multer({
    dest: 'uploads/',
    storage
})

app.post("/upload", upload.single("file"), function (req, res, next) {
    console.log('req.file', req.file);
    console.log('req.body', req.body);

    res.end(JSON.stringify({
        message: 'success'
    }));
})

app.listen(3000, (error) => {
    if (!error) {
        console.log("服务器启动成功")
    } else {
        console.error(error)
    }

})