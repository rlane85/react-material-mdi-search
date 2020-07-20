import React from "react";
import ReactDOM from "react-dom";
import Demo from "./Autocomplete";

const countriesUrl =
  "https://country.register.gov.uk/records.json?page-size=5000";
const mdiTagUrl = "https://materialdesignicons.com/api/tags";
const mdiUrl =
  "https://cors-anywhere.herokuapp.com/https://materialdesignicons.com/api/package/38EF63D0-4744-11E4-B3CF-842B2B6CFE1B";
const sandBoxProps = {
	type: "icons",
	tagUrl: mdiTagUrl,
	url: mdiUrl,
}
ReactDOM.render(<Demo {{...sandBoxProps}} />, document.querySelector("#root"));
