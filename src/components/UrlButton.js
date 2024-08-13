import { useCallback } from "react";
import { Button,Linking, StyleSheet, Text, TouchableOpacity } from "react-native";

export const UrlButton = ({url, children}) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);
  
    return <TouchableOpacity onPress={handlePress} >
        <Text style={styles.link}>
            {children}
        </Text>
    </TouchableOpacity>
  };

  const styles = StyleSheet.create({
    link: {
        color: '#2C7D09',
        textAlign: "center",
        fontSize: 20,
        textDecorationLine: 'underline'
        
    }
  })