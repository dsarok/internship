var express=require('express');
var bodyParser=require('body-parser');
var app=express();
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'divyashankaranand@gmail.com',
    pass: 'brahamjeetanand'
  }
});



app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',(req,res)=>{

  res.sendFile(__dirname+'/public/index.html');
});
app.post('/',(req,res)=>{
  var mailOptions = {
    from: 'divyashankaranand@gmail.com',
    to: req.body.email,
    subject: req.body.msg_subject,
    html: `<strong> Name: </strong> ${req.body.name}<br>
         <strong> email :</strong> ${req.body.email}<br>
         <strong> subject :</strong> ${req.body.msg_subject}<br>
         <strong> message :</strong> ${req.body.message}<br>
            `
  };
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
console.log(req.body,'from server');
});
app.get('/blog',(req,res)=>{
  res.sendFile(__dirname+'/public/blog.html');
});
app.listen(3000,()=>{
  console.log('server has started');
});
app.get('/blog/form',(req,res)=>{
  res.sendFile(__dirname+'/public/blogform.html');
});
app.post('/blog/form',(req,res)=>{
  
})
