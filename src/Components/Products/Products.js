import React from 'react'
import styles from './Products.module.css'
import { Link } from 'react-router-dom'
import { Head } from '../Head/Head'

export const Products = () => {
  const [products, setProducts] = React.useState(null)
  React.useEffect(()=> {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
    .then(response => response.json())
    .then(json => setProducts(json))
  }, [])
  console.log(products);
  if(products === null) return null
    return (
      
        <section className={`${styles.products} animeLeft`}>
          <Head 
            title = 'ecommerce' 
            description = 'Descrição do site' 
       />
          {products.map((product) => {
            return (
              <Link to={`produto/${product.id}`} key={product.id}>
                <h1 className={styles.name}>{ product.nome }</h1>
                <img src={product.fotos[0].src} alt={product.fotos[0].titulo} />
              </Link>)
          })} 
        </section>
    )
}
