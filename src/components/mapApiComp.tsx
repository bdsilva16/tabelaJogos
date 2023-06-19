import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import CardComp from './cardComp';
import ImagComp from './imagComp';
import TitleComp from './titleComp';
import DepartureEntity from '../entities/departure_entity';


const imageChamp = [
  require('../../assets/champions.png')
]

export default function MapApiComp() {

  const [departures, setDeparture] = useState<DepartureEntity[]>([]);


  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer test_0b076a34c16a9fdd087042df26b117");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders
    };

    let departuresList: DepartureEntity[] = [];

    fetch("https://api.api-futebol.com.br/v1/ao-vivo", requestOptions)
      .then(response => response.text())
      .then(result => JSON.parse(result))
      .then(dataJson => {
        // console.log(dataJson)
        dataJson.map((departure: any) => {
          const dataDeparture: DepartureEntity = {
            partida_id: departure['partida_id'],
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

  const renderDeparture = ({ item }: { item: DepartureEntity }) => (
    <CardComp propsItem={item}/>
  );

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <ImagComp propsImage={imageChamp} />
        <TitleComp />
      </View>
      <FlatList
        data={departures}
        keyExtractor={(item) => item.partida_id.toString()}
        renderItem={renderDeparture}
      />
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
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
  }
});
