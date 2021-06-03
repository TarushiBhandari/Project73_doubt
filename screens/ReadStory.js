import * as React from 'react';
import {View,Text,StyleSheet, FlatList, TouchableOpacity, TextInput} from 'react-native';
import db from '../config';

export default class SearchScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            allStories: [],
            lastVisibleStory: null,
            search: ''
        }
    }

    componentDidMount = async ()=>{
        const story = await db.collection("stories").limit(5).get();
        story.docs.map((doc)=>{
            this.setState({
                allStories: [],
                lastVisibleStory: doc
            });
        });

       
    }

    fetchMoreStories = async()=>{

        var text= this.state.search.toLowerCase();
        var enteredText= text.split("");

        if(enteredText[0].toLowerCase()=== title){
            const story= await db.collection("stories").where("title", "==", text).startAfter(this.state.lastVisibleStory).limit(3).get();
            story.docs.map((doc)=>{
                this.setState({
                    allStories: [...this.state.allStories, doc.data()],
                    lastVisibleStory: doc
                })
            })
        }
    }

    searchStories= async(text)=>{
        this.setState({
            allStories: [],
        });

        var enteredText= text.split("");
        var text= text.toLowerCase();

        if(enteredText[0].toLowerCase()===db.title){
            const story= await db.collection("stories").where("title", "==", text).limit(5).get();
            story.docs.map((doc)=>{
                this.setState({
                    allStories: [...this.state.allStories, doc.data()],
                    lastVisibleStory: doc
                })
                console.log(text)
            })
        }
    }

    render(){
        return(
           <View style = {styles.container}>
               <View style = {styles.searchBar}>

                   <TextInput 
                        style = {styles.bar}
                        placeholder= "Enter Story Title"
                        onChangeText ={(text)=>{this.setState({ search: text})}}
                   />

                   <TouchableOpacity
                     style={styles.searchButton}
                     onPress={()=>{
                         this.searchStories(this.state.search);
                     }}
                     >
                         <Text>Search</Text>

                   </TouchableOpacity>
               </View>
                <FlatList
                    data = {this.state.allStories}
                    renderItem = {({item})=>(
                        <View style={{borderBottomWidth:2}}>
                            <Text>{"Title: " +item.title}</Text>
                            <Text>{"Author: " +item.author}</Text>
                        </View>
                    )}

                    keyExtractor={(item,index)=> index.toString()}
                    onEndReached = {this.fetchMoreStories}
                    onEndReachedThreshold ={0.7}
                />
            </View>
           
        )
    }
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },

    searchBar: {
        flexDirection: 'row',
        height: 40,
        width: 'auto',
        borderWidth: 0.5,
        alignItems: 'center',
        backgroundColor: 'grey'
    },

    bar: {
        borderWidth: 2,
        height: 30,
        width: 300,
        paddingLeft: 10
    },

    searchButton: {
        borderWidth: 1,
        height: 30,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green'
    }
})