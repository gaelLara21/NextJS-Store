"use client"
import Image from 'next/image'
import styles from 'app/app/sass/global-error.module.sass'

export default function GlobalError ({reset}: ErrorPageProps) {

    return(
        <main className={styles.Error}>
            <h1 className={styles.Error__title}>Ha ocurrido un error</h1>
            <Image
            src='/public/images/error.png'
            width={500}
            height={500}
            alt='Error'
            />
            <p className={styles.Error__message}>Al parecer hubo un error, intentaremos solucionarlo</p>
            <button className={styles.Error__button}>Volver a intetar</button>
        </main>
    )
}