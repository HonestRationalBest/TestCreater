const { Router } = require('express')
const { cloudinary } = require('../utils/cloudinary') 

const Theory = require('../models/Theory')
const Section = require('../models/Section')

const router = Router()



router.post(
    '/add_book/:id',
    async (req, res) => {
        try {

            const {fileName} = req.body
            const {fileUrl} = req.body
            const { id } = req.params

            const theory = new Theory({
                ownerId: id,
                name : fileName,
                link: fileUrl
            })

            theory.save((error)=>{  
                        if(error){  
                            console.log('error ',error)  
                        }  
                        else{  
                            res.status(200).json({ message: "Item has been created!" })
                        }  
            })  
        } catch (e) {
            console.log(e)
            res.status(500).json({ message: "Server error" })
        }
    })

router.post(
    '/add_section/:id',
    async (req, res) => {
        try {

            const { id } = req.params
            const {name} = req.body

            const section = new Section({
                ownerId: id,
                name : name,
            })

            section.save((error)=>{  
                if(error){  
                    console.log('error ',error)  
                }  
                else{  
                    res.status(200).json({ message: "Item has been created!" })
                }  
            }) 


        } catch (e) {
            console.log(e)              
            res.status(500).json({ message: "Server error" })
    }
})

router.get(
    '/get_sections/:id',
    async (req, res) => {
        try {

            const { id } = req.params

            Section.find({ownerId: id}, async (err, users) => {
                if (err) return console.log(err);
                return res.send(users)
            });

        } catch (e) {
            console.log(e)              
            res.status(500).json({ message: "Server error" })
    }
})

router.delete(
    '/delete_section/:id',
    async (req, res) => {
        try {

            const { sectionId } = req.params

            Section.deleteOne({_id: sectionId}, async (err, users) => {

                if (err) return console.log(err);
                return res.send(users)
            });

        } catch (e) {
            console.log(e)              
            res.status(500).json({ message: "Server error" })
    }
})
    

module.exports = router
