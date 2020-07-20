import React from "react";
import { action } from "@storybook/addon-actions";
import FreeSoloCreateOption from "../Autocomplete";

export default {
  title: "FreeSoloCreateOption",
  component: FreeSoloCreateOption,
};
const countriesUrl =
  "https://country.register.gov.uk/records.json?page-size=5000";
const mdiTagUrl = "http://panelpi.ddns.net:3002/iconTags";
const mdiUrl =
  "http://panelpi.ddns.net:3002/icons";
  //forcing tag to minimize download size for now
export const Async = () => (
  <FreeSoloCreateOption type="countries" url={countriesUrl} onClick={action("clicked")} />
);

export const AsyncWithIcons = () => (
  <FreeSoloCreateOption type="icons" tagUrl={mdiTagUrl} url={mdiUrl} onClick={action("clicked")} />
);
