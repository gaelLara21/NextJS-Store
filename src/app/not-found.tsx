import Image from "next/image";
import Link from "next/link";
import styles from 'app/sass/not-found.module.sass'

export default function NotFound(){
    
    return(
        <main className={styles.NotFound}>
            <h1 className={styles.NotFound__title}>404</h1>
            <Image
            src="/public/images/404.png"
            width={300}
            height={300}
            alt="404"
            />
            <h2 className={styles.NotFound__subtitle}>
                ¡Vaya! Parece que el enlace se escondio.
            </h2>
            <p className={styles.NotFound__description}>Pero nuestra tienda esta abierta 24/7</p>
            <Link className={styles.NotFound__link } href="/Store">
                ¡Vamos de compras!
            </Link>
        </main>
    )
}