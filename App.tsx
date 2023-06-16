import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import DepartureEntity from './src/entities/departure_entity';
import { Image } from 'expo-image';


export default function App() {

  const [departures, setDeparture] = useState<DepartureEntity[]>([]);


  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer test_0b076a34c16a9fdd087042df26b117");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders
    };

    let departuresList: DepartureEntity[] = [];

    fetch("https://api.api-futebol.com.br/v1/partidas/10", requestOptions)
      .then(response => response.text())
      .then(result => JSON.parse(result))
      .then(dataJson => {
        // console.log(dataJson)
        dataJson.map((departure) => {

          const dataDeparture: DepartureEntity = {

            partida_id: departure['partida_id'],
            campeonato: {
              campeonato_id: departure['campeonato']['campeonato_id'],
              nome: departure['campeonato']['nome'],
              slug: departure['campeonato']['slug'],
              nome_popular: departure['campeonato']['nome_popular'],
              fase_atual: {
                fase_id: departure['fase_atual']['fase_id'],
                nome: departure['fase_atual']['nome'],
                slug: departure['fase_atual']['slug'],
                tipo: departure['fase_atual']['tipo']
                // _link: /v1/campeonatos/10/fases/317
              }
            },
            placar: departure['placar'],
            time_mandante: {
              time_id: departure['time_mandante']['time_id'],
              nome_popular: departure['time_mandante']['nome_popular'],
              sigla: departure['time_mandante']['sigla'],
              escudo: departure['time_mandante']['escudo']
            },
            time_visitante: {
              time_id: departure['time_visitante']['time_id'],
              nome_popular: departure['time_visitante']['nome_popular'],
              sigla: departure['time_visitante']['sigla'],
              escudo: departure['time_visitante']['escudo']
            },
            placar_mandante: departure['placar_mandante'],
            placar_visitante: departure['placar_visitante']
          };


          departuresList.push(dataDeparture);
        });
        setDeparture(departuresList);
        console.log(departuresList);
      })
      .catch(error => console.log('error', error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Champions League</Text>
      <View style={styles.card}>
        <FlatList
          data={departures}
          keyExtractor={(item) => item.partida_id.toString()}
          renderItem={(departure) =>

            <View style={styles.item}>
              <Text>breno</Text>
              <Image source={{uri:departure.item.time_mandante.escudo}}/>
            </View>

          }
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#66748b',

  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    alignItems: 'center',
    marginTop: 60

  },
  card: {
    backgroundColor: '#fff',
    width: '80%',
    height: 180,
    borderRadius: 10,
    margin: 30

  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 5,
    paddingTop: 8,
    height: 50
  },
  team_name: {
    fontSize: 20,
    width: 180,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black'
  },
  team_shield: {
    width: 30,
    height: 30,
    marginRight: 15
  },

});
