import Image1 from "../../assets/category/foundationset.png";
import Image2 from "../../assets/category/eyelinersharpener.png";
import Image3 from "../../assets/category/extentions.png";
import Button from "../Shared/Button";

const Category = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first col */}
          <div className="col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[5px] text-white text-2xl font-semibold">
                  Our new top of the range
                </p>
                <p className="text-2xl font-semibold mb-[20px]">Foundation</p>
                {/* <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Foundation
                </p> */}
                <Button
                  text="Browse"
                  bgColor={"bg-pink-600"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img
              src={Image1}
              alt="image1"
              className="w-[250px] mr-5 absolute top-1/2 -translate-y-1/2 -right-0"
            />
          </div>
          {/* second col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-pink-600 text-white rounded-3xl relative h-[320px] flex items-start">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white text-2xl font-semibold">
                  Eye Liner
                </p>
                <p className="text-2xl font-semibold mb-[20px]">Sharpener</p>
                {/* <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Eye Liner Sharpener
                </p> */}
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandGreen"}
                />
              </div>
            </div>
            <img
              src={Image2}
              alt="image2"
              className="sm:w-[100px] w-[150px] ml-20 absolute bottom-0"
            />
          </div>
          {/* third col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-Gold to-pink-600/90 text-white rounded-3xl relative h-[320px] flex items-start">
            <div>
              <div className="mb-4">
                <p className="mt-0 mb-[5px] font-semibold text-white text-2xl">
                  Hair Extentions
                </p>
                <p className="text-2xl font-semibold mb-[20px]">Kit</p>
                {/* <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Extentions Kit
                </p> */}
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandBlue"}
                />
              </div>
            </div>
            <img
              src={Image3}
              alt="image3"
              className="sm:w-[100px] md:w-[150px] mr-5 mb-1 absolute bottom-0 right-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
