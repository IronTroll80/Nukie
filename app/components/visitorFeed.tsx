'use client'

import {FaChevronDown, FaChevronUp } from 'react-icons/fa6'
import styles from './visitorFeed.module.css'
import { useState } from 'react'
import Visitor from './visitor'

type VisitorFeedProps = {
    setActive: React.Dispatch<React.SetStateAction<string>>
}

export default function VisitorFeed({ setActive }: VisitorFeedProps) {

    const [showVisitor, setShowVisitor] = useState(true)
    console.log(Visitor)

    return(
        <>
        
            <div className= {styles.container}>
                <div className= {styles.top}>
                    <div className= {styles.titleDate}>
                        <h4 className= {styles.title}>Visitor Feed</h4>
                        <p className={styles.subtitle}>
                            {new Date().toLocaleDateString('en-US', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </p>
                    </div>
                    <div className= {styles.buttonGroup}>
                    <button className= {styles.entry} onClick={()=>{setActive("item8")}}>Verify Entry</button>
                    <button className= {styles.manually} onClick={()=>{setActive("item2")}}>Verify Manually</button>
                </div>
                </div>
                <hr/>
                <div className= {styles.visitContainer}>
                    <h4 className= {styles.today} onClick={()=>{setShowVisitor(!showVisitor)}}>
                        Today (8) {showVisitor ? <FaChevronUp/> : <FaChevronDown/>} 
                    </h4>
                    {showVisitor &&
                        <div className= {styles.visits}>
                            <Visitor/>
                            <Visitor/>
                            <Visitor/>
                            <Visitor/>
                            <Visitor/>
                            <Visitor/>
                            <Visitor/>
                            <Visitor/>
                        </div>
                    }
                </div>
            </div>
        
        </>
    )
}