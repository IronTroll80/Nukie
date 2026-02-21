import Visitor from './visitor'
import styles from './visitorFeed.module.css'

export default function VisitorFeed (){
    return(
        <>
        
            <div className= {styles.container}>
                <div className= {styles.top}>
                    <div className= {styles.titleDate}>
                        <h4 className= {styles.title}>Visitor Feed</h4>
                        <p className= {styles.subtitle}>Saturday, Feb 21, 2026</p>
                    </div>
                    <div className= {styles.buttonGroup}>
                    <button className= {styles.entry}>Verify Entry</button>
                    <button className= {styles.manually}>Verify Manually</button>
                </div>
                </div>
                <hr/>
                <div className= {styles.visitContainer}>
                    <h4 className= {styles.today}>Today (8)</h4>
                    <div className= {styles.visits}>
                        <Visitor/>
                        <Visitor/>
                        <Visitor/>
                        <Visitor/>
                        <Visitor/>
                        <Visitor/>
                    </div>
                </div>
            </div>
        
        </>
    )
}