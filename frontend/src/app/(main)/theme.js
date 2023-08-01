import {createTheme} from '@mui/material/styles';
import {createContext, useState, useMemo} from "react";
import {amber, blue, grey, lightGreen, red} from "@mui/material/colors";

export const themeSettings = (mode) => {

    return {
        palette: {
            mode: mode,
            ...(mode === 'light'
                ? {
                    primary: {
                        light: "#FFEDB3",
                        main: "#FFD700",
                        dark: "#CCA300",
                        contrast: "#996B00",
                        contrastText: "#fff",
                    },
                    secondary: {
                        light: "#FFC0A8",
                        main: "#FF6347",
                        dark: "#CC4C39",
                        contrast: "#99372A",
                        contrastText: "#fff",
                    },
                    background: {
                        light: "#1E1E1E",
                        main: '#171717',
                        dark: '#111111',
                        contrast: '#0A0A0A',
                        contrastText: "#fff",
                    },
                    text: {
                        light: '#ccc',
                        main: '#A4A4A4',
                        dark: '#666',
                        contrast: '#fff'
                    },
                    grey: {
                        light: grey[100],
                        main: grey[200],
                        dark: grey[300],
                        contrast: grey[500],
                        contrastText: grey[700],
                    },
                    soft: {
                        warning: {
                            light: amber[50],
                            main: amber[700],
                            dark: amber[800],
                            contrast: amber[100]
                        },
                        success: {
                            light: lightGreen[50],
                            main: lightGreen[700],
                            dark: lightGreen[800],
                            contrast: lightGreen[100]
                        },
                        info: {
                            light: blue[50],
                            main: blue[700],
                            dark: blue[800],
                            contrast: blue[100]
                        },
                        error: {
                            light: red[50],
                            main: red[700],
                            dark: red[800],
                            contrast: red[100]
                        },
                        default: {
                            light: grey[200],
                            main: grey[700],
                            dark: grey[800],
                            contrast: grey[300]
                        }
                    },
                }
                : {
                    primary: {
                        light: "#FFEDB3",
                        main: "#FFD700",
                        dark: "#CCA300",
                        contrast: "#996B00",
                        contrastText: "#fff",
                    },
                    secondary: {
                        light: "#FFC0A8",
                        main: "#FF6347",
                        dark: "#CC4C39",
                        contrast: "#99372A",
                        superContrast: "#fff"
                    },
                    background: {
                        light: "#1E1E1E",
                        main: '#171717',
                        dark: '#111111',
                        contrast: '#0A0A0A',
                        contrastText: "#fff",
                    },
                    text: {
                        light: '#ccc',
                        main: '#A4A4A4',
                        dark: '#666',
                        contrast: '#fff'
                    },
                    grey: {
                        light: grey[100],
                        main: grey[200],
                        dark: grey[300],
                        contrast: grey[500],
                        contrastText: grey[700],
                    },
                    soft: {
                        warning: {
                            light: amber[50],
                            main: amber[700],
                            dark: amber[800],
                            contrast: amber[100]
                        },
                        success: {
                            light: lightGreen[50],
                            main: lightGreen[700],
                            dark: lightGreen[800],
                            contrast: lightGreen[100]
                        },
                        info: {
                            light: blue[50],
                            main: blue[700],
                            dark: blue[800],
                            contrast: blue[100]
                        },
                        error: {
                            light: red[50],
                            main: red[700],
                            dark: red[800],
                            contrast: red[100]
                        },
                        default: {
                            light: grey[200],
                            main: grey[700],
                            dark: grey[800],
                            contrast: grey[300]
                        }
                    },
                }),
        },
        components: {
            MuiChip: {
                styleOverrides: {
                    root: ({ownerState, theme}) => (
                        ownerState.variant === "soft" &&
                        {
                            backgroundColor: ownerState.color === "success" ? theme.palette.soft.success.light : ownerState.color === "info" ? theme.palette.soft.info.light : ownerState.color === "warning" ? theme.palette.soft.warning.light : ownerState.color === "error" ? theme.palette.soft.error.light : theme.palette.soft.default.light,
                            color: ownerState.color === "success" ? theme.palette.soft.success.main : ownerState.color === "info" ? theme.palette.soft.info.main : ownerState.color === "warning" ? theme.palette.soft.warning.main : ownerState.color === "error" ? theme.palette.soft.error.main : theme.palette.soft.default.main,
                        }
                    )
                }
            },
            MuiPaper: {
                styleOverrides: {
                    root: ({ownerState, theme}) => ({
                        backgroundColor: theme.palette.background.light,
                    })
                }
            },
            MuiCard: {
                variants: [
                    {
                        props: {variant: 'shadow'},
                        style: ({theme}) => {
                            return {
                                boxShadow: "var(--shadow-around-float)"
                            }
                        },
                    },
                    {
                        props: {variant: 'clear'},
                        style: ({theme}) => {
                            return {
                                boxShadow: "none",
                                backgroundColor:"transparent"
                            }
                        },
                    },
                ]
            },
            MuiButton: {
                variants: [
                    {
                        props: {variant: 'soft'},
                        style: ({theme}) => {
                            return {
                                backgroundColor: theme.palette.soft.default.light,
                                color: theme.palette.soft.default.main,
                                "&:hover": {
                                    backgroundColor: theme.palette.soft.default.contrast
                                }
                            }
                        },
                    },
                    {
                        props: {variant: 'soft', color: 'primary'},
                        style: ({theme}) => {
                            return {
                                backgroundColor: theme.palette.primary.light,
                                color: theme.palette.primary.dark,
                                "&:hover": {
                                    backgroundColor: theme.palette.primary.light,
                                    color: theme.palette.primary.dark,
                                }
                            }
                        },
                    },
                    {
                        props: {variant: 'soft', color: 'secondary'},
                        style: ({theme}) => {
                            return {
                                backgroundColor: theme.palette.secondary.light,
                                color: theme.palette.secondary.contrast,
                                "&:hover": {
                                    backgroundColor: theme.palette.secondary.light,
                                    color: theme.palette.secondary.contrast,
                                }
                            }
                        },
                    },
                    {
                        props: {variant: 'soft', color: 'success'},
                        style: ({theme}) => {
                            return {
                                backgroundColor: theme.palette.soft.success.light,
                                color: theme.palette.soft.success.main,
                                "&:hover": {
                                    backgroundColor: theme.palette.soft.success.contrast
                                }
                            }
                        },
                    },
                    {
                        props: {variant: 'soft', color: 'info'},
                        style: ({theme}) => {
                            return {
                                backgroundColor: theme.palette.soft.info.light,
                                color: theme.palette.soft.info.main,
                                "&:hover": {
                                    backgroundColor: theme.palette.soft.info.contrast
                                }
                            }
                        },
                    },
                    {
                        props: {variant: 'soft', color: 'warning'},
                        style: ({theme}) => {
                            return {
                                backgroundColor: theme.palette.soft.warning.light,
                                color: theme.palette.soft.warning.main,
                                "&:hover": {
                                    backgroundColor: theme.palette.soft.warning.contrast
                                }
                            }
                        },
                    },
                    {
                        props: {variant: 'soft', color: 'error'},
                        style: ({theme}) => {
                            return {
                                backgroundColor: theme.palette.soft.error.light,
                                color: theme.palette.soft.error.main,
                                "&:hover": {
                                    backgroundColor: theme.palette.soft.error.contrast
                                }
                            }
                        },
                    },
                ],
            },
            MuiIconButton: {
                variants: [
                    {
                        props: {variant: 'soft'},
                        style: ({theme}) => {
                            return {
                                backgroundColor: theme.palette.soft.default.light,
                                color: theme.palette.soft.default.main,
                                "&:hover": {
                                    backgroundColor: theme.palette.soft.default.contrast
                                }
                            }
                        },
                    },
                    {
                        props: {variant: 'soft', color: 'primary'},
                        style: ({theme}) => {
                            return {
                                backgroundColor: theme.palette.primary.light,
                                color: theme.palette.dark.main,
                                "&:hover": {
                                    backgroundColor: theme.palette.primary.main,
                                    color: theme.palette.dark.main,
                                }
                            }
                        },
                    },
                    {
                        props: {variant: 'soft', color: 'secondary'},
                        style: ({theme}) => {
                            return {
                                backgroundColor: theme.palette.secondary.light,
                                color: theme.palette.dark.main,
                                "&:hover": {
                                    backgroundColor: theme.palette.secondary.main,
                                    color: theme.palette.dark.main,
                                }
                            }
                        },
                    },
                    {
                        props: {variant: 'soft', color: 'success'},
                        style: ({theme}) => {
                            return {
                                backgroundColor: theme.palette.soft.success.light,
                                color: theme.palette.soft.success.main,
                                "&:hover": {
                                    backgroundColor: theme.palette.soft.success.contrast
                                }
                            }
                        },
                    },
                    {
                        props: {variant: 'soft', color: 'info'},
                        style: ({theme}) => {
                            return {
                                backgroundColor: theme.palette.soft.info.light,
                                color: theme.palette.soft.info.main,
                                "&:hover": {
                                    backgroundColor: theme.palette.soft.info.contrast
                                }
                            }
                        },
                    },
                    {
                        props: {variant: 'soft', color: 'warning'},
                        style: ({theme}) => {
                            return {
                                backgroundColor: theme.palette.soft.warning.light,
                                color: theme.palette.soft.warning.main,
                                "&:hover": {
                                    backgroundColor: theme.palette.soft.warning.contrast
                                }
                            }
                        },
                    },
                    {
                        props: {variant: 'soft', color: 'error'},
                        style: ({theme}) => {
                            return {
                                backgroundColor: theme.palette.soft.error.light,
                                color: theme.palette.soft.error.main,
                                "&:hover": {
                                    backgroundColor: theme.palette.soft.error.contrast
                                }
                            }
                        },
                    },
                ],
            }
            ,
            MuiTypography: {
                styleOverrides: {
                    root: ({ownerState, theme}) => ({
                        color: theme.palette.text.main || "#000"
                    })
                }
            }
            ,
        }

    }
}


export const ColorModeContext = createContext({
    toggleColorMode: () => {
    }
})

export const useMode = () => {
    const [mode, setMode] = useState('dark');

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) =>
                    prevMode === 'light' ? 'dark' : 'light',
                );
            },
        }),
        []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return [theme, colorMode]
}
