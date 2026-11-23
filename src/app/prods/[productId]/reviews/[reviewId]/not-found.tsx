"use client";

import { usePathname } from "next/navigation";

export default function NotfoundProduct() {
  const pathname = usePathname();
  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];

  return (
    <div>
      <h1>Product id not found is : {productId} and Review details products : {reviewId}</h1>
    </div>
  );
}
