interface CategoryProps{
    params:{
        categories: string[]
    }
}

export default function Category(props: CategoryProps){
    console.log(props)
    const{categories} = props.params
    console.log(categories)
    return(
        <h1>categoria: {categories} </h1>
    )
}