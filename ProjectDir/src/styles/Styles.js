/**
 * Directory Organization Convention for React Native Projects
 * https://github.com/gurol/react-native-dir-convention
 *
 * Style Sheets
 *
 * Copyright (C) 2018 Gürol Canbek
 *
 * This file is licensed under
 *
 *     MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * @format
 * @flow
 */
import {
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import fontsSansSerif from '@styles/FontStyles';

const { width, height } = Dimensions.get('window');

// Based on
// https://stackoverflow.com/questions/33628677/react-native-responsive-font-size
// Use iPhone6 as base size which is 375 x 667
const baseWidth = 375;
const baseHeight = 667;

const scaleWidth = width / baseWidth;
const scaleHeight = height / baseHeight;
const scale = Math.min(scaleWidth, scaleHeight);

export const scaledSize = size => Math.ceil((size * scale));

// Put your color constants here. Examples:
// export const palette = [
//   // 0,     1,     
//   'black', 'green',
// ];

const containerBase = {
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const headingBase = {
  textAlign: 'center',
  color: 'black',
};

const styles = StyleSheet.create({
  container: {
    ...containerBase,
    backgroundColor: palette[1],
  },
  heading1: {
    ...headingBase,
    fontSize: 30,
    marginBottom: 5,
  },
  heading2: {
    ...headingBase,
    fontSize: 20,
    marginBottom: 3,
  },
  heading3: {
    ...headingBase,
    fontSize: 15,
    marginBottom: 1,
  },
  text: {
    fontSize: 10,
    marginBottom: 5,
    textAlign: 'center',
    color: palette[1],
  },
  blockText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: scaledSize(41),
    textAlign: 'center',
    color: palette[1],
  },
}); 

export default styles;

