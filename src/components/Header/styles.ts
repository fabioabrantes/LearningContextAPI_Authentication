import styled from 'styled-components/native';
import {RFValue,RFPercentage} from 'react-native-responsive-fontsize';
import {Feather} from '@expo/vector-icons';

export const Container = styled.View`
  width:100%;
  height: ${RFPercentage(30)}px;
  background-color:${(props)=> props.theme.colors.secondary};
  padding: 24px;
  padding-top: 44px;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${RFValue(20)}px;
  color:${({theme})=>theme.colors.title};
`;
export const Icon = styled(Feather)`
  color:${(props)=> props.theme.colors.secondary};
  font-size:${RFValue(24)}px;
  size: ${RFValue(24)}px;
`;
export const ButtonBack = styled.TouchableOpacity``;