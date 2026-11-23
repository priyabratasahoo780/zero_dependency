type ProductType = {
  params: Promise<{
    productId: string;
  }>;
};

export default async function ProductDetailPage({ params }: ProductType) {
  const { productId } = await params;
  return (
    <>
      <h1>product details products : {productId}</h1>
    </>
  );
}

