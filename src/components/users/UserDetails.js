import React from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';
import {
	Card,
	Icon
} from 'react-native-elements';
import { getStatusBarHeight } from "react-native-status-bar-height";

export default class UserDetails extends React.Component {

	renderContent = () => {
		const { navigation } = this.props;
		const item = navigation.getParam('item');
		return (
			<Card title={ item.username } image={ { uri: item.avatar } }>
				<View style={ styles.containerText }>
					<View style={ styles.text }>
					<Icon name='work'/>
					</View>
					<View style={ styles.text }>
					<Text>{ item.job } </Text>
					</View>
				</View>
				<View style={ styles.containerText }>
					<View style={ styles.text }>
						<Icon name='email'/>
					</View>
					<View style={ styles.text }>
						<Text>{ item.email } </Text>
					</View>
				</View>
				<View style={ styles.containerText }>
					<View style={ styles.text }>
						<Icon name='phone'/>
					</View>
					<View style={ styles.text }>
						<Text>{ item.phone } </Text>
					</View>
				</View>
			</Card>
		);
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
	containerText: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	text: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 10
	}
});
