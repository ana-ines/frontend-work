import { connect } from 'react-redux';
import DiskList from '../components/DiskList'

function mapStateToDisks(state) {   
	return {     
		disks: state.disks   
	} 
};  

export default connect(mapStateToDisks)(DiskList);