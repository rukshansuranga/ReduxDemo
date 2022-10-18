import rootReducer from "./reducer";
import { createStore, compose, applyMiddleware } from "redux";
//import createStore from './miniReduxStoreExample'
import { sayHiOnDispatch, includeMeaningOfLife } from './exampleAddons/enhancers'
import { print1, print2, print3 } from './exampleAddons/middleware'
import { composeWithDevTools } from 'redux-devtools-extension'

// let preloadedState;

// const persistedTodosString = localStorage.getItem('todos');

// if (persistedTodosString) {
//     preloadedState = { 
//         todos: JSON.parse(persistedTodosString) 
//     }
// }

// const composeEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife);

// const store = createStore(rootReducer, undefined, composeEnhancer);

// const middlewareEnhancer = applyMiddleware(print1, print2, print3);
// const store = createStore(rootReducer, middlewareEnhancer);

// const loggerMiddleware = storeAPI => next => action => {
//     console.log('dispatching', action)
//     let result = next(action)
//     console.log('next state', result)
//     return result
//   }

//   const delayedMessageMiddleware = storeAPI => next => action => {
//     if (action.type === 'todos/todoAdded') {
//       setTimeout(() => {
//         console.log('Added a new todo: ', action.payload)
//       }, 3000)
//     }
  
//     return next(action)
//   }

const composeEnhancer = composeWithDevTools(
  applyMiddleware(print1,print2,print3)
)

  //const middlewareEnhancer = applyMiddleware(delayedMessageMiddleware)
  const store = createStore(rootReducer, composeEnhancer)

export default store;

function exampleMiddleware(storeAPI){
    return function wrapDispatch(next){
        return function handleAction(action){
            return next(action)
        }
    }
}

const anotherExampleMiddleware = storeAPI => next => action => {
    return next(action)
}

