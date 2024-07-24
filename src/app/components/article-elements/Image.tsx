import styles from '../../page.module.css'
import prueba from '../../images/your-image.jpg'

interface ImageProps {
    imageContent: string;
    onChange: (value: string) => void;
    onDelete?: (e:any) => void;
    mainImage:boolean
    displayGallery?: React.Dispatch<React.SetStateAction<boolean>>
  }

  const Image: React.FC<ImageProps> = ({ imageContent, onChange, onDelete, mainImage, displayGallery }) => {
    return(
        <div className={`${styles.imageBox} ${mainImage === false && styles.marginArticleElements}`}>
        {(!imageContent && mainImage === true) ?
        <div className={styles.containerInputImage}> 
        <div className={`${styles.inputImage} ${styles.imageButton}`}><p>Upload file</p><input className={styles.file} type="file"/></div>
        <input className={styles.inputImage} placeholder=" Or paste image url here" type="text" value={imageContent} onChange={(e) => onChange(e.target.value)}/>
        </div>
    :
    (!imageContent && mainImage === false) ?
    <div className={styles.containerImage}> 
    <img src={prueba.src} alt="" className={styles.loadedImage} />
    <div className={styles.containerInputImage}> 
        <div className={`${styles.inputImage} ${styles.imageButton}`}>Search image in Media Library</div>
        <div className={`${styles.inputImage} ${styles.imageButton}`}><p>Upload file</p><input className={styles.file} type="file"/></div>
        <input className={styles.inputImage} placeholder=" Or paste image url here" type="text" value={imageContent} onChange={(e) => onChange(e.target.value)}/>
        </div>
    </div>
    :
    <div className={styles.containerImage}>
    <button className={styles.changeImageButton} onClick={()=> {onChange("")}}>Change Image</button>
    <img src={imageContent} alt="" className={styles.loadedImage} />
    </div> } 
       </div>
    )
}

export default Image;