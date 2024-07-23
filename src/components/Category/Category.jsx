import Image1 from "../../assets/category/urbanmakeup.png";
import Image2 from "../../assets/category/nailartpolish.png";
import Image3 from "../../assets/category/tintedbalm.png";
import Button from "../Shared/Button";

const Category = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-pink-600/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-2xl font-semibold text-gray-400">
                  Makeup
                </p>
                <p className="text-2xl font-semibold mb-[20px]">Kit</p>
                {/* <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  Makeup Kit
                </p> */}
                <Button
                  text="Browse"
                  bgColor={"bg-pink-500"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img
              src={Image1}
              alt="image1"
              className="sm:w-[100px] md:w-[130px] absolute bottom-0 top-3 right-3"
            />
          </div>
          {/* second col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandYellow to-pink-600 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[5px] text-white text-2xl font-semibold">
                  Nail
                </p>
                <p className="text-2xl font-semibold mb-[50px]">Art</p>
                {/* <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Nail Art
                </p> */}
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-pink-600"}
                />
              </div>
            </div>
            <img
              src={Image2}
              alt="image2"
              className="sm:w-[100px] md:w-[150px] absolute mr-5 top-2 mt-16 -right-4 lg:top-[20px]"
            />
          </div>
          {/* third col */}
          <div className="col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-pink-600 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white text-2xl font-semibold">
                  Our most populour
                </p>
                <p className="text-2xl font-semibold mb-[20px]">Lip Gloss</p>
                {/* <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Lip Gloss
                </p> */}
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-primary"}
                />
              </div>
            </div>
            <img
              src={Image3}
              alt="image2"
              className="w-[250px] mr-5 absolute top-1/2 -translate-y-1/2 -right-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
