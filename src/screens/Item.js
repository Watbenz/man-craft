import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Thumbnail } from 'native-base'
import UserRequirement from '../model/UserRequirement';

export default class Item extends Component {
    state = {
        item: this.props.userReq[this.props.dataAt]
    }

    selectImageByTag() {
        switch (this.state.item.type) {
            case 'ตระกร้า':
                // // return <Text>basket</Text>;
            return <Thumbnail source={{ uri: 'https://image.flaticon.com/icons/png/512/105/105291.png' }} />;
            case 'ถุงมือ':
                // // return <Text>grove</Text>;
            return <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXjf4qeNCuY4hJfF91HPLtNjLo274xKfO9cCKFtv25QgS3pTic' }} />
            case 'เสื้อ':
                // // return <Text>shirt</Text>;
            return <Thumbnail source={{ uri: 'https://cdn0.iconfinder.com/data/icons/thin-clothing/24/thin-0986_t-shirt-512.png' }} />
            default:
                // // return <Text>unknown</Text>;
            return <Thumbnail source={{ uri: 'https://www.stickpng.com/assets/images/5a461402d099a2ad03f9c997.png' }} />
        }
    }

    render() {
        // const { navigation } = this.props;
        // const data = JSON.stringify(navigation.getParam('item')) ;
        // const obj = JSON.parse(data);

        // let userReq = new UserRequirement(obj.user, obj.topic, obj.type, obj.width, obj.height, obj.color, obj.dateOrder, obj.isOnWork);

        return (
            <View style={styles.container}>
                {this.selectImageByTag()}
                <Text> {this.state.item.topic} </Text>
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