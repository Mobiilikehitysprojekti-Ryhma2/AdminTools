import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    SafeAreaView,
    Text,
    TouchableOpacity,
    StatusBar, Button, View
  } from "react-native";
  import * as ImagePicker from 'expo-image-picker';







const StoreuploadScreen = ({ navigation }) => {

    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);

    const pickImage = async () => {
  
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images', 'videos'],
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.canceled) {
        const pickedUri = result.assets[0].uri;
      setImage(pickedUri);
      uploadTo(pickedUri);
      }
    };

    const uploadTo = async (uri) => {
        setUploading(true);
       console.log("ilmaiselle pilvipalvelulle olisi tarvetta")
      };
    






    return (

            <SafeAreaView style={styles.container}>
                <View style={styles.topBar}>
                <Button
                                onPress={() => navigation.navigate("Select")}
                                title="Alkuvalikko"
                              />
                              </View>
              <View style={styles.textContainer}>
                <Text style={styles.title}>Avatar upload</Text>
                <Button title="Pick an image from camera roll" onPress={pickImage} />
                {uploading && <ActivityIndicator size="large" color="#0000ff" />}
        {image && <Image source={{ uri: image }} style={styles.image} />}
        {imageUrl && <Text style={{ marginTop: 10 }}>Image URL: {imageUrl}</Text>}
              </View>
          
            </SafeAreaView>
          );
        };
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      justifyContent: "center", 
      alignItems: "center", 
      padding: 20, 
    },
    textContainer: {
      marginBottom: 20, 
    },
    title: {
      fontSize: 24, 
      fontWeight: "bold", 
      textAlign: "center",
    },
    topBar: {
        position: "absolute",
        top: 10,
        left: 0,
        right: 0,
        alignItems: "center", 
        zIndex: 1, 
      },
  });
    export default StoreuploadScreen;