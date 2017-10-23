import React from 'react';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import { Paper } from 'material-ui';

const styles = {
			avatar: {
				width: '6em',
				height: '6em',
				borderRadius: '100%',
				border: '0.4em solid white',
				boxShadow: '0px 0px 9px 3px #cccccc',
				filter: 'grayscale(100%)'
			},
			container: {
				backgroundColor: '#607d8b',
				width: '100%',
    		textAlign: 'center' 
			},
			paper: {
				display: 'flex',
		    padding: '1em',
		    backgroundColor: 'white',
		    width: '14em',
		    height: '14em',
		    borderRadius: '0.2em'
			},
			avatarContainer: {
		    backgroundColor: '#e6e6e6',
		    paddingTop: '1em',
		    paddingBottom: '1em'
			},
			diskData: {
				marginTop: '1em',
	    	textTransform: 'uppercase',
	    	fontFamily: 'Roboto, sans-serif',
	    	color: 'white',
	    	fontWeight: '400'
			}
};

function Disk({ disk, classes }) {
	return (<Paper className={classes.paper} zDepth={4}>
						<div className={ classes.container }>
							<div className="row">
								<div className={ classes.diskData }>	
									<span>{ disk.name }</span>
									<span>{ disk.genres }</span>
									<span>{ disk.artist }</span>
									<span>{ disk.popularity }</span>
								</div>
							</div>
						</div>
					</Paper>)
}

export default withStyles(styles)(Disk);