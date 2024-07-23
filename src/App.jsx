import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import headphone from "./assets/hero/headphone.png";
import Products from "./components/Products/Products";
import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png";
import Blogs from "./components/Blogs/Blogs";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import lipoil from "./assets/hero/lipoil.png";
import teethgems from "./assets/hero/teethgems.png";

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: lipoil,
  title2: "Lush Lips Oil",
  title3: "Winter Sale",
  title4:
    "Imagine walking out your front door knowing you look like one million pounds.",
  bgColor: "#ffd200",
};

const BannerData2 = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "14 Jan to 28 Jan",
  image: teethgems,
  title2: "Fine Teeth",
  title3: "Winter Sale",
  title4: "No princess is complete without this set of teeth gems.",
  bgColor: "#ffd200",
};

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
      <Blogs />
      <Partners />
      <Footer />
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
    </div>
  );
};

export default App;
