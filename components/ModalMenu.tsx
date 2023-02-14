import React from 'react'
import {useState, useEffect,useCallback, useRef} from 'react';
import styles from '../styles/gallery.module.scss'
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import {DocumentData, QueryDocumentSnapshot} from "@firebase/firestore/lite";
import { collection, getDocs } from "@firebase/firestore";
import { firestore } from '../firebase/clientApp'
import Image from 'next/image';



const Menu = ({menuToggle} : {menuToggle:boolean}) => {

  const [about,setAbout] = useState<QueryDocumentSnapshot<DocumentData>[]>([]);

useEffect( () => {getAbout();},[]);

 const aboutCollection = collection(firestore,'About');

 const getAbout = async () => {
  const querySnapshot = await getDocs(aboutCollection);
  const result: QueryDocumentSnapshot<DocumentData>[] = [];
  querySnapshot.forEach((snapshot) => {
    result.push(snapshot);
  })
  setAbout(result);
  
};
    
    
    interface ToggleProps {
        toggle: boolean;
      }

    const [toggle, setToggle] = useState<ToggleProps | boolean>(menuToggle)
    const [isActive, setIsActive] = useState<ToggleProps | boolean>(menuToggle);

useEffect(() => {

setToggle(menuToggle)
setIsActive(toggle)
setIsActive(true)

}, [menuToggle, toggle])



const [email_, setEmail] = useState('')
const email :any  = document.querySelector('.email');

useEffect(() => {}, [email_])

const emailRef :any  = useRef('')

let mail  = email_

useEffect(() => {setEmail(email_ => email_ )},[])
useEffect(() => {console.log(email_)},)

useEffect(() => {emailRef.current = mail;},[mail])


const email__ : any = emailRef.current; // corresponding DOM node








const handleClick : any = (event : any) => {
    // 👇️ toggle isActive state on click
    setIsActive(current=> !current);
  
  };






const [checking, setChecking]= useState(false);
const [notification, setNotification] = useState("");
const { executeRecaptcha } = useGoogleReCaptcha();


  const handleSubmitForm = useCallback((e: { preventDefault: () => void; }) => {



      if (!executeRecaptcha) {
        console.log("Execute recaptcha not yet available");
        return;
      }
      executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
        console.log(gReCaptchaToken, "response Google reCaptcha server");
     
        submitEnquiryForm(gReCaptchaToken);
        setChecking(true)
       
      });
   
    },
 
    [executeRecaptcha]
  );



  const submitEnquiryForm = (gReCaptchaToken : any ) => {
 

      const name : any  = document.querySelector('.name');
       const email :any  = document.querySelector('.email');
       const message : any  = document.querySelector('.message');
      const submit : any = document.querySelector(`.${styles.sendbutton}`);

      const contactForm : any  = document.querySelector(`.${styles.ContactForm}`)
 

 submit.addEventListener("click", (e: { preventDefault: () => void; }) => {


  e.preventDefault();
    fetch("/api/enquiry", {

      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      
      body: JSON.stringify({
        name: name.value,
        email: emailRef.current,
        message: message.value,
        gRecaptchaToken: gReCaptchaToken,
      }),
      
    } ) 
      .then((res) => res.json())
      .then((res) => {
        console.log(res, "response from backend");
        if (res?.status === "success") {
          
          setNotification(res?.message);
          
          contactForm.reset();
          console.log('message sent ')
          setChecking(false)

          
        } else {
          setNotification(res?.message);
        }
      });
    })
 
  };
const funkychicken = () => {

  return null
}

const [aboutActive, setAboutActive] = useState(false);
const [contactActive, setContactActive] = useState(false);

const handleAboutClose : any = (event : any) => {
  // 👇️ toggle isActive state on click
  setAboutActive(current=> !current);

};

const handleContactClose : any = (event : any) => {
  // 👇️ toggle isActive state on click
  setContactActive(current=> !current);

};


    return (

        

<>

<div id="myNav"  className={isActive ? styles.overlayMENU  : styles.overlayMENUhide } >

    <div className={styles.closeButton} onClick={handleClick}/>
    <div className={styles.overlayContent}>
      <ul onClick={handleAboutClose}>About</ul>
      <ul  onClick={handleContactClose}>Contact</ul>
    </div>
    </div>
    
      <div className={aboutActive ? styles.AboutSection : styles.AboutSectionHIDE }>
      {about && about.map((about,index) => {

return (

        <section  key={about.id} onClick={handleAboutClose}  className={styles.AboutFlexContainer}>
        <Image src={about.data().url} className={styles.AboutPotrait}  alt={'Stephen Weldon'} width={1229} height={1229} unoptimized />
        <p className={styles.AboutBio}>{about.data().bio}</p>
          </section>


)
    })}

      </div>


      
         
      <div className={contactActive ? styles.ContactSection : styles.ContactSectionHIDE }>
        <section  className={styles.ContactFlexContainer}>


      
    
        <form  className={`${styles.ContactForm}`}>
          <span onClick={handleContactClose} className={styles.ContactClose}></span>
            <div className={styles.inputflex}>
              <input className={'name'}  type="text" name="user_name"  placeholder="Name*" required/>
              <input className={'email'} onChange={(e) => setEmail(e?.target?.value)} ref={emailRef} type="email" name="user_email" placeholder="E-mail*" required/>
              <textarea className={'message'} name="message"  placeholder="Questions" required/>
           
              <button type="submit" value="send" className={`${styles.sendbutton}`} onClick={submitEnquiryForm}>Send</button>
             
             <div className={styles.CheckMarkVerify}>
              <input type="checkbox" onChange={funkychicken} checked={checking} className={styles.checkbox} onClick={handleSubmitForm}  required/>
               <span className={styles.verify}>Verify</span>
              </div>
            </div>
        </form>

        <br/>
        <br/>
   
        {notification &&   <p className={styles.ContactInfo}>{notification}</p>}
       
     
          </section>


          
  

      </div>

      



</>




    )
}

export default Menu