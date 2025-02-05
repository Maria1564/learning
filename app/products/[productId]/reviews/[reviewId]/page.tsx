import { notFound } from "next/navigation"

const DetailsReview = async({params}: {params: Promise<{productId: string, reviewId: string}>}) => {

    const {productId, reviewId} = (await params)


    if(Number(reviewId) > 500) notFound()
    
    return (
        <h1> Отзыв {reviewId} для продукта {productId}</h1>
    )
}

export default DetailsReview