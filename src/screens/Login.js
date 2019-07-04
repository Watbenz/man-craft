import React, { Component } from 'react';
import { Text, View, StyleSheet, InteractionManager } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Button } from 'react-native-elements'
import "firebase/database";
import firebase from 'firebase';

export default class Login extends Component {
    state = {
        data: ''
    }

    componentWillMount() {
        // InteractionManager.runAfterInteractions(() => {

        // })
        let db = firebase.database();
        db.ref('Messages/M1/MSS4').once('value').then((s) => {
            this.setState({data: s.val().toString()});
        });

    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Grid>
                    <Row style={styles.container}>
                        <Text>{this.state.data}</Text>
                    </Row>

                    <Row style={styles.container}>
                        <Button title='ลูกค้า' onPress={() => navigate('Profile')}/>
                    </Row>

                    <Row style={styles.container}>
                        <Button title='ช่าง' onPress={() => navigate('RequirementBoard')}/>
                    </Row>
                </Grid>
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