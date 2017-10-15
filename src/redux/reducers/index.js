import { combineReducers } from 'redux';
import example from './ExampleReducer';

export default function getRootReducer(){
  return combineReducers({
    example
  });
}
