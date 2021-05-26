import * as React from 'react';
import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class WriteStoryScreen extends React.Component{

    constructor(){
        super();
        this.state={
            title: '',
            author: '',
            story: ''
        }
    }

    buttonPressed=()=>{
        alert('Story Submitted');
        this.setState({
            title: '',
            author: '',
            story: ''
        })
    }

    
  submitStory= async()=>{
    db.collection("stories").add({
      'title':this.state.title,
      'author': this.state.author,
      'story': this.state.story
   });
  }
    render(){
        return(
        <View>
            <View>
        </View>

                <TextInput 
                placeholder="Story Title"
                style={styles.storyTitle}
                value={this.state.title}
                onChangeText={(text) => this.setState({ title: text })}
                />

                <TextInput 
                placeholder="Author Name"
                value={this.state.author}
                onChangeText={(text) => this.setState({ author: text })}
                style={{
                    width: 300,
                    height: 30,
                    borderWidth: 1.5,
                    fontSize: 20,
                    alignSelf: 'center',
                    marginTop: 30
                }}
                />

                <TextInput 
                placeholder="Story"
                value={this.state.story}
                multiline={true}
                style={styles.storyBox}
                onChangeText={(text) => this.setState({ story: text })}
                value={this.state.story}
                />

                <TouchableOpacity 
                style={styles.button}
                onPress={
                    this.buttonPressed
                }
                >
                    <Text 
                    style={styles.text}
                    onPress={this.submitStory}
                    >SUBMIT STORY</Text>
                </TouchableOpacity>
            </View>
            
        )
    }
}

const styles= StyleSheet.create({
    storyTitle: {
        width: 300,
        height: 30,
        borderWidth: 1.5,
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 100
    },

    storyBox: {
        width: 300,
        height: 200,
        borderWidth: 1.5,
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 60
    },

    text: {
        fontSize: 18,
        textAlign: 'center'
      },
    
      button: {
        justifyContent: 'center',
        alignSelf: 'center',
        borderWidth:2,
        borderRadius: 15,
        marginTop:10,
        width: 150,
        height: 40,
        backgroundColor: 'cyan',
        fontFamily: 'times new roman'
      }
})