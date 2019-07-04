import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SearchBar, ButtonGroup } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, List, ListItem, Thumbnail, Left, Body, Right } from 'native-base';

export default class RequirementBoard extends Component {
    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };
    render() {
        const { navigate } = this.props.navigation;
        let data = [{
            value: 'งานจักสาน',
        }, {
            value: 'งานไม้',
        }, {
            value: 'งานประดิษฐ์',
        }, {
            value: 'งานเซรามิกซ์',
        }, , {
            value: 'งานสิ่งทอ',
        }];
        const { search } = this.state;

        return (
            <Container>
                <SearchBar
                    placeholder="Type Here..."
                    onChangeText={this.updateSearch}
                    value={search}
                />
                <Dropdown
                    styleName="horizontal"
                    label='Filter'
                    data={data}
                    mass={this.state.messages}
                />

                <Container>
                    <Content>
                        <List>
                            {/* <ListItem onPress={() => navigate('Chat')}>
                                <Left>
                                    <Thumbnail source={{ uri: 'https://image.flaticon.com/icons/png/512/105/105291.png' }} />
                                </Left>
                                <Body>
                                    <Text>ตะกร้าสานไม่ไผ่ ขนาด 50x40</Text>
                                </Body>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXjf4qeNCuY4hJfF91HPLtNjLo274xKfO9cCKFtv25QgS3pTic' }} />
                                </Left>
                                <Body>
                                    <Text>ถุงมือผ้าสำหรับเด็กสีชมพู</Text>
                                </Body>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </ListItem> */}
                            <ListItem>
                        {/* <TouchableOpacity>
        <View style={styles.container}>
            <Image
                style={styles.icon}
                source={require(this.props.pathImage)}
            />
            <View>
                <Text style={styles.header}>{this.props.title}</Text>
                <Text style={styles.body}>{this.props.desc}</Text>
            </View>
        </View>
    </TouchableOpacity> */}
                                <Left>
                                    <Thumbnail source={{ uri: 'https://cdn0.iconfinder.com/data/icons/thin-clothing/24/thin-0986_t-shirt-512.png' }} />
                                </Left>
                                <Body>
                                    <Text>เสื้อถักไหมพรมตัวใหญ่สำหรับผู้หญิง</Text>
                                </Body>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </ListItem>
                        </List>
                    </Content>
                    <Footer>
                        <FooterTab>
                            <Button vertical>
                                <Icon name="home" />
                                <Text>home</Text>
                            </Button>
                            <Button vertical>
                                <Icon name="person" />
                                <Text>Profile</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                </Container>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#fff5cf',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#fff5cf',
    }, icon: {
        width: 100,
        height: 100,
        margin: 10,
        borderRadius: 4,
        borderWidth: 0.5,
    }, header: {
        fontSize: 30,
        color: '#000000',
        fontWeight: 'bold',
    }, body: {
        fontSize: 10,
        color: '#C0C0C0'
    }
});