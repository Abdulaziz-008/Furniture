import styles from './style.module.css';

export default function Footer(){
    return(
        <>
        <div className={styles.footerWrapper}>
            <div className={styles.footerTitle}>
                <h1>“Keeping Furniture in Homes and out of Landfills.“</h1>
            </div>

            <div className={styles.footerText}>
                <p>This isn’t just another rental company - We’re elevating the future of furniture by replacing the commitment of ownership with a culture of sharing in a way that’s curated, convenient, and sustainable.</p>
            </div>
        </div>
        </>
    )
}