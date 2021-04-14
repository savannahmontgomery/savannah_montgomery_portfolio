import React from "react";
import Box from "ui-box";
import Headshot from "./assets/savCircleHeadshot.png"

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
      >
        <img src={Headshot} alt="" style={{float: 'right', width: '91%'}}></img>
      </Box>
    </Box>
  );
}
