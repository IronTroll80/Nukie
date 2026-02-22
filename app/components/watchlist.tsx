import styles from './watchlist.module.css'
import WatchlistItem from './watchlistItem'

export default function Watchlist(){

    const pages = ['←', '1', '2', '3','4','→'] 

    return(
        <>
        
        <div className= {styles.container}>
            <div className={styles.titleDate}>
                <h4 className={styles.title}>Report Incident</h4>
            </div>
            <hr/>
            <div className= {styles.watchlistItems}>
                <WatchlistItem/>
                <WatchlistItem/>
                <WatchlistItem/>
                <WatchlistItem/>
                <WatchlistItem/>
                <WatchlistItem/>
                <WatchlistItem/>
                <WatchlistItem/>
            </div>
            <div className= {styles.pagination}>
                {pages.map(page =>(
                    <p key={page} className= {styles.page}>
                        {page}
                    </p>
                ))}
            </div>
        </div>
        
        </>
    )
}