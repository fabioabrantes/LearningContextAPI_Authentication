import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ButtonProps{
  color?:string;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  width:100%;
  padding:19px;
  align-items:center;
  justify-content:center;
  background-color:${({color})=>color};
  margin-bottom:8px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({theme})=>theme.fonts.body};
  color: ${({theme})=> theme.colors.shape};
`;