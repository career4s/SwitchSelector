import React,{useRef,useState,useEffect,Component} from 'react';
import {View, StyleSheet, Text,Button, TouchableOpacity, Animated, SafeAreaView,ScrollView,Alert} from "react-native";
 
import SwitchSelector from "react-native-switch-selector";
let burgers = require('C:/reactnativeprojects/experiment65/assets/burgers.png');
let salads = require('C:/reactnativeprojects/experiment65/assets/salads.png');
let pizzas = require('C:/reactnativeprojects/experiment65/assets/pizzas.png');

const images = {
   "burgers": burgers,
   "salads": salads,
   "pizzas": pizzas
};
const options =[
   { label: "burgers", value: "arc", imageIcon: images.burgers },
   { label: "salads", value: "ran", imageIcon: images.salads },
   { label: "pizzas", value: "bli", imageIcon: images.pizzas }
];
 
const MySwitchSelectorComponent = () => {       
      
      const [showburgers,setShowburgers] = useState(0);   
      const [showsalads,setShowsalads] = useState(0);   
      const [showpizzas,setShowpizzas] = useState(0);    
      const [mode,setMode] = useState("");   
    
      
            const Renderburgers = () => { 
               return (
                  <View>
                        <View  style={{  marginRight: 8,padding: 8 }}>  
                    <Text style={{fontWeight:'800',fontSize:14,color:'red', fontFamily: 'serif'}}>burgers</Text>
                    </View>
                  
                  </View>
               );
             };
      
             const Rendersalads = () => { 
               return (
                  <View>
                     <View  style={{  marginRight: 8,padding: 8 }}>  
                    <Text style={{fontWeight:'800',fontSize:14,color:'red', fontFamily: 'serif'}}>salads</Text>
                    </View>                 
                  
                  </View>
               );
             };
      
             const Renderpizzas = () => { 
               return (
                  <View>
                  <View  style={{  marginRight: 8,padding: 8 }}>  
                    <Text style={{fontWeight:'800',fontSize:14,color:'red', fontFamily: 'serif'}}>pizzas</Text>
                    </View>   
                  </View>
               );
             };
      
      return (
         <SafeAreaView style={styles.container}>
         <ScrollView>
             <View style={{paddingBottom:30}}>
<Text style={{backgroundColor:'green',color:'white',fontSize:40,fontWeight:'bold',textAlign:'center'}}>Ola America!</Text>
<Text style={{backgroundColor:'orange',fontStyle:'italic',textAlign:'center',fontSize:16, letterSpacing:5}}>Celebrating America's Finest Food!</Text> 
</View>
            <SwitchSelector
               initial={0}
                  textColor='#ccceeaa'
                  selectedColor='none'
                  buttonColor='#7a4'
                  borderColor='#fff'
                  fontWeight='strong'
                  hasPadding
                  options={options}         
                  onPress={(val) => setMode(val)}  
            />           
          
            {  mode == "arc"?  <Renderburgers/>: null   } 
            {  mode == "ran"?  <Rendersalads/>: null  } 
            {  mode == "bli"?  <Renderpizzas/>: null   } 
            </ScrollView>
         </SafeAreaView>
      )    
}

const styles = StyleSheet.create({
   container: {
      alignItems: "center",
      justifyContent: "center"
   },
});

export default MySwitchSelectorComponent;