import React from "react";

import { Line, Text } from "components";
import Footer from "components/Footer";

const TeamPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-jaldi sm:gap-10 md:gap-10 gap-[229px] items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Text
            className="bg-deep_purple_100 h-[59px] justify-center max-w-7xl md:max-w-full sm:px-5 px-[35px] py-[3px] text-center text-deep_purple_A200 w-full"
            as="h2"
            variant="h2"
          >
            ServiceLabs
          </Text>
        </div>
        <div className="bg-deep_purple_100 flex flex-col font-inter items-start justify-start p-[26px] md:px-5 rounded-[20px] w-[32%] md:w-full">
          <Text className="text-deep_purple_A200" as="h1" variant="h1">
            Select Team
          </Text>
          <div className="h-[55px] md:h-[60px] ml-1 md:ml-[0] mt-[5px] relative w-[98%]">
            <div className="flex flex-row h-full items-center justify-center ml-auto mr-[15px] my-auto w-[9%]">
              <Line className="h-1 outline outline-[2px] outline-deep_purple_700 rotate-[-45deg] w-1/2" />
              <Line className="h-1 outline outline-[2px] outline-deep_purple_700 rotate-[45deg] w-1/2" />
            </div>
            <Text
              className="absolute bg-deep_purple_A100_c6 h-full inset-[0] justify-center m-auto sm:px-5 px-[35px] py-3.5 rounded-[20px] text-center text-deep_purple_A200 w-max"
              as="h6"
              variant="h6"
            >
              Select Team*
            </Text>
          </div>
          <div className="font-jaldi h-[59px] md:h-[87px] mb-3 md:ml-[0] ml-[121px] mt-4 relative w-[31%]">
            <div className="absolute bg-deep_purple_A200 h-[49px] inset-[0] justify-center m-auto rounded-[10px] w-full"></div>
            <Text
              className="absolute h-full inset-[0] justify-center m-auto text-center text-deep_purple_100 w-[73%] sm:w-full"
              as="h3"
              variant="h3"
            >
              Submit
            </Text>
          </div>
        </div>
        <Footer className="flex font-jaldi items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default TeamPage;
