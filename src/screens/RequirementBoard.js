import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SearchBar, ButtonGroup } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, List, ListItem, Thumbnail, Left, Body, Right } from 'native-base';
import RequirementBox from '../components/RequirementBox'

export default class RequirementBoard extends Component {

    static navigationOptions = {
        title: 'Requirement Board',
        headerStyle: {
            backgroundColor: '#bfd8d5',
        }
    };

    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };
    render() {
        const { navigate } = this.props.navigation;
        let data = [{
            value: 'งานจักรสาน',
            message: 'ตะกร้าสานไม่ไผ่ ขนาด 50x40',
            imgPath: 'https://image.flaticon.com/icons/png/512/105/105291.png'

        }, {
            value: 'งานประดิษฐ์',
            message: 'โคมไฟตั้งหัวเตียงสีฟ้า',
            imgPath: 'https://scontent.fbkk2-6.fna.fbcdn.net/v/t1.15752-9/65780932_368791183822562_6388832052585693184_n.png?_nc_cat=107&_nc_oc=AQkJrCkT0bsN2EeMZNxxwwRHn29YkoGoduHFgp9lJUA5iUpmRf_MogbGU3BOmc0fUwE&_nc_ht=scontent.fbkk2-6.fna&oh=accbfa270eff27dedde6fcfc98d7d886&oe=5DB424B0'

        }, {
            value: 'งานเซรามิกซ์',
            message: 'ชุดถ้วยน้ำชาสีน้ำตาล',
            imgPath: 'https://scontent.fbkk2-6.fna.fbcdn.net/v/t1.15752-9/66440387_1392623720896153_4283970165382578176_n.png?_nc_cat=111&_nc_oc=AQmaHpPgvKoePPfFgyp0s_BCg_xWJyNKgZ_aPtWI1CJmshSK0jLsY40uxljJjbA23gg&_nc_ht=scontent.fbkk2-6.fna&oh=1ead5e30ae17d0e1e417925c896f75d1&oe=5DB8C1AD'

        }, , {
            value: 'งานสิ่งทอ',
            message: 'ถุงมือผ้าสำหรับเด็กสีชมพู',
            imgPath: 'https://cdn.fbsbx.com/v/t59.2708-21/64502229_456399811820454_710803601290690560_n.gif?_nc_cat=111&_nc_oc=AQm93WzyRjrLubC0hFl7nPIQLK1LGCEZCKeNnN1JNxcv5N_C6bfh6vgd6AIqOVlRlkf6ECPoD0RMFtk3lWQZFf4O&_nc_ht=cdn.fbsbx.com&oh=cf0d9ee83ac0db1198a5d44ec2e1289f&oe=5D209E3B'

        }];
        const { search } = this.state;

        return (
            <Container style={{ backgroundColor: '#fcf8f3' }}>
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

                <Container style={{ backgroundColor: '#fcf8f3', flex: 1 }}>
                    <Content>
                        <List>
                            {
                                data.map((item, i) => {
                                    return (
                                        <ListItem key={i}>
                                            <RequirementBox imgPath={item.imgPath}
                                                title={item.value}
                                                desc={item.message} />
                                        </ListItem>

                                    )
                                })
                            }
                        </List>
                    </Content>
                    <Footer style={{ backgroundColor: '#bfd8d5' }}>
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



// import React, { Component } from 'react';
// import { Text, View } from 'react-native';
// import { SearchBar, ButtonGroup } from 'react-native-elements';
// import { Dropdown } from 'react-native-material-dropdown';
// import { Container, Header, Content, Footer, FooterTab, Button, Icon, List, ListItem, Thumbnail, Left, Body, Right } from 'native-base';

// export default class RequirementBoard extends Component {
//     state = {
//         search: '',
//     };

//     // componentWillMount() {
//     //     let database = firebase.database();
//     //     database.ref('Messages/M1/MSS4').once('value')
//     //       .then((snapshot) => {
//     //         console.log(snapshot.val().toString())
//     //         this.setState({ massage: snapshot.val().toString() })
//     //       });
//     //   }

//     updateSearch = search => {
//         this.setState({ search });
//     };
//     render() {
//         const { navigate } = this.props.navigation;
//         let data = [{
//             value: 'งานจักสาน',
//         }, {
//             value: 'งานไม้',
//         }, {
//             value: 'งานประดิษฐ์',
//         }, {
//             value: 'งานเซรามิกซ์',
//         }, , {
//             value: 'งานสิ่งทอ',
//         }];
//         const { search } = this.state;

//         return (
//             
//                 <SearchBar
//                     placeholder="Type Here..."
//                     onChangeText={this.updateSearch}
//                     value={search}
//                 />
//                 <Dropdown
//                     styleName="horizontal"
//                     label='Filter'
//                     data={data}
//                     //mass = {this.state.messages}
//                 />

//                 
//                     <Content>
//                         <List>
//                             <ListItem onPress={() => navigate('Chat')}>
//                                 <Left>
//                                     <Thumbnail source={{ uri: 'https://image.flaticon.com/icons/png/512/105/105291.png' }} />
//                                 </Left>
//                                 <Body>
//                                     <Text>ตะกร้าสานไม่ไผ่ ขนาด 50x40</Text>
//                                 </Body>
//                                 <Right>
//                                     <Icon name="arrow-forward" />
//                                 </Right>
//                             </ListItem>
//                             <ListItem>
//                                 <Left>
//                                     <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXjf4qeNCuY4hJfF91HPLtNjLo274xKfO9cCKFtv25QgS3pTic' }} />
//                                 </Left>
//                                 <Body>
//                                     <Text>ถุงมือผ้าสำหรับเด็กสีชมพู</Text>
//                                 </Body>
//                                 <Right>
//                                     <Icon name="arrow-forward" />
//                                 </Right>
//                             </ListItem>
//                             <ListItem>
//                                 <Left>
//                                     <Thumbnail source={{ uri: 'https://cdn0.iconfinder.com/data/icons/thin-clothing/24/thin-0986_t-shirt-512.png' }} />
//                                 </Left>
//                                 <Body>
//                                     <Text>เสื้อถักไหมพรมตัวใหญ่สำหรับผู้หญิง</Text>
//                                 </Body>
//                                 <Right>
//                                     <Icon name="arrow-forward" />
//                                 </Right>
//                             </ListItem>
//                         </List>
//                     </Content>
//                     
//                         <FooterTab>
//                             <Button vertical>
//                                 <Icon name="home" />
//                                 <Text>home</Text>
//                             </Button>
//                             <Button vertical>
//                                 <Icon name="person" />
//                                 <Text>Profile</Text>
//                             </Button>
//                         </FooterTab>
//                     </Footer>
//                 </Container>
//             </Container>
//         );
//     }
// }