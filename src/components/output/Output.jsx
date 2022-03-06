import { Typography } from "@mui/material";
import styles from "./Output.module.scss";

const Output = (props) => {
  return (
    <div className={styles.Output}>
      <Typography variant="h6" component="h2">
        Scanned Output:
      </Typography>
      <pre>{props.processing ? "Processing..." : props.text}</pre>
    </div>
  );
};

export default Output;
