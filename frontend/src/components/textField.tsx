import React, { FC, useState } from "react";
import { ImputText } from "../models/imput";
import callApi from "../services/api-service";
import "./textField.css";

const TextField: FC<ImputText> = (props): JSX.Element => {
  const [str, setStr] = useState("");

  const handleKeyDown = (key: string) => {
    if (key === "Enter") {
      callApi(str).then((data) => props.onResult(data));
    }
  };

  return (
    <input
      type="text"
      placeholder={props.placeHolder}
      onKeyPress={(e) => handleKeyDown(e.key)}
      onChange={(e) => setStr(e.target.value)}
    />
  );
};

export default TextField;
