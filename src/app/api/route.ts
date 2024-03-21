import { getProducts } from "app/services/shopify"


export async function GET () {
    const Products = await getProducts()

    return Response.json({Products})
}