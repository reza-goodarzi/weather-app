import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

	:root{
		--color-primary: #0FA8FF;
		--color-secondary: #A10FFF;
		--color-black: #0D1136;
		--color-white: #f7f7f7;
		--color-white2: #fafafa;
		--color-gray: #77798c;
		--color-red: #DB0D0E;

		--shadow-light: 0 4px 8px #00000020;
		--shadow-dark: 0 8px 8px #00000035;
		--shadow-darker: 0 8px 16px #00000050;
	}

	html, button, a ,input, textarea{
		font-family: 'Roboto', sans-serif;
		font-weight: normal;
		color: var(--color-black);

		@media screen and (max-width: 80em){
			font-size: 62.5%;
		}

		@media screen and (max-width: 61.25em){
			font-size: 50%;
		}

		@media screen and (max-width: 37.5em){
			font-size: 36%;
		}
	}

	body{
		background-color: var(--color-white);
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		overflow-x: hidden;
	}

	a,
	a:link,
	a:visited{
      text-decoration: none;
		width: fit-content;
      padding: .5rem 1rem;
      transition: all 0.2s;
      position: relative;
      font-size: 1rem;
      //Change for the <button> element
      border: none;
      cursor: pointer;
		color: var(----color-black);

      display: flex;
      align-items: center;
	}

	button{
			text-decoration: none;
      padding: .5rem 1rem;
      border-radius: 5px;
      transition: all 0.2s;
      position: relative;
      font-size: 1rem;
      background-color: transparent;
      //Change for the <button> element
      border: none;
      cursor: pointer;
			outline: none;

			display: flex;
      align-items: center;
			justify-content: center;

			&:hover{
				color: var(--color-primary);
			}
	}

/* ---------------------------------- Input --------------------------------- */
	input, textarea{
		width: -webkit-fill-available;
		font-size: 1rem;
		padding: 1rem .5rem;
		border: none;
		border-radius: 5px;
		resize: none;


		&::placeholder{
			color: var(--color-gray)
		}

		&:focus {
      border: none;
      outline: none;
    }
	}

	// Costume Scroll bar

	// work in firefox
	* {
		scrollbar-width: thin;
		scrollbar-color: rgba(155, 155, 155, 0.7) transparent;
	}

	// work in other browser
	*::-webkit-scrollbar {
		width: 5px;
	}
	*::-webkit-scrollbar-track {
		background: transparent;
	}
	*::-webkit-scrollbar-thumb {
		background-color: rgba(155, 155, 155, 0.7);
		border-radius: 1rem;
		border: none;
	}

`;

export default GlobalStyle;
