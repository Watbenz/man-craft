import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { SearchBar, ButtonGroup } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';

export default class RequirementBoard extends Component {
    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };
    render() {
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
                />

                <Container>
                    <Content padder>
                        <Text>kapop</Text>
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