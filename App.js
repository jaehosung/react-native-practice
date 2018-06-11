import React, { Component } from 'react';
import {Text, Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';

export default class ButtonBasics extends Component {
	_onPressButton() {
	}

render() {
	return (
			<View style={styles.container}>
			<View style={styles.alternativeLayoutButtonContainer}>
			<Button
			onPress={this._onPressButton}
			title="ㅁ"
			/>
			<Button
			onPress={this._onPressButton}
			title="ㅁ"
			/>
			<Button
			onPress={this._onPressButton}
			title="ㅁ"
			/>
			</View>
			<View style={styles.alternativeLayoutButtonContainer}>
			<Button
			onPress={this._onPressButton}
			title="ㅁ"
			/>
			<Button
			onPress={this._onPressButton}
			title="ㅁ"
				/>
				<Button
				onPress={this._onPressButton}
			title="ㅁ"
				/>
				</View>
				<View style={styles.alternativeLayoutButtonContainer}>
				<Button
				onPress={this._onPressButton}
			title="ㅁ"
				/>
				<Button
				onPress={this._onPressButton}
			title="ㅁ"
				/>
				<Button
				onPress={this._onPressButton}
			title="ㅁ"
				/>
				</View>
				</View>
				);
}
}

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
},
buttonContainer: {
margin: 20
},
alternativeLayoutButtonContainer: {
margin: 20,
flexDirection: 'row',
justifyContent: 'space-between'
}
})

