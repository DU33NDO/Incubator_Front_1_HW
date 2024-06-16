import Link from "next/link";
import React from "react";

const InfoBlock = ({ props }) => {
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };

  return (
    <div className="px-5 md:px-6 lg:px-8 mt-10 lg:mt-12 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <Link href={`/blog/${generateSlug(props.title)}`} legacyBehavior>
        <a>
          <div className="flex-col">
            <div className="w-full h-52 bg-gray-500 rounded-t-lg overflow-hidden">
              <img
                src="https://www.vuescript.com/wp-content/uploads/2018/11/Show-Loader-During-Image-Loading-vue-load-image.png"
                alt="image from blog"
                className="w-full h-full object-cover opacity-50 rounded-t-lg"
              />
            </div>
            <div className="flex-col gap-3 py-4 px-5 flex bg-white w-full rounded-bl-lg rounded-br-lg">
              <div className="flex gap-8">
                <div className="bg-gray-200 rounded-xl text-gray-200">
                  <p className="text-sm text-center px-4 py-0.5 text-[#6B7280]">
                    {props.author}
                  </p>
                </div>
                <p className="text-base text-gray-500">{props.date}</p>
              </div>
              <p className="font-bold text-xl text-black max-w-[18ch]">
                {props.title}
              </p>
              <p className="leading-5 text-gray-500 max-w-[35ch]">
                {props.description}
              </p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default InfoBlock;
