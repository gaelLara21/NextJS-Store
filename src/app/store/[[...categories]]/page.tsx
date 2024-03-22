import { ProductsWrapper } from "app/app/components/Store/ProductsWrapper"
import { getProducts } from "app/services/shopify/products"
import { getCollections } from "app/services/shopify/collections"

interface CategoryProps{
    params:{
        categories: string[]
    }
    searchParams?: string
}

export default async function Category(props: CategoryProps) {
    const { categories } = props.params
    let products = []
    const collections = await getCollections()
    
    if (categories?.length > 0) {
      const selectedCollectionId = collections.find((collection: any) => collection.handle === categories[0]).id
      products = await getCollectionsProducts(selectedCollectionId)
    }else {
      products = await getProducts()
    }
  
    return (
      <ProductsWrapper products={products} />
    )
  }