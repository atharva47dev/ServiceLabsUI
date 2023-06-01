import React from "react";

import { Input } from "components";

export default {
  title: "servicelabsui/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  type: "text",
  shape: "RoundedBorder20",
  variant: "FillDeeppurpleA100c6",
  size: "sm",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
