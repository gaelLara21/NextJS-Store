import { ProductView } from "app/app/components/product/ProductView"
import { getProducts } from "app/services/shopify/products"
import { redirect } from "next/dist/server/api-utils"


interface ProductPageProps {
    searchParams: {
      id: string
    }
  }
export default async function ProductPage ({ searchParams }: ProductPageProps) { 
    const id = searchParams.id
    const products = await getProducts(id)
    const product = products[0]

  //  if(!id){
      //redirect('/src/app/store')
    //}

return <ProductView product={product}/>
}