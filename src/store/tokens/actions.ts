/* 
Ação de adicção do token
*/
/*
Objeto action com 2 propriedade
nome do tipo da ação "ADD_TOKEN"
payload de string, armazena o token
*/
export type Action = {type: "ADD_TOKEN"; payload: string};

/* 
Função addToken do tipo Action que vai ser evniado pelo Dispatch
que tem dois parametros, um é o type ADD_TOKEN
e o outro é o payload que vai receber e armazenar a variavel token
*/
export const addToken = (token: string): Action =>({
    type: "ADD_TOKEN",
    payload: token,
});