import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import { styles } from './styles';
import { BingoDesk } from '../../components/BingoDesk';

export default function Home() {



    return (
        <View style={styles.container}>
            <BingoDesk />
            <StatusBar style='auto' />
        </View>
    );
}