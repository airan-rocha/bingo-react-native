import React, { useEffect, useState } from 'react';
import { View, Text, Button, ImageBackground, ScrollView } from 'react-native';

import { styles } from './styles';
import { resetBingo, sortearBimgo } from './actions';
import { ButtonB } from '../ButtonB';
import bingoBackground from '../../../assets/bingoBackground.png'

export function BingoDesk() {
    const [sorteados, setSorteados] = useState<Array<number>>([]);
    const [ultimoSorteado, setUltimoSorteado] = useState<number | undefined>();
    const [ultimosSorteados, setUltimosSorteados] = useState<number[]>([]); 
    const [coluna, setColuna] = useState<string>("*");

    function UltimosSorteados () { 
        return(
            <>
                <Text>Bola da vez</Text>
                <View style={styles.boxUltimoSorteado}>
                    <Text style={styles.textColuna}>{coluna}</Text>
                    <Text style={styles.textUltimoSorteado}>{ultimoSorteado || "B"}</Text>
                </View>
                <Text style={styles.ultimosSorteadosTitle}>últimos números sorteados</Text>
                <View style={styles.ultimosSorteadosContainer}>
                    <Text style={styles.sorteadosText}>{ultimosSorteados[0] == ultimoSorteado? "B" : ultimosSorteados[0] || "B"}</Text>
                    <Text style={styles.sorteadosText}>{ultimosSorteados[1] == ultimoSorteado? "I" : ultimosSorteados[1] || "I"}</Text>
                    <Text style={styles.sorteadosText}>{ultimosSorteados[2] == ultimoSorteado? "N" : ultimosSorteados[2] || "N"}</Text>
                    <Text style={styles.sorteadosText}>{ultimosSorteados[3] == ultimoSorteado? "G" : ultimosSorteados[3] || "G"}</Text>
                    <Text style={styles.sorteadosText}>{ultimosSorteados[4] == ultimoSorteado? "O" : ultimosSorteados[4] || "O"}</Text>
                </View>
            </>
        )
    }

    function NumerosSorteados () {
        return (
            <>
                <Text style={styles.sorteadosTitle}>Números Sorteados</Text>
                <View style={styles.sorteadosContainer}>
                    <ImageBackground style={styles.sorteadosBgImage} resizeMode='cover' source={bingoBackground}>
                        <ScrollView>
                            <View style={styles.sorteadosView}>
                                {
                                    sorteados.map((value, index) => <Text key={index} style={styles.sorteadosText}>{value}</Text>)
                                }
                            </View>
                        </ScrollView>
                    </ImageBackground>
                </View>
                <ButtonB title='Sortear' size={30} onPress={() => sortearBimgo(sorteados, setUltimoSorteado, ultimosSorteados, setColuna)} />
            </>
        )
    }
    
  return (
    <View style={styles.container}>
        {UltimosSorteados()}
        <ButtonB title='Reset' color='#5c5c5c' onPress={() => resetBingo(setSorteados, setUltimoSorteado, setUltimosSorteados, setColuna)} />
        {NumerosSorteados()}
    </View>
  );
}