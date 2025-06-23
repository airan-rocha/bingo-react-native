import { useState } from "react";


function random (min: number, max: number) {
    const valor = Math.random() * (max - min) + min;
    return Math.round(valor);
}

function definirColuna (numeroSorteado:number):string {
    if (numeroSorteado <= 15){
        return "B"
    }else if (numeroSorteado <= 30){
        return "I"
    }else if (numeroSorteado <= 45){
        return "N"
    }else if (numeroSorteado <= 60){
        return "G"
    }else{
        return "O"
    }
}

export function sortearBimgo (
    sorteados: number[], 
    setUltimoSorteado: React.Dispatch<React.SetStateAction<number | undefined>>,
    ultimosSorteados: number[],
    setColuna: React.Dispatch<React.SetStateAction<string>>,
) {
    let sortear = true;
    if(sorteados.length < 75){

        while(sortear){
            let numeroSorteado = random(1, 75);
            
            if(sorteados.indexOf(numeroSorteado) == -1){
                sorteados.push(numeroSorteado);
                sortear = false;
                console.log(sorteados)
                console.log(numeroSorteado)

                setUltimoSorteado(numeroSorteado);
                setColuna(definirColuna(numeroSorteado));

                sorteados.sort((a,b) => a-b);

                //seta as configurações do ultimos numeros sorteados
                ultimosSorteados.push(numeroSorteado);

                if(ultimosSorteados.length > 6){
                    ultimosSorteados.shift()
                }
                //fim 
            }
        }
    }
}

export function resetBingo (
    setSorteados: React.Dispatch<React.SetStateAction<number[]>>, 
    setUltimoSorteado: React.Dispatch<React.SetStateAction<number | undefined>>,
    setUltimosSorteados: React.Dispatch<React.SetStateAction<number[]>>,
    setColuna: React.Dispatch<React.SetStateAction<string>>
) {
    setSorteados([]);
    setUltimoSorteado(undefined);
    setUltimosSorteados([]);
    setColuna("*");
}