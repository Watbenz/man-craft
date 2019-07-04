import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Header, Content, Item, Input, Text, Footer, FooterTab, Icon, Button } from 'native-base';
import DropdownMenu from 'react-native-dropdown-menu';

export default class ChooseCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }
    render() {
        const { navigate } = this.props.navigation;
        var data = [["งานจักสาน", "งานไม้", "งานประดิษฐ์", "งานเซรามิก", "งานสิ่งทอ"]];
        var data2 = [["item1", "item2", "item3", "item4"]];
        return (
            <Container>
                <Content>
                <View style={{ marginTop: 220, marginLeft: 80, width: 120 }}>
                    <DropdownMenu
                        bgColor={'white'}
                        tintColor={'#666666'}
                        activityTintColor={'green'}
                        // arrowImg={}      
                        // checkImage={}   
                        // optionTextStyle={{color: '#333333'}}
                        // titleStyle={{color: '#333333'}} 
                        maxHeight={300}
                        handler={(selection, row) => this.setState({ text: data[selection][row] })}
                        data={data}
                    >
                    </DropdownMenu>
                </View>
                <View style={{ marginLeft: 200, width: 100, marginTop: -45 }}>
                    <DropdownMenu
                        bgColor={'white'}
                        tintColor={'#666666'}
                        activityTintColor={'green'}
                        // arrowImg={}      
                        // checkImage={}   
                        // optionTextStyle={{color: '#333333'}}
                        // titleStyle={{color: '#333333'}} 
                        maxHeight={300}
                        handler={(selection, row) => this.setState({ text: data[selection][row] })}
                        data={data2}
                    >
                    </DropdownMenu>
                </View>
                </Content>
                <Footer>
                    <FooterTab>
                        {/* <Button vertical onPress={() => navigate('Gloves')}>
                            <Icon name="home" />
                            <Text>Create requirement</Text>
                        </Button> */}
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});