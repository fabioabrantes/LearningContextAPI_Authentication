import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  padding: 17px 24px;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${RFValue(14)}px;
`;

export const Amount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${RFValue(20)}px;
  color: ${({ theme}) =>theme.colors.secondary};
  margin-top: 2px;
`;

export const Footer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 19px;
`;

export const Description = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-left: 17px;
  margin-top: 14px;
`;