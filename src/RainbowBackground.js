import React from "react";
import Box from "ui-box";

export function RainbowBackground() {
  const lineProps = {
    height: "100%",
    marginRight: "5px",
    width: "9px",
  };
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        minHeight: "100%",
        position: "fixed",
        top: 0,
        zIndex: 1,
      }}
    >
      <Box backgroundColor={"#F94144"} {...lineProps} />
      <Box backgroundColor={"#F8961E"} {...lineProps} />
      <Box backgroundColor={"#F9C74F"} {...lineProps} />
      <Box backgroundColor={"#90BE6D"} {...lineProps} />
      <Box backgroundColor={"#577590"} {...lineProps} />
    </div>
  );
}
