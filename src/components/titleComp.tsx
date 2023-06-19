import { Text, StyleSheet } from "react-native"

export default function TitleComp() {
    return (
        <Text style={styles.title}>
            Champions League
        </Text>
    )
}
const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '700',
        alignItems: 'center',
        marginTop: 70,
        margin: 10,
    },
});
