import { View, Text, StyleSheet } from "react-native";
import { Image } from 'expo-image'
import TitleComp from "./titleComp";

interface Props {
  propsItem: any

}

export default function CardComp(props: Props) {
  return (
    <View>
     <TitleComp propsItem={props.propsItem}/>
      <View style={styles.card}>
        <View style={styles.item}>

          <View style={styles.team_shieldContainer}>
            <Image contentFit="contain" style={styles.team_shield} source={{ uri: props.propsItem.time_mandante.escudo }} />
            <Text style={styles.team_name}>{props.propsItem.time_mandante.nome_popular}</Text>
          </View>

          <Text style={styles.placar}>{props.propsItem.placar_mandante}</Text>
          <Text style={styles.placar}>:</Text>
          <Text style={styles.placar}>{props.propsItem.placar_visitante}</Text>

          <View style={styles.team_shieldContainer}>
            <Image contentFit="contain" style={styles.team_shield} source={{ uri: props.propsItem.time_visitante.escudo.toString() }} />
            <Text style={styles.team_name}>{props.propsItem.time_visitante.nome_popular}</Text>
          </View>
        </View>

      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    // aspectRatio:2.3,
    width: '90%',
    height: 140,
    borderRadius: 15,
    margin: 20,
    alignItems: 'center',
    marginTop: 25,
    borderColor: 'black',
    borderWidth: 3,
    elevation: 15,
    shadowColor: 'black',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  team_shield: {
    width: 80,
    height: 80,
    marginHorizontal: 20,
  },
  team_shieldContainer: {
    alignItems: 'center',
    margin: 10
  },
  team_name: {
    fontWeight: '700',
    fontSize: 15,
    margin: 5
  },
  placar: {
    fontWeight: '700',
    fontSize: 25,
    margin: 3
  }
});