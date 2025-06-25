import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import { resetBingo } from './actions';
import { ButtonB } from '../ButtonB';
import UltimosSorteados from './UltimosSorteados';
import NumerosSorteados from './NumerosSorteados';

export function BingoDesk() {
    const [sorteados, setSorteados] = useState<Array<number>>([]);
    const [ultimoSorteado, setUltimoSorteado] = useState<number | undefined>();
    const [ultimosSorteados, setUltimosSorteados] = useState<number[]>([]); 
    const [coluna, setColuna] = useState<string>("*");
    
  return (
    <View style={styles.container}>
        <UltimosSorteados coluna={coluna} ultimoSorteado={ultimoSorteado} ultimosSorteados={ultimosSorteados} />
        <ButtonB title='Reset' color='#5c5c5c' onPress={() => resetBingo(setSorteados, setUltimoSorteado, setUltimosSorteados, setColuna)} />
        <NumerosSorteados sorteados={sorteados} setColuna={setColuna} setUltimoSorteado={setUltimoSorteado} ultimosSorteados={ultimosSorteados} />
    </View>
  );
}