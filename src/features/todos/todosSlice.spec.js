import todosReducer from "./todosSlice";

test('Toggles todo based on id', () => {

    const initialState = [{ id: 0, text: 'Test text', completed: false }]

    const action ={type:'todos/todoToggled', payload:0}

    const newState = todosReducer(initialState, action);

    expect(newState[0].completed).toBe(true);

})