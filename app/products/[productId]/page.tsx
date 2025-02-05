
const Product = async ({params} : {params: Promise<{productId: string}>}) => {
    const id  =(await params).productId

    return (
        <h2>Selected product {id}</h2>
    )
}

export default Product