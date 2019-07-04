import React, { Component } from 'react';
import { Text, View, StyleSheet, InteractionManager } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Button } from 'react-native-elements'
import "firebase/database";
import firebase from 'firebase';

export default class Login extends Component {
    state = {
        db: firebase.database()
    }

    // addData() {
    //     this.state.db.ref('new').child('ass').set({
    //         try: "Hello"
    //     });
    // }

    // componentWillMount() {
    //     this.state.db.ref('customer').once('value').then((s) => {
    //         let jsonStr = JSON.stringify(s.val());
    //         let json = JSON.parse(jsonStr);

    //         this.setState({data: json['6010405289'].toString()})

    //     });

    // }

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