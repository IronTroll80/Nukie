import { FaBars } from 'react-icons/fa6'
import styles from './header.module.css'
import Image from 'next/image'
import { FaRegUserCircle, FaUserCircle } from 'react-icons/fa'

type HeaderProps = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}


export default function Header ({ setIsOpen }: HeaderProps){
    return(
        <>
        <div className= {styles.header}>
            <div className= {styles.container}>
                <p onClick={()=>{setIsOpen(true)}}><FaBars/></p>
                <Image src = '/logo.jpg' alt = 'logo' width = {100} height = {200}/>
                <p><FaRegUserCircle/></p>
            </div>
            <div className= {styles.divider}/>
        </div>
        </>
    )
}