import React from 'react';
import { View, Text } from 'react-native';

export default class Loading extends React.Component {

	componentDidMount() {
		const { getData } = this.props;
		getData();
	}

	render() {
		return(
			<Text>
				Loading...
			</Text>
		)
	}
}
