const express = require('express');
const { route } = require('express/lib/router');
const router = express.Router()
const studentDb = require('../module/dbStudent')
const bcrypt = require('bcrypt');

router.post ('/register',(req,res) =>{

        
// fetching datas to  folowing Attribute
    const studentSchema = new studentDb({
      
        
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email:req.body.email,
        dateOfBirth: req.body.dateOfBirth,
        mobile:req.body.mobile,
        status:req.body.status,
        accountType:req.body.accountType,
        password:req.body.password
    });

    studentSchema.save()
    .then(data => {
     res.json(data);
     console.log("Successfully User added!")
    })
    .catch(e => res.json({message: e}))
    

});

router.get('/', (req,res) => {
    studentDb.find()
     .then(data =>{
         res.json(data)
     })
     .catch(e =>
         res.json({message: e}));
 })
 router.delete('/delete/:id', (req,res) => {
    studentDb.deleteOne({_id: req.params.id})
        .then(data =>{
            res.json(data)
        })

        .catch(e =>
            res.json({message: e}));
})


router.patch('/edit/:id', (req,res) => {
    studentDb.updateOne ({_id: req.params.id},
        {
            $set: 
            {
                
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email:req.body.email,
                dateOfBirth: req.body.dateOfBirth,
                email:req.body.email,
                mobile:req.body.mobile,
                status:req.body.status,
                accountType:req.body.accountType,
                password:req.body.password
            }
        })
        .then(data =>{
            res.json(data)
        })
        .catch(e =>
            res.json({message: e}));
})

module.exports = router