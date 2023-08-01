import { responseType } from "@/component/utilis/ProductsType";
import ProductDetails from "@/component/views/ProductDetails";
import ContextWrapper from "@/global/Context";

async function fetchData(slug: string) {
  let data = await fetch(
    `https://056jzpaf.api.sanity.io/v2023-07-25/data/query/production?query=*%5B_type+%3D%3D+%27products%27+%26%26+slug.current+%3D%3D+%27${slug}%27%5D`
  );
  return data.json();
}
const Catalog = async ({ params }: { params: { slug: string } }) => {
  let dataFetch : responseType = await fetchData(params.slug);
  return (
    <ContextWrapper>
      <ProductDetails item={dataFetch.result[0]} />
    </ContextWrapper>
  );
};

export default Catalog;
