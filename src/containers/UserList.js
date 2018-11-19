import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserList from '../components/users/UserList';
import { getData } from '../actions/getData';

export default connect(state => ({
	datas: state.datas,
}), dispatch => ({
	getData: bindActionCreators(getData, dispatch),
}))(UserList)
