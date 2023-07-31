import {client} from "../../../../sanity/lib/client"
import { oneProductType } from "@/component/utilis/ProductsType";
import CardAll from "@/component/views/CardAll";

async function getDataFromSearch() {
  let response = await client.fetch(`*[_type == "products"]`);
  return response;
}

const Search = async ({ params }: { params: { query: string } }) => {
    let slug = params.query.toLowerCase();
    let data = await getDataFromSearch();
    let dataToMap = await data.filter((item: oneProductType) => {
      if (item.productName.toLowerCase().indexOf(slug) >= 0) {
        return true;
      }
      return false;
    });

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 py-10 lg:grid-cols-4 gap-4">
      {dataToMap &&
        dataToMap.map((items: oneProductType, index: number) => (
          <CardAll key={index} singleProductData={items} />
        ))}
    </div>
  );
};
 
export default Search