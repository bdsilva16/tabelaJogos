import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import DepartureEntity from './src/entities/departure_entity';



export default function App({}) {

  const [departure, setDeparture] = useState<DepartureEntity[]>([]);


  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer test_0b076a34c16a9fdd087042df26b117");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders
    };

    let departurePosition: DepartureEntity[] = [];

    fetch("https://api.api-futebol.com.br/v1/campeonatos/10/tabela", requestOptions)
      .then(response => response.text())
      .then(result => JSON.parse(result))
      .then(dataJson => {
        dataJson.map((departure) => {

          const dataDeparture = {
            id: departure['campeonato']['campeonato_id'],
            team_shield_url:departure[''],
            team_name:departure[''],
            scoreboard:departure['placar']


          };

          departurePosition.push(dataDeparture);
        });
        setDeparture(departurePosition);
        console.log(departurePosition);
      })
      .catch(error => console.log('error', error));
  }, []);
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Champions League</Text>

      <View style={styles.card}>
      <Text style={styles.team_name}>{departure.item.team_name}</Text>


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

  }
});
