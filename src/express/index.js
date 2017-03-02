require('dotenv').config();

var express = require('express');
var nodemailer = require('nodemailer');

var router = express.Router();
app.use('/sayHello', router);
router.post('/', handleSayHello);

function handleSayHello(req, res){
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: EMAIL,
      pass: PASSWORD
    }
  });

  var text = 'Hello world from \n\n' + req.body.name;

  var mailOptions = {
    from: 'example@gmail.com',
    to: 'receiver@destination.com',
    subject: 'Email Example',
    text: text,
    html: '<b>Hello world</b>'
  }
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      console.log(error);
      res.json({yo: 'error'});
    }else{
      console.log('Message sent: ' + info.response);
      res.json({yo: info.response});
    }
  });
}
