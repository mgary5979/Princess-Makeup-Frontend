import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";

import Img1 from "../../assets/product/p-1.jpg";
import Img2 from "../../assets/product/p-2.jpg";
import Img3 from "../../assets/product/p-3.jpg";
import Img4 from "../../assets/product/p-4.jpg";
import Img5 from "../../assets/product/p-5.jpg";
import Img7 from "../../assets/product/p-7.jpg";
import Img9 from "../../assets/product/p-9.jpg";
import lipplumper from "../../assets/product/lipplumper.png";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "body jewellery",
    price: "35",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Eye Liner",
    price: "10",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Foundation",
    price: "20",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Lip Gloss",
    price: "220",
    aosDelay: "600",
  },
];

const ProductsData2 = [
  {
    id: 1,
    img: Img5,
    title: " Nail Accessories",
    price: "40",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img7,
    title: "Nail Art",
    price: "50",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img9,
    title: "Lib Balm",
    price: "9",
    aosDelay: "400",
  },
  {
    id: 4,
    img: lipplumper,
    title: "Lip Plumper",
    price: "100",
    aosDelay: "600",
  },
];

const Products = () => {
  return (
    <div>
      <div className="container">
        {/* Header Section */}
        <Heading title="Our Products" subtitle="Explore Our Products" />

        {/* Body Section */}
        <ProductCard data={ProductsData} />
        <ProductCard data={ProductsData2} />
      </div>
    </div>
  );
};

export default Products;
