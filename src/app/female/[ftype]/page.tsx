import { oneProductType, responseType } from "@/component/utilis/ProductsType";
import CardAll from "@/component/views/CardAll";

async function fetchAllProductsData() {
  let res = await fetch(
    `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-07-25/data/query/production?query=*%5B_type%3D%3D%27products%27+%26%26+productTypes%5B1%5D%3D%3D%22Female%22%5D`,
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


const Female = async ({ params }: { params: { ftype: string } }) => {
  let res: responseType = await fetchAllProductsData();
  console.log(params.ftype);
  if (params.ftype !== "female") {
    let orginalSortedDataOfParams = res.result.filter(
      (items: oneProductType) => items.productTypes[0] === params.ftype
    );
    res = { result: orginalSortedDataOfParams };
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 py-10 lg:grid-cols-4 gap-4">
      {res.result.map((items: oneProductType, index: number) => (
        <CardAll key={index} singleProductData={items} />
      ))}
    </div>
  );
};

export default Female;
