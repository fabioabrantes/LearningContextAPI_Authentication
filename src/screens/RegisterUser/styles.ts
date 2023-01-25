import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import { RFValue,RFPercentage } from 'react-native-responsive-fontsize';
import {Feather} from '@expo/vector-icons';

export const Container = styled.View`
  flex:1;
  background-color: ${({theme})=>theme.colors.background_primary};
`;

export const Header = styled.View`
  width:100%;
  height: ${RFPercentage(20)}px;
  justify-content:center;
  align-items:flex-start;
  flex-direction:row;
  background-color:${(props)=> props.theme.colors.secondary};
`;

export const UserContainer = styled.View`
  width: 100%;
  padding:0 24px;
  margin-top: 57px;
  flex-direction: row;
  justify-content:space-between;
  align-items:center;
`;

export const User = styled.View`
  flex-direction: row;
  align-items:center;
  margin-left: 18px;
`;

export const UserGreeting = styled.Text`
  color:${(props)=> props.theme.colors.shape};
  font-family:${(props)=> props.theme.fonts.heading}; 
  font-size:${RFValue(18)}px;
`;

export const LogoutButton = styled.TouchableOpacity``;

export const Icon = styled(Feather)`
   font-size:${RFValue(24)}px;
`;

export const HeaderSubtitle = styled.View`
  width:100%;
  padding-left: 20px;
  margin-top: ${getStatusBarHeight() + 50}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  font-family: ${({theme})=>theme.fonts.heading};
  color: ${({theme})=>theme.colors.title};
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({theme})=>theme.fonts.body};
  color: ${({theme})=>theme.colors.text};
  line-height: ${RFValue(25)}px;
  margin-top: 16px;
`;

export const Form = styled.View`
  width: 100%;
  margin: 64px 0;
`;

export const Footer = styled.View`
  padding:0 24px;
`;