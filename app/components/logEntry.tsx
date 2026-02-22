import { useEffect, useState } from 'react'
import styles from './logEntry.module.css'

export default function LogEntry(){

    const [stage, setStage] = useState(1)
    const [time, setTime] = useState(60);
    const [status, setStatus] = useState<'expected' | 'pending' | 'checked'>('checked');

    useEffect(() => {
        const interval = setInterval(() => {
        setTime((prev) => {
            if (prev <= 1) {
            clearInterval(interval);
            return 0;
            }
            return prev - 1;
        });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    if(stage === 2 && time <= 54){
        setStage(3)
    }

    return(
        <>
         <div className= {styles.container}>
                    <div className= {styles.titleDate}>
                        <h4 className= {styles.title}>Log Manual Entry</h4>
                    </div>
                    <hr/>
                    <div className= {styles.body}>
                       <div className={styles.progress}>
                            {[1, 2, 3].map((item) => (
                                <div
                                key={item}
                                className={`${styles.step} ${
                                    stage >= item ? styles.filled : ''
                                }`}
                                />
                            ))}
                        </div>
                        {
                            stage === 1 && <div className= {styles.form}>
                                <div className= {styles.inputContainer}>
                                    <p>Select Resident's Flat</p>
                                    <select>
                                        <option>Flat 1A</option>
                                        <option>Flat 1B</option>
                                        <option>Flat 1C</option>
                                        <option>Flat 2A</option>
                                        <option>Flat 2B</option>
                                    </select>
                                </div>
                                <div className= {styles.inputContainer}>
                                    <p>Enter Visitor's Name</p>
                                    <input type='text' placeholder= 'Mr. Jonathan Doe' name='name'/>
                                </div>
                                <div className= {styles.inputContainer}>
                                    <p>Carry-ons</p>
                                    <textarea placeholder= 'Fan, Carburator'/>
                                </div>
                                <button type='submit' onClick={()=>{setStage(stage + 1)}}>Request Verification</button>
                            </div>
                        }
                        {
                            stage === 2 && <div className= {styles.verificationConfirm}>
                                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.334 50V23.3333C13.334 17.0479 13.334 13.9052 15.2866 11.9526C17.2392 10 20.3819 10 26.6673 10H36.6673M66.6673 50V48.3333" stroke="#003883" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M59.9993 6.66675C66.2847 6.66675 69.4274 6.66675 71.3801 8.61937C73.3327 10.572 73.3327 13.7147 73.3327 20.0001V26.6667C73.3327 32.9521 73.3327 36.0948 71.3801 38.0475C69.4274 40.0001 66.2847 40.0001 59.9993 40.0001C53.714 40.0001 50.5713 40.0001 48.6186 38.0475C46.666 36.0948 46.666 32.9521 46.666 26.6667L46.666 20.0001C46.666 13.7147 46.666 10.572 48.6186 8.61937C50.5713 6.66675 53.714 6.66675 59.9993 6.66675Z" stroke="#003883" strokeWidth="1.5" strokeLinecap="round"/>
                                    <path d="M60 30H60.0299" stroke="#003883" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M11.6581 53.3848L13.3978 50H66.5053L68.3403 53.3848C73.1499 62.2565 74.348 66.6924 72.5198 70.0128C70.6917 73.3333 65.8447 73.3333 56.1506 73.3333L23.8481 73.3333C14.1541 73.3333 9.30706 73.3333 7.47892 70.0128C5.65077 66.6924 6.84849 62.2565 11.6581 53.3848Z" stroke="#003883" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <h4 className= {styles.verificationTitle}>Verification request sent to resident</h4>
                                <p className= {styles.verificationSubTitle}>This page will automatically refresh once the request has been verified.</p>
                                <button type='submit' className= {time <= 0 ? `${styles.activeButton}` : `${styles.inactiveButton}`}>Resend verification request</button>
                                <p className= {styles.resend}>Resend Request in {time}</p>
                            </div>
                        }

                        {
                            stage === 3 && <div className= {styles.visitDetails}>

                                    <div className= {styles.header}>
                                        <svg width="60" height="60" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M25 59.9999C28.0561 56.7431 32.41 55.0383 36.7718 55.0006M43.3333 39.9999C43.3333 43.6818 40.3956 46.6666 36.7718 46.6666C33.1479 46.6666 30.2102 43.6818 30.2102 39.9999C30.2102 36.318 33.1479 33.3333 36.7718 33.3333C40.3956 33.3333 43.3333 36.318 43.3333 39.9999Z" stroke="#003883" strokeWidth="1.5" strokeLinecap="round"/>
                                            <path d="M28.334 13.3372C19.5193 13.37 14.804 13.6782 11.7511 16.5705C8.33398 19.8077 8.33398 25.018 8.33398 35.4385V51.228C8.33398 61.6485 8.33398 66.8588 11.7511 70.096C15.1682 73.3332 20.6679 73.3332 31.6673 73.3332H38.334M45.0007 13.3372C53.8153 13.37 58.5306 13.6782 61.5836 16.5705C65.0007 19.8077 65.0007 25.018 65.0007 35.4385V38.3333" stroke="#003883" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M29.2412 12.1055C29.561 10.7228 29.7209 10.0315 30.028 9.46687C30.7435 8.1516 32.0633 7.18501 33.6388 6.8224C34.3151 6.66675 35.0992 6.66675 36.6673 6.66675C38.2354 6.66675 39.0195 6.66675 39.6958 6.8224C41.2714 7.18501 42.5911 8.1516 43.3066 9.46687C43.6137 10.0315 43.7736 10.7228 44.0935 12.1055L44.3711 13.3059C44.9383 15.7582 45.222 16.9844 44.7941 17.9275C44.517 18.5384 44.0447 19.0615 43.4373 19.4304C42.4994 20.0001 41.1088 20.0001 38.3277 20.0001H35.007C32.2258 20.0001 30.8353 20.0001 29.8974 19.4304C29.2899 19.0615 28.8177 18.5384 28.5405 17.9275C28.1127 16.9844 28.3963 15.7582 28.9635 13.3059L29.2412 12.1055Z" stroke="#003883" strokeWidth="1.5"/>
                                            <path d="M54.2118 60.8046C53.838 60.6263 53.3903 60.7848 53.212 61.1586C53.0336 61.5325 53.1921 61.9801 53.566 62.1585L53.8889 61.4816L54.2118 60.8046ZM56.8519 64.4445L56.2057 64.8252C56.3463 65.064 56.6072 65.2057 56.884 65.1938C57.1608 65.182 57.4086 65.0184 57.5283 64.7685L56.8519 64.4445ZM63.1333 57.6975C63.498 57.5012 63.6345 57.0463 63.4382 56.6816C63.2418 56.3169 62.787 56.1804 62.4223 56.3767L62.7778 57.0371L63.1333 57.6975ZM71.6667 60.0001H70.9167C70.9167 66.9497 65.2829 72.5834 58.3333 72.5834V73.3334V74.0834C66.1113 74.0834 72.4167 67.7781 72.4167 60.0001H71.6667ZM58.3333 73.3334V72.5834C51.3837 72.5834 45.75 66.9497 45.75 60.0001H45H44.25C44.25 67.7781 50.5553 74.0834 58.3333 74.0834V73.3334ZM45 60.0001H45.75C45.75 53.0505 51.3837 47.4167 58.3333 47.4167V46.6667V45.9167C50.5553 45.9167 44.25 52.2221 44.25 60.0001H45ZM58.3333 46.6667V47.4167C65.2829 47.4167 70.9167 53.0505 70.9167 60.0001H71.6667H72.4167C72.4167 52.2221 66.1113 45.9167 58.3333 45.9167V46.6667ZM53.8889 61.4816C53.566 62.1585 53.5657 62.1584 53.5655 62.1583C53.5654 62.1582 53.5652 62.1581 53.565 62.158C53.5648 62.1579 53.5645 62.1578 53.5643 62.1577C53.5638 62.1575 53.5635 62.1573 53.5632 62.1572C53.5627 62.1569 53.5626 62.1569 53.5629 62.157C53.5634 62.1573 53.5655 62.1583 53.5692 62.1601C53.5764 62.1638 53.5896 62.1706 53.6082 62.1807C53.6455 62.2008 53.7046 62.2339 53.7815 62.281C53.9353 62.3752 54.1594 62.5249 54.4222 62.7377C54.9479 63.1634 55.6243 63.8385 56.2057 64.8252L56.8519 64.4445L57.498 64.0638C56.8096 62.8954 56.0045 62.0889 55.3662 61.572C55.0469 61.3134 54.7684 61.1265 54.5651 61.0019C54.4634 60.9396 54.3803 60.8928 54.32 60.8603C54.2899 60.8441 54.2655 60.8314 54.2473 60.8222C54.2382 60.8176 54.2306 60.8138 54.2247 60.8109C54.2217 60.8094 54.2192 60.8082 54.217 60.8071C54.2159 60.8066 54.215 60.8062 54.2141 60.8057C54.2137 60.8055 54.2133 60.8053 54.2129 60.8052C54.2127 60.8051 54.2124 60.8049 54.2123 60.8049C54.2121 60.8048 54.2118 60.8046 53.8889 61.4816ZM56.8519 64.4445C57.5283 64.7685 57.5282 64.7686 57.5282 64.7687C57.5282 64.7687 57.5282 64.7687 57.5282 64.7687C57.5282 64.7687 57.5282 64.7686 57.5283 64.7684C57.5285 64.768 57.5289 64.7673 57.5294 64.7662C57.5304 64.7641 57.5321 64.7606 57.5344 64.7558C57.539 64.7463 57.5462 64.7315 57.556 64.7118C57.5754 64.6724 57.6048 64.6133 57.6437 64.5368C57.7214 64.3838 57.8369 64.1616 57.9856 63.8888C58.2835 63.3425 58.713 62.5973 59.239 61.8011C60.3133 60.1749 61.7083 58.4646 63.1333 57.6975L62.7778 57.0371L62.4223 56.3767C60.6429 57.3346 59.075 59.3281 57.9874 60.9743C57.4324 61.8144 56.9812 62.5975 56.6687 63.1706C56.5123 63.4575 56.39 63.6927 56.3064 63.8572C56.2646 63.9395 56.2325 64.0041 56.2104 64.0488C56.1994 64.0711 56.191 64.0885 56.1851 64.1005C56.1822 64.1065 56.1799 64.1113 56.1783 64.1146C56.1775 64.1163 56.1768 64.1176 56.1764 64.1186C56.1761 64.1191 56.1759 64.1195 56.1758 64.1198C56.1757 64.12 56.1756 64.1202 56.1756 64.1203C56.1755 64.1204 56.1754 64.1206 56.8519 64.4445Z" fill="#003883"/>
                                        </svg>
                                        <h4>Visitor checked in succesfully</h4>
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
                                        <button className= {styles.entry}>Go Back Home</button>
                                        <button className= {styles.manually}>See Recent Logs</button>
                                    </div>
                                    
                            </div>
                        }
                    </div>
            </div>

        </>
    )
}