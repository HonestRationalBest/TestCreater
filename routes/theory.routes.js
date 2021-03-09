const { Router } = require('express')
const { cloudinary } = require('../utils/cloudinary')

const Theory = require('../models/Theory')
const router = Router()



router.post(
    '/add_book/:id',
    async (req, res) => {
        try {
         
            const file = req.files.file
            const { id } = req.params
          
            // Добавление файла в облако

            
            // const uploadResponse = await cloudinary.uploader.upload(file, {
            //     upload_preset: 'dev_setups',
            // });

            // console.log(uploadResponse)
            const theory = new Theory({
                ownerId: id,
                name : file.name,
                link:"https://res.cloudinary.com/ds8hydjea/image/upload/v1615287791/Test_creater/znuw8idz9mwhqybra59t.pdf",
            })

            await theory.save()

            res.status(200).json({ message: "Item has been created!" })

        } catch (e) {
            console.log(e)
            res.status(500).json({ message: "Server error" })
        }
    })

module.exports = router
