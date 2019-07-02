import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Button } from 'react-native-elements'

export default class Login extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Grid>
                    <Row style={styles.container}>
                        <Text>Man Craft</Text>
                    </Row>

                    <Row style={styles.container}>
                        <Button title='ลูกค้า' onPress={() => navigate('Profile')}/>
                    </Row>

                    <Row style={styles.container}>
                        <Button title='ช่าง' onPress={() => navigate('RequirementBoard')}/>
                    </Row>
                </Grid>
                {/* <Button title='Go To Second' */}
                {/* onPress={() => navigate('Profile')} /> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  });