import React from 'react';
import Disk from './Disk';
import { withStyles } from 'material-ui/styles';

const styles = {
	diskList: {
		display: 'inline-block',
		margin: '0.5em',
		float: 'left'
	}
};

function DiskList({ disks, classes }) {
	return <ul>
		{ disks.map( (u, i) => <li className={ classes.diskList } key={i}> <Disk disk={u} /> </li>) }	
	</ul>;
}

export default withStyles(styles)(DiskList);