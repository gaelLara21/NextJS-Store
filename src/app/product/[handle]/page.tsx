"use client"

import { useParams, useSearchParams } from "next/navigation"

export default function ProductPage() { 
    const params = useParams()
    const SearchParams = useSearchParams()
    const id = SearchParams.get("id")
    console.log('searchParamas', id)

return <h1>Product Page</h1>
}