
import { collection, addDoc, getFirestore,  serverTimestamp} from "@firebase/firestore";






const handler = (req, res )=> {





    if (req.method === "POST") {
      try {

    

        
        fetch("https://www.google.com/recaptcha/api/siteverify ", {

        
          
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `secret=6Lch41EkAAAAALLFtNwy0x5yb7p-02x5cDH8I8AC&response=${req.body.gRecaptchaToken}`,
       
        })
          .then((reCaptchaRes) => reCaptchaRes.json())
          .then((reCaptchaRes) => {
            console.log(
              reCaptchaRes,
              "Response from Google reCatpcha verification API"
            );
         
            if (reCaptchaRes?.score > 0.5 && req.body.email != null) {
              // Save data to the database from here
              
              const db  =  getFirestore();
              const date = new Date(); 
         
              const docRef = addDoc(collection(db, "email"), {
                name: req.body.name,
                email: req.body.email,
                message:  req.body.message,
                date: date
              })
       
            
            


              res.status(200).json({
                status: "success",
                message: "Enquiry submitted successfully",
      
                
              });
            } else {
              res.status(200).json({
                status: "failure",
                message: "Google ReCaptcha Failure",
              });
            }
          });
      } catch (err) {
        res.status(405).json({
          status: "failure",
          message: "Error submitting the enquiry form",
        });
      }
    } else {
      res.status(405);
      res.end();
    }
  };
  
  export default handler;
  