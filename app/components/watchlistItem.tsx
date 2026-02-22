import styles from './watchlistItem.module.css'

export default function WatchlistItem(){
    return(
        <>
        
            <div className= {styles.container}>
                <p className= {styles.tag}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.99935 3.3335C2.99935 3.3335 2.21733 3.46939 2.09082 3.61C1.9643 3.7506 1.92726 3.95606 1.85316 4.36699C1.0603 8.76423 2.79328 12.8295 6.92621 14.4119C7.37027 14.5819 7.5923 14.6669 8.00034 14.6669C8.40837 14.6669 8.63039 14.5819 9.07442 14.4119C10.4143 13.8988 11.5018 13.2952 12.3327 12.3335" stroke="#FF4040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5 2.28024C5.88353 1.79808 6.81917 1.3335 7.9988 1.3335C10.0041 1.3335 11.3057 2.67597 12.8439 3.16521C13.4691 3.36405 13.7817 3.46347 13.9083 3.6037C14.0348 3.74392 14.0719 3.94887 14.146 4.35875C14.5612 6.65482 14.2844 8.86015 13.3333 10.6668" stroke="#FF4040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M1.33398 1.3335L14.6673 14.6668" stroke="#FF4040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Blacklisted

                </p>
                <p className= {styles.detail}>Name: Taiwo Adebayo</p>
                <p className= {styles.detail}>Phone: +234 803 XXX XXXX</p>
                <p className= {styles.detail}>Reason: Dispute with resident Flat 8C. Contact Admin before entry</p>
                <p className= {styles.detail}>Added: Jan 15, 2026</p>
            </div>
        
        </>
    )
}