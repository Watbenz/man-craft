import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Grid, Col } from 'native-base';
import { Row } from 'react-native-easy-grid';


export default class BasketForm extends Component {

    static navigationOptions = {
        title: 'ตะกร้า',
    };

    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Grid>
                            <Row>
                                <Col style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Item stackedLabel style={{ width: 75 }}>
                                        <Label>วัสดุที่ใช้</Label>
                                        <Input />
                                    </Item>
                                </Col>
                                <Col style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Item stackedLabel style={{ width: 75 }}>
                                        <Label>ทรงของตะกร้า</Label>
                                        <Input />
                                    </Item>
                                </Col>
                            </Row>
                            <Row style={{ marginTop: 20 }}>
                                <Col style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Item stackedLabel style={{ width: 50 }}>
                                        <Label>กว้าง (cm)</Label>
                                        <Input />
                                    </Item>
                                </Col>
                                <Col style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Item stackedLabel style={{ width: 50 }}>
                                        <Label>ยาว (cm)</Label>
                                        <Input />
                                    </Item>
                                </Col>
                                <Col style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Item stackedLabel style={{ width: 50 }}>
                                        <Label>สูง (cm)</Label>
                                        <Input />
                                    </Item>
                                </Col>
                            </Row>
                            <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Item stackedLabel style={{ width: 150 }}>
                                    <Label>เพิ่มเติม</Label>
                                    <Input />
                                </Item>
                            </Row>
                        </Grid>
                        <Button title='Creat requirement' />
                    </Form>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button vertical>
                            {/* <Icon name="home" /> */}
                            <Text>Create</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}