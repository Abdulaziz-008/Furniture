import styles from './style.module.css';

export default function Navigation(){
    return(
        <>
        <div className={styles.navContainer}>
            <div className={styles.navWrapper}>
                <div className={styles.navLeft}>
                    <ul>
                        <li>Furniture</li>
                        <li>Why Feather</li>
                        <li>Feather for Business</li>
                    </ul>
                </div>


                <div className={styles.navRight}>
                    <ul>
                        <li>Check if We Deliver</li>
                        <li>Search</li>
                        <li>Account</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
}