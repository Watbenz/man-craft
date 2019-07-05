import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

export default class RequirementBox extends React.Component {
  render() {

    return (
    <TouchableOpacity>
        <View style={styles.container}>
            <Image
                style={styles.icon}
                source={{uri: this.props.imgPath}}
            />
            <View>
                <Text style={styles.header}>{this.props.title}</Text>
                <Text style={styles.body}>{this.props.desc}</Text>
            </View>
        </View>
    </TouchableOpacity>
    );
  }
}
 
const styles = StyleSheet.create({
      container:{
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#fff5cf',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#fff5cf',
      },icon:{
        width: 100,
        height: 100,
        margin: 10,
        borderRadius: 4,
        borderWidth: 0.5,
      },header:{
          fontSize: 30,
          color: '#000000',
          fontWeight: 'bold',
      },body:{
          fontSize: 10,
          color: '#C0C0C0'
      }
  });