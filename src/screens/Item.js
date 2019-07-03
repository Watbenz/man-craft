import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import UserRequirement from '../model/UserRequirement';

export default class Item extends Component {

    render() {
        const { navigation } = this.props;
        const items = JSON.stringify(navigation.getParam('items')) ;
        const arr = new Array();

        //     let obj = new UserRequirement(
        //         JSON.parse(e.user),
        //         JSON.parse(e.topic),
        //         JSON.parse(e.type),
        //         parseFloat(JSON.parse(e.width)) ,
        //         parseFloat(JSON.parse(e.height)) ,
        //         JSON.parse(e.colors),
        //         JSON.parse(e.dateOrder),
        //         JSON.parse(e.isOnWork)
        //     );
        
        return (
            <View style={styles.container}>
                <Text> This is Hello </Text>
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
})
