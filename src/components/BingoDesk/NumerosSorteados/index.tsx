import React from 'react';
import { View, Text, ImageBackground, ScrollView } from 'react-native';

import { styles } from './styles';
import bingoBackground from '../../../../assets/bingoBackground.png'
import { ButtonB } from '../../ButtonB';
import { sortearBimgo } from '../actions';

type numerosSorteadosProps = {
    sorteados: number[];
    setUltimoSorteado: React.Dispatch<React.SetStateAction<number | undefined>>;
    ultimosSorteados: number[];
    setColuna: React.Dispatch<React.SetStateAction<string>>;
}

export default function NumerosSorteados(props: numerosSorteadosProps) {
    const {sorteados, setUltimoSorteado, ultimosSorteados, setColuna} = props

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
    );
}