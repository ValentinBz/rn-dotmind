import React from 'react';
import {
	View,
	StyleSheet,
	ScrollView,
	FlatList,
	Text
} from 'react-native';
import {
	List,
	ListItem,
	Avatar,
	SearchBar
} from 'react-native-elements';
import Loading from '../../containers/Loading';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default class UserList extends React.Component {
	state = {
		text: ''
	};

	handleClick = (item) => {
		return () => {
			const { navigate } = this.props.navigation;
			navigate('UserDetails', {
				item
			});
		}
	};

	handleMap = () => {
		const { result } = this.props.datas;
		const { text } = this.state;
		return result.filter(items => items.username.toLowerCase().startsWith(text.toLowerCase())).map((item, index) => {
			return (
				<ListItem
					key={ index }
					roundAvatar
					avatar={ { uri: item.avatar } }
					title={ item.username }
					subtitle={ index }
					onPress={ this.handleClick(item) }
				/>
			);
		});
	};

	handleChange = (entrie) => {
		this.setState({
			text: entrie
		});
	};

	renderSearchBar = () => {
		return <SearchBar lightTheme onChangeText={ this.handleChange }/>
	};

	endScroll = () => {
		return () => {
			const { getData } = this.props;
			getData();
		};
	};

	renderMain = () => {
		const { text } = this.state;
		return (
			<View>
				<View>
					<View>
						{ this.renderSearchBar() }
					</View>
					<ScrollView onMomentumScrollEnd={ (!text) ? this.endScroll() : null }>
						<List>
							{ this.handleMap() }
						</List>
					</ScrollView>
				</View>
			</View>
		);
	};

	renderContent = () => {
		const { loading } = this.props.datas;
		return (loading)
			? <Loading/>
			: this.renderMain()
	};

	render() {
		return (
			<View style={{marginTop: getStatusBarHeight()}}>
				{ this.renderContent() }
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#f9f9f9',
		marginTop: 25,
		height: 40,
		textAlign: 'center'
	}
});



