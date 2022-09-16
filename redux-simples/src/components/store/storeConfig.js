import {createStore, combineReducers} from 'redux';

const reducers = combineReducers({
    numbers: function(state, action){
        console.log(state, ' ', action);
        return{
            min: 5,
            max: 30
        }
    } ,
    names: function(state, action){
        console.log(state, ' ', action);
        return[
            'Ana',
            'Bianca',
            'Felipe'
        ]
    }
});

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig