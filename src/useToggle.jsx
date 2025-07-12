import React, { useState } from "react";

const useToggle = (defaultaVal) => {
  const [value, setValue] = useState(defaultaVal);

  const toggleValue = (val) => {
    if (typeof val != "boolean") {
      setValue(!value);
    } else {
      setValue(val);
    }
  };
  return [value, toggleValue];
};

export default useToggle;
