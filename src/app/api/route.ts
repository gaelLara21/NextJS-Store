import { getProducts } from "app/services/shopify/products"


export async function GET () {
    const Products = await getProducts()

    return Response.json({Products})
}