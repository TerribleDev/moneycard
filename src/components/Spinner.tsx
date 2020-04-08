import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import styles from "./Spinner.module.css";

export const Spinner: React.SFC<{ value?: String; onClick: () => void; isSpinning: boolean}> = ({ onClick, isSpinning, value }) => {
  const spinText = isSpinning ? "Spinning" : value;
  return (
    <Box className={styles.center}>
      <Typography variant="h3" align="center">
        Spinner: {spinText}
      </Typography>
      <Button disabled={isSpinning} variant="contained" color="primary" onClick={onClick}>
        Spin
      </Button>
    </Box>
  );
}
