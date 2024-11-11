import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import { styles } from './styles';

type buttomProps = {
    title: string;
    onPress?: () => void;
    size?: number;
    color?: string;
    textColor?: string;
}

export function ButtonB(props: buttomProps) {
    const {title, onPress, size, color, textColor} = props;

    return (
        <TouchableOpacity style={[styles.container, {padding: size || 10 , backgroundColor: color || "#0679cb"}]} onPress={onPress}>
            <Text style={[styles.text, {color: textColor || "#ffffff"}]}>{title}</Text>
        </TouchableOpacity>
    );
}