import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './styles';
import { resetBingo, sortearBimgo } from './actions';

export function BingoDesk() {
    const [sorteados, setSorteados] = useState([]);
    const [ultimoSorteado, setUltimoSorteado] = useState();
    const [ultimosSorteados, setUltimosSorteados] = useState([]); 

    function UltimosSorteados () { 
        return(
            <>
                <Text>Bingo</Text>
                <Text style={styles.textUltimoSorteado}>{ultimoSorteado || "B"}</Text>
                <Text style={styles.ultimosSorteadosTitle}>últimos números sorteados</Text>
                <View style={styles.ultimosSorteadosContainer}>
                    <Text style={styles.sorteadosText}>{ultimosSorteados[0] == ultimoSorteado? "-" : ultimosSorteados[0] || "-"}</Text>
                    <Text style={styles.sorteadosText}>{ultimosSorteados[1] == ultimoSorteado? "-" : ultimosSorteados[1] || "-"}</Text>
                    <Text style={styles.sorteadosText}>{ultimosSorteados[2] == ultimoSorteado? "-" : ultimosSorteados[2] || "-"}</Text>
                </View>
            </>
        )
    }

    function NumerosSorteados () {
        return (
            <>
                <Text style={styles.sorteadosTitle}>Números Sorteados</Text>
                <View style={styles.sorteadosContainer}>
                {
                    sorteados.map((value, index) => <Text key={index} style={styles.sorteadosText}>{value}</Text>)
                }
                </View>
                <Button title='Sortear' onPress={() => sortearBimgo(sorteados, setUltimoSorteado, ultimosSorteados)} />
            </>
        )
    }
    
  return (
    <View style={styles.container}>
        {UltimosSorteados()}
        <Button title='Reset' onPress={() => resetBingo(setSorteados, setUltimoSorteado, setUltimosSorteados)} />
        {NumerosSorteados()}
    </View>
  );
}