// const initialTodos =[
//     { id: 0, text: 'Learn React', completed: true },
//     { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
//     { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
//   ]

const initialTodos = []

  function nextTodoId(todos){
    const maxId = todos.reduce((maxId, todo) => Math.max(maxId, todo.id), -1);

    return maxId + 1;
  }

export default function todosReducer(state=initialTodos, action){
    
    switch(action.type){
        case 'todos/todoAdded':
            return [
                ...state,
                {
                    id:nextTodoId(state),
                    text:action.payload,
                    completed:false
                }
            ]
           
        case 'todos/todoToggled':
            return state.map(todo => {
                if(todo.id !== action.payload){
                    return todo;
                }

                return{
                    ...todo,
                    completed:!todo.completed
                }
            })
        default:
            return state;
    }
}