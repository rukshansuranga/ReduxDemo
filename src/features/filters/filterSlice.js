const initialFilter = {
    status: 'All',
    colors: []
}


export default function filtersReducer(state = initialFilter, action) {

    switch (action.type) {

        case 'filters/statusFilterChanged':
            return {
                ...state,
                status: action.payload
            }

        case 'filters/colorFilterChanged':

        if(action.payload.changeType === 'added')
            return {
                ...state,
                colors: [...state.colors, action.payload.color]
            }

        default:
            return state;
    }
}