import React from "react";
import { action } from "@storybook/addon-actions";
import FreeSoloCreateOption from "../Autocomplete";

export default {
  title: "FreeSoloCreateOption",
  component: FreeSoloCreateOption,
};

export const Async = () => <FreeSoloCreateOption onClick={action("clicked")} />;
