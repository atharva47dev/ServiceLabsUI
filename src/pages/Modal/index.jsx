import React from "react";

import { Img, Input, List, Text, TextArea } from "components";
import HomeRow from "components/HomeRow";

const ModalPage = () => {
  return (
    <>
      <div className="bg-white_A700 font-jaldi h-[1182px] mx-auto relative w-full">
        <div className="absolute flex flex-col gap-[26px] inset-x-[0] items-end justify-start max-w-[1239px] mx-auto md:px-5 top-[6%] w-full">
          <div className="flex flex-col items-center justify-start w-[12%] md:w-full">
            <div className="h-[37px] relative w-full">
              <div className="absolute bg-deep_purple_A200 h-[31px] inset-x-[0] mx-auto rounded-[10px] top-[0] w-full"></div>
              <Text
                className="absolute h-full inset-[0] justify-center m-auto text-center text-white_A700 w-max"
                as="h5"
                variant="h5"
              >
                Add Ticket
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start max-w-[1237px] mr-0.5 sm:pr-5 pr-[35px] w-full">
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
        <div className="flex flex-col h-full items-center justify-start mx-auto w-full">
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
        <div className="absolute bg-blue_gray_900_d8 bottom-[0] flex flex-col font-inter inset-x-[0] items-center justify-start mx-auto p-[65px] md:px-10 sm:px-5 w-full">
          <div className="md:h-[1030px] h-[993px] mb-[121px] pb-[84px] relative w-[62%] md:w-full">
            <div className="h-[909px] mx-auto w-full">
              <div className="bg-deep_purple_100 h-[909px] m-auto rounded-[20px] w-full"></div>
              <div className="absolute flex flex-col md:gap-10 gap-[557px] inset-x-[0] items-start justify-start mx-auto top-[3%] w-[85%]">
                <Text className="text-deep_purple_A200" as="h1" variant="h1">
                  Add new Ticket
                </Text>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-deep_purple_A100_c6 flex flex-row sm:gap-10 items-start justify-between pb-2.5 px-2.5 rounded-[20px] w-full">
                    <div className="flex flex-row items-end justify-start ml-2">
                      <Img
                        src="images/img_paperclip.svg"
                        className="h-[58px] w-[58px]"
                        alt="paperclip"
                      />
                      <Text
                        className="mb-0.5 mt-3 text-center text-deep_purple_A200"
                        as="h2"
                        variant="h2"
                      >
                        Choose File*
                      </Text>
                    </div>
                    <Text
                      className="mr-[11px] mt-[21px] text-center text-deep_purple_A200"
                      as="h4"
                      variant="h4"
                    >
                      abc.png
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[85%]">
              <Input
                wrapClassName="w-full"
                className="font-normal md:text-[33px] p-0 placeholder:text-deep_purple_A200 sm:text-[31px] text-[35px] text-center text-deep_purple_A200 w-full"
                name="titleframe"
                placeholder="Enter Title*"
                shape="RoundedBorder20"
                size="sm"
                variant="FillDeeppurpleA100c6"
              ></Input>
              <div className="h-[68px] md:h-[78px] mt-2.5 relative w-full">
                <Img
                  src="images/img_arrowdown.svg"
                  className="h-7 ml-auto mr-[27px] my-auto"
                  alt="arrowdown"
                />
                <Text
                  className="absolute bg-deep_purple_A100_c6 h-full inset-[0] justify-center m-auto pb-4 pl-[22px] pr-[35px] pt-2 sm:px-5 rounded-[20px] text-center text-deep_purple_A200 w-max"
                  as="h2"
                  variant="h2"
                >
                  Select Product*
                </Text>
              </div>
              <div className="h-[68px] md:h-[78px] mt-2.5 relative w-full">
                <Img
                  src="images/img_arrowdown.svg"
                  className="h-7 ml-auto mr-[27px] my-auto"
                  alt="arrowdown_One"
                />
                <Text
                  className="absolute bg-deep_purple_A100_c6 h-full inset-[0] justify-center m-auto pb-2.5 pl-[22px] pr-[35px] pt-3.5 sm:px-5 rounded-[20px] text-center text-deep_purple_A200 w-max"
                  as="h2"
                  variant="h2"
                >
                  Type of Request*
                </Text>
              </div>
              <TextArea
                className="font-normal mt-2.5 pl-[22px] pr-[35px] sm:px-5 sm:text-[31px] md:text-[33px] text-[35px] placeholder:text-deep_purple_A200 text-deep_purple_A200 text-left w-full"
                name="descriptionfram"
                placeholder="Description*"
                shape="RoundedBorder20"
                size="sm"
                variant="FillDeeppurpleA100c6"
              ></TextArea>
              <div className="md:h-[133px] h-[68px] mt-[65px] relative w-full">
                <Img
                  src="images/img_arrowdown.svg"
                  className="h-7 ml-auto mr-[27px] my-auto"
                  alt="arrowdown_Two"
                />
                <Text
                  className="absolute bg-deep_purple_A100_c6 h-full inset-[0] justify-center m-auto pb-[9px] pl-[22px] pr-[35px] pt-[15px] sm:px-5 rounded-[20px] text-center text-deep_purple_A200 w-max"
                  as="h2"
                  variant="h2"
                >
                  Severity*
                </Text>
              </div>
              <div className="font-jaldi h-[67px] md:h-[77px] mt-2.5 relative w-[32%]">
                <div className="absolute bg-deep_purple_A200 h-14 inset-[0] justify-center m-auto rounded-[10px] w-full"></div>
                <Text
                  className="absolute h-full inset-[0] justify-center m-auto text-center text-deep_purple_100 w-[73%] sm:w-full"
                  as="h3"
                  variant="h3"
                >
                  Submit
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalPage;
