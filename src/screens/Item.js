import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, Image } from 'react-native'
import { Thumbnail, Container } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class Item extends Component {
    componentWillMount() {
        this.check();
    }

    state = {
        item: this.props.userReq[this.props.dataAt],
        progess: this.props.userReq[this.props.dataAt].isOnWork,
        massage: '',
        nameImage: ''
    }

    check() {
        switch (this.state.progess) {
            case (0):
                this.setState({
                    massage: "wait for customer accept prototype",
                    nameImage: "prototypeCut.png"
                });
                break;
            case (1):
                this.setState({
                    massage: "customer accepted prototype",
                    nameImage: "prototypeCut.png"
                });
                break;
            case (2):
                this.setState({
                    massage: "customer accepted 50% of project",
                    nameImage: "Cut50.png"
                });
                break;
            case (3):
                this.setState({
                    massage: "customer accepted 100% of project",
                    nameImage: "Cut100.png"
                });
                break;
            case (4):
                this.setState({
                    massage: "send project",
                    nameImage: "deliveryCut.png"
                });
                break;
            case (5):
                this.setState({
                    massage: "receive project",
                    nameImage: "finishCut.png"
                });
                break;
        }
    }

    selectImageByTag() {
        switch (this.state.item.type) {
            case 'ตระกร้า':
                return <Thumbnail source={{ uri: 'https://image.flaticon.com/icons/png/512/105/105291.png' }} />;
            case 'ถุงมือ':
                return <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXjf4qeNCuY4hJfF91HPLtNjLo274xKfO9cCKFtv25QgS3pTic' }} />
            case 'เสื้อ':
                return <Thumbnail source={{ uri: 'https://cdn0.iconfinder.com/data/icons/thin-clothing/24/thin-0986_t-shirt-512.png' }} />
            default:
                return <Thumbnail source={{ uri: 'https://www.stickpng.com/assets/images/5a461402d099a2ad03f9c997.png' }} />
        }
    }

    render() {
        return (
            <Container>
                <Grid>
                    <Row>
                        <View style={styles.container}>
                            {this.selectImageByTag()}

                            <View style={styles.container}>

                                <Image
                                    style={{ width: 100, height: 100 }}
                                    source={require('../../asserts/' + this.state.nameImage)}
                                />
                                <Text>{this.state.massage}</Text>
                                <Text>Detail Requirement</Text>
                                <Button
                                    title={this.state.nameImage}
                                    color="#841584"
                                    accessibilityLabel="Learn more about this purple button"
                                >button</Button>
                            </View>
                        </View>
                    </Row>
                    <Row>
                        <View style={styles.container}>
                            <Text> {this.state.item.topic} </Text>
                        </View>
                    </Row>
                </Grid>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});





//   componentWillMount(){
//     this.check();
//   }

//   render() {

//     return (

//     );
//   }
// }

// const styles = StyleSheet.create({
//       container:{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         // backgroundColor: 'blue'
//       },
//       containerBox:{
//         //width: '50%',
//         //border: '1px solid black',
//         //margin: '10px',
//         alignItems: 'center'
//       }
//   });