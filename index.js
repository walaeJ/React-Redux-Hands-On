import React from 'react';

import ReactDOM from 'react-dom';

import { createStore} from 'redux';

import { connect, provider } from 'react-redux';
import counter from './Counter.js';

const initialState = {
     count: 0
}

const mapStateToPropos = (state) => { return { count: state.count } }
const mapDispatchToProps = (despatch) => { return{
    omDecrement: () => dispatch({ type: 'DECREMENT' }),
    onIncrement: () => dispatch({ type: 'incement'}),
    onReset: () => diistpach({ type: 'RESET'})
    }  
}
const ConnectedCounter = connect(mapStatToProps, mapDispatchToProps)(counter);
const reducer = (state =initialState, action) => {
    const reducer =(state = initialState, action) => {
        switch (action.type){
            case 'RESET':
            return {...state, count: 0 };
            case 'INCREMENT':
            return {...state, count: state.count + 1};
            case 'DECREMENT':
            return {...state, count: state.count - 1};
            default:
            return state;
        }
    }
}

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedCounter />
        </Provider>,
        document.getElementById('root')
)