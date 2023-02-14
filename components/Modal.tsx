import React, { useEffect, useState, useRef, useContext, Suspense} from 'react';
import styles from '../styles/gallery.module.scss'
import Image from 'next/image';
const Menu = React.lazy(() => import('../components/ModalMessage'));


const Modal  = ({imageToggle, selectedImg, selectedTitle, selectedDate, selectedMedium, selectedSize, selectedPrice, modalID} : {imageToggle : any , selectedImg: any, selectedTitle:any, selectedDate: any, selectedMedium :any, selectedSize : any, selectedPrice: any, modalID: any}) => {

    interface ToggleProps {
        toggle: boolean;
      }



    const [IMGsrc, setIMGsrc] = useState()
    const [title, setTitle] = useState()
    const [date, setDate] = useState()
    const [medium, setMedium] = useState()
    const [size, setSize] = useState()
    const [price, setPrice] = useState()
    const [toggle, setToggle] = useState<ToggleProps | boolean>(imageToggle);
    const [isActive, setIsActive] = useState<ToggleProps | boolean>(imageToggle);
    const [ID, setID] = useState()

 useEffect(() => {
    setIMGsrc(selectedImg)
    setTitle(selectedTitle)
    setDate(selectedDate)
    setMedium(selectedMedium)
    setSize(selectedSize)
    setPrice(selectedPrice)
    setToggle(imageToggle)
    setIsActive(true)
    setID(modalID)
  
 }, [imageToggle, modalID, selectedImg , IMGsrc, toggle])

 


 const handleClick : any = (event : any) => {
   // 👇️ toggle isActive state on click
   setIsActive(current=> !current);
 
 };
    
 useEffect(() => {

   if (typeof window !== "undefined") {

 const overlay : any =  document.getElementById('1')

 if (overlay.classList.contains(`${styles.IMGOverlayContainerHIDE}`)) {
setTimeout(() => {
  overlay.style.display = "none";
}, 300);


 } else {

  setTimeout(() => {
    overlay.style.display = "flex";
  }, 300);
  

 }


 }
  
 }, )
 

 const Enlarge : any = (event : any) => {

  window.open!(selectedImg);

 }


 const [menuToggle, setMenuToggle] = useState(false)
 const [menuOpen, setMenuOpen] = useState(false)

 useEffect(()=>{},[menuToggle, menuOpen])

    return (

        <section className={isActive ? styles.IMGOverlayContainer  : styles.IMGOverlayContainerHIDE }  id='1' >
      
        <div className={styles.child}>
        <div className= {styles.overlayCloseBackground} onClick={()=> {handleClick();}}/>
        <Image  src={selectedImg} className={styles.overlay_image_container} 
        data-src={selectedImg} alt="Modal Image" 
         width={304} height={204} priority={true}unoptimized onClick={()=> {handleClick();}}/>
        </div>
       

   <div className={styles.child}>
        
        <div className={styles.IMGInfoOverlay}>
            
          <div className={styles.title}><h1>&quot;{title}&quot;</h1></div>
          <br/>
          <div className={styles.date}>{date}</div>
          <br/>
          <div className={styles.medium}>{medium}</div>
          <br/>
          <div className={styles.size}>{size} </div>
          <br/>
          <div className={styles.price}>{price}</div>
          <div  className={styles.child}>
          <div className={styles.inquire}><button className={styles.InquireButton}onClick={()=> {Enlarge();}}>Enlarge</button></div>
          <div className={styles.inquire}><button className={styles.InquireButton} onClick={()=> {setTimeout(() => {
                if ( menuOpen == true) {
                  setMenuToggle(false)
                } else if  ( menuOpen == false )
                {setMenuToggle(true)}
              }, 500); setMenuToggle(menuOpen => !menuOpen);}} >Inquire</button></div>
          </div>
        </div>

    </div>
    
      
    <Suspense fallback={<div>Loading...</div>}>
    {menuToggle && <Menu menuToggle={menuToggle} />}
    </Suspense>

        </section>

        
      
        
    )
    
}

export default Modal

//<Home imageToggle={imageToggle}>