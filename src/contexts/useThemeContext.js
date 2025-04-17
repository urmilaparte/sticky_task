

import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider.js";

function useThemeContext() {
  return useContext(ThemeContext);
}

export default useThemeContext;
