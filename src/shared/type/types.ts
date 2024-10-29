import {ImageURISource} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {MD3Colors, MD3Typescale} from 'react-native-paper/lib/typescript/types';
import * as React from 'react';

export interface ColorProps {
  color: string;
}

export interface PreviewImage {
  id: string;
  uri: ImageURISource['uri'];
}

export interface Size {
  height: number;
  width: number;
}

export interface Colors extends MD3Colors {}

export interface Typescale extends MD3Typescale {}

export interface ThemeBorders {
  inputBorderRadius: number;
  messageBorderRadius: number;
}

export interface ThemeIcons {
  attachmentButtonIcon?: () => React.ReactNode;
  deliveredIcon?: () => React.ReactNode;
  documentIcon?: () => React.ReactNode;
  errorIcon?: () => React.ReactNode;
  seenIcon?: () => React.ReactNode;
  sendButtonIcon?: () => React.ReactNode;
  sendingIcon?: () => React.ReactNode;
}

export interface ThemeInsets {
  messageInsetsHorizontal: number;
  messageInsetsVertical: number;
}

export interface Theme extends MD3Theme {
  colors: Colors;
  fonts: Typescale;
  borders: ThemeBorders;
  insets: ThemeInsets;
  icons?: ThemeIcons;
}
