
import type { NextPage } from 'next'
import Head from 'next/head';
import { firestore } from '../firebase/clientApp'
import {DocumentData, QueryDocumentSnapshot} from "@firebase/firestore/lite";
import { collection, getDocs } from "@firebase/firestore";
import styles from '../styles/gallery.module.scss'
import React, { useEffect, useState, useRef, useContext, Suspense} from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Image from 'next/image';
const Menu = React.lazy(() => import('../components/ModalMenu'));
const Modal = React.lazy(() => import('../components/Modal'));

const Home: NextPage = () => {
const [art,setArt] = useState<QueryDocumentSnapshot<DocumentData>[]>([]);

useEffect( () => {getArt();},[]);

 const artCollection = collection(firestore,'art');

 const getArt = async () => {
  const querySnapshot = await getDocs(artCollection);
  const result: QueryDocumentSnapshot<DocumentData>[] = [];
  querySnapshot.forEach((snapshot) => {
    result.push(snapshot);
  })
  setArt(result);
  
};

const [ selectedImg, setSelectedImg ] = useState('');
const [ selectedDate, setSelectedDate ] = useState('');
const [ selectedSize, setSelectedSize ] = useState('');
const [ selectedMedium, setSelectedMedium ] = useState('');
const [ selectedPrice, setSelectedPrice ] = useState('');
const [ selectedTitle, setSelectedTitle ] = useState('');
const [imageToggle, setImageToggle] = useState(false)
const [modalID, setModalID] = useState('')
const [boolTog, setBoolTog] = useState(true)
const [menuToggle, setMenuToggle] = useState(false)
const [menuOpen, setMenuOpen] = useState(false)
const [number, setNumber] = useState(1)
const [prevNumber, setPrevNumber] = useState(-1)
const prevID = useRef('');
const imgID = useRef('');

const Leftref = useRef(null);
const Rightref = useRef(null);
const IMGref = useRef(null)


if (typeof window !== "undefined") {

  const buttonRight = document.getElementById!('buttonRight');
  const buttonLeft = document.getElementById!('buttonLeft');
  
  const swipe = document.getElementById!('scroll');
  const IMG : any = IMGref.current

  // swipe!.onscroll = () => {


  //   IMG!.style.scale= ".5";
  //   //IMG!.style.filter= "blur(100px) opacity(0) brightness(200%)";
    
  

  //   setTimeout(() => {
  //     IMG!.style.scale= "initial";  
  //     //IMG!.style.filter= "initial";
  

  //   }, 100);

  //  }
  
  buttonRight!.onclick = () => {
    document.getElementById(imgID.current)!.scrollIntoView({
      behavior: "smooth",
      block: 'end',
      inline: 'center'
    });

    IMG!.style.scale= ".5";
    IMG!.style.filter= "blur(100px) opacity(0) brightness(200%)";
  
   

    setTimeout(() => {
      IMG!.style.scale= "initial";  
      IMG!.style.filter= "initial";
 
     
    }, 300);

   }
  
  buttonLeft!.onclick = () => {
    document.getElementById(prevID.current)!.scrollIntoView({
      behavior: "smooth",
      block: 'end',
      inline: 'center'
    });

    IMG!.style.scale= ".5";
    IMG!.style.filter= "blur(100px) opacity(0)brightness(200%)";

 

    setTimeout(() => {
      IMG!.style.scale= "initial";  
      IMG!.style.filter= "initial";
    

    }, 300);
  }

}
 
  const stagedID = 'ID_'
  let StringNum =  number.toString();
  let combo = stagedID + StringNum

  let PrevStringNum =  prevNumber.toString();
  let PrevCombo = stagedID + PrevStringNum

useEffect(() => {prevID.current = PrevCombo;},[PrevCombo])

useEffect(() => {imgID.current = combo;},[combo])

const { theme, setTheme } = useContext(ThemeContext)

const ThemeToggleAnimation = () => {

  const element = document.getElementById("toggle");
  element!.classList.toggle(`${styles.ToggleAnimation}`);


}
useEffect(() => {
    setNumber(number => number + 1)
  setPrevNumber(prevNumber => prevNumber - 1)
  
  }
, [imageToggle , menuToggle])


useEffect(() => {
 
  if (typeof window !== "undefined") {
  setTimeout(() => {
    
  
  const images : any = Array.from(document.querySelectorAll('.lazy-images'));

          
  if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  const image : any = entry.target;
                  
                  let imgIden = image.id
              
                  const lastChar = imgIden.at(-1);
                
                  const lastCharConvert2int = parseInt(lastChar)
                  const curChar = lastCharConvert2int + 1
                  const PrevChar = lastCharConvert2int - 1
                  setNumber(curChar)
                  setPrevNumber(PrevChar)
              
              }
          });
      });

      images.forEach((img:any) => imageObserver.observe(img));
      
  
    }
  }, 500);
  
  
  }
  },[number, prevNumber, imgID, boolTog, menuOpen])



useEffect(() => {
 
if (typeof window !== "undefined") {
setTimeout(() => {
  

const images : any = Array.from(document.querySelectorAll('.lazy-images'));
const spanL : any = Leftref.current; // corresponding DOM node
const spanR : any = Rightref.current; // corresponding DOM node
const spanIMG : any = IMGref.current
        
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

           
              setTimeout(() => {
                spanIMG!.style.opacity= "1";
              }, 250);
  
         
                const image : any = entry.target;
                image.src = image.dataset.src;
               
                images.onload = () => {images.previousElementSibling.remove()}

                const LastImage = images[images.length - 1];
               

                const FirstImage = images[0]
              
             
              if (FirstImage.id == entry.target.id ) {

               
              
                spanL!.style.visibility= "hidden";

              }
              else {
             
                spanL!.style.visibility= "visible";
              }
              
              if (LastImage.id == entry.target.id ) {

               
              
                spanR!.style.visibility= "hidden";

              }
              else {

                spanR!.style.visibility= "visible";
              }    
                imageObserver.unobserve(image);
            }

            
      
        });
       
    });
    
    images.forEach((img:any) => imageObserver.observe(img));
    

  }

}, 500);


}
}, )


  return (

    
      <div className={theme}>

      <Head>
        <title>Stephen Weldon Gallery</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@700&display=swap"
          rel="stylesheet"
          
        />
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/favicon_sw.svg" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
          <meta name="theme-color" content="#40414c" />
          <meta property="og:title" content="Stephen Weldon Gallery"/>
          <meta property="og:description" content="Stephen Weldon's Gallery Collection"/>
          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://nextjs-image-gallery.web.app/"/>
          <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/nextjs-image-gallery.appspot.com/o/MetaTag.png?alt=media&token=2a3a451d-e795-4c6f-87dd-f6a6260e4021"/>
      
      </Head>

        
      <section className={styles.GalleryGrid}>
      
        <section className={styles.NavSection}>
        <div className={styles.NavContainer} >
          
         <svg   onClick={()=> {setTimeout(() => {
                if ( menuOpen == true) {
                  setMenuToggle(false)
                } else if  ( menuOpen == false )
                {setMenuToggle(true)}
              }, 500); setMenuToggle(menuOpen => !menuOpen);}} xmlns="http://www.w3.org/2000/svg" width="143.943" height="98.85" viewBox="0 0 38.085 26.154">
                <path d="M21.647 26.143l-8.309-.05c-1.703-.633-3.599.126-5.287-.635-1.726-.146-3.385.176-5-.287 1.207-.405 2.627.12 3.721-.655l-3.885.217c.952-.455-1.165-.146-1.357-.398-1.061.185-1.252-.406-.109-.34 1.086.111.224-.643.579-.619 1.733-.373 3.594.081 5.275-.276.226-1.108-2.824-.051-2.458-1.033.684-.234 1.436-.466.096-.442-.624.1-2.117-.548-.634-.508l5.466-.549 7.552-.295c-2.125-.164-4.26.06-6.39.034-1.412-.039-3.088.213-4.323-.249 2.524-.313 5.095-.483 7.646-.555 3.394.194 6.779-.206 10.172-.174 3.249.244 6.486.596 9.724.957 1.09.415 4.468.4 3.392 2.19-1.184 2.06-3.694 2.578-5.788 3.236-2.901.626-5.894.31-8.84.413l-1.246.018zm-16.27-.727c-.139-.126-.076.095 0 0zm-.943-.122c-.103-.205-.134.307 0 0zm.146-.05c-.141.125-.125.111 0 0zm1.319.012c-.051-.23-.186.228 0 0zm-1.172-.005c-.1-.124-.06.108 0 0zm-1.546-.045c-.088-.086-.019.1 0 0zm3.26-.01c-.206-.124-.143.168 0 0zm-1.774-.067c-.109-.274-.195.279 0 0zm.105 0c.013-.228-.138.271 0 0zm.719.021c.002-.154-.093.183 0 0zm.772 0c.002-.154-.093.183 0 0zm.465.013c-.209-.135-.097.096 0 0zm-2.272-.055c-.081-.17-.081.17 0 0zm2.76.014c-.088-.086-.019.1 0 0zm-.456-.042c-.088-.086-.019.1 0 0zm-.936-.082c-.142-.109-.093.17 0 0zm.304-.045c-.091.043.101.092 0 0zm.573-.098c-.048-.158-.074.168 0 0zm-3.836-.154c-.088-.086-.019.1 0 0zm4.187-.227c-.167-.277-.289.272 0 0zm-1.76-.034c.03-.219-.223.169 0 0zm.427-.005c-.081-.17-.081.17 0 0zm1.544-.072c-.244-.345-.162.291 0 0zm.058.086c-.088-.086-.019.1 0 0zm-4.777-.058c.828.078-.178-.329 0 0zm4.245-.082c.002-.154-.093.183 0 0zm.146.014c-.088-.086-.019.1 0 0zm-5.79-.084c-.092.043.101.092 0 0zm.538-.08c-.185-.021-.118.236 0 0zm1.464.083c-.1-.124-.06.108 0 0zm1.199-.082c.409-.669-.621.443 0 0zm2.012.014c-.542-.142.189.194 0 0zm.311.01c.009-.238-.293.237 0 0zm-3.732-.025c-.1-.124-.06.108 0 0zm.173-.003c-.088-.086-.019.1 0 0zm-.392-.099c-.164-.236-.138.297 0 0zm.789.042c-.104-.253-.093.163 0 0zm-1.23-.06c-.048-.224-.14.234 0 0zm.634.018c.019-.167-.238.232 0 0zm.386 0c.019-.167-.238.232 0 0zm-.222-.028c-.088-.086-.019.1 0 0zm1.345-.014c-.092-.177-.109.185 0 0zm-1.871-.112c-.091.043.101.092 0 0zm3.93.042c-.088-.086-.019.1 0 0zm-3.433-.094c-.139-.87-1.033.359 0 0zm-.486-.088c.074-.168.048.158 0 0zm1.427.098c-.088-.086-.019.1 0 0zm.211-.042c-.088-.086-.019.1 0 0zm-.76-.119c.027-.276-.223.318 0 0zm.333.021c.002-.154-.093.183 0 0zm-.105-.042c-.092-.177-.109.185 0 0zm1.105-.042c-.013-.173-.221.283 0 0zm-2.394-.076c-.148-.264-.145.22 0 0zm.991-.06c-.2-.014.014.235 0 0zm-1.275.066c-.088-.086-.019.1 0 0zm1.932-.042c-.171-.161-.085.27 0 0zm-.745-.056c-.048-.158-.074.168 0 0zm-.729-.025c-.1-.124-.06.108 0 0zm3.858-.087c-.088-.086-.019.1 0 0zm-3.804-.042c-.139-.126-.076.095 0 0zm3.237-.014c-.048-.158-.074.168 0 0zm.93 0c-.109-.185-.092.177 0 0zm-2.29-.025c-.1-.124-.06.108 0 0zm.589-.015c-.169-.123-.101.172 0 0zm1.303.012c-.088-.086-.019.1 0 0zm1.476.003c-.1-.124-.06.108 0 0zm-1.581-.045c-.088-.086-.019.1 0 0zm1.411-.062c.392.005-.359-.071 0 0zm.209-.418c.239-.155-.699.173 0 0zm-.196-.108c-.139-.126-.076.095 0 0zm.506 0c-.088-.086-.019.1 0 0zm-2.279-.124c-.1-.124-.06.108 0 0zm-.204-.311c-.402-.246-.163.365 0 0zm.344.109c.391-.278-.666.186 0 0zm-.219-.025c.074-.168.048.158 0 0zm1.55.056c-.088-.086-.019.1 0 0zm-.866-.056c-.081-.17-.081.17 0 0zm.145.005c-.019-.277-.032-.472 0 0zm.124-.033c-.091.043.101.092 0 0zm.371 0c-.139-.126-.076.095 0 0zm.254-.014c.002-.154-.093.183 0 0zm-.556-1.458c-.088-.086-.019.1 0 0zm.246 0c-.088-.086-.019.1 0 0zm.696-.014c-.048-.158-.074.168 0 0zm.561-.042c-.048-.158-.074.168 0 0zm1.731-.519c-.13-.366-.206.411 0 0zm7.305.057c-.074-.168-.048.158 0 0zm-7.626-.028c-.088-.086-.019.1 0 0zm.772 0c-.088-.086-.019.1 0 0zm7.135-.014c-.048-.158-.074.168 0 0zm.518-.008c-.066-.268-.106.191 0 0zm-7.238-.034c-.048-.158-.074.168 0 0zm7.405-.034c-.12.092-.085.065 0 0zm.17.013c-.107-.247-.085.239 0 0zm11.239.035c-.088-.086-.019.1 0 0zm-15.72-.084c-.091.043.101.092 0 0zm2.421 0c-.091.043.101.092 0 0zm.316.042c-.088-.086-.019.1 0 0zm-7.404-.337c-.088-.086-.019.1 0 0zm14.328-.432c-.087-.217-.18.186 0 0zm.123-.045c-.1-.192-.061.171 0 0zM7.447 25.709c.33-.137.115.094 0 0zm-.185-.118c.204-.234.361.194 0 0zm.37-.05c.321-.208.617.27 0 0zm-4.429-.124c.088-.086.019.1 0 0zm-1.178-.086c.846-.453.923.209 0 0zm-.541-.124c.088-.086.019.1 0 0zm.298-.001c.117-.111.05.098 0 0zm1.25-.186c.143-.168.206.124 0 0zm.125-.122c.012-.338.275.237 0 0zm.667-.042c.23-.218-.009.153 0 0zm2.456 0c.074-.168.048.158 0 0zm-1.702-.042c.093-.183-.002.154 0 0zm1.158 0c.158-.205.158.205 0 0zm-.673-.07c.088-.086.019.1 0 0zm-2.404-.127c.117-.111.05.098 0 0zm-2.555-.392c.081-.17.081.17 0 0zm-.105-.042c.074-.168.048.158 0 0zm1.263-.311c.136-.177.141.106 0 0zm.561-.068c.109-.185.092.177 0 0zm.169-.009c.164-.185.104.122 0 0zm-.625-.285c.074-.168.048.158 0 0zm.169-.113c.117-.111.05.098 0 0zm2.463-.24c.075-.161.12.09 0 0zm.292-.011c.088-.086.019.1 0 0zm1.111-.056c-.005-.169.15.217 0 0zm1.246 0c.1-.192.061.171 0 0zm-3.184-.68c-.28-.152 1.083.14 0 0zm.465.001c.124-.326.479.312 0 0zm.428.003c.039-.272.158.156 0 0zm-.1-.068c.088-.086.019.1 0 0zm-.222-.172c.506-.412.823.099 0 0zm-.105-.069c.075-.161.12.09 0 0zm-.058-.348c.088-.086.019.1 0 0zm.473-.043c.117-.111.05.098 0 0zm-.765-.182c.037-.112.036.113 0 0zm.328-.028c.088-.086.019.1 0 0zm-1.871-.062c.677-.247.466.201 0 0zm.836-.065c.117-.111.05.098 0 0zm-.087-.126c.088-.086.019.1 0 0zm.357-.014c.093-.183-.002.154 0 0zm.649-.084c.037-.112.036.113 0 0zm-.263-.084c.081-.17.081.17 0 0zm1.981-.203c.192-.305-.08.249 0 0zm.159-.049c.074-.168.048.158 0 0zm.713-.071c.117-.111.05.098 0 0zm.2-.182c.074-.168.048.158 0 0zm.17.014c.088-.086.019.1 0 0zm.304-.032c.204-.254.142.017 0 0zm.158-.024c.1-.192.061.171 0 0zm.254-.005c.185-.19-.045.148 0 0zm.255-.037c.123-.22.134.151 0 0zm.211 0c.036-.113.037.112 0 0zm.123-.042c.1-.192.061.171 0 0zm.289.012c.142-.31.164.138 0 0zm.184-.007c-.02-.333.194.044 0 0zm.202-.012c.303-.262.246.182 0 0zm-1.29-.119c.074-.168.048.158 0 0zm.117.014c.088-.086.019.1 0 0zm-.702-.042c.088-.086.019.1 0 0zm.392-.014c.074-.168.048.158 0 0zm-2.035-.042c.1-.192.061.171 0 0zm.509-.042c.163-.236.206.17 0 0zm.282-.017c.336-.285.16.248 0 0zm.677-.263c.088-.086.019.1 0 0zm.281 0c.088-.086.019.1 0 0zm.105 0c.088-.086.019.1 0 0zm1.21-.085c.117-.111.05.098 0 0zm15.06-.538c-.873-.144.488-.054 0 0zm-1.061-.094c.248-.134.103.095 0 0zm.491.002c.139-.126.076.095 0 0zm.161 0c.088-.086.019.1 0 0zm-4.468-2.227c-3.23-.263-6.573-.13-9.664-1.207-1.476.067-2.735-1.258-4.131-.38-.909.31-.636-.074-.28-.234-1.575-.237 3.139-.306.69-.577-.818-.015-3.122.152-2.929-.203.617-.478 2.281.263.779-.596-1.081-.216-1.257-1.749.043-1.247.655.361 1.695-.296.59-.597-.222-2.381 2.974-1.415 4.378-1.217 1.456.058 2.889-.197 4.276-.375 2.028.408 4.097-.001 6.079-.357 1.496-.262 3.26-.411 4.759.03.863.961 2.788-.431 4.147.177 1.714.172 3.447.185 5.126.255 1.444-.147 3.576-.744 4.318.909.075 1.011 2.332 1.562.853 2.655-1.406.966-2.317 2.773-4.219 2.44-2.373.38-4.756.677-7.165.574l-7.651-.05zM4.479 15.447c-.088-.086-.019.1 0 0zm.035-.126c-.088-.086-.019.1 0 0zm2.947-.084c-.088-.086-.019.1 0 0zm-.667-.126c-.088-.086-.019.1 0 0zm.281 0c-.088-.086-.019.1 0 0zm-1.858-.039c-.1-.124-.06.108 0 0zm-.289-.059c.002-.154-.093.183 0 0zm.743-.028c-.092.043.101.092 0 0zm.135-.056c-.092-.177-.109.185 0 0zm-.175-.042c.002-.154-.093.183 0 0zm27.411-3.5c-.091.067.113.134 0 0zm-20.278-.422c.795.229 2.79-.292.845-.181-.479-.036-2.301.029-.845.181zm.744-.033c.036-.113.037.112 0 0zm-1.006-.07c.088-.086.019.1 0 0zm.269.178c-.039-.163-.118.096 0 0zm11.975-.009c-.169-.143-.092.1 0 0zm-13.293-.052c-.091-.263-.195.148 0 0zm.179-.044c-.16-.199.028.224 0 0zm2.671.053c-.088-.086-.019.1 0 0zm.784-.103c-.159-.076.013.206 0 0zm.351.047c-.081-.17-.081.17 0 0zm1.447.014c-.139-.126-.076.095 0 0zm.518-.061c-.128-.2-.07.36 0 0zm.105.026c.013-.228-.138.271 0 0zm.484.014c-.132-.325-.125.163 0 0zm.394 0c-.389-.34-.146.186 0 0zm.234-.021c-.091.043.101.092 0 0zm-3.427-.056c-.14-.712-.235.241 0 0zm2.073.03c-.1-.136-.051.178 0 0zm.541.012c-.1-.192-.061.171 0 0zm.719 0c-.048-.158-.074.168 0 0zm.339.014c-.088-.086-.019.1 0 0zm-8.893-.109c.38-.268-.325.002 0 0zm4.928.025c-.091.043.101.092 0 0zm21.229-.067c-.002.152-.001.107 0 0zm-25.272-.021c1.095-.345-.644-.069 0 0zm-.728.004c-.091.043.101.092 0 0zm5.31.054c-.093-.171-.142.109 0 0zm6.236-.093c-.1-.124-.06.108 0 0zm14.115-.064c-.159-.076.013.206 0 0zm-24.492-.04c-.132-.158-.024.233 0 0zm3.948.045c-.096-.202-.122.137 0 0zm.175 0c-.096-.202-.122.137 0 0zm5.983 0c-.074-.168-.048.158 0 0zm.129-.028c-.091.043.101.092 0 0zm10.188.009c-.041-.388-.168.288 0 0zm-16.679-.052c-.091.043.101.092 0 0zm8.356.025c-.105-.192-.105.192 0 0zm-12.029-.081c-.074-.168-.048.158 0 0zm8.44-.002c.484-.183-.719-.006 0 0zm.497-.021c.019-.364-.551.407 0 0zm.493.04c-.1-.124-.06.108 0 0zm3.133-.1c-.266-.03.13.238 0 0zm-6.352.068c-.014-.244-.195.073 0 0zm16.435-.134c-.088-.145-.017.247 0 0zm-8.189-.019c-.109-.185-.092.177 0 0zm-9.451-.028c-.088-.086-.019.1 0 0zm1.38-.014c-.081-.17-.081.17 0 0zm-.767-.07c.018-.199-.246.344 0 0zm9.871-.018c-.18-.093.03.21 0 0zm8.385.039c-.134-.177-.106.163 0 0zm-10.835-.15c-.208.026.173.192 0 0zm-6.197-.011c-.081-.17-.081.17 0 0zm.76-.028c-.091.043.101.092 0 0zm.843-.022c-.091.067.113.134 0 0zm-.843-.147c-.091.043.101.092 0 0zm3.754 0c-.091.043.101.092 0 0zm-1.895-.042c-.091.043.101.092 0 0zm.398.029c-.142-.109-.093.17 0 0zm.175-.001c-.048-.158-.074.168 0 0zM1.29 15.828c0-.62 1.206.152 0 0zm.115-.101c-.048-.158-.074.168 0 0zm1.693-.233c.626-.24.478.029 0 0zm1.965-.091c.375-.143.122.095 0 0zm1.5.014c.093-.171.142.109 0 0zm-1.006-.054c.088-.086.019.1 0 0zm.636-.01c-.618-.066-.313-.222.059-.03zm-1.295-.043c-.034-.208.115.129 0 0zm.113.01c.221-.278.486.196 0 0zm-1.769-.041c.088-.086.019.1 0 0zm2.316-.019c.305-.171-.077.168 0 0zm-3.109-.107c.139-.126.076.095 0 0zm.316 0c.139-.126.076.095 0 0zm.178-.001c.117-.111.05.098 0 0zm.138.001c.139-.126.077.095 0 0zm.188-.011c.053-.401.275.114 0 0zm.292-.046c.058-.297.092.309 0 0zm2.301 0c.092-.177.109.185 0 0zm-3.179-.049c.042-.102.077.222 0 0zm.11.009c.119-.158.107.175 0 0zm.192-.001c.142-.109.093.171 0 0zm-.675-.162c.31-.506.835.442 0 0zm1.265.047c.117-.111.05.098 0 0zm6.623-4.341c.069-.318.172.167 0 0zm-.639-.108c.161-.226.361.252 0 0zm14.552-.09c.089-.082-.04.204 0 0zm-.705-.017c.077-.504.165.183 0 0zm-.105-.063c.004-.177.003-.137 0 0zm-17.097-.067c-1.087-.546.236-1.129.48-.387-.282-.563 1.053.548-.191.35zm.008-.249c-.081-.17-.081.17 0 0zm.105-.164c-.159-.462-.156.195 0 0zm-.175-.057c-.096-.426-.184.163 0 0zm-.282-.305c-.162.051.047.207 0 0zm17.3.778c.12-.189.12.189 0 0zm1.009-.003c-.635-.497.314-.09 0 0zm8.23-.01c.325-.212.602.242 0 0zm-3.8-.029c.081-.17.081.17 0 0zm.561-.042c.286-.344.123.219 0 0zm.228 0c.081-.17.081.17 0 0zm.386-.042c.272-.223.272.223 0 0zm.474 0c.324-.187.57.133 0 0zm.719 0c.176-.214.232.244 0 0zm.556.014c.088-.086.019.1 0 0zm.12 0c.139-.126.076.095 0 0zm-7.43-.052c.014-.222.175.015 0 0zm5.888.009c.117-.111.05.098 0 0zm.666-.022c.199-.166.015.217 0 0zm-7.034-.025c-.078-.235.229.003 0 0zm-.538-.038c-.046-.208.181-.02 0 0zm-.106-.072c.083-.256.138.205 0 0zm.475.02c-.024-.219.133.137 0 0zm-.124-.045c.081-.17.081.17 0 0zm-4.684-.165c-.273-.248.567.184 0 0zM2.475 7.44c.1-.192.061.171 0 0zm.461-.021c.075-.235.036.222 0 0zm4.724-.008c.175-.127.086.097 0 0zm.213.001c.088-.086.019.1 0 0zm.316 0c.088-.086.019.1 0 0zM3.82 7.37c.117-.111.05.098 0 0zm.516-.013c.117-.094.072.159 0 0zM.984 7.314c.037-.112.036.113 0 0zm4.421-.002c.118-.096.039.163 0 0zm3.562-.04c.074-.168.048.158 0 0zM3.405 7.23c.074-.168.048.158 0 0zm2.491.026c.188-.159.203.113 0 0zM2.68 7.202c.088-.086.019.1 0 0zm.164-.014c.19-.22.166.207 0 0zm.754 0c.048-.158.074.168 0 0zm.523-.007c.088-.18.168.188 0 0zm.251.01c.157-.058.097-.036 0 0zm2.15.01c.117-.111.05.098 0 0zM3.873 7.16c.088-.086.019.1 0 0zm1.032 0c.139-.126.077.095 0 0zm1.961-.023c.15-.173.117.179 0 0zm.2.023c.088-.086.019.1 0 0zm.094-.014c.123-.22.134.151 0 0zm2.562.006c.202-.145.249.181 0 0zm.328.008c.088-.086.019.1 0 0zm.231-.031c.306-.32.025.297 0 0zM.703 7.104c.036-.113.037.112 0 0zm4.518.014c.139-.126.077.095 0 0zm.325-.016c-.566-.237.837-.038 0 0zm.856-.062c.056-.586.419.239 0 0zm-.247.035c.088-.086.019.1 0 0zm.48-.004c.45-.338.226.173 0 0zm1.035-.039c.485-.426-.106.282 0 0zm2.807.029c.048-.158.074.168 0 0zm-3.456-.039c.762-.188.59.086 0 0zm-4.211-.087c.037-.112.036.113 0 0zm3.097.013c.175-.127.086.097 0 0zm5.605-.013c.037-.112.036.113 0 0zm10.614 0c.092-.177.109.185 0 0zm2.231.002c-2.971-.245-5.967.091-8.927-.209-1.308.224-3.017-.39-4.51-.208-.273-.519-.265-1.139-1.249-.689 1.244.17-.524.358-.765.793-.694.043.739-1.164-.532-.742.02.385-2.642-.055-.902-.128.899-.087 1.772-.605.287-.35-1.861.147-3.627-.746-5.42-.875-.714-.382.705-.51-.387-.528.036.083 2.805-.918.969-1.142-.522-.055-2.502-.782-1.098-.961-1.627-.047.399-1.217 1.14-.749 2.986-.073 6.017.154 8.945-.577 3.219-.26 6.455.002 9.675-.274 3.382-.076 6.79-.547 10.148.082 1.565.25 3.282.37 4.642 1.212.898.936 2.503 3.246.372 3.685-3.778 1.431-7.869 1.362-11.835 1.681l-.277-.006-.276-.015zM8.738 6.623c-.008-.17-.114.041 0 0zm.386-.066c-.074-.168-.048.158 0 0zm1.778-.134c-.091.067.113.134 0 0zm1.089.025c-.1-.124-.06.108 0 0zm-.324-.143c.002-.154-.093.183 0 0zm.263-.001c-.219-.232-.008.169 0 0zm.199.015c-.088-.086-.019.1 0 0zm-2.837-.162c-.079.149-.05.095 0 0zm1.937.041c-.125-.149.009.216 0 0zm.159-.01c-.12.092-.085.065 0 0zm.253-.027c-.556-.629.037.263 0 0zm-.552.001c-.008-.17-.114.041 0 0zm-.397-.116c-.091.067.113.134 0 0zm-1.673-.013c-.075-.235-.036.222 0 0zm1.895.045c-.039-.163-.118.096 0 0zm-1.421-.066c-.048-.158-.074.168 0 0zm.033-.194c.06-.42-.153.397 0 0zm-.296.033c-.119-.166-.119.166 0 0zm1.673-.035c-.091.043.101.092 0 0zm-1.755-.084c-.088-.086-.019.1 0 0zm1.404-.168c-.088-.086-.019.1 0 0zM2.747 4.09c-.139-.126-.076.095 0 0zm.868-1.395c-.238-.108-.238.149 0 0zm-.351-.023c-.135-.176-.141.106 0 0zm-.448-.832c-.241-.142-.125.204 0 0zM16.152.47c-.345 0-.437 0 0 0zM6.154 6.908c.088-.086.019.1 0 0zm.744-.011c.753-.418.739.084 0 0zm.975.011c.088-.086.019.1 0 0zm.105 0c.088-.086.019.1 0 0zm.164-.014c.483-.218-.119.173 0 0zm.541-.039c.107-.216.015.295 0 0zm3.207.052c.117-.111.05.098 0 0zm.194.001c.088-.086.019.1 0 0zM8.54 6.866c.088-.086.019.1 0 0zM4.3 6.81c.081-.17.081.17 0 0zm.722-.025c.089-.082-.04.204 0 0zm.278.025c-.453-.209.775-.009 0 0zm4.07 0c.074-.168.048.158 0 0zm.468.014c.088-.086.019.1 0 0zm.211 0c.088-.086.019.1 0 0zm.164-.014c.074-.168.048.158 0 0zm2.503.014c.088-.086.019.1 0 0zm.18-.011c.259-.122.239.17 0 0zm-8.393-.032c.175-.127.086.097 0 0zm4.459.001c.088-.086.019.1 0 0zm.199-.023c.136-.162.138.187 0 0zm4.014.002c.042-.102.077.222 0 0zm-10.506-.04c.236-.221.335.219 0 0zm.959.018c.088-.086.019.1 0 0zm2.386 0c.088-.086.019.1 0 0zm.795-.014c.037-.112.036.113 0 0zm.973-.041c.12-.505.11.32 0 0zm2.256.02c-1.718-.031.762-.587 0 0zm3.702.021c.074-.168.048.158 0 0zM3.11 6.685c.014-.242.015-.259 0 0zm2.603.013c.139-.126.076.095 0 0zm.658-.014c.093-.183-.002.154 0 0zm.539-.032c.011-.185.251.339 0 0zm2.543.046c.088-.086.019.1 0 0zm.164.011c.031-.179.161.026 0 0zm19.905-.012c.175-.127.086.097 0 0zM3.484 6.653c.375-.143.122.095 0 0zm.465-.014c.783-.239-.187.195 0 0zm4.112.015c-.096-.234.208-.029 0 0zm1.748-.013c.074-.168.048.158 0 0zm2.871.014c.088-.086.019.1 0 0zm17.772-.001c.117-.111.05.098 0 0zM4.309 6.614c.139-.126.077.095 0 0zm.169-.018c1.144-.385 1.18.024.11.026l-.09-.021zm2.308.018c.088-.086.019.1 0 0zm1.16-.02c.034-.102.069.236 0 0zm.266-.015c-.018-.285.229.3 0 0zm2.154.012c.237-.17.59.08 0 0zm20.201.036c.663-.221.166.079 0 0zM2.118 6.571c.088-.086.019.1 0 0zm2.087-.043c.117-.111.05.098 0 0zm-2.309-.055c.037-.112.036.113 0 0zm.211-.042c.036-.113.037.112 0 0zm.606-.007c.739-.242.452.197 0 0zm.622-.014c.103-.258.103.239 0 0zm.14.019c.292-.205.482.131 0 0zm3.36.018c-.758-.285.74-.173.01-.002zm1.096-.018c.118-.096.039.163 0 0zm.105-.003c.188-.159.203.113 0 0zm2.678.02c.088-.086.019.1 0 0zm-6.047-.056c.037-.112.036.113 0 0zm5.684-.02c.118-.366.206.268 0 0zm-5.27-.009c.117-.111.05.098 0 0zm2.124.001c.088-.086.019.1 0 0zm.62-.014c.036-.113.037.112 0 0zm.614 0c.093-.183-.002.154 0 0zm-2.129-.029c.117-.111.05.098 0 0zm1.621-.013c.037-.112.036.113 0 0zm1.544-.045c.226-.196.246.112 0 0zm.441.007c.083-.405.331.137 0 0zM3.072 6.22c-.688-.114.855.081 0 0zm.447.001c.387-.35.593.288 0 0zm3.716.001c.053-.179.097.14 0 0zm2.521-.002c.036-.113.037.112 0 0zm-2.351-.042c.12-.189.12.189 0 0zm2.807-.045c.118-.096.039.163 0 0zm-5.937-.026c.117-.111.05.098 0 0zm.175 0c.117-.111.05.098 0 0zm.159.001c.088-.086.019.1 0 0zm-1.205-.056c.037-.112.036.113 0 0zm.368-.042c.061-.171.1.192 0 0zm1.431.013c.175-.127.086.097 0 0zm.258-.004c.284-.344.195.137 0 0zm.762.005c.088-.086.019.1 0 0zm.155 0c-.019-.457.236.15 0 0zm-3.067-.084c.088-.086.019.1 0 0zm2.491 0c.088-.086.019.1 0 0zm2.725-.014c.037-.112.036.113 0 0zm-4.176-.084c.037-.112.036.113 0 0zm5.439-.004c.141-.168.17.115 0 0zm.526-.039c.074-.315.108.224 0 0zm-6.199.015c.088-.086.019.1 0 0zm.122-.001c.117-.111.05.098 0 0zm.463-.013c.074-.168.048.158 0 0zm5.755-.021c.108-.248.108.248 0 0zm-6.676-.026c.185-.19-.045.148 0 0zm1.115.005c.061-.171.1.192 0 0zm.911-.002c.101-.172.168.123 0 0zm-1.841-.082c.037-.112.036.113 0 0zm6.334-.042c.1-.192.061.171 0 0zm25.855-.112c.088-.086.019.1 0 0zM5.978 5.476c.088-.086.019.1 0 0zm.094.011c.093-.171.142.109 0 0zm2.553-.053c.139-.126.076.095 0 0zm-4.84-.085c.117-.111.05.098 0 0zm.386-.042c.117-.111.05.098 0 0zm.281 0c.117-.111.05.098 0 0zm-2.265-.211c.175-.127.086.097 0 0zm.545-.084c.117-.111.05.098 0 0zm.314-.041c.139-.126.076.095 0 0zm.056-.168c.088-.086.019.1 0 0zm.146-.014c.356-.261-.005.188 0 0zm.24-.028c.088-.086.019.1 0 0zm-1.193-.042c.088-.086.019.1 0 0zM.82 4.635c.088-.086.019.1 0 0zm.508-.085c.117-.111.05.098 0 0zm.124.001c.088-.086.019.1 0 0zm-.617-.084c.139-.126.077.095 0 0zm.351-.042c.139-.126.077.095 0 0zm-.332-.148c-.185-.276.21-.013 0 0zm.464-.034c.13-.212.149.16 0 0zm.696-.112c.088-.086.019.1 0 0z"/>
                </svg>
          
          <h1>Stephen Weldon</h1>
          <button className={styles.Hidebutton} id='buttonLeft'onClick={() => {setNumber((prev) => prev - 1); setPrevNumber((prev) => prev - 1);}}>L</button>
        <button className={styles.Hidebutton} id='buttonRight' onClick={() => {setNumber((prev) => prev + 1); setPrevNumber((prev) => prev + 1);}}>R</button>
           <svg id="toggle" onClick={()=> {ThemeToggleAnimation(); setTheme( theme == styles.light ? styles.dark : styles.light)}}   className={`${styles.ThemeIcon} ${styles.ToggleAnimation}`} version="1.1" viewBox="0 0 699.23 699.1">
           <g transform="translate(-100.58 -100.57)">
            <path d="m428 799.4c-36.415-3.2442-63.287-8.6946-92.5-18.762-77.075-26.56-143.28-80.375-185.6-150.87-26.293-43.793-41.563-89.287-48.086-143.27-1.635-13.529-1.6349-59.235 
            2.6e-4 -72.5 7.9828-64.759 28.14-117.97 63.387-167.35 16.812-23.549 43.583-51.813 66.302-69.998 51.898-41.543 113.72-66.969 182-74.856 14.234-1.644 58.766-1.644 73 0 83.08 
            9.5959 155.44 44.608 212.57 102.86 31.281 31.892 54.065 65.204 70.963 103.75 31.632 72.159 38.285 152.63 18.915 228.81-20.081 78.975-69.783 150.98-136.95 198.4-48.363 34.145-99.828 
            53.919-161.22 61.944-10.838 1.4166-53.466 2.6591-62.775 1.8298zm22-349.55v-320.15l-13.83 0.66019c-78.636 3.7538-150.66 34.36-206.65 87.811-48.187 46.007-80.381 104.35-93.441 169.34-4.331 
            21.552-5.4815 34.809-5.4675 63 0.014 28.066 1.0585 39.88 5.4821 62 24.259 121.31 116.12 217.61 236.53 247.98 21.341 5.3822 48.236 9.0581 68.618 9.3784l8.75 0.13752z"/>
           </g>
          </svg> 
          
          <div className={styles.line}></div>
        
        </div>
        </section>

      <figure className={styles.ImagesSection} > 
        <div className={styles.ArrowContainer}>
        <label  htmlFor="buttonRight">
            <div className={`${styles.arrowContainerRight} ${styles.right}`}><div ref={Rightref} className={styles.arrow}/></div>
            </label>
            <label  htmlFor="buttonLeft">
            <div className={`${styles.arrowContainerLeft} ${styles.left}`}><div  ref={Leftref}  className={styles.arrow1}/></div>
            </label>
            </div>
      
        <div className={styles.ImageContainer}  ref={IMGref} id="scroll" >
          
        <div className={styles.startBlock}>.</div>

          {art && art.map((art,index) => {
            
            let num = index;
            let textID = num.toString();
            let ID = 'ID_' + textID
            
              
              return (
              <>
              
           
              <Image onClick={()=> {setTimeout(() => {
                if ( boolTog == true) {
                  setBoolTog(false)
                } else if  ( boolTog == false )
                {setBoolTog(true)}
              }, 500);
                
                setModalID(ID); setImageToggle(boolTog => !boolTog); setSelectedTitle(art.data().title); setSelectedImg(art.data().url); setSelectedDate(art.data().date); ; setSelectedPrice(art.data().price); setSelectedSize(art.data().dimensions); setSelectedMedium(art.data().medium) }} className={'lazy-images'} src='https://firebasestorage.googleapis.com/v0/b/nextjs-image-gallery.appspot.com/o/loader-min%20(3).gif?alt=media&token=5be9fe55-1333-493c-b8c1-c855c3b4ab10' data-src={art.data().url} id={ID} alt="Gallery Image" key={art.id} width={640} height={360} priority={true} unoptimized />
                <div className={styles.HeightBlock}></div>
              </>
              )
              
            
            })}
            
  
            <div className={styles.endBlock}>.</div>

          
          </div>  
      </figure>

    </section>
    

    <Suspense fallback={<div>Loading...</div>}>
     {menuToggle && <Menu menuToggle={menuToggle} />}
    { selectedImg && <Modal modalID={modalID} imageToggle={imageToggle} selectedImg={selectedImg}  selectedTitle={selectedTitle} selectedDate={selectedDate} selectedMedium={selectedMedium} selectedSize={selectedSize} selectedPrice={selectedPrice} /> }
     </Suspense>
    </div>
  )
}

export default Home
