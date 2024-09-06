import styles from '../page.module.scss'

interface BookCoversProps{
    images: string[]
}

const BookCovers:React.FC<BookCoversProps> = ({images}) => {

    return(
        <div className={styles.scrollHorizontalContainer}>
            {
                images &&
                images.map( (img:string, index:number) => 
                <img className={styles.scrollImage} src={img} alt="tapa de libro" key={index}/>
                )
            }
            {/* <img src={arrow.src} alt="flecha de desplazamiento" /> */}
        </div>
    )

}

export default BookCovers;