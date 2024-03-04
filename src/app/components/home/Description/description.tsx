import styles from './Description.module.sass'
import Image from 'next/image'

export const Description = () =>{
    return(
    <section className={styles.Description}>
       <Image src="/public/images/description.jpeg" 
       alt="products marketplace" 
       width={500} 
       height={300}
       />

       <h2>Descripción</h2>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis reprehenderit et provident aliquid cum perferendis dolorum dicta repellat. Consequatur aperiam praesentium facere adipisci a perferendis vel in nisi odio quasi.</p>
    </section>
    )
}