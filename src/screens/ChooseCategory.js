import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Header, Content, Item, Input, Text, Footer, FooterTab, Icon, Button } from 'native-base';
import DropdownMenu from 'react-native-dropdown-menu';
import { colors } from 'react-native-elements';

export default class ChooseCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }
    static navigationOptions = {
        title: 'Choose Category',
        headerStyle: {
            backgroundColor: '#bfd8d5',
          }
    };
    render() {
        const { navigate } = this.props.navigation;
        var data = [["งานจักสาน", "งานไม้", "งานประดิษฐ์", "งานเซรามิก", "งานสิ่งทอ"]];
        var data2 = [["ตระกร้า", "หมวก", "ถุงมือ", "ถ้วย"]];
        return (
            <Container style={{backgroundColor:'#fcf8f3'}}>
                <Content>
                <View style={{ marginTop: 220, marginLeft: 70, width: 120, borderWidth:2, borderColor:'#bfd8d5' }}>
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
                <View style={{ marginLeft: 210, width: 100, marginTop: -51, borderWidth:2, borderColor:'#bfd8d5' }}>
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
                <Footer style={{backgroundColor:'#bfd8d5'}}>
                    <FooterTab>
                        <Button vertical onPress={() => navigate('Hat')}>
                            {/* <Icon name="home" /> */}
                            <Text>Create requirement</Text>
                        </Button>
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