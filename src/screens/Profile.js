import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Header, Content, Footer, FooterTab, Button, List } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';


export default class Profile extends Component {
    state = {
        userReq: this.props.userReq,
        customer: this.props.customer[0],
    }

    goToItem(i) {
        this.props.dispatch({
            type: 'SET_DATA_INDEX',
            payload: i
        })
        const { navigate } = this.props.navigation;
        navigate('Item');

    }

    static navigationOptions = {
        title: 'Profile',
    };

    render() {
        let items = this.state.userReq;
        return (
            <Container>
                <Content contentContainerStyle={{ flex: 1 }}>
                    <Grid>

                        <Row size={1} style={{ backgroundColor: 'white' }}>
                            <View style={[styles.container, {backgroundColor: '#DDD'}]}>
                                <TouchableOpacity style={styles.iconImg}>
                                    <Icon name={'person'} size={50} color="#01a699" />
                                </TouchableOpacity>
                                <Text>{this.state.customer.name}</Text>
                            </View>
                        </Row>

                        <Row size={2} style={{ backgroundColor: 'white' }}>
                            <ScrollView>
                                {/* <Text>{console.log(this.props.req.toString())}</Text> */}
                                <View style={styles.container}>
                                    <Text>Requirement</Text>
                                    {
                                        items.map((item, i) => {
                                            return (
                                                <TouchableOpacity style={styles.menu} key={i} onPress={() => this.goToItem(i)}>
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
                        <Button vertical onPress={() => this.props.navigation.navigate('Catagory')}>
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