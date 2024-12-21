import { OperationButton } from "./operationButton";
import Numberbutton from "./numberbutton";
import { Grid, Typography, Box } from "@mui/material";
import { useState } from "react";

function App() {
  const [curetValue, setcuretValue] = useState<string>("0");
  const [preValue, setpreValue] = useState(0);
  const [lastoperation, setlastoperation] = useState<string | null>(null);

  const handelcuretValue = (num: string) => {
    if (num === ".") {
      if (!curetValue.includes(".")) {
        setcuretValue(curetValue + num);
      }
    } else {
      if (curetValue === "0" && num !== ".") {
        setcuretValue(num);
        return;
      }
      setcuretValue(curetValue + num);
    }
  };

  const clearOperation = () => {
    setcuretValue("0");
  };

  const handelOpreration = (operation: string) => {
    setpreValue(parseFloat(curetValue));
    setcuretValue("0");
    setlastoperation(operation);
  };

  const calculation = () => {
    const currentValue = parseFloat(curetValue);

    if (lastoperation === "/" && currentValue === 0) {
      alert("Division by zero is not allowed");
      return;
    }

    if (lastoperation === "+") {
      setcuretValue((currentValue + preValue).toString());
    } else if (lastoperation === "-") {
      setcuretValue((preValue - currentValue).toString());
    } else if (lastoperation === "*") {
      setcuretValue((currentValue * preValue).toString());
    } else if (lastoperation === "/") {
      setcuretValue((preValue / currentValue).toString());
    }
  };

  const percent = () => {
    setcuretValue((parseFloat(curetValue) / 100).toString());
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#e0e0e0"
    >
      <Box
        width={350}
        padding={2}
        bgcolor="#fff"
        boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
        borderRadius="10px"
      >
        {/* Display */}
        <Typography
          variant="h4"
          textAlign="right"
          padding="20px"
          border="1px solid #ccc"
          borderRadius="5px"
          bgcolor="#f9f9f9"
          marginBottom="10px"
        >
          {curetValue}
        </Typography>

        {/* Buttons */}
        <Grid container spacing={1}>
          {/* Row 1: Special Operations */}
          <Grid item xs={3}>
            <OperationButton operation="%" Selector={percent} />
          </Grid>
          <Grid item xs={3}>
            <OperationButton operation="C" Selector={clearOperation} />
          </Grid>
          <Grid item xs={3}>
            <OperationButton operation="/" Selector={handelOpreration} />
          </Grid>
          <Grid item xs={3}>
            <OperationButton operation="*" Selector={handelOpreration} />
          </Grid>

          {/* Row 2: Numbers 7-9 and "-" */}
          {[7, 8, 9].map((num) => (
            <Grid item xs={3} key={num}>
              <Numberbutton num={num.toString()} onClick={handelcuretValue} />
            </Grid>
          ))}
          <Grid item xs={3}>
            <OperationButton operation="-" Selector={handelOpreration} />
          </Grid>

          {/* Row 3: Numbers 4-6 and "+" */}
          {[4, 5, 6].map((num) => (
            <Grid item xs={3} key={num}>
              <Numberbutton num={num.toString()} onClick={handelcuretValue} />
            </Grid>
          ))}
          <Grid item xs={3}>
            <OperationButton operation="+" Selector={handelOpreration} />
          </Grid>

          {/* Row 4: Numbers 1-3 */}
          {[1, 2, 3].map((num) => (
            <Grid item xs={3} key={num}>
              <Numberbutton num={num.toString()} onClick={handelcuretValue} />
            </Grid>
          ))}

          {/* Row 5: Zero, ".", "=" */}
          <Grid item xs={6}>
            <Numberbutton num="0" onClick={handelcuretValue} />
          </Grid>
          <Grid item xs={3}>
            <Numberbutton num="." onClick={handelcuretValue} />
          </Grid>
          <Grid item xs={3}>
            <OperationButton operation="=" Selector={calculation} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
