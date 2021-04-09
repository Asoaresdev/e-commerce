import React from 'react'
import styles from './Product.module.css'
import { useParams } from 'react-router-dom'
import { Head } from '../Head/Head'

export default function Product() {
    const [ product, setPoduct ] = React.useState(null)
    const [ load, setLoad] = React.useState(false)
    const [ error, setError ] = React.useState(null)
    // const params = useParams()
    //desestruturando 
    const { id } = useParams()

    React.useEffect(()=> {
        async function fetchProduct(url){
            try{
                setLoad(true)
                const response = await fetch(url)
                const json = await response.json()
                setPoduct(json)
            } catch (erro){
                setError('Um erro ocorreu')
            } finally{
                setLoad(false)
            } 
        }
        fetchProduct(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
    }, [id])
    if(load) return <div className="loading"></div>
    if(error) return <p>{ error }</p>
    return (
        product &&
        <section className = { `${ styles.container } animeLeft` }>
            <Head 
            title = { `ecommerce | ${ product.nome }` }
            description = {product.descricao} 
            />
            <div>
                {product.fotos.map((photo) => {
                    return <img key = { photo.src }src = { photo.src } alt = { photo.titulo } />
            })}
            </div>
            <div>
                <h1>{ product.nome }</h1>
                <span className = { styles.price }>R$ { product.preco },00</span>
                <p className = { styles.description }>{ product.descricao }</p>
            </div>
        </section>
    )
}
