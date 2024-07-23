import Heading from "../Shared/Heading";
import Img1 from "../../assets/blogs/blog-1.jpg";
import Img2 from "../../assets/blogs/blog-2.jpg";
import Img3 from "../../assets/blogs/blog-3.jpg";

const BlogData = [
  {
    title: "How to choose the perfect hair extensions",
    subtitle:
      "We will not only advise you on what extentions you should go for, we will also show you step by step how to create your own hair extentions.",
    published: "Jan 20, 2024 by Margret.",
    image: Img1,
    aosDelay: "0",
  },
  {
    title: "Choosing the best makeup set.",
    subtitle:
      "Choosing the best makeup set is so important, not only you have to check for the quality of the makeup but also are you allergic to certain products? or if the products are vegan and much more.",
    published: "Jan 24, 2024 by Sara",
    image: Img2,
    aosDelay: "200",
  },
  {
    title: "Choosing your ideal beautician.",
    subtitle:
      "In this post we will go through how to find your ideal beautician, how much you should pay and how to get them to do home visits.",
    published: "Jan 19, 2024 by Kat",
    image: Img3,
    aosDelay: "400",
  },
];

const Blogs = () => {
  return (
    <div className="my-12">
      <div className="container">
        {/* Header Section */}
        <Heading title="Recent News" subtitle={"Explore Our Blogs"} />

        {/* Blog Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
          {/* Blog Card */}
          {BlogData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.title}
              className="bg-white dark:bg-gray-900"
            >
              {/* Image Section */}
              <div className="overflow-hidden rounded-2xl mb-2">
                <img
                  src={data.image}
                  alt="blog images"
                  className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
                />
              </div>
              {/* Content Section */}
              <div className="space-y-2">
                <p className="text-xs text-gray-500">{data.published}</p>
                <p className="font-bold line-clamp-1">{data.title}</p>
                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                  {data.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
