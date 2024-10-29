import styled from 'styled-components/native';
import {ColorProps} from '../../shared/type/types.ts';
import {Platform, StatusBar} from 'react-native';

interface ContainerProps {
  tabBarHeight: number;
}

export const HomeWrapper = styled.View<ContainerProps & ColorProps>`
  display: flex;

  background-color: ${({color}) => color};

  height: 100%;

  padding: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px 0
    ${({tabBarHeight}) => tabBarHeight}px 0;
`;
