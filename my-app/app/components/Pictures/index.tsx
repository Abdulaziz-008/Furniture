import styles from './style.module.css';
import livingRoom from '../Img/livingRoomImg.png';
import bedroom from '../Img/bedroomImg.png';
import office from '../Img/officeImg.png';
import diningRoom from '../Img/diningRoomImg.png';
import Image from 'next/image';



export default function Pictures(){


    return(
        <>
            <div className={styles.picWrapper}>

                <div className={styles.picTitle}>
                    <h1>Shop by Room</h1>
                </div>
                <div className={styles.cardsBackground}>
                    <div className={styles.cardsWrapper}>

                    <div className={styles.card1}>
                      <Image
                      src={livingRoom}
                      alt="livingRoom"
                    />
                    <h1>Living Room</h1>
                    </div>



                    <div className={styles.card2}>
                      <Image
                      src={bedroom}
                      alt="bedroom"
                    />
                    <h1>Bedroom</h1>
                    </div>




                    <div className={styles.card3}>
                      <Image
                      src={office}
                      alt="office"
                    />
                    <h1>Office Room</h1>
                    </div>




                    <div className={styles.card4}>
                      <Image
                      src={diningRoom}
                      alt="diningRoom"
                    />
                    <h1>Dining Room</h1>
                    </div>
                    
                </div>
                </div>
                


            </div>
        </>
    );
}