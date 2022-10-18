import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import './api/server'
import store from '../src/store'

import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// console.log('initial state', store.getState())

// const unsubscribe = store.subscribe(() => {
//   console.log('state after dispatch', store.getState());
// })

// store.dispatch({type:'todos/todoAdd', payload:'first task'})

// store.dispatch({type:'todos/todoAdd', payload:'second task'})

// store.dispatch({type:'todos/todoAdd', payload:'third task'})

// store.dispatch({ type: 'todos/todoToggled', payload: 0 })

// store.dispatch({ type: 'todos/todoToggled', payload: 1 })

// store.dispatch({ type: 'filters/statusFilterChanged', payload: 'Active' })

// store.dispatch({
//   type: 'filters/colorFilterChanged',
//   payload: { color: 'red', changeType: 'added' }
// })

// unsubscribe();

// store.dispatch({ type: 'todos/todoAdd', payload: 'Try creating a store' })

// console.log('final state', store.getState())

//------------------------------------

// console.log('Dispatching action')
// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })
// console.log('Dispatch complete')

//---------------------------------------

// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })
// // log: 'Hi!'

// console.log('State after dispatch: ', store.getState())
// // log: {todos: [...], filters: {status, colors}, meaningOfLife: 42}

//---------------------------------------

store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })
