import React from "react";

import { Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="md:h-[60px] h-[61px] relative w-full">
          <div className="absolute bg-deep_purple_100 h-[59px] inset-x-[0] mx-auto top-[0] w-full"></div>
          <Text
            className="absolute font-jaldi h-max inset-[0] justify-center m-auto text-center text-deep_purple_A200 w-max"
            as="h2"
            variant="h2"
          >
            Copyright © Zappian, 2023
          </Text>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
