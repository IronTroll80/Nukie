'use client'

import { FaChevronDown, FaChevronUp } from 'react-icons/fa6'
import styles from './recentLogs.module.css'
import { useState } from 'react'
import Visitor from './visitor'

export default function RecentLogs() {
    const [showVisitor, setShowVisitor] = useState(true)
    const [activeStatus, setActiveStatus] = useState('Expected') // Track active status

    const statuses = ['Expected', 'Checked In', 'Checked Out', 'Denied']

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.titleDate}>
                    <h4 className={styles.title}>Recent Logs</h4>
                    <p className={styles.subtitle}>
                        {new Date().toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                    </p>
                </div>
            </div>
            <hr />
            <div className={styles.visitContainer}>
                <div className={styles.statuses}>
                    {statuses.map((status) => (
                        <p
                            key={status}
                            className={activeStatus === status ? styles.activeStatus : styles.regularButton}
                            onClick={() => setActiveStatus(status)}
                        >
                            {status}
                        </p>
                    ))}
                </div>

                <h4
                    className={styles.today}
                    onClick={() => setShowVisitor(!showVisitor)}
                >
                    Today (8) {showVisitor ? <FaChevronUp /> : <FaChevronDown />}
                </h4>

                {showVisitor && (
                    <div className={styles.visits}>
                        <Visitor />
                        <Visitor />
                        <Visitor />
                        <Visitor />
                        <Visitor />
                        <Visitor />
                        <Visitor />
                        <Visitor />
                    </div>
                )}
            </div>
        </div>
    )
}