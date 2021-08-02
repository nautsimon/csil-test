import { withStyles } from "@material-ui/core/styles/";
import { TextField } from "@material-ui/core";

const BTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#587498",
    },
    "& label.MuiInputLabel-shrink": {
      color: "#587498",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#587498",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#587498",
      },
      "&:hover fieldset": {
        borderColor: "#587498",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#587498",
      },
    },
  },
})(TextField);

export { BTextField };
