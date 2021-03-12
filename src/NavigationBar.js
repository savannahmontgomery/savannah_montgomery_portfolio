import React from "react";
import Box from "ui-box";

function CircleLinkButton({ content }) {
  return (
    <Box
      alignItems="center"
      background="#000000"
      borderRadius="30px"
      color="white"
      display="flex"
      fontSize="45px"
      height="48px"
      justifyContent="center"
      marginRight="39px"
      width="48px"
    >
      {content}
    </Box>
  );
}

export function NavigationBar() {
  const navButtonProps = { fontSize: "35px" };
  return (
    <Box background="#ffffff" display="flex" opacity={0.85}>
      <Box alignItems="center" display="flex" height="111px" width="50%">
        <Box paddingLeft="33px" {...navButtonProps}>
          Resume
        </Box>
        <Box paddingLeft="66px" {...navButtonProps}>
          About
        </Box>
        <Box paddingLeft="66px" {...navButtonProps}>
          Blog
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        width="50%"
        alignItems="center"
      >
        <Box>SVG</Box>
        <Box display="flex">
          <CircleLinkButton content="in" />
          <CircleLinkButton content="d" />
        </Box>
      </Box>
    </Box>
  );
}
