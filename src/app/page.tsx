import Main from "@/component/views/Main";
import ProductType from "@/component/views/ProductType";
import { oneProductType, responseType } from "@/component/utilis/ProductsType";
import ProductCard from "@/component/views/ProductCard";
import Description from "@/component/views/Description";

async function fetchAllProductsData() {
  let res = await fetch(
    `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "products"]`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
}

export default async function Home() {
  let { result }: responseType = await fetchAllProductsData();
  return (
    <div>
     { /*<Main />
      <ProductType />
      <ProductCard ProductData = {result}/>
      <Description/> */ }
    </div>
  );
}
