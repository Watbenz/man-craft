import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import UserRequirement from '../model/UserRequirement';

export default class Item extends Component {

    render() {
        const { navigation } = this.props;
        const data = JSON.stringify(navigation.getParam('item')) ;
        const obj = JSON.parse(data);

        let userReq = new UserRequirement(obj.user, obj.topic, obj.type, obj.width, obj.height, obj.color, obj.dateOrder, obj.isOnWork);

        return (
            <View style={styles.container}>
                <Text> {userReq.topic} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});