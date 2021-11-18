import {Action } from './actions'; // importa o objeto Action
/*
Cria uma model tokenState
Tem uma propriedade chamada tokens
*/
export interface TokenState {
    tokens: string
}
/*
Defini para o state um valor inicial
no caso é vazio
*/
const initialState = {
    tokens: ""
}
/*
Faz as interceptações dos estados
Tem dois paramentros, state e a ação
State: tem como prop um TokenState no estado inicial
Ação: função do tipo Action que verifica se a action é do tipo
ADD_TOKEN e então ele faz a prop tokens receber o payload do
que tem dentro de actions
Se não ele retorna o state padrão que no caso é vazio
*/
export const tokenReducer = (state: TokenState = initialState, action: Action) =>{
    switch (action.type){
        case "ADD_TOKEN": {
            return {tokens: action.payload}
        }

        default:
            return state
    }
}