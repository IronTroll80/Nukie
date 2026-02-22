'use client'
import { useEffect, useState } from 'react'
import styles from './reportIncident.module.css'

export default function ReportIncident(){

    const [stage, setStage] = useState(1)
    const [incidentType, setIncidentType] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [severity, setSeverity] = useState('');
    const [photos, setPhotos] = useState<File[]>([]);
    
    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
        setPhotos(Array.from(e.target.files));
    }
    }

    return(
        <div className={styles.container}>
            <div className={styles.titleDate}>
                <h4 className={styles.title}>Report Incident</h4>
            </div> 
            <hr/>
            <div className={styles.body}>
                

                {stage === 1 && (
                    <div className={styles.form}>
                        <div className={styles.inputContainer}>
                            <p>Select Incident Type</p>
                            <select value={incidentType} onChange={e => setIncidentType(e.target.value)}>
                                <option value="">--Select--</option>
                                <option value="Conflict">Conflict</option>
                                <option value="Theft">Theft</option>
                                <option value="Violence">Violence</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className={styles.inputContainer}>
                            <p>Location</p>
                            <input 
                                type='text' 
                                placeholder='Gate 1' 
                                value={location}
                                onChange={e => setLocation(e.target.value)}
                            />
                        </div>

                        <div className={styles.inputContainer}>
                            <p>Describe what happened</p>
                            <textarea 
                                placeholder='What happened?' 
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            />
                        </div>

                        <div className={styles.radioContainer}>
                            <p>Severity Level</p>
                            <div className= {styles.labelGroup}>
                                <label>
                                    <input 
                                        type="radio" 
                                        name="severity" 
                                        value="Low"
                                        checked={severity === 'Low'}
                                        onChange={e => setSeverity(e.target.value)}
                                    /> Low
                                </label>
                                <label>
                                    <input 
                                        type="radio" 
                                        name="severity" 
                                        value="Medium"
                                        checked={severity === 'Medium'}
                                        onChange={e => setSeverity(e.target.value)}
                                    /> Medium
                                </label>
                                <label>
                                    <input 
                                        type="radio" 
                                        name="severity" 
                                        value="High"
                                        checked={severity === 'High'}
                                        onChange={e => setSeverity(e.target.value)}
                                    /> High
                                </label>
                            </div>
                        </div>

                        <div className={styles.inputContainer}>
                            <p>Add Photos (optional)</p>
                            <input 
                                type="file" 
                                multiple 
                                accept="image/*"
                                onChange={handlePhotoChange}
                            />
                            {photos.length > 0 && (
                                <p>{photos.length} file(s) selected</p>
                            )}
                        </div>

                        <button type='button' onClick={()=>{setStage(stage + 1)}}>
                           Submit Report
                        </button>
                    </div>
                )}
                    {stage === 2 && <div className= {styles.verificationConfirm}>
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.8013 47.8952L22.3117 43.2719C24.1482 41.9678 26.0102 41.0939 28.1345 40.5282C30.5734 39.8788 31.6667 38.5479 31.6667 35.7034C31.6667 28.4876 48.3333 27.7198 48.3333 35.7034C48.3333 38.5479 49.4266 39.8788 51.8655 40.5282C54.0068 41.0984 55.8664 41.9782 57.6883 43.2719L64.1987 47.8952C67.1446 49.9871 68.5157 50.9982 69.2805 52.6063C70 54.1192 70 55.8933 70 59.4415C70 65.8204 70 69.0099 68.214 71.0545C66.0506 73.5311 60.4267 73.3184 56.9722 73.3184H23.0278C19.5732 73.3184 14.0636 73.6619 11.786 71.0545C10 69.0099 10 65.8204 10 59.4415C10 55.8933 10 54.1192 10.7195 52.6063C11.4842 50.9982 12.8554 49.9871 15.8013 47.8952Z" stroke="#003883" strokeWidth="1.5"/>
                            <path d="M46.6673 56.6667C46.6673 60.3486 43.6825 63.3333 40.0007 63.3333C36.3188 63.3333 33.334 60.3486 33.334 56.6667C33.334 52.9848 36.3188 50 40.0007 50C43.6825 50 46.6673 52.9848 46.6673 56.6667Z" stroke="#003883" strokeWidth="1.5"/>
                            <path d="M23.1998 12.3257C18.805 13.5805 15.6455 15.1371 12.7542 17.0152C8.17663 19.9887 6.21412 25.3468 6.75292 30.5171C6.98064 32.7023 8.73483 33.7471 10.769 33.1818C12.3144 32.7524 13.8623 32.3343 15.398 31.8788C19.8895 30.5466 20.946 28.9271 21.5702 24.3295L23.1998 12.3257ZM23.1998 12.3257C34.0613 9.22475 45.9374 9.22475 56.7989 12.3257M56.7989 12.3257C61.1937 13.5805 64.3532 15.1371 67.2445 17.0152C71.8221 19.9887 73.7846 25.3468 73.2458 30.5171C73.0181 32.7023 71.2639 33.7471 69.2297 33.1818C67.6843 32.7524 66.1364 32.3343 64.6007 31.8788C60.1092 30.5466 59.0527 28.9271 58.4285 24.3295L56.7989 12.3257Z" stroke="#003883" strokeWidth="1.5" strokeLinejoin="round"/>
                        </svg>
                         <h4 className= {styles.verificationTitle}>Incident Reported</h4>
                            <p className= {styles.verificationSubTitle}>Admin has been notified and will review your report shortly.</p>
                            <button type='submit' className = {styles.activeButton}>Go Back Home</button>
                            </div>
                        }

              
            </div>
        </div>
    )
}