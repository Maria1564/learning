const Product = async ({params} : {params: Promise<{id: string}>}) => {
    const id  =(await params).id
    return (
        <h2>Selected product {id}</h2>
    )
}

export default Product