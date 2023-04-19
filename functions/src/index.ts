import * as functions from "firebase-functions";







const admin = require("firebase-admin")
admin.initializeApp()
const nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'Gmail',

    auth: {
        user: 'stephenweldongallery@gmail.com',
        pass: 'aouuqnzswiouxnsz'
    }
});



exports.sendEmail = functions.firestore
    .document('email/{emailId}')
    .onCreate((snap, context) => {

        const mailOptions : any = {
            from: snap.data().email,
            to: 'stephenweldongallery@gmail.com' ,
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
                to: 'stephenweldongallery@gmail.com' ,
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
    
       const db = admin.firestore();
       export const deleteOldItems = functions.firestore
           .document('email/{email}')
           .onWrite(async (change, context) => {
               const querySnapshot = await db.collection('email');
       
               const promises : any  = [];
               querySnapshot.forEach((doc : any) => {
                   promises.push(doc.ref.delete());
               });
               return Promise.all(promises);
           });
    

           exports.deleteOldEmails = functions.pubsub.schedule('every 24 hours').onRun(async (context) => {
            const firestore = admin.firestore();
            const currentDate = new Date();
            currentDate.setHours(0, 0, 0, 0);
          
            const query = firestore.collection('email').where('date', '!=', currentDate);
          
            const batch = firestore.batch();
            const snapshot = await query.get();
            snapshot.forEach((doc : any) => {
              batch.delete(doc.ref);
            });
          
            await batch.commit();
          });