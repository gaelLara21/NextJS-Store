"use client"

import{useState} from 'react'
import styles from './Description.module.sass'
import Image from 'next/image'
import classNames from 'classnames/bind'
const PLACEHOLDER_IMAGE ="data:image/jpeg;base64,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"

export const Description = () =>{
   const [hasBorder, setBorder] = useState(false);

   const handleClick= () => setBorder(!hasBorder);

   const cx = classNames.bind(styles);

   const buttonStyles = cx('Description__button',{
      'Description__button--border':hasBorder,
   });

    return(
    <section className={styles.Description}>
      <button onClick={handleClick} className={buttonStyles}>

      <div className={styles.Descripción__imageContainer}>
    <Image src="/public/images/description.jpeg" 
       alt="products marketplace" 
       fill
       placeholder='blur'
       blurDataURL={PLACEHOLDER_IMAGE}
       />
    </div>
      </button>

       <h2>Descripción</h2>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis reprehenderit et provident aliquid cum perferendis dolorum dicta repellat. Consequatur aperiam praesentium facere adipisci a perferendis vel in nisi odio quasi.</p>
    </section>
    )
}