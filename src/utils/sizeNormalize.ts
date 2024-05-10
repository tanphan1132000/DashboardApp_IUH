import {Dimensions, PixelRatio, ScaledSize} from 'react-native';

type Mode = 'width' | 'height';
type Scale = number;

//Based on iPhone 11 scale
const baseWidth = 414;
const baseHeight = 896;

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT}: ScaledSize =
  Dimensions.get('window');

const widthScale: Scale = SCREEN_WIDTH / baseWidth;
const heightScale: Scale = SCREEN_HEIGHT / baseHeight;

export const sizeNormalize = (size: number, based: Mode = 'width'): number => {
  const newSize: number =
    based === 'width' ? size * widthScale : size * heightScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};
