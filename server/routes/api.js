const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  
});

router.post('/postData',(req,res)=>{
    const demoData=require('../database/models/demoData.js');
    var name=req.body.name;
    var subject=req.body.subject;

    

    var saveData=new demoData({name:name, subject: subject});
    saveData.save().then((savedRecords)=>{
        console.log(savedRecords);
        res.send(savedRecords);
    });

});

router.get('/getData',(req,res)=>{
    const demoData=require('../database/models/demoData.js');
    demoData.find({},(err,docs)=>{
        if(docs.length > 0)
        {
            res.send(docs);
        }
        else
        {
            console.log('blank');
            console.log(docs);
            res.send(docs);
        }

    });
});

module.exports = router;