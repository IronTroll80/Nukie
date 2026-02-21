'use client'

import { useState } from 'react'
import styles from './visitor.module.css'
import { FaX } from 'react-icons/fa6'

export default function (){

    const [status, setStatus] = useState('checked')
    const [showDetails, setShowDetails] = useState(false)
    const [offline, setOffline] = useState(true)

    return(

        <>
        
        <div className= {styles.container}>

            <div className= {styles.top}>
                <h4>Taiwo Adebayo</h4>
                
                <p className={
                    status === 'expected'
                    ? styles.expected
                    : status === 'pending'
                    ? styles.denied
                    : styles.checked
                }>
                {status.charAt(0).toUpperCase() + status.slice(1)}
                </p>
            </div>
            <div className= {styles.body}>
                <div className= {styles.bodyItem}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.74935 1.16663H5.24935C3.3189 1.16663 2.91602 1.56951 2.91602 3.49996V12.8333H11.0827V3.49996C11.0827 1.56951 10.6798 1.16663 8.74935 1.16663Z" stroke="#52545B" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M1.75 12.8334L12.25 12.8334" stroke="#52545B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.75 12.8334V11.0834C8.75 10.1182 8.54856 9.91675 7.58333 9.91675H6.41667C5.45144 9.91675 5.25 10.1182 5.25 11.0834V12.8334" stroke="#52545B" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M7.875 3.5H6.125M7.875 5.54167H6.125M7.875 7.58333H6.125" stroke="#52545B" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg> 
                    <p>Flat 12B</p>
                </div>
                <div className= {styles.bodyItem}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.83692 9.03101C3.01164 9.52241 0.847796 10.5258 2.16572 11.7814C2.80951 12.3948 3.52654 12.8334 4.42801 12.8334H9.57199C10.4735 12.8334 11.1905 12.3948 11.8343 11.7814C13.1522 10.5258 10.9884 9.52241 10.1631 9.03101C8.22781 7.87866 5.77219 7.87866 3.83692 9.03101Z" stroke="#52545B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9.625 3.79175C9.625 5.2415 8.44975 6.41675 7 6.41675C5.55025 6.41675 4.375 5.2415 4.375 3.79175C4.375 2.342 5.55025 1.16675 7 1.16675C8.44975 1.16675 9.625 2.342 9.625 3.79175Z" stroke="#52545B" strokeWidth="1.5"/>
                    </svg>
                    <p>Mrs. Johnson</p>
                </div>

            </div>
            <div className= {styles.footing}>
                <p onClick={()=>{setShowDetails(true)}}>See Details</p>
            </div>
        
        </div>
        
        {showDetails && <div className= {styles.overlay}>
            <div className= {styles.visitorDetails}>
                <button className= {styles.close} onClick={()=>{setShowDetails(false)}}>
                    Close <FaX size={10}/>
                </button>

                
                    <div className= {styles.offline}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_92_5620)">
<path d="M4.16602 4.16663C2.62321 5.66658 1.66602 7.75679 1.66602 10.0687C1.66602 14.6331 5.39698 18.3333 9.99935 18.3333C12.2706 18.3333 14.3296 17.4322 15.8327 15.9708" stroke="#FF9040" strokeWidth="1.5"/>
<path d="M12.916 13.3334C12.4016 16.2765 11.3662 18.3334 9.99935 18.3334C8.1584 18.3334 6.66602 14.6024 6.66602 10C6.66602 8.97394 6.7402 7.99115 6.87588 7.08337" stroke="#FF9040" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M1.66602 10H9.99935" stroke="#FF9040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.91204 1.88649C5.54227 2.07314 5.39381 2.52421 5.58046 2.89399C5.76711 3.26377 6.21818 3.41222 6.58796 3.22558L6.25 2.55604L5.91204 1.88649ZM16.774 13.4119C16.5873 13.7817 16.7357 14.2328 17.1054 14.4195C17.4752 14.6062 17.9263 14.4578 18.113 14.088L17.4435 13.75L16.774 13.4119ZM13.3333 9.99996H12.5833C12.5833 10.4142 12.9191 10.75 13.3333 10.75V9.99996ZM6.80247 3.89283C6.65126 4.27845 6.84128 4.71365 7.22691 4.86486C7.61254 5.01608 8.04773 4.82605 8.19894 4.44042L7.50071 4.16663L6.80247 3.89283ZM10 1.66663V2.41663C14.1882 2.41663 17.5833 5.8118 17.5833 9.99996H18.3333H19.0833C19.0833 4.98337 15.0166 0.916626 10 0.916626V1.66663ZM6.25 2.55604L6.58796 3.22558C7.61271 2.70832 8.77121 2.41663 10 2.41663V1.66663V0.916626C8.53111 0.916626 7.14161 1.26586 5.91204 1.88649L6.25 2.55604ZM18.3333 9.99996H17.5833C17.5833 11.2287 17.2914 12.3871 16.774 13.4119L17.4435 13.75L18.113 14.088C18.7338 12.8585 19.0833 11.469 19.0833 9.99996H18.3333ZM10 1.66663V2.41663C10.1876 2.41663 10.4421 2.50857 10.7526 2.83683C11.0645 3.16668 11.38 3.68422 11.6607 4.38595C12.2204 5.78523 12.5833 7.76976 12.5833 9.99996H13.3333H14.0833C14.0833 7.62778 13.7001 5.44565 13.0534 3.82886C12.7309 3.02255 12.3281 2.3197 11.8424 1.80617C11.3553 1.29105 10.7329 0.916626 10 0.916626V1.66663ZM7.50071 4.16663L8.19894 4.44042C8.47381 3.73946 8.81549 3.2104 9.15757 2.86871C9.50403 2.52264 9.79813 2.41663 10 2.41663V1.66663V0.916626C9.26941 0.916626 8.61635 1.28921 8.09752 1.80744C7.57431 2.33005 7.13258 3.05099 6.80247 3.89283L7.50071 4.16663ZM13.3333 9.99996V10.75H18.3333V9.99996V9.24996H13.3333V9.99996Z" fill="#FF9040"/>
<path d="M1.66602 1.66663L18.3331 18.3337" stroke="#FF9040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_92_5620">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
                        </svg>


                        <p>Offline Mode - Using Cached Data</p>
                        <h4>Last Updated: <b>2:15PM</b></h4>
                    </div>
                

                <div className={styles.infoBox}>
                    <h3>Visit Details</h3>
                    <div className={styles.info}>
                        <p>Visitor’s Name:</p>
                        <h4>Taiwo Adebayo</h4>
                    </div>
                    <div className={styles.info}>
                        <p>Household Name:</p>
                        <h4>Johnson Peace</h4>
                    </div>
                    <div className={styles.info}>
                        <p>Purpose of Visit:</p>
                        <h4>Artisan / Repairs</h4>
                    </div>
                    <div className={styles.info}>
                        <p>Date:</p>
                        <h4>26/01/2026</h4>
                    </div>
                    <div className={styles.info}>
                        <p>Duration of Visit:</p>
                        <h4>1:00pm - 3:00pm</h4>
                    </div>
                    <div className={styles.info}>
                        <p>Location of Visit:</p>
                        <h4>Block 12b</h4>
                    </div>
                    <div className={styles.info}>
                        <p>Status:</p>
                        <h4 className={
                            status === 'expected'
                            ? styles.expected
                            : status === 'pending'
                            ? styles.denied
                            : styles.checked
                        }></h4>
                    </div>
                    <div className={styles.info}>
                        <p>Carry-ons:</p>
                        <h4>Gearbox, Carburetor</h4>
                    </div>
                    <div className={styles.info}>
                        <p>Notes:</p>
                        <h4>Mechanic is bringing car parts to repair and may carry the car out if repairs are not completed.</h4>
                    </div>
                </div>
                <hr className= {styles.divider}/>
                <div className= {styles.buttonGroup}>
                    <button className= {styles.entry}>Verify Entry</button>
                    <button className= {styles.manually}>Verify Manually</button>
                </div>
            </div>
        </div>
        }

        <div className= {styles.helper}>
            <button onClick={()=>{!setOffline}}>{offline}</button>
        </div>
        </>

    )
}