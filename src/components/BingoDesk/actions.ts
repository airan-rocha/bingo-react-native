import { useState } from "react";


function random (min: number, max: number) {
    const valor = Math.random() * (max - min) + min;
    return Math.round(valor);
}

export function sortearBimgo (
    sorteados: never[], 
    setUltimoSorteado: React.Dispatch<React.SetStateAction<undefined>>,
    ultimosSorteados: never[],
) {
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

                //seta as configurações do ultimos três numeros sorteados
                ultimosSorteados.push(numero);

                if(ultimosSorteados.length > 4){
                    ultimosSorteados.shift()
                }
                //fim 
            }
        }
    }
}

export function resetBingo (
    setSorteados: React.Dispatch<React.SetStateAction<never[]>>, 
    setUltimoSorteado: React.Dispatch<React.SetStateAction<undefined>>,
    setUltimosSorteados: React.Dispatch<React.SetStateAction<never[]>>
) {
    setSorteados([]);
    setUltimoSorteado(undefined);
    setUltimosSorteados([]);
}