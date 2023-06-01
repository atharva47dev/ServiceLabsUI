import React from "react";
import { TextArea } from "components";

export default {
  title: "servicelabsui/TextArea",
  component: TextArea,
};

export const SampleTextarea = (args) => <TextArea {...args} />;

SampleTextarea.args = {
  shape: "RoundedBorder20",
  variant: "FillDeeppurpleA100c6",
  size: "sm",
  placeholder: "placeholder",
};
