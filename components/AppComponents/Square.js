import React, { Component } from 'react';
import {
    Text,
    ImageBackground,
    TouchableHighlight
} from 'react-native';

export default class Square extends Component {

    // render() {
    //     return <TouchableHighlight onPress={this.props.onPress} style={[styles.emptySquare, { backgroundColor: this.props.color }]}>
    //         {this.props.source ? <ImageBackground source={{ uri: this.props.source }}style={{ flex: 1 }} >
    //         <Text>{this.props.name}</Text>
    //         </ImageBackground> : <Text>{this.props.name}</Text>}
    //     </TouchableHighlight>
    // }

    render() {
        return <TouchableHighlight onPress={this.props.onPress} 
            style={!this.props.source ? [styles.emptySquare, { backgroundColor: this.props.color }] : styles.photoSquare }>
            {this.props.source ? <ImageBackground source={{ uri: this.props.source }}style={{ flex: 1 }} >
            <Text style={styles.text}>{this.props.name}</Text>
            </ImageBackground> : <Text>{this.props.name}</Text>}
        </TouchableHighlight>
    }

}

// return  this.props.source ? 
// <TouchableHighlight style={styles.emptySquare}>
//     <ImageBackground source={{ uri: this.props.source }}
//     style={{ flex: 1 }} ><Text>{this.props.name}</Text></ImageBackground>
// </TouchableHighlight> : 
// <TouchableHighlight style={styles.photoSquare}>
//     <Text>{this.props.name}</Text>
// </TouchableHighlight>}


// source
// name
// ID
// functions
//color

const styles = {
    emptySquare: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    photoSquare: {
        flex: 1,
    },
    text: {
        position: "absolute", 
        bottom: 0, 
        right: 0,
        backgroundColor: "rgba(255, 255, 255, 0.3)"
    }
}