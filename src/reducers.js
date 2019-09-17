import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './Action';

const initialState = {
  VisibilityFilter: '',
  todos: [],
};
export default function todoApp(state = initialState, action) {
  console.log('type is', action.type);
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        VisibilityFilter: action.filter,
      });

    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false,
          },
        ],
      });
    default:
      return state;
  }
}
