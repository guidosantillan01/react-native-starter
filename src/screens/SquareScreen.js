import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number }
  // action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || =15 }

  switch (action.colorToChange) {
    case 'red':
      return { ...state, red: state.red + action.amount };
    case 'green':
      return { ...state, green: state.green + action.amount };
    case 'blue':
      return { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const increaseColor = (colorToChange, amount) => ({
  colorToChange,
  amount
});

const decreaseColor = (colorToChange, amount) => ({
  colorToChange,
  amount: amount * -1
});

const SquareScreen = () => {
  const initialState = { red: 0, green: 0, blue: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => dispatch(increaseColor('red', COLOR_INCREMENT))}
        onDecrease={() => dispatch(decreaseColor('red', COLOR_INCREMENT))}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => dispatch(increaseColor('green', COLOR_INCREMENT))}
        onDecrease={() => dispatch(decreaseColor('green', COLOR_INCREMENT))}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => dispatch(increaseColor('blue', COLOR_INCREMENT))}
        onDecrease={() => dispatch(decreaseColor('blue', COLOR_INCREMENT))}
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
