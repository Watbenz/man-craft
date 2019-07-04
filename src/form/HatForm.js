import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Grid, Col, Footer, FooterTab, Button } from 'native-base';
import { Row } from 'react-native-easy-grid';


export default class Hatform extends Component {

    static navigationOptions = {
        title: 'หมวก',
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
                                        <Label>ทรงของหมวก</Label>
                                        <Input />
                                    </Item>
                                </Col>
                            </Row>
                            <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Item stackedLabel style={{ width: 100 }}>
                                    <Label>รูปแบบการทำ</Label>
                                    <Input placeholder='เช่น ถัก เย็บ' style={{ fontSize: 12 }} />
                                </Item>
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