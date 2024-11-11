import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Text, View, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export default function Home() {

    const random = (min: number, max: number) => {
        const valor = Math.random() * (max - min) + min;
        return Math.round(valor);
    }
      
    const [sorteados, setSorteados] = useState([]);
    const [ultimoSorteado, setUltimoSorteado] = useState();
    
    const sortearBimgo = () => {
        let sortear = true;
        if(sorteados.length < 75){

            while(sortear){
                let numero = random(1, 75);
                
                if(sorteados.indexOf(numero) == -1){
                    sorteados.push(numero);
                    sortear = false;
                    console.log(sorteados)
                    console.log(numero)
                    setUltimoSorteado(numero);
                    sorteados.sort((a,b) => a-b);
                }
            }
        }
    }

    const resetBingo = () => {
        setSorteados([]);
        setUltimoSorteado(undefined);
    }

    return (
        <View style={styles.container}>
            <Text>Bingo</Text>
            <Text style={styles.textUltimoSorteado}>{ultimoSorteado}</Text>
            <Button title='Reset' onPress={resetBingo} />
            <Text>Números Sorteados</Text>
            <View style={styles.sorteadosContainer}>
            {
                sorteados.map((value, index) => <Text key={index} style={styles.sorteadosText}>{value}</Text>)
            }
            </View>
            <Button title='Sortear' onPress={sortearBimgo} />
            <StatusBar style='auto' />
        </View>
    );
}