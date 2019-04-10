var db = require("../models");
var nodemailer = require('nodemailer');

module.exports = function (app) {

  app.post("/", function (req, res) {



    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Contacted.create({
      sendername: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message,

    }).then(function (dbContact) {
      res.json(dbContact);
      console.log(dbContact);
    })
    console.log(req.body);
    res.render('index')
    console.log(req.body.email);






 

  //what i will get on my email
  var output = `

<h3 Eric you got contacted by </h3>  

      <ul>
          <li>From: ${req.body.name}</li>
          <li>Email: ${req.body.email}</li>
          <li>Subject: ${req.body.subject}</li>
          <li>Message: ${req.body.message}</li>

          
        </ul>
  `
  //transfering the email with my personal email
  var transporter = nodemailer.createTransport({

    service: 'gmail',
    auth:{
      user: 'eventcreator452@gmail.com',
               pass: 'UCSD123!'
    },
    tls:{
      rejectUnauthorized:false
    }

  });

  var mailOptions = {

    from: 'ericlz.25412@gmail.com',
    to: req.body.email,
    subject: 'Job',
    html: output
  };

  transporter.sendMail(mailOptions, function(err, info){
    if(err)
    console.log(err);
    else
    console.log(info);



  });

});



  // Get all examples
  //   app.get("/api/examples", function(req, res) {
  //     db.Example.findAll({}).then(function(dbExamples) {
  //       res.json(dbExamples);
  //     });
  //   });

  //   // Create a new example
  //   app.post("/api/examples", function(req, res) {
  //     db.Example.create(req.body).then(function(dbExample) {
  //       res.json(dbExample);
  //     });
  //   });

  //   // Delete an example by id
  //   app.delete("/api/examples/:id", function(req, res) {
  //     db.Example.destroy({ where: { id: req.params.id } }).then(function(
  //       dbExample
  //     ) {
  //       res.json(dbExample);
  //     });
  //   });
};