import * as functions from "firebase-functions";






const admin = require("firebase-admin")
admin.initializeApp()
const nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'Gmail',

    auth: {
        user: 'morganblighwebdeveloper@gmail.com',
        pass: 'lgziolrtcplvlbdv'
    }
});



exports.sendEmail = functions.firestore
    .document('email/{emailId}')
    .onCreate((snap, context) => {

        const mailOptions = {
            from: snap.data().email,
            to: 'morganblighwebdeveloper@gmail.com' ,
            subject: 'contact form message',
            html: snap.data().message
        };

       


        return transporter.sendMail(mailOptions, ({error, data} : {error: any , data: any}) => {
            if (error) {
                console.log(error)
                return
            }
            console.log("Sent!")
           

      
             

        })
    });
   
        

  
      

 
   

      
    exports.sendMailOverHTTP = functions.https.onRequest((req, res) => {

        functions.firestore
        .document('email/{emailId}')
        .onCreate((snap, context) => {
        
            const mailOptions = {
                from: snap.data().email,
                to: 'morganblighwebdeveloper@gmail.com' ,
                subject: 'contact form message',
                html: snap.data().message
            };
    
    
        return transporter.sendMail(mailOptions, ({error, data} : {error: any , data: any}) => {
            if (error) {
                return res.send(error.toString());
            }
            var data : any = JSON.stringify(data)
            return res.send(`Sent! ${data}`);
        });
    
    });
       });
    
    