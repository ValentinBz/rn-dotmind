// @flow
import { createStackNavigator } from 'react-navigation';
import UserList from '../../containers/UserList';
import UserDetails from '../users/UserDetails';

export default createStackNavigator({
	UserList: {
		screen: UserList,
	},
	UserDetails: {
		screen: UserDetails,
	},
}, {
	mode: 'card',
	headerMode: 'none',
});

