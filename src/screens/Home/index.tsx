import React, { useState } from 'react';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import { useTheme } from 'styled-components';
import {useFocusEffect} from '@react-navigation/native'
import {FlatList} from 'react-native';

import {useMyContext} from '../../context/AuthProvider';
import {ProductCard} from '../../components/ProductCard';
import {Load} from '../../components/Load';

import API from '../../api';
import {ProductDTO} from '../../dto/ProductDTO';

import { 
  Container,
  Header,
  UserContainer,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  LogoutButton,
  IconPower,
  Products,
  Title,
} from './styles';

interface User{
  id:number;
  name:string;
}
interface IProducts{
  products:ProductDTO[];
}

export function Home(){
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<IProducts>({} as IProducts);
  const [userAuth, setUserAuth] = useState<User | null>(null);
  
  const {user, deslogar} = useMyContext();
 
  const theme = useTheme();

  useFocusEffect(() => {
    setIsLoading(true);
    API.get('products/allByUser').then(response => {
      setProducts(response.data);
      setUserAuth(user);
    });
    setIsLoading(false);
  });

 
  async function goToPageLogin(){
    await deslogar();
  }

  return (
    <Container>
         <Header>
            <UserContainer>
              <UserInfo>
                <Photo source={{uri:'https://avatars.githubusercontent.com/u/62598805?v=4'}}/>
                <User>
                  <UserGreeting>Olá,</UserGreeting>
                  <UserName>{userAuth?.name}</UserName>
                </User>
              </UserInfo>

              <LogoutButton onPress={goToPageLogin}>
                <IconPower name="power" color={theme.colors.main_light}/>
              </LogoutButton>
            </UserContainer>
          </Header>
     
          <Products>
            <Title>Listagem de Produtos</Title>
            {
              isLoading ?
                <Load/>
              :
                <FlatList
                  data={products.products}
                  keyExtractor={(item ) =>String(item.id)}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{paddingBottom:getBottomSpace()}}
                  renderItem={({item})=>  <ProductCard data={item}/>}
                />
            }
          </Products>
    </Container>
  );
}