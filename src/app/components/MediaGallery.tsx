"use client"

import styles from '../page.module.css'

interface MediaGalleryProps{
    images: any[]
}

const MediaGallery:React.FC<MediaGalleryProps> = ({images}) => {
    return (
        <div className={styles.gridMedia} >
                { images &&
                    images.map( (img:string, index:number) => (   
                            <img key={index} className={styles.imageGrid} src={img} />
                    )
                    )
                }
            </div>
    )
}

export default MediaGallery