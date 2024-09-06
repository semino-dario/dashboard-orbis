import styles from "./../page.module.scss";
import PrimaryButton from "./buttons/PrimaryButton";
import historia from '../assets/images/historia.png'
import Navbar from "./Navbar";
export default function Ds () {
    return (
        <div className={styles.container} >
        <Navbar/>
        <h1 className={styles.title}>Design Sistem</h1>
        <br />
        <h2 className={styles.title}>Título</h2>
        <br />
        <p className={styles.text}>un texto de ejemplo</p>
        <br />
        <h3 className={styles.articleTitle}>título de artículo</h3>
        <br />
        <p className={styles.articleText}>texto de artículo: Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita minus voluptas similique recusandae pariatur saepe assumenda, quod obcaecati quam aspernatur possimus provident perferendis modi. Dicta harum repudiandae similique est eum.</p>
        <br />
        <PrimaryButton
        primary={true}
        text={'subiscribite a nuestro newsletter!'}
        />
        <br /> 
        <PrimaryButton
        primary={false}
        text={'si sos librería, escribinos!'}
        />
        <br /> 
        <img src={historia.src} alt="" />
        <br />
        </div>
    )
}
