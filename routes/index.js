var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let subscribers = [];
  const csvFilePath='./public/Subscribers_1_of_1 2.csv';
  const csv=require('csvtojson');
  csv()
  .fromFile(csvFilePath)
  .on('json',(jsonObj)=>{
      subscribers.push(jsonObj);
  })
  .on('done',(error)=>{
      console.log('end');
      
      let winner = subscribers[Math.random() * subscribers.length | 0];
      console.log(winner);


      res.render('index', { 
        title: 'DesigNation Subscriber Giveaway', 
      });
  });
  
});

router.get('/subscribers', function(req, res, next) {
  let subscribers = [];
  const csvFilePath='./public/Subscribers_1_of_1 2.csv';
  const csv=require('csvtojson');
  csv()
  .fromFile(csvFilePath)
  .on('json',(jsonObj)=>{
      subscribers.push(jsonObj);
  })
  .on('done',(error)=>{
      console.log('Request for subsribers made');
      res.json(subscribers);
  });
});

module.exports = router;
