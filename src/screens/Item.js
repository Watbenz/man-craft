import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, Image } from 'react-native'
import { Thumbnail, Container, Content, Footer, FooterTab } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class Item extends Component {
    componentWillMount() {
        this.check();
    }

    static navigationOptions = {
        title: 'Artisan',
        headerStyle: {
            backgroundColor: '#60a9a6'
        }
    };

    state = {
        item: this.props.userReq[this.props.dataAt],
        progess: this.props.userReq[this.props.dataAt].isOnWork,
        massage: '',
        uri: ''
    }

    check() {
        switch (this.state.progess) {
            case (0):
                this.setState({
                    massage: "wait for customer accept prototype",
                    uri: "https://scontent.fbkk2-7.fna.fbcdn.net/v/t1.15752-9/65812709_633460277132854_1617101860353605632_n.png?_nc_cat=106&_nc_oc=AQn-_8KvrZxCN_2oVejM3dUnjeKBryfRumyUhnHz8z16RG0T0tTNsxJJV3HJQfh_7oQ&_nc_ht=scontent.fbkk2-7.fna&oh=be73237282da88008c33299694543bda&oe=5DB22CE2"
                });
                break;
            case (1):
                this.setState({
                    massage: "customer accepted prototype",
                    uri: "https://scontent.fbkk2-7.fna.fbcdn.net/v/t1.15752-9/65812709_633460277132854_1617101860353605632_n.png?_nc_cat=106&_nc_oc=AQn-_8KvrZxCN_2oVejM3dUnjeKBryfRumyUhnHz8z16RG0T0tTNsxJJV3HJQfh_7oQ&_nc_ht=scontent.fbkk2-7.fna&oh=be73237282da88008c33299694543bda&oe=5DB22CE2"
                });
                break;
            case (2):
                this.setState({
                    massage: "customer accepted 50% of project",
                    uri: "https://scontent.fbkk2-8.fna.fbcdn.net/v/t1.15752-9/66281489_654660575040458_2440838010330152960_n.png?_nc_cat=103&_nc_oc=AQlwU4WvdnWeC47dPrC1sBgz8_KUtycnbJn_YFv7z9lw4Zuf6pupLJ8W7inGUh6CVqs&_nc_ht=scontent.fbkk2-8.fna&oh=590a44f49ca2d589eaa18f02f5aba20c&oe=5D823965"
                });
                break;
            case (3):
                this.setState({
                    massage: "customer accepted 100% of project",
                    uri: "https://scontent.fbkk2-8.fna.fbcdn.net/v/t1.15752-9/65811978_2126037337524253_5900063730623840256_n.png?_nc_cat=105&_nc_oc=AQkWFMPB9R9wPmAYgjlWupiUD3I5hRb0MVH8Km95LDP1guUtMbXJZY-kmg8QJ0hG07g&_nc_ht=scontent.fbkk2-8.fna&oh=a8c4ecf33ae2922103717da950b6038f&oe=5DB1E64F"
                });
                break;
            case (4):
                this.setState({
                    massage: "send project",
                    uri: "https://scontent.fbkk2-6.fna.fbcdn.net/v/t1.15752-9/65831111_2301352616772726_2363447819257249792_n.png?_nc_cat=104&_nc_oc=AQnCBq_Hau7NstdPlrZg-udtN2Ld6jQpLlKhk6Cx0MWsFJxAJOJm7dz545f7eu7xQe0&_nc_ht=scontent.fbkk2-6.fna&oh=6c75b2e8da8f4aa1f63a67b8de3f68bf&oe=5DAB8B6E"
                });
                break;
            case (5):
                this.setState({
                    massage: "receive project",
                    uri: "https://scontent.fbkk2-6.fna.fbcdn.net/v/t1.15752-9/65831111_2301352616772726_2363447819257249792_n.png?_nc_cat=104&_nc_oc=AQnCBq_Hau7NstdPlrZg-udtN2Ld6jQpLlKhk6Cx0MWsFJxAJOJm7dz545f7eu7xQe0&_nc_ht=scontent.fbkk2-6.fna&oh=6c75b2e8da8f4aa1f63a67b8de3f68bf&oe=5DAB8B6E"
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

            <Container style={{ flex: 1 }}>
                <Content contentContainerStyle={{ flex: 1 }}>
                    <Grid>
                        <Row>
                            <View style={styles.container}>

                                <View style={styles.container}>

                                    <Image
                                        style={{ width: 100, height: 100 }}
                                        source={{ uri: this.state.uri }}
                                    />
                                </View>
                            </View>
                        </Row>
                        <Row>
                            <View style={styles.container}>
                            {this.selectImageByTag()}
                                <Text> {this.state.item.topic} </Text>
                                <Text>{this.state.massage}</Text>
                            </View>
                        </Row>
                    </Grid>
                </Content>

                <Footer>
                    <FooterTab style={{ backgroundColor: '#841584', flex: 1, justifyContent: 'center' }}>
                        <Button
                            title={"Accept"}
                        >button</Button>
                    </FooterTab>
                </Footer>
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