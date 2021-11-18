/*
Armazenamento
*/
import {createStore} from 'redux';
import { tokenReducer } from './tokens/tokensReducer';

/*
Torna possivel fazer o gerenciamento dos estados da aplicação
pois esta passando o tokenReducer como parametro
*/
const store = createStore(tokenReducer);

export default store;