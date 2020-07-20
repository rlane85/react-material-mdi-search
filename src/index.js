import React from "react";
import ReactDOM from "react-dom";
import Demo from "./Autocomplete";

const countriesUrl =
  "https://country.register.gov.uk/records.json?page-size=5000";
const mdiTagUrl = "https://panelpi.ddns.net/iconTags/";
const mdiUrl =
  "https://panelpi.ddns.net/icons/";
const sandBoxProps = {
  type: "icons",
  tagUrl: mdiTagUrl,
	url: mdiUrl,
}
ReactDOM.render(<Demo {...sandBoxProps} />, document.querySelector("#root"));
