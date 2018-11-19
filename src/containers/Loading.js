import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loading from '../components/loading/Loading';
import { getData } from '../actions/getData';

export default connect(null, dispatch => ({
	getData: bindActionCreators(getData, dispatch),
}))(Loading)
