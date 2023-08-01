"use client"

import {ColorModeContext, useMode} from "./theme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

const Providers = ({children}) => {
    const [theme, colorMode] = useMode();
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}
export default Providers