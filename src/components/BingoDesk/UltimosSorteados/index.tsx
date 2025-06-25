import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

type ultimosSorteadosTypes = {
    coluna: string;
    ultimoSorteado: number | undefined;
    ultimosSorteados: number[];
}

export default function UltimosSorteados(props: ultimosSorteadosTypes) {
    const {coluna, ultimoSorteado, ultimosSorteados} = props;

    return (
        <>
            <Text>Bola da vez</Text>
            <View style={styles.ultimoSorteadoContainer}>
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
  );
}