import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initalState = {
    number: 0,
    other: '...',
    user: null
}

function reducer (state, action) {

    switch(action.type) {
        case 'add2':
            return{...state, number:state.number + 2}
        case 'login':
            return {...state, user: {name: action.name}}
        default:
            return state
    }

}


const UseReducer = (props) => {

    const [state, exec] = useReducer(reducer, initalState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                {state.user ? 
                <span className='text'>{state.user.name}</span> :
                <span className="text">Usuario nao encontrado!</span>
                
            }
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => exec({type: 'login', name:'Sophia'})}>Login</button>
                    <button className="btn" onClick={() => exec({type: 'add2'})}>+2</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
