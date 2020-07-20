import React from "react";
import { action } from "@storybook/addon-actions";
import FreeSoloCreateOption from "../Autocomplete";

export default {
  title: "FreeSoloCreateOption",
  component: FreeSoloCreateOption,
};
const countriesUrl =
  "https://country.register.gov.uk/records.json?page-size=5000";
const mdiTagUrl = "https://materialdesignicons.com/api/tags";
const mdiUrl =
  "https://cors-anywhere.herokuapp.com/https://materialdesignicons.com/api/package/38EF63D0-4744-11E4-B3CF-842B2B6CFE1B";

export const Async = () => (
  <FreeSoloCreateOption type="countries" url={countriesUrl} onClick={action("clicked")} />
);

export const AsyncWithIcons = () => (
  <FreeSoloCreateOption type="icons" tagUrl={mdiTagUrl} url={mdiUrl} onClick={action("clicked")} />
);
