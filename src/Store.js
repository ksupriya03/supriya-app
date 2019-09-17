import { createStore } from 'redux';
import todoApp from './reducers';
import { addTodo, setVisibilityFilter, VisibilityFilters } from './Action';

const store = createStore(todoApp);
export default store;
