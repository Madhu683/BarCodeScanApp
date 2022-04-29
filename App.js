import React, {useState} from 'react';
import {View,StyleSheet,Text,TextInput,Button} from 'react-native';
import axios from 'axios';

function App() {
    const productId='9573673706';
    const [price,setPrice] = useState('');
    const [note,setNote] = useState('');
    const submit=async()=>{
        const response = await axios.post(`https://sheet.best/api/sheets/aed70fb4-10e4-4ec5-acca-7e22ae10ddf6`, {
            productId,
            price,
            note
          });
    };
  return (
    <View style={styles.container}>
        <View style={styles.productBox}>
            <Text style={styles.productIdTitle}>Product Id:</Text>
            <Text style={styles.productIdTitle}>9573673706</Text>
        </View>
        <View style={styles.formBox}> 
        <TextInput placeholder='Price' value={price} onChangeText={text=>setPrice(text)} style={styles.input}/>
        <TextInput placeholder='Note' value={note} onChangeText={text=>setNote(text)} style={styles.input}/>

        </View>
        <Text>{price}</Text>
        <Text>{note}</Text>
        <View style={styles.ButtonBox}>
            <Button title='Scan again'/>
            <Button title='Confirm' onPress={submit} />
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
        },
        input:
        {
           backgroundColor:'white',
           paddingHorizontal:15,
           paddingVertical:10,
           borderRadius:10,
           marginTop:5,
        }

    }
)