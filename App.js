import React from 'react';
import {View,StyleSheet,Text,TextInput,Button} from 'react-native';
function Input({title,placeholder,secureTextEntry})
  {
      return(
          <View style={{height:82,width:'100%',backgroundColor:'white',marginBottom:16}}>
              <Text style={{
                            fontStyle:'normal',
                            fontWeight:'normal',
                            fontSize:15,
                            lineHeight:25,
                            letterSpacing:0.2,
                            marginBottom:6}}>{title}</Text>
              <TextInput style={{width:'100%',
                                 height:49,
                                 backgroundColor:'rgba(241,245,249,0.4)',
                                 borderWidth:1,
                                 borderColor:'#CBD5E1',
                                 borderRadius:10,
                                  padding:15,
                                 
                                 fontStyle:'normal',
                                  fontWeight:'normal',
                                 fontSize:15,
                                  lineHeight:24,
                                 letterSpacing:0.2}} 
                                 placeholder={placeholder}
                                 
                                 secureTextEntry={secureTextEntry}></TextInput>
          </View>
      )
  }  
function App() {
  return (
    <View style={styles.container}>
        <View style={styles.productBox}>
            <Text style={styles.productIdTitle}>Product Id:</Text>
            <Text style={styles.productIdTitle}>9573673706</Text>
        </View>
        <View style={styles.formBox}> 
        <Input title={'Price'} placeholder={'900'}/>
        <Input title={'Note'} placeholder={'remarks'}/>
        </View>
        <View style={styles.ButtonBox}>
            <Button title='Scan again'/>
            <Button title='Confirm' />
        </View>
       
    </View>
  )
}

export default App;
const styles=StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff',
        },
        productBox:{
            height:'20%',
            width:'90%',
            backgroundColor:'pink',
            marginHorizontal:'5%',
            marginVertical:'10%',
            alignItems:'center',
            justifyContent:'center',

        },
        productIdTitle:
        {
            fontSize:30,
        },
        formBox:
        {
           height:'40%',
           width:'90%',
           marginHorizontal:'5%',
           marginVertical:'10%',

        },
        ButtonBox:
        {
            height:'10%',
            width:'90%',
            marginHorizontal:'5%',
            marginVertical:'10%',
            flexDirection:'row',
        

            
        }

    }
)