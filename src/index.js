import React from "react";
import ReactDOM from "react-dom";
import Demo from "./Autocomplete";

const countriesUrl =
  "https://country.register.gov.uk/records.json?page-size=5000";
const mdiTagUrl = "https://materialdesignicons.com/api/tags";
const mdiUrl =
  "http://panelpi.ddns.net:3002/icons";
const sandBoxProps = {
  type: "icons",
  tagUrl: mdiTagUrl,
	url: mdiUrl,
}
ReactDOM.render(<Demo {...sandBoxProps} />, document.querySelector("#root"));
