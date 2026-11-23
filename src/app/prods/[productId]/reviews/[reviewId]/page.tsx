 import {notFound} from 'next/navigation'; 
type ReviewType = {
  params: Promise<{
    productId: string;
    reviewId: string;
  }>;
};

export default async function ReviewPage({ params }: ReviewType) {
  const { productId, reviewId } = await params;
   if(parseInt(reviewId) > 1000){
        notFound();
   }
  return (
   
    <h1>Product id is : {productId} and Review details products : {reviewId}</h1>
  );
}

