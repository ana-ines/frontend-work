import { connect } from 'react-redux';
import { fetchDisk } from '../actions/disks';
import App from '../components/App';

const mapDispatchToProps = (dispatch) => { return { onInputChanged: name => dispatch(fetchDisk(name)) } }

function mapStateToDisk(state) {   
	return {     
		disk: state.disk   
	}
};


export default connect(mapStateToDisk, mapDispatchToProps)(App);