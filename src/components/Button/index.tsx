import React from 'react';
import {ActivityIndicator} from 'react-native'
import { TouchableOpacityProps } from 'react-native';
import {useTheme} from 'styled-components';

import { Container,Title } from './styles';

interface Props extends TouchableOpacityProps{
  title:string;
  color?:string;
  loading?:boolean;
}

export function Button({
  title,
  color,
  loading= false,
  ...rest
}:Props){
  const theme = useTheme();

  return (
    <Container 
      {...rest} 
      color={color? color: theme.colors.main}
      activeOpacity={0.5}
    >
      {
        loading ?
          <ActivityIndicator color={theme.colors.shape} />
        :
          <Title>{title}</Title>
      }      
    </Container>
  );
}