import Image from 'next/image';
import styles from './login.module.css';
import Link from 'next/link';

export default function Login (){
    return (
        <div className={styles.container}>
            <div className= {styles.left}>
                <Image src="/logo.png" alt="Logo" width={200} height={200} className={styles.logo} />
                <div className= {styles.gateInfo}>
                    <p className={styles.gateTitle}>Gate 1</p>
                    <p className={styles.time}>16: 00</p>
                    <p className= {styles.date}>Wed, Jan 21, 2025.</p>
                </div>
            </div>
            <div className={styles.right}>
                <h1>Log in</h1>
                <hr/>
                <form className={styles.form}>
                    <label htmlFor="username" className={styles.label}>Username</label>
                    <input type="text" placeholder="e.g 02782791" className={styles.input} required/>
                    <label htmlFor="password" className={styles.label}>Password</label>
                    <input type="password" placeholder="************" className={styles.input} required/>
                    {/* <p className={styles.error}>Wrong Password Eje Mi</p> */}
                    <Link href = './dashboard'><button type="submit" className={styles.button}>Log in</button></Link>
                </form>
            </div>
        </div>
    );
}