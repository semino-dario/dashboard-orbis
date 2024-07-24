"use client"
import {  useEffect, useState } from "react";
import { FetchImages } from "../api/ConnectApi";
import styles from '../page.module.css'
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import { useDispatch} from "react-redux";
import { writeImageUrl } from "../store/slice";

const ImageLoader = () => {
    const [imageURL, setImageURL] = useState("")
    const [showGallery, setShowGallery] = useState(false)
    const [images, setImages] = useState<any>([])
    const dispatch = useDispatch()
    const [imageConfirmation, setImageConfirmation] = useState(false)

        useEffect( ()=> {
            const getData = async () => {
                const data = await FetchImages()
                if (data)
                    setImages(data)
            }
            getData()
        }, [])
    
        const handleUploadSuccess = (result:any) => {
            const newImage = result.info.secure_url
            setImageURL(newImage)
        };
      
        const confirmImage = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault(), 
            dispatch(writeImageUrl(imageURL))
            setImageConfirmation(true)
            setShowGallery(false)
        }

        const removeImage = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault(), 
            setImageURL("")
            setImageConfirmation(false)
        }

    return(
            <div className={styles.imageLoader}>
                { imageURL &&
                <div className={styles.containerImage}>
                    <button className={`${styles.changeImageButton} ${styles.imageButton}`} onClick={(e)=> removeImage(e)}>Remove</button> 
                    <CldImage
                        width="850"
                        height="500"
                        crop="fill"
                        src={imageURL}
                        sizes="100vw"
                        alt="Description of my image"
                        style={!imageConfirmation ? {opacity: "0.3"} : {opacity: "1"}}
                        />
                        { !imageConfirmation &&
                         <button className={`${styles.confirmImage} ${styles.imageButton}`} onClick={e => confirmImage(e)}>confirm image</button>}
                </div>}
                {
                    !imageConfirmation &&
                <div className={styles.containerInputImage}>
                    <CldUploadButton 
                        className={`${styles.inputImage} ${styles.imageButton}`}
                        uploadPreset="hom8bohk"
                        onSuccess={handleUploadSuccess}
                        />
                    <button onClick={(e)=>{e.preventDefault(), setShowGallery      (!showGallery)}} className={`${styles.inputImage} ${styles.imageButton}`}>{!showGallery ? "Search in Gallery" : "Close Gallery"}</button>
                
                   
                </div>}
                    {
                        showGallery ?
                        <div className={styles.gridMedia} >
                                { images &&
                                    images.map( (img:string, index:number) => (   
                                        <img onClick={()=> {setImageURL(img), setShowGallery(false)}} key={index}  className={styles.imageGrid}  src={img} />
                                    )
                                    )
                                }
                            </div>
                        :
                        <></>
                    }
            </div>
    )
}


export default ImageLoader
