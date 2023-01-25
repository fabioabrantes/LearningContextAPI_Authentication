import styled from 'styled-components/native';
import {FlatList, FlatListProps} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {RFPercentage,RFValue} from 'react-native-responsive-fontsize';

import {ProductDTO} from '../../dto/ProductDTO';

export const Container = styled.View`
  flex:1;
  background-color:${({theme})=>theme.colors.background_primary};
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
  flex-direction: row;
  justify-content:space-between;
  align-items:center;
`;
export const UserInfo = styled.View`
  flex-direction: row;
  align-items:center;
`;

export const Photo = styled.Image`
  width:${RFValue(50)}px;
  height:${RFValue(50)}px;
  border-radius: 10px;
  
`;
export const User = styled.View`
  margin-left: 18px;
`;

export const UserGreeting = styled.Text`
  color:${(props)=> props.theme.colors.shape};
  font-family:${(props)=> props.theme.fonts.body}; 
  font-size:${RFValue(18)}px;
`;
export const UserName = styled.Text`
  color:white;
  font-size:${RFValue(18)}px;
  font-family:${(props)=> props.theme.fonts.heading};
`;

export const LogoutButton = styled.TouchableOpacity``;

export const IconPower = styled(Feather)`
   font-size:${RFValue(24)}px;
`;

export const Products = styled.View`
  flex:1;
  padding:0 24px;
  margin-top: 14px;
`;

export const Title = styled.Text`
  font-size:${RFValue(18)}px;
  font-family: ${({theme})=>theme.fonts.heading};
`;

export const ProductList = styled(
  FlatList as new (props:FlatListProps<ProductDTO>) => FlatList<ProductDTO>)``;