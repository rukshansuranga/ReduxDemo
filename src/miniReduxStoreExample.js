export default function createStore(reducer, preLoadedState){
    let state = preLoadedState;
    let listeners = []

    function getState(){
        return state;
    }

    function subscribe(listener){
        listeners.push(listener);

        return function unsubscribe(){
            const index = listeners.indexOf(listener);

            listeners.splice(index,1);
        }
    }

    function dispatch(action){
        state = reducer(state, action)
        listeners.forEach(listener => listener())
    }

    dispatch({type:'@@redux/INIT'})

    return { getState, subscribe, dispatch}
}