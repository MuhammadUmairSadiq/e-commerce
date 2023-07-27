import BASE_PATH_FORAPI from "@/component/shared/BasePath";
import AllProduct from "@/component/views/AllProduct";

async function fetchData() {
  let res = await fetch(`${BASE_PATH_FORAPI}/api/products?start=0&end=10`, {
    next: {
      revalidate: 120,
    },
  });
  if(!res.ok) {
    throw new Error("Failed to Fetch Data");
  }
  return res.json();
}

const Products = async () => {
    const productData = await fetchData();
  return (
    <div>
      <AllProduct productData={productData} />
    </div>
  );
};

export default Products;
