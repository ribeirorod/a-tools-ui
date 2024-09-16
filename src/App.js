import React, { useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

import baseTheme from "./styles/base-theme";
import darkTheme from "./styles/dark-theme";
import { GlobalStyles } from "./styles/global-styles";
import { Provider } from "react-redux";
import DocumentAI from "./tools/document_ai/DocumentAI";
import da_store from "./tools/document_ai/store";
import NavBar from "./common/components/navbar/navbar";

const AppContent = () => {
  const { theme, toggleTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(
    theme === "light" ? baseTheme : darkTheme,
  );
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    toggleTheme();
    setCurrentTheme(newTheme === "light" ? baseTheme : darkTheme);
  };
  const handleDocsClick = () => {
    // Handle docs button click
  };

  const handleFeedbackClick = () => {
    // Handle feedback button click
  };

  const handleUserClick = () => {
    // Handle user button click
  };
  return (
    <StyledThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <div>
        <NavBar
          title="ANTHROP\\C"
          onDocsClick={handleDocsClick}
          onFeedbackClick={handleFeedbackClick}
          onUserClick={switchTheme}
        />
      </div>
      <Provider store={da_store}>
        <div>
          <DocumentAI />
        </div>
      </Provider>
    </StyledThemeProvider>
  );
};

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
