import { Svg, Path } from "react-native-svg";

export const GoBack = () => {
  return (
    <Svg
      style={{ flex: 1, position: 'absolute', top: 0, left: 0 }}
      width="44"
      height="44"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#000"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M9 14l-4 -4l4 -4" />
      <Path d="M5 10h11a4 4 0 1 1 0 8h-1" />
    </Svg>
  );
};