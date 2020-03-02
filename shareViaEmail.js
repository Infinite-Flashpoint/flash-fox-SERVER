
function linkshare(email){
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(email).toLowerCase())){
      let nodemailer = require("nodemailer")

      var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
                 user: 'filesharehacktiv@gmail.com',
                 pass: 'hacktiv8Super'
             }
         });
         
      
         const mailOptions = {
          from: 'filesharehacktiv@gmail.com', // sender address
          to: email, // list of receivers
          subject: 'test bro', // Subject line
          html: `<p> ini test email </p>`,
          // attachments: [{
          //     filename: 'Colorful-Geometric-Simple-Background-Image.jpg',
          //     path: 'https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Colorful-Geometric-Simple-Background-Image.jpg',
          //     cid: 'Colorful-Geometric-Simple-Background-Image.jpg' //same cid value as in the html img src
          // }]
        };
      
        transporter.sendMail(mailOptions, function (err, info) {
          if(err)
            console.log(err)
          else
            console.log(info);
       });
    }else{
      console.log("wrong format")
    }

}

//string input the email
linkshare()