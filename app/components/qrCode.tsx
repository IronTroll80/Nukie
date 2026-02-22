import styles from './qrCode.module.css'

export default function QrCode(){
    return(
        <>
        
        <div className= {styles.container}>
            <h4 className= {styles.title}>Scan the visitor's generated entry QR code</h4>
            <p className= {styles.subtitle}>This Page will refresh once the request has been verified</p>
            <div className= {styles.qrContainer}>
                <div className= {styles.imageContainer}>

                </div>
            </div>
            <p className= {styles.supportingText}>Please ensure the entire QR code is visible in-frame.</p>
        </div>
        
        </>
    )
}