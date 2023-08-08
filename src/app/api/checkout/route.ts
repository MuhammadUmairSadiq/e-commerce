import { oneProductType } from "@/component/utilis/ProductsType";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe"

interface typeOfData {
  price: string;
  name: string;
  quantity: number;
}


let orignalData: Array<typeOfData> = [
  {
    price: "price_1NcjvlDMBYPI0jioUhimJCy9",
    name: "Pink Fleece Sweatpants",
    quantity: 1,
  },
  {
    price: "price_1NcjtvDMBYPI0jioCAUr0Cwn",
    name: "Brushed Raglan Sweatshirt",
    quantity: 1,
  },
  {
    price: "price_1Nck0gDMBYPI0jioJMooJ3NU",
    name: "Brushed Bomber",
    quantity: 1,
  },
  {
    price: "price_1NcjusDMBYPI0jioKuIQSfSi",
    name: "Cameryn Sash Tie Dress",
    quantity: 1,
  },
  {
    price: "price_1NcjvJDMBYPI0jioUPannttO",
    name: "Imperial Alpaca Hoodie",
    quantity: 1,
  },
  {
    price: "",
    name: "Imperial Alpaca Hoodie Woman",
    quantity: 1,
  },
  {
    price: "price_1Nck07DMBYPI0jiohNySJshu",
    name: "Flex Sweatpants",
    quantity: 1,
  },
  {
    price: "price_1NcjwBDMBYPI0jio9VjKR6yp",
    name: "Lite Sweatpants",
    quantity: 1,
  },
  {
    price: "price_1NcjySDMBYPI0jiox6GB1bHU",
    name: "Raglan Sweatshirt",
    quantity: 1,
  },
  {
    price: "price_1NcjweDMBYPI0jioIPE135O8",
    name: "Flex Push Button Bomber",
    quantity: 1,
  },
];

// @ts-ignore
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export async function POST(req: NextRequest) {
  let cartItemsArray = await req.json();

  try {
    let line_item = orignalData.filter((item: typeOfData) => {
      for (let index = 0; index < cartItemsArray.length; index++) {
        const element: oneProductType = cartItemsArray[index];
        if (element.productName === item.name) {
          return true;
        }
      }
    });
    let line_itemToSend: any = line_item.map((item: typeOfData) => {
      for (let index = 0; index < cartItemsArray.length; index++) {
        const element: oneProductType = cartItemsArray[index];
        if (element.productName === item.name) {
          return {
            price: item.price,
            quantity: element.quantity,
          };
        }
      }
    });

    let session = await stripe.checkout.sessions.create({
      line_items: line_itemToSend,
      mode: "payment",
      success_url: `${req.nextUrl.origin}/?success=true`,
      cancel_url: `${req.nextUrl.origin}/?success=false`,
    });
    return NextResponse.json({ link: session.url });
  } catch (error) {
    console.log((error as { message: string }).message);
    return NextResponse.json({ error });
  }
}