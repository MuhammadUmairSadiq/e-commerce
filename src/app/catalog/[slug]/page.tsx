import { oneProductType, responseType } from "@/component/utilis/ProductsType";
import ProductDetails from "@/component/views/ProductDetails";
import ContextWrapper from "@/global/Context";

// metadata genrator
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  const product = await fetch(
    `https://056jzpaf.api.sanity.io/v2023-07-25/data/query/production?query=*[_type == 'products']`
  ).then((res: any) => res.json());
  
  const titleToSet: oneProductType = product.result.find(
    (item: oneProductType) => item.slug.current == slug
  );
  
  return {
    title: titleToSet.productName,
    description: titleToSet.description,
  };
}

// fetch particular data of product using slug
async function fetchPreviewData(slug: string) {
  let res = await fetch(
    `https://056jzpaf.api.sanity.io/v2023-07-25/data/query/production?query=*%5B_type%20%3D%3D%20%22products%22%20%26%26%20slug.current%3D%3D%20%22${slug}%22%5D`
  );
  return res.json();
}

// will make static pages of every product
export async function generateStaticParams() {
  let res = await fetch(
    `https://056jzpaf.api.sanity.io/v2023-07-25/data/query/production?query=*[_type == 'products']`,
    {
      next: {
        revalidate: 60,
      },
    }
  ).then((res: any) => res.json());
  return res.result.map((item: oneProductType) => {
    slug: item.slug;
  });
}

const Catalog = async ({ params }: { params: { slug: string } }) => {
  let data: responseType = await fetchPreviewData(params.slug);
  return (
    <ContextWrapper>
      <ProductDetails item={data.result[0]} />
    </ContextWrapper>
  );
};

export default Catalog;