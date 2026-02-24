import styles from './style.module.css';
import Image from 'next/image'
import mainPhoto from '../Img/sectionPhoto.png'
export default function Section(){
    return(
        <>
        <div className={styles.sectionWrapper}>

            <div className={styles.section1}>

                <div className={styles.sectionTitle}>
                    <h1>Curated and Convenient</h1>
                </div>

                <div className={styles.sectionComment}>
                    <p>We`ve built our offerings on the principle that everyone deserves high-quality design without the high cost. We offer elevated rental inventory, to transform your space. Reuse and recycle - we make the decision as light as a “feather”</p>
                </div>

                <div className={styles.sectionBtn}>
                    <button>Get Started</button>
                </div>
            </div>


            <div className={styles.section2}>
                {/* <div className={styles.sectionPicture}> */}
                    <Image
                    src={mainPhoto}
                    alt="Main photo"
                    className={styles.image}
                    />
                {/* </div> */}
            </div>
        </div>
        </>
    );
}