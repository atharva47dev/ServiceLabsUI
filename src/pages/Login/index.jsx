import React from "react";

import { Img, Text } from "components";
import Footer from "components/Footer";

const LoginPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-jaldi items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Text
            className="bg-deep_purple_100 h-[59px] justify-center max-w-7xl md:max-w-full sm:px-5 px-[35px] py-[3px] text-center text-deep_purple_A200 w-full"
            as="h2"
            variant="h2"
          >
            ServiceLabs
          </Text>
        </div>
        <Img
          src="images/img_image1.png"
          className="h-[78px] md:h-auto mt-[279px] object-cover w-[23%]"
          alt="imageOne"
        />
        <Footer className="flex items-center justify-center mt-[357px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default LoginPage;
