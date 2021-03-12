import React from "react";
import Box from "ui-box";

export function WelcomeSection() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box width="65%">
        <Box fontSize={65}>Hey there, I’m Savannah Montgomery.</Box>
        <Box fontSize={22}>
          I’m a UX + Product Designer with a focus on accessibility and
          undeniably great design.
        </Box>
      </Box>
      <Box
        background="#F9C74F"
        borderRadius="1000px"
        color="white"
        fontSize="45px"
        height="294px"
        width="294px"
      />
    </Box>
  );
}
