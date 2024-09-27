import { createTheme } from '@mui/material/styles';
const GlobalTheme = createTheme({
    palette: {
        primary: {
            light: '#ff7961',
            main: '#0866ff',
            dark: '#0857d0',
            contrastText: '#fff',
        },
        // background: { // Set colors for AppBar and other backgrounds
        //     // default: 'red', // AppBar background color
        //     paper: 'red', // Toolbar background color (optional)
        // },
        facebook: {
            light: '#ff7961',
            main: '#003894',
            dark: '#ba000d',
            contrastText: '#fff',
        },
        googlelogin: {
            light: '#ff7961',
            main: '#303030',
            dark: '#ba000d',
            contrastText: '#fff',
        },
        twitter: {
            light: '#ff7961',
            main: '#171616',
            dark: '#ba000d',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#e60000',
            dark: '#ba000d',
            contrastText: '#000',
        },
        glblue: {
            light: '#ff7961',
            main: '#d2e3fc',
            dark: '#ba000d',
            contrastText: '#000',
        },
        success: {
            light: '#24cb43',
            main: '#1e8e3e',
            dark: '#007d19',
            contrastText: '#000',
        },
        body2: {
            light: '#24cb43',
            main: '#00a12e',
            dark: '#007d19',
            contrastText: '#000',
        },
        profileicon: {
            light: '#24cb43',
            main: '#656565',
            dark: '#007d19',
            contrastText: '#000',
        },
        readmore: {
            light: '#24cb43',
            main: '#656565',
            dark: '#007d19',
            contrastText: '#000',
        },

    },

    typography: {
        h6: {
            color: '#202124',
            // fontFamily: 'cinzel',
        },

    },
    mixins: {
        toolbar: {
            minHeight: 54   // Navbar height
        }
    },
    shape: {
        borderRadius: 6, // All Components border radius
    },
    Shadows: [
        "10px 14px 11px rgba(0, 0, 0, 0.15)",
        "30px 41px 13px rgba(0, 0, 0, 0.15)",
    ],

    components: {
        MuiMenu: {
            styleOverrides: {
                paper: {
                    boxShadow: 'none',
                    border: "0.1px solid grey" // No shadow
                },
            },
        },
        MuiCard: {
            defaultProps: {},
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    boxShadow: 'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;',
                    // Customize shadow
                },
            },
        },
        MuiDrawer: {
            defaultProps: {
                sx: {
                    backgroundColor: 'blue',
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    backgroundColor: "white",
                    // '&::placeholder': { // Target the placeholder pseudo-element
                    //     backgroundColor: 'white', // Set white background color
                    // },
                },
            },
        },
    },


    MuiButton: {
        styleOverrides: {
            root: {
                boxShadow: 'none',
                transition: 'all 0.3s ease', // Smooth transition for hover effects
            },
            // Hover state styles
            contained: {
                '&:hover': {
                    boxShadow: 'none',
                    // Custom shadow on hover
                },
            },
            // Other button variants if needed
            outlined: {
                '&:hover': {
                    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)', // Custom shadow on hover
                },
            },
            text: {
                '&:hover': {
                    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)', // Custom shadow on hover
                },
            },
        },
    },

});

export default GlobalTheme;





