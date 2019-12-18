import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number }
  // action === { type: 'CHANGE_RED' || 'CHANGE_GREEN' || 'CHANGE_BLUE', payload: 15 || -15 }

  switch (action.type) {
    case 'CHANGE_RED':
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case 'CHANGE_GREEN':
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case 'CHANGE_BLUE':
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const changeColor = (type, payload) => ({
  type,
  payload
});

const SquareScreen = () => {
  const initialState = { red: 0, green: 0, blue: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => dispatch(changeColor('CHANGE_RED', COLOR_INCREMENT))}
        onDecrease={() =>
          dispatch(changeColor('CHANGE_RED', -1 * COLOR_INCREMENT))
        }
      />
      <ColorCounter
        color="Green"
        onIncrease={() =>
          dispatch(changeColor('CHANGE_GREEN', COLOR_INCREMENT))
        }
        onDecrease={() =>
          dispatch(changeColor('CHANGE_GREEN', -1 * COLOR_INCREMENT))
        }
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => dispatch(changeColor('CHANGE_BLUE', COLOR_INCREMENT))}
        onDecrease={() =>
          dispatch(changeColor('CHANGE_BLUE', -1 * COLOR_INCREMENT))
        }
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`
        }}
      />
      <Text>
        The current color is: ({red}, {green}, {blue})
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
