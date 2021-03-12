import React from "react";
import Box from "ui-box";
import { NavigationBar } from "./NavigationBar";
import { RainbowBackground } from "./RainbowBackground";
import { PortfolioItem } from "./PortfolioItem";
import { WelcomeSection } from "./WelcomeSection";

function App() {
  return (
    <div>
      <RainbowBackground />
      <Box position="relative" zIndex={9999}>
        <NavigationBar />
        <Box marginLeft={70} marginTop={40}>
          <WelcomeSection />
          <PortfolioItem />
          <PortfolioItem />
          <PortfolioItem />
        </Box>
      </Box>
    </div>
  );
}

export default App;
