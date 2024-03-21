interface CategoryProps{
    params:{
        categories: string[]
    }
    searchParams?: string
}

export default function Category (props: CategoryProps){
    throw new Error('Error: Boom!')
    const{categories} = props.params
    return(
        <h1>Categoria Dinamica:{categories}</h1>
    )
}