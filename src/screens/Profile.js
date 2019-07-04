import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Header, Content, Footer, FooterTab, Button, List } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';
import UserRequirement from '../model/UserRequirement';
import { createStore } from 'redux';

export default class Profile extends Component {

    reducerManageUser(state, action) {
        if (action.type == 'ADD') {
            newState = [...state, action.payload]
            return newState;
        } else if (action.type == 'REMOVE') {
            newState = state.filter((user) => {
                return (action.payload.id !== user.id);
            });
            return newState;
        }
        return state;
    }

    static navigationOptions = {
        title: 'Profile',
    };

    handleOnPressItem(item) {
        const { navigate } = this.props.navigation;
        navigate('Item', {
            item: item,
        });
    }

    render() {
        const initStateUser = [{ id: 1, name: 'benz', age: 25 }, { id: 2, name: 'chy', age: 23 }];
        const store = createStore(this.reducerManageUser, initStateUser);
        store.dispatch({
            type: 'ADD',
            payload: {
                id: 3,
                name: 'benz',
                age: 25
            }
        })
        console.log("Hello");
        console.log(store.getState());
        console.log("------------------");
        store.dispatch({
            type: 'REMOVE',
            payload: {
                id: 1
            }
        })
        console.log(store.getState());


        return (
            <Container>
                <Content contentContainerStyle={{ flex: 1 }}>
                    <Grid>

                        <Row size={1} style={{ backgroundColor: 'white' }}>
                            <View style={styles.container}>
                                <TouchableOpacity style={styles.iconImg}>
                                    <Icon name={'person'} size={50} color="#01a699" />
                                </TouchableOpacity>
                            </View>
                        </Row>

                        <Row size={2} style={{ backgroundColor: 'white' }}>
                            <ScrollView>
                                <Text>Requirement</Text>
                                <View style={styles.container}>
                                    {
                                        userReq.map((item, i) => {
                                            return (
                                                <TouchableOpacity style={styles.menu} key={i} onPress={() => this.handleOnPressItem(item)}>
                                                    <View key={i}>
                                                        <Text>{i}. {item.topic}</Text>
                                                        <Text>{'#' + item.type}</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            );
                                        })
                                    }
                                </View>
                            </ScrollView>
                        </Row>

                    </Grid>
                </Content>

                <Footer>
                    <FooterTab>
                        <Button vertical>
                            <Icon size={20} name="history" />
                            <Text>History</Text>
                        </Button>
                        <Button vertical>
                            <Icon size={20} name="add" />
                            <Text>New Order</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconImg: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 50,
    },
    menu: {
        width: '100%',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '3%',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
    }
})

var userReq = new Array();
userReq.push(new UserRequirement('none', 'ตระกร้าสาน', 'ตระกร้า', 10, 10, 'black'));
userReq.push(new UserRequirement('none', 'เสื้อ', 'เครื่องนุุ่งห่ม'));
userReq.push(new UserRequirement('none', 'หมวกไหมพรม', 'เครื่องนุ่งห่ม'));
// userReq.push(new UserRequirement('none', 'หมวกไหมพรม', 'เครื่องนุ่งห่ม'));
// userReq.push(new UserRequirement('none', 'หมวกไหมพรม', 'เครื่องนุ่งห่ม'));
// userReq.push(new UserRequirement('none', 'หมวกไหมพรม', 'เครื่องนุ่งห่ม'));
// userReq.push(new UserRequirement('none', 'หมวกไหมพรม', 'เครื่องนุ่งห่ม'));
// userReq.push(new UserRequirement('none', 'หมวกไหมพรม', 'เครื่องนุ่งห่ม'));
// userReq.push(new UserRequirement('none', 'หมวกไหมพรม', 'เครื่องนุ่งห่ม'));
// userReq.push(new UserRequirement('none', 'หมวกไหมพรม', 'เครื่องนุ่งห่ม'));
// userReq.push(new UserRequirement('none', 'หมวกไหมพรม', 'เครื่องนุ่งห่ม'));
// userReq.push(new UserRequirement('none', 'หมวกไหมพรม', 'เครื่องนุ่งห่ม'));
// userReq.push(new UserRequirement('none', 'หมวกไหมพรม', 'เครื่องนุ่งห่ม'));
// userReq.push(new UserRequirement('none', 'หมวกไหมพรม', 'เครื่องนุ่งห่ม'));
// userReq.push(new UserRequirement('none', 'หมวกไหมพรม', 'เครื่องนุ่งห่ม'));
// userReq.push(new UserRequirement('none', 'หมวกไหมพรม', 'เครื่องนุ่งห่ม'));
// userReq.push(new UserRequirement('none', 'หมวกไหมพรม', 'เครื่องนุ่งห่ม'));
// userReq.push(new UserRequirement('none', 'หมวกไหมพรม', 'เครื่องนุ่งห่ม'));
// userReq.push(new UserRequirement('none', 'หมวกไหมพรม', 'เครื่องนุ่งห่ม'));
// userReq.push(new UserRequirement('none', 'หมวกไหมพรม', 'เครื่องนุ่งห่ม'));
// userReq.push(new UserRequirement('none', 'หมวกไหมพรม', 'เครื่องนุ่งห่ม'));
// userReq.push(new UserRequirement('none', 'หมวกไหมพรม', 'เครื่องนุ่งห่ม'));
// userReq.push(new UserRequirement('none', 'หมวกไหมพรม', 'เครื่องนุ่งห่ม'));
// userReq.push(new UserRequirement('none', 'หมวกไหมพรม', 'เครื่องนุ่งห่ม'));
// userReq.push(new UserRequirement('none', 'หมวกไหมพรม', 'เครื่องนุ่งห่ม'));
// userReq.push(new UserRequirement('none', 'หมวกไหมพรม', 'เครื่องนุ่งห่ม'));
// userReq.push(new UserRequirement('none', 'หมวกไหมพรม', 'เครื่องนุ่งห่ม'));
// userReq.push(new UserRequirement('none', 'หมวกไหมพรม', 'เครื่องนุ่งห่ม'));
// userReq.push(new UserRequirement('none', 'หมวกไหมพรม', 'เครื่องนุ่งห่ม'));
// userReq.push(new UserRequirement('none', 'หมวกไหมพรม', 'เครื่องนุ่งห่ม'));