import {createMuiTheme} from '@material-ui/core/styles'

export const theme = createMuiTheme({  // #1
    palette: {
        primary: {
            light: '#5393ff',
            main: '#2979ff',
            dark: '#1c54b2',
            contrastText: '#ffffff',
        },
        secondary: {
            light: '#f73378',
            main: '#f50057',
            dark: '#ab003c',
            contrastText: '#ffffff',
        },
    },
})