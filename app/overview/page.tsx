'use client';

import Image from 'next/image';
import styles from './overview.module.css';
import { useState } from 'react';

export default function Sidebar (){

    const [active, setActive] = useState<string>("Visitor Feed");


    const navItems = [
        { label: "Visitor Feed" },
        { label: "Verify Entry" },
        { label: "Verify Exit" },
        { divider: true },
        { label: "Recent Logs" },
        { label: "Report Incident" },
        { label: "Watchlist Alert" },
        { divider: true },
        { label: "Log out" },
    ];


    return (
        <div className={styles.container}>
            <div className= {styles.left}>
                <Image src="/logo.jpg" alt="Logo" width={200} height={200} className={styles.logo} />
            {navItems.map((item, index) =>
            item.divider ? (
                <hr key={index} />
            ) : (
                <div
                key={index}
                className={`${styles.item} ${
                    active === item.label ? styles.active : ""
                }`}
                onClick={() => setActive(item.label!)}
                >
                <Image src="/door.svg" alt="icon" width={20} height={20} />
                <p>{item.label}</p>
                </div>
            )
            )}

                <div className= {styles.gateInfo}>
                    <p className={styles.gateTitle}>Gate 1</p>
                    <p className={styles.time}>16: 00</p>
                    <p className= {styles.date}>Wed, Jan 21, 2025.</p>
                </div>
            </div>
            {/* <div className={styles.right}>
                <div className= {styles.top}>
                    <div className= {styles.pageDeets}>
                        <h1 className= {styles.title}>Visitor Feed</h1>
                        <p className= {styles.titleDate}>Wednesday, Jan 1, 2026.</p>
                    </div>
                    <div className= {styles.buttonGroup}>
                        <button className= {styles.entry}>Verify Entry</button>
                        <button className= {styles.exit}>Verify Exit</button>
                    </div>
                </div>
                <hr/>
                
            </div> */}
        </div>
    );
}