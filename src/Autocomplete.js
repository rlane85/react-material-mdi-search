/* eslint-disable no-use-before-define */
import React from "react";
import fetch from "cross-fetch";
import Icon from "@mdi/react";

import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";

import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";

import {
  TextField,
  CircularProgress,
  CssBaseline,
  Paper,
  Typography,
  Grid,
} from "@material-ui/core";

import { MuiThemeThing } from "./MuiThemeDemo";

const filter = createFilterOptions();
function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

const useStyles = makeStyles((theme) => ({
  popper: {
    color: "white",
  },
}));
const countriesMapped = (json) => {
  console.log("countries: ", json);
  return Object.keys(json).map((key) => json[key].item[0]);
};
const iconsMapped = (json) => {
  console.log("icons: ", json);

  return json.icons.map((icon) => icon);
};

export default function FreeSoloCreateOption({ url, tagUrl, type }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = await fetch(url);

      const entries = await response.json();

      if (active) {
        switch (type) {
          case "countries":
            setOptions(countriesMapped(entries));
            break;
          case "icons":
            console.log(entries);
            setOptions(iconsMapped(entries));
            break;
          default:
            return console.log("broken!");
            break;
        }
      }
    })();
    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);
  return (
    <MuiThemeThing>
      <CssBaseline />
      <Paper>
        <Autocomplete
          classes={{ popper: classes.popper }}
          debug
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          open={open}
          value={value}
          onChange={(event, newValue) => {
            if (typeof newValue === "string") {
              setValue({
                title: newValue,
              });
            } else if (newValue && newValue.inputValue) {
              // Create a new value from the user input
              setValue({
                title: newValue.inputValue,
              });
            } else {
              setValue(newValue);
            }
          }}
          filterOptions={(options, params) => {
            const filtered = filter(options, params);

            // Suggest the creation of a new value
            if (params.inputValue !== "") {
              filtered.push({
                inputValue: params.inputValue,
                title: `Add "${params.inputValue}"`,
              });
            }

            return filtered;
          }}
          id="free-solo-with-text-demo"
          getOptionSelected={(option, value) => option.name === value.name}
          getOptionLabel={(option) => option.name}
          options={options}
          loading={loading}
          renderOption={(option) => {
            return type === "icons" ? (
              <React.Fragment>
                <Grid container justify="space-between">
                  <Icon path={option.data} size={1} />
                  <Typography variant="body2">{option.name}</Typography>
                </Grid>
              </React.Fragment>
            ) : (
              option.name
            );
          }}
          style={{ width: 300 }}
          freeSolo
          renderInput={(params) => (
            <TextField
              {...params}
              label="Asynchronous"
              variant="outlined"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
          )}
        />
        {value && (
          <div>
            {Object.keys(value).map((entry, i) => {
              console.log(value);
              if (typeof value[entry] === "string") {
                if (entry === "data") {
                  return <Icon key={entry + i} path={value[entry]} size={2} />;
                }
                return (
                  <div key={entry + i}>
                    <p> {entry}:</p>

                    <p> {value[entry]} </p>
                  </div>
                );
              }
            })}
          </div>
        )}
      </Paper>
    </MuiThemeThing>
  );
}
