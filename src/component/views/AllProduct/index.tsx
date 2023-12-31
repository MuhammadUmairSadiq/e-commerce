"use client";
import { oneProductType } from "@/component/utilis/ProductsType";
import BASE_PATH_FORAPI from "@/component/shared/BasePath";
import { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import CardAll from "../CardAll";

interface typeArray {
  productArray: Array<oneProductType>;
}

export default class AllProducts extends Component<{ productData: typeArray }> {
  start: number = 10;
  end: number = 20;
  state: { items: Array<oneProductType>; hasMore: boolean } = {
    items: [...this.props.productData.productArray],
    hasMore: true,
  };

  fetchDataFromApi = async (start: number, end: number) => {
    const res = await fetch(
      `${BASE_PATH_FORAPI}/api/products?start=${start}&end=${end}`
    );
    const dataToCheckAndSend = await res.json();
    if (dataToCheckAndSend.productArray === "Not found") {
      this.setState({ hasMore: false });
    }
    return dataToCheckAndSend;
  };

  getData = async () => {
    let allTogether = await this.fetchDataFromApi(this.start, this.end);
    if (allTogether.productArray !== "Not found") {
      this.setState({
        items: this.state.items.concat(allTogether.productArray),
      });
    } else {
      this.setState({
        hasMore: false,
      });
    }
    this.start = this.start + 10;
    this.end = this.end + 10;
  };

  render() {
    return (
      <InfiniteScroll
        dataLength={this.state.items.length}
        next={this.getData}
        hasMore={this.state.hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Products is Finished.</b>
          </p>
        }
        className="content-center justify-center grid grid-cols-2 md:grid-cols-3 py-10 lg:grid-cols-4 gap-4"
      >
        {this.state.items.map((item: oneProductType, index: number) => (
          <CardAll key={index} singleProductData={item} />
        ))}
      </InfiniteScroll>
    );
  }
}
