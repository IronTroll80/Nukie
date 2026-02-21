'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import styles from './dashboard.module.css'
import Visitor from './visitor'
import VisitorFeed from './visitorFeed'
import { imageConfigDefault } from 'next/dist/shared/lib/image-config'
import { FaCaretRight } from 'react-icons/fa6'

export default function Dashboard() {

    const [active, setActive] = useState<string>('visitor1')
    const [isOpen, setIsOpen] = useState(false)

    const startX = useRef<number | null>(null)
    const currentX = useRef<number | null>(null)
    const isEdgeSwipe = useRef(false)

    const handleTouchStart = (e: React.TouchEvent) => {
        startX.current = e.touches[0].clientX
        isEdgeSwipe.current = startX.current < 20 
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isEdgeSwipe.current && !isOpen) return
        currentX.current = e.touches[0].clientX
    }

    const handleTouchEnd = () => {
        if (startX.current !== null && currentX.current !== null) {
            const diff = currentX.current - startX.current

            if (!isOpen && isEdgeSwipe.current && diff > 70) {
                setIsOpen(true)
            } else if (isOpen && diff < -70) {
                setIsOpen(false)
            }
        }

        startX.current = null
        currentX.current = null
        isEdgeSwipe.current = false
    }

    const navItems1 = [
        { id: 'item1', label: 'Visitor Feed', image: '/calendar.svg' },
        { id: 'item2', label: 'Manually Verify Entry', image: '/door.svg'  },
        { id: 'item3', label: 'Manually Verify Exit', image: '/door2.svg' }
    ]

    const navItems2 = [
        { id: 'item4', label: 'Recent Logs' , image: '/clock.svg'},
        { id: 'item5', label: 'Report Incident'  , image: '/telephone.svg'},
        { id: 'item6', label: 'Watchlist Alert', image: '/alert.svg' }
    ]

    return (
        <div className={styles.container}
             onTouchStart={handleTouchStart}
             onTouchMove={handleTouchMove}
             onTouchEnd={handleTouchEnd}
        >
            <div className={styles.content}>
                {/* <button 
                    className={styles.menuBtn}
                    onClick={() => setIsOpen(true)}
                >
                    ☰
                </button> */}
                {isOpen && (
                    <div 
                        className={styles.overlay}
                        onClick={() => setIsOpen(false)}
                    />
                )}
                {!isOpen && (
                    <div className={styles.dragArrow}>
                        <span><FaCaretRight/></span>
                    </div>
                )}
                <div className={`${styles.left} ${isOpen ? styles.open : ''}`}>

                    <div className={styles.imageContainer}>
                        <Image src={'/logo.png'} alt='Logo' fill />
                    </div>

                    <div className={styles.navGroup}>
                        {navItems1.map(item => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    setActive(item.id)
                                    setIsOpen(false)
                                }}
                                className={active === item.id ? styles.active : ''}
                            >
                                <Image src={item.image} alt='icon' width={20} height={20} />
                                {item.label}
                            </button>
                        ))}
                    </div>

                    <hr />

                    <div className={styles.navGroup}>
                        {navItems2.map(item => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    setActive(item.id)
                                    setIsOpen(false)
                                }}
                                className={active === item.id ? styles.active : ''}
                            >
                                <Image src={item.image} alt='icon' width={20} height={20} />
                                {item.label}
                            </button>
                        ))}
                    </div>

                    <hr />

                    <div className={styles.navGroup}>
                        <button
                            onClick={() => {
                                setActive('logout')
                                setIsOpen(false)
                            }}
                            className={active === 'logout' ? styles.active : ''}
                        >
                            <Image src={'/door.svg'} alt='icon' width={20} height={20} />
                            Log out
                        </button>
                    </div>

                    <div className={styles.gateInfo}>
                        <p className={styles.gateTitle}>Gate 1</p>
                        <p className={styles.time}>16:00</p>
                        <p className={styles.date}>Wed, Jan 21, 2025.</p>
                    </div>

                </div>

                <div className={styles.right}>
                    <VisitorFeed/>
                </div>

            </div>
        </div>
    )
}