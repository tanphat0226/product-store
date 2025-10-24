import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { extendTheme } from '@chakra-ui/react'
import App from './App.jsx'

const theme = extendTheme({
	colors: {
		celadon: {
			50: '#f2fbf3',
			100: '#e0f8e2',
			200: '#c3efc7',
			300: '#abe7b2',
			400: '#5eca6c',
			500: '#38af47',
			600: '#299036',
			700: '#24712e',
			800: '#215a29',
			900: '#1d4a24',
			950: '#0b2810',
		},
		'half-baked': {
			50: '#f5f9fa',
			100: '#eaf2f4',
			200: '#d0e3e7',
			300: '#93bfc7',
			400: '#78afb8',
			500: '#5795a0',
			600: '#447a85',
			700: '#38636c',
			800: '#31535b',
			900: '#2d464d',
			950: '#1e2f33',
		},
		'tea-green': {
			50: '#effce9',
			100: '#dcf7d0',
			200: '#cbf3bb',
			300: '#91e373',
			400: '#6bd447',
			500: '#4bb929',
			600: '#37931d',
			700: '#2b711a',
			800: '#275a1a',
			900: '#234c1b',
			950: '#0e2a09',
		},
	},
})

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ChakraProvider theme={theme}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ChakraProvider>
	</StrictMode>
)
