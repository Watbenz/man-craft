import React, { Component } from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Button } from 'react-native-elements'
import { Form, Container, Content } from 'native-base';


export default class Login extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            
            <View style={styles.container}>
                <View style={styles.backgroundContainer}>
                    <Image style={styles.bakcgroundImage} source={{uri:'https://scontent.fbkk2-8.fna.fbcdn.net/v/l/t1.15752-9/66180023_329950374616677_764427517816733696_n.jpg?_nc_cat=105&_nc_oc=AQncJLNRVw4et-VgpSI6G6m77zVlWUSQhVD-nMH586VRl-OSmoWZjauwQgu1PlkL1D8&_nc_ht=scontent.fbkk2-8.fna&oh=0d7b4b1fdf6382946a396946ef8417f5&oe=5D78BBD2'}} />
                </View>
                <View style={{marginBottom:35, width:80}}>
                    <Button title='ลูกค้า' onPress={() => navigate('Profile')}>
                    </Button>
                </View>
                <View style={{marginBottom:450, width:80}}>
                    <Button title='ช่าง' onPress={() => navigate('RequirementBoard')} />
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    backgroundContainer: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    }, 
    bakcgroundImage: {
        flex: 1, 
        width: null, 
        height: null
    },
    loginButton: {
        marginBottom: 40
    }
});