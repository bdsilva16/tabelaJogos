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
        height: 60,
        width: 60,
        marginTop: 75,
    }

});
