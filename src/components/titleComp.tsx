import { Text, StyleSheet } from "react-native"

interface Props{
    propsItem:any
}

export default function TitleComp(props:Props) {
    return (
        <Text style={styles.title}>
            {props.propsItem.campeonato.nome}
        </Text>
    )
}
const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '700',
        textAlign:'center',
        marginTop: 70,
        margin:5

    },
});
