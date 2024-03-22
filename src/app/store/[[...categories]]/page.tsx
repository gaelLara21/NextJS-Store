import { ProductsWrapper } from "app/app/components/Store/ProductsWrapper"
import { getProducts } from "app/services/shopify/products"
import { getCollections } from "app/services/shopify/collections"

interface CategoryProps{
    params:{
        categories: string[]
    }
    searchParams?: string
}

export default async function Category (props: CategoryProps){
    const products = await getProducts()
    const collections = await getCollections()
    const{categories} = props.params
    return(
        <ProductsWrapper products={products}/>
    )
}