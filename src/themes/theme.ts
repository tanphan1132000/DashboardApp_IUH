import {sizeNormalize} from '@utils';
import {Dimensions, TextStyle, ViewStyle} from 'react-native';

const {width, height} = Dimensions.get('window');

// const fontScale = (fontSize: number, scaleFactor = 0.5) => {
//   const scaledFontSize = width * scaleFactor * (fontSize / 375);
//   // return PixelRatio.roundToNearestPixel(scaledFontSize);
//   return Math.round(scaledFontSize);
// };

const line_heights = {
  small: 1.2,
  regular: 1.5,
};

// Spacing utilities
// export const spacing = (baseSpacing: number, scaleFactor = 0.5) => ({
//   xs: PixelRatio.roundToNearestPixel(baseSpacing * scaleFactor * 0.25),
//   s: PixelRatio.roundToNearestPixel(baseSpacing * scaleFactor * 0.5),
//   m: PixelRatio.roundToNearestPixel(baseSpacing * scaleFactor),
//   l: PixelRatio.roundToNearestPixel(baseSpacing * scaleFactor * 1.5),
//   xl: PixelRatio.roundToNearestPixel(baseSpacing * scaleFactor * 2),
// });

// TODO: change this color to match the brand color
export class ThemeUtils {
  //* PRIMARY */
  static primary = {
    50: '#e9f5fe',
    100: '#d3eafd',
    200: '#bce0fb',
    300: '#a6d5fa',
    400: '#90cbf9',
    500: '#7ac0f8',
    600: '#64b6f7',
    700: '#4dabf5',
    800: '#37a1f4',
    900: '#2196F3',
  };
  //* SECONDARY */
  static secondary = {
    50: '#FEF8EF',
    100: '#FEF6E1',
    200: '#FDF2D2',
    300: '#FDF2D2',
    400: '#FDEDC3',
    500: '#FBE5A4',
    600: '#FBE095',
    700: '#FADC86',
    800: '#FAD777',
    900: '#F9D368',
  };

  //* NEUTRAL */
  static neutral = {
    0: '#FFFFFF',
    10: '#F2F2F2',
    50: '#E9E9EA',
    100: '#D3D3D4',
    200: '#BCBEBF',
    300: '#A6A8A9',
    400: '#909294',
    500: '#7A7C7F',
    600: '#646669',
    700: '#4D5154',
    800: '#373B3E',
    900: '#212529',
  };
  //*  BLUE */
  static blue = {
    50: '#E2F1FD',
    100: '#C5E3FA',
    200: '#AAD5F9',
    300: '#8FC7F7',
    400: '#76BAF5',
    500: '#5CADF2',
    600: '#45A0F0',
    700: '#2F92EF',
    800: '#1A86ED',
    900: '#067AEA',
  };
  //* RED */
  static red = {
    50: '#FBE9EA',
    100: '#F8D2D4',
    200: '#F4BCBF',
    300: '#F0A5A9',
    400: '#ED8F94',
    500: '#E9787E',
    600: '#E56269',
    700: '#E14B53',
    800: '#DE353E',
    900: '#DA1E28',
  };
  //* YELLOW */
  static yellow = {
    50: '#FFF7ED',
    100: '#FFEDD5',
    200: '#FED7AA',
    300: '#FDBA74',
    400: '#FB923C',
    500: '#F97316',
    600: '#F97316',
    700: '#C2410C',
    800: '#9A3412',
    900: '#7C2D12',
  };
  //* GREEN */
  static green = {
    50: '#EEF6ED',
    100: '#DDEDDA',
    200: '#CBE4C8',
    300: '#BADBB6',
    400: '#A9D2A4',
    500: '#98C991',
    600: '#87C07F',
    700: '#75B76D',
    800: '#64AE5A',
    900: '#53A548',
  };

  static system_status_color = {
    error: '#D50000',
    success: '#00C853',
    warning: '#FFA726',
    info: '#29B6F6',
  };

  //* STATE */
  static states = {
    disabled: this.neutral[50],
    inactive: this.neutral[400],
  };

  //* */
  static background_color = this.neutral[10];
  //* TYPOGRAPHY */

  static font_weights = {
    regular: '400',
    medium: '500',
    semi_bold: '600',
    bold: '700',
  };
  /* FONT WEIGHT
    100 – Thin
    200 – Extra Light (Ultra Light)
    300 – Light
    400 – Normal
    500 – Medium
    600 – Semi Bold (Demi Bold)
    700 – Bold
    800 – Extra Bold (Ultra Bold)
    900 – Black (Heavy)
  */
  /**
   * Heading 1
   * @
   * fontSize: 40,
   * fontWeight: 'bold'
   */
  static font_regular: TextStyle = {
    fontFamily: 'SourceSans3-Regular',
    fontWeight: this.font_weights.regular as TextStyle['fontWeight'],
  };
  static font_medium: TextStyle = {
    fontFamily: 'SourceSans3-Medium',
    fontWeight: this.font_weights.medium as TextStyle['fontWeight'],
  };
  static font_semi_bold: TextStyle = {
    fontFamily: 'SourceSans3-SemiBold',
    fontWeight: this.font_weights.semi_bold as TextStyle['fontWeight'],
  };
  static font_bold: TextStyle = {
    fontFamily: 'SourceSans3-Bold',
    fontWeight: this.font_weights.bold as TextStyle['fontWeight'],
  };
  static text_h1: TextStyle = {
    // fontSize: fontScale(40),
    fontSize: sizeNormalize(40),
    fontWeight: this.font_weights.bold as TextStyle['fontWeight'],
    color: this.neutral[900],
    lineHeight: sizeNormalize(40, 'height') * line_heights.regular,
    ...this.font_bold,
  };
  /**
   * Heading 2 \n
   * fontSize: 32
   * fontWeight: 'bold'
   */
  static text_h2: TextStyle = {
    // fontSize: fontScale(32),
    fontSize: sizeNormalize(32),
    color: this.neutral[900],
    lineHeight: sizeNormalize(32, 'height') * line_heights.regular,
    ...this.font_bold,
  };
  /**
   * fontSize: 24
   * fontWeight: 'bold'
   */
  static text_h3: TextStyle = {
    // fontSize: fontScale(24),
    fontSize: sizeNormalize(24),
    color: this.neutral[900],
    lineHeight: sizeNormalize(24, 'height') * line_heights.regular,
    ...this.font_bold,
  };
  /**
   * fontSize: 18
   */
  static text_lg: TextStyle = {
    fontSize: sizeNormalize(18),
    lineHeight: sizeNormalize(18, 'height') * line_heights.regular,
    color: this.neutral[900],
    ...this.font_regular,
  };
  /**
   * fontSize: 18
   * fontWeight: 'semi bold'
   */
  static text_lg_semi_bold: TextStyle = {
    ...this.text_lg,
    ...this.font_semi_bold,
  };
  /**
   * fontSize: 18
   * fontWeight: 'bold'
   */
  static text_lg_bold: TextStyle = {
    ...this.text_lg,
    ...this.font_bold,
  };

  /**
   * fontSize: 16
   */
  static text_md: TextStyle = {
    fontSize: sizeNormalize(16),
    color: this.neutral[900],
    lineHeight: sizeNormalize(16, 'height') * line_heights.regular,
    ...this.font_regular,
  };
  /**
   * fontSize: 16
   * fontWeight: 'semi bold'
   */
  static text_md_semi_bold: TextStyle = {
    ...this.text_md,
    ...this.font_semi_bold,
  };
  /**
   * fontSize: 16
   * fontWeight: 'bold'
   */
  static text_md_bold: TextStyle = {
    ...this.text_md,
    ...this.font_bold,
  };
  /**
   * fontSize: 14
   */
  static text_sm: TextStyle = {
    fontSize: sizeNormalize(14),
    color: this.neutral[900],
    lineHeight: sizeNormalize(14, 'height') * line_heights.regular,
    ...this.font_regular,
  };
  /**
   * fontSize: 14
   * fontWeight: 'semi bold'
   */
  static text_sm_semi_bold: TextStyle = {
    ...this.text_sm,
    ...this.font_semi_bold,
  };
  /**
   * fontSize: 14
   * fontWeight: 'bold'
   */
  static text_sm_bold: TextStyle = {
    ...this.text_sm,
    ...this.font_bold,
  };
  /**
   * fontSize: 12
   */
  static text_xs: TextStyle = {
    fontSize: sizeNormalize(12),
    color: this.neutral[900],
    lineHeight: sizeNormalize(12, 'height') * line_heights.regular,
    ...this.font_regular,
  };
  /**
   * fontSize: 12
   * fontWeight: 'semi bold'
   */
  static text_xs_semi_bold: TextStyle = {
    ...this.text_xs,
    ...this.font_semi_bold,
  };
  /**
   * fontSize: 12
   * fontWeight: 'bold'
   */
  static text_xs_bold: TextStyle = {
    ...this.text_xs,
    ...this.font_bold,
  };
  /**
   * fontSize: 18
   * fontWeight: '600'
   */
  static text_button_lg: TextStyle = {
    ...this.text_lg,
    ...this.font_medium,
  };
  /**
   * fontSize: 16
   * fontWeight: '600'
   */
  static text_button_md: TextStyle = {
    ...this.text_md,
    ...this.font_medium,
  };
  /**
   * fontSize: 14
   * fontWeight: '600'
   */
  static text_button_sm: TextStyle = {
    ...this.text_sm,
    ...this.font_medium,
  };
  /**
   * fontSize: 14
   * fontWeight: '600'
   */
  static text_button_xs: TextStyle = {
    ...this.text_xs,
    ...this.font_medium,
  };
  //* TYPOGRAPHY - LINE HEIGHT */
  /**
   * lineHeight = 20
   */
  static text_line_height_sm = 20;
  /**
   * lineHeight = 24
   */
  static text_line_height_md = 24;
  /**
   * lineHeight = 28
   */
  static text_line_height_lg = 28;
  //* SPACING */
  // static spacing_16 = 16;
  // static spacing = AppUtils.isIOS() ? 20 : 10;
  static regular_fs = 16;
  //* BORDER RADIUS */
  static component_border_radius = 15;
  /**
   * borderRadius: 0
   */
  static rounded_none: ViewStyle = {
    borderRadius: 0,
  };
  /**
   * borderRadius: 2
   */
  static rounded_sm: ViewStyle = {
    borderRadius: 2,
  };
  /**
   * borderRadius: 4
   */
  static rounded: ViewStyle = {
    borderRadius: 4,
  };
  /**
   * borderRadius: 6
   */
  static rounded_md: ViewStyle = {
    borderRadius: 6,
  };
  /**
   * borderRadius: 8
   */
  static rounded_lg: ViewStyle = {
    borderRadius: 8,
  };
  /**
   * borderRadius: 12
   */
  static rounded_xl: ViewStyle = {
    borderRadius: 12,
  };
  /**
   * borderRadius: 16
   */
  static rounded_2xl: ViewStyle = {
    borderRadius: 16,
  };
  /**
   * borderRadius: 16
   */
  static rounded_3xl: ViewStyle = {
    borderRadius: 24,
  };
  /**
   * borderRadius: 9999
   */
  static rounded_full: ViewStyle = {
    borderRadius: 9999,
  };
  //* SIZE : HEIGHT - WIDTH */
  /**
   * height: 0
   */
  static h_0: ViewStyle = {
    height: 0,
  };
  /**
   * height: 1
   */
  static h_1: ViewStyle = {
    height: 1,
  };
  /**
   * height: 2
   */
  static h_2: ViewStyle = {
    height: 2,
  };
  /**
   * height: 4
   */
  static h_4: ViewStyle = {
    height: 4,
  };
  /**
   * height: 6
   */
  static h_6: ViewStyle = {
    height: 6,
  };
  /**
   * height: 8
   */
  static h_8: ViewStyle = {
    height: 8,
  };
  /**
   * height: 10
   */
  static h_10: ViewStyle = {
    height: 10,
  };
  /**
   * height: 12
   */
  static h_12: ViewStyle = {
    height: 12,
  };
  /**
   * height: 14
   */
  static h_14: ViewStyle = {
    height: 14,
  };
  /**
   * height: 14
   */
  static h_20: ViewStyle = {
    height: 20,
  };
  /**
   * height: 24
   */
  static h_24: ViewStyle = {
    height: 24,
  };
  /**
   * height: 28
   */
  static h_28: ViewStyle = {
    height: 28,
  };
  /**
   * height: 32
   */
  static h_32: ViewStyle = {
    height: 32,
  };
  /**
   * height: 36
   */
  static h_36: ViewStyle = {
    height: 36,
  };
  /**
   * height: 40
   */
  static h_40: ViewStyle = {
    height: 40,
  };
  /**
   * height: 44
   */
  static h_44: ViewStyle = {
    height: 44,
  };
  /**
   * height: 48
   */
  static h_48: ViewStyle = {
    height: 48,
  };
  /**
   * height: 56
   */
  static h_56: ViewStyle = {
    height: 56,
  };
  /**
   * height: 64
   */
  static h_64: ViewStyle = {
    height: 64,
  };
  /**
   * height: 72
   */
  static h_72: ViewStyle = {
    height: 72,
  };
  static component_control_height = 56;

  // static button_height = AppUtils.isIOS() ? 48 : 56;
  static button_height = 48;
  /**
   * @description Icon size
   */
  static icon = {
    /**
     * @description 16
     */
    sm: sizeNormalize(16),
    /**
     * @description 24
     */
    md: sizeNormalize(24),
    /**
     * @description 32
     */
    lg: sizeNormalize(32),
    /**
     * @description 40
     */
    xl: sizeNormalize(40),
    /**
     * @description 44
     */
    xxl: sizeNormalize(44),
    /**
     * @description 48
     */
    xxxl: sizeNormalize(48),
  };
  /**
   * size = 16
   */
  static spacing = sizeNormalize(16);

  static SCREEN_WIDTH = width;
  static SCREEN_HEIGHT = height;
}
