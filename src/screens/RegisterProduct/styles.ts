import styled from 'styled-components/native';
import { RFValue,RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex:1;
  background-color: ${({theme})=>theme.colors.background_primary};
`;

export const Header = styled.View`
  width:100%;
  height: ${RFPercentage(30)}px;
  justify-content:center;
  align-items:flex-start;
  flex-direction:row;
  background-color:${(props)=> props.theme.colors.secondary};
`;

export const UserContainer = styled.View`
  width: 100%;
  padding:0 24px;
  margin-top: 57px;
  justify-content:flex-start;
  align-items:center;
`;
export const UserInfo = styled.View`
  flex-direction: row;
  align-items:center;
`;

export const Photo = styled.Image`
  width:${RFValue(60)}px;
  height:${RFValue(60)}px;
  border-radius: 10px;
  
`;
export const User = styled.View`
  margin-left: 18px;
`;

export const UserName = styled.Text`
  color:white;
  font-size:${RFValue(18)}px;
  font-family:${(props)=> props.theme.fonts.heading};
`;

export const Product = styled.View`
  margin-top: 18px;
`;

export const ProductText = styled.Text`
  color:white;
  font-size:${RFValue(24)}px;
  font-family:${(props)=> props.theme.fonts.heading};
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