import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`:
	root {
		font-family: Montserrat;
		font-weight: 400;

		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		color: #cba6f7;
	}

	body {
		margin: 0;
		padding: 50px;
		min-height: 100vh;
		background-color: #0a000c;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	ul {
		list-style: none;
		margin: 0; 
		padding: 0;
	}

	img {
		display: block;
	}

`;

export default GlobalStyle;
