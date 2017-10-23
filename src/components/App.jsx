import React from 'react';
import classNames from 'classnames';
import { MuiThemeProvider, createMuiTheme, withStyles } from 'material-ui/styles';
import { red } from 'material-ui/colors';
import DiskList from '../containers/DiskList';
import Navbar from './Navbar';
import { TextField } from 'material-ui';


const styles = {
	main: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		height: '100vh',
		background: 'linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)'
	}
	
};

const theme = createMuiTheme();

function App({ classes, onInputChanged }) {
	return (
		<MuiThemeProvider theme={ theme }>
			<main className={ classes.main }>
				<Navbar />
				<TextField label="Escriba el nombre del disco" onChange={ (event) => onInputChanged(event.target.value) }/>
				<DiskList />
			</main>
		</MuiThemeProvider>
	)
}

export default withStyles(styles)(App);