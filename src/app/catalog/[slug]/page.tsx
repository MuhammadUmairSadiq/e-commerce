import ProductDetail from "@/component/views/ProductDetail";

async function PreviewData(slug: string) {
  let res = await fetch(
    `https://056jzpaf.api.sanity.io/v2023-07-25/data/query/production?query=*%5B_type%3D%3D%27products%27+%26%26+slug.current%3D%3D%22pink-fleece-sweatpants%22%5D`
    );
  return res.json();
}
const Catalog = async ({ params }: { params: { slug: string } }) => {
  let data = await PreviewData(params.slug);
  return (
    <div>
        <ProductDetail item = {data.result[0]}/>
    </div>
  )
};

export default Catalog