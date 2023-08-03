import CartComp from "../../component/views/CartParent/childParent";
import ContextWrapper from "@/global/Context";

async function fatchAllStoreProducts() {
  let res = await fetch(
    `https://056jzpaf.api.sanity.io/v2023-07-25/data/query/production?query=*[_type == 'products']`,
    {
      cache: "no-store",
    }
  );
  return res.json();
}

const Cart = async () => {
  let allProductsOfStore = await fatchAllStoreProducts();
  return (
    <div>
      <CartComp allProductsOfStore={allProductsOfStore.result} />
    </div>
  );
};

export default Cart;
