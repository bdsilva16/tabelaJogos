import React  from "react";
import { View, StyleSheet } from "react-native";
import {Image} from "expo-image"

interface Props{
    propsImage:any
}

export default function ImagComp(props:Props) {
    return (
        <View>
            <Image style={styles.image} source={props.propsImage} />
        </View>
    )
}
const styles = StyleSheet.create({

    image: {
        height: 50,
        width: 50,
        marginTop: 75,
    }

});
