import React from "react";

import { useNavigate } from "react-router-dom";

import { List, Text } from "components";
import HomeRow from "components/HomeRow";

const Home1Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-jaldi items-center justify-start mx-auto pb-[45px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-deep_purple_100 flex flex-row md:gap-10 gap-[409px] items-center justify-end p-[3px] w-full">
            <Text
              className="text-center text-deep_purple_A200"
              as="h2"
              variant="h2"
            >
              ServiceLabs
            </Text>
            <div className="h-[37px] mr-[17px] md:px-5 relative w-[10%]">
              <div className="absolute bg-deep_purple_A200 h-[30px] inset-[0] justify-center m-auto rounded-[10px] w-full"></div>
              <a
                href="javascript:"
                className="absolute h-full inset-[0] justify-center m-auto text-white_A700 w-max"
              >
                <Text as="h5" variant="h5">
                  Logout
                </Text>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end mt-3.5 px-5 w-full">
          <div className="h-[37px] md:px-5 relative w-[12%]">
            <div
              className="common-pointer absolute bg-deep_purple_A200 h-[31px] inset-[0] justify-center m-auto rounded-[10px] w-full"
              onClick={() => navigate("/modal")}
            ></div>
            <Text
              className="absolute h-full inset-[0] justify-center m-auto text-center text-white_A700 w-max"
              as="h5"
              variant="h5"
            >
              Add Ticket
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start max-w-[1237px] mt-[29px] mx-auto md:px-5 w-full">
          <List
            className="bg-blue_gray_900 border border-gray_700 border-solid flex-col md:gap-5 grid items-start rounded w-auto md:w-full"
            orientation="vertical"
          >
            {new Array(18).fill({}).map((props, index) => (
              <React.Fragment key={`HomeRow${index}`}>
                <HomeRow
                  className="flex flex-row items-start justify-start my-0 w-full"
                  {...props}
                />
              </React.Fragment>
            ))}
          </List>
        </div>
      </div>
    </>
  );
};

export default Home1Page;
