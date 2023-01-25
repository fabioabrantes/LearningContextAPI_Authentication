import {useState} from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import { useTheme } from 'styled-components';

import {useNavigation} from '@react-navigation/native';

import {useForm} from'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {schemaValidationRegister} from '../../utils/validations';

import api from '../../api';

import {Button} from '../../components/Button';
import {InputForm} from '../../components/InputForm';


import { 
  Container,
  Header,
  UserContainer,
  User,
  UserGreeting,
  LogoutButton,
  Icon,
  HeaderSubtitle,
  Title,
  Form,
  Footer,
} from './styles';

type FormData = {
  name: string;
  email: string;
  password: string;
};

interface User{
  id:number;
  name:string;
}

export function RegisterUser() {
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();
  const theme = useTheme();


  const {
    control, 
    handleSubmit,
    formState: { errors } 
  } = useForm<FormData>({
    resolver:yupResolver(schemaValidationRegister)
  });
   
  function goToPageLogin(){
    navigation.navigate('Login');
  }

  async function handleRegisterUser({email,name,password}:FormData){
    const data = {
      name,
      email,
      password 
    }

    const user = await api.post('users/register',data);
    setIsLoading(false);
    console.log(user);

    navigation.navigate('Login');
  }


  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position" enabled>
              <Header>
                <UserContainer>
                  <User>
                      <UserGreeting>Tela de Cadastro</UserGreeting>
                  </User>
                  
                  <LogoutButton onPress={goToPageLogin}>
                    <Icon name="arrow-left" color={theme.colors.main_light}/>
                  </LogoutButton>
                </UserContainer>
              </Header>

              <HeaderSubtitle>
                <Title>
                  Faça seu Cadastro no sistema do IFPB.
                </Title>
              </HeaderSubtitle>

              <Form>
              <InputForm 
                  iconName="edit"
                  name="name"
                  control={control}
                  placeholder="Digite seu nome"
                  autoCorrect={false}/* não fica corrigindo palavras */
                  autoCapitalize="none" /* não fica induzindo a colocar a primeira letra maiúscula */
                  error={errors.name}
                />
                
                <InputForm 
                  iconName="mail"
                  name="email"
                  control={control}
                  placeholder="Digite seu E-mail"
                  keyboardType="email-address"
                  autoCorrect={false}
                  autoCapitalize="none" 
                  error={errors.email}
                />
                
                <InputForm 
                  iconName="lock"
                  name="password"
                  control={control}
                  placeholder="Digite sua Senha"
                  error={errors.password}
                />
              </Form>

              <Footer>
                <Button
                  title="Cadastrar"
                  onPress={handleSubmit(handleRegisterUser)}
                  loading={isLoading}
                />
              </Footer>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </Container>
  );
}