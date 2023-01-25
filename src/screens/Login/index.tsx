import {useState} from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {useNavigation} from '@react-navigation/native'

import {useMyContext} from '../../context/AuthProvider';

import {useForm} from'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import {schemaValidationSignIn} from '../../utils/validations';

import {Button} from '../../components/Button';
import {InputForm} from '../../components/InputForm';

import { 
  Container,
  Header,
  Title,
  SubTitle,
  Form,
  Footer
} from './styles';

import {useTheme} from 'styled-components';

type FormDataLogin = {
  email: string;
  password: string;
};

export function Login() {
  const [isLoading, setIsLoading] =useState(false);

  const navigation = useNavigation();

  const {logar} = useMyContext();

  const theme = useTheme();

  const {
    control, 
    handleSubmit,
    formState: { errors } 
  } = useForm<FormDataLogin>({
    resolver:yupResolver(schemaValidationSignIn)
  });
  
  function handleCreateUser(){
    setIsLoading(true);
    navigation.navigate('RegisterUser');
    setIsLoading(false);
  }

  async function handleSignIn({email,password}:FormDataLogin){
    setIsLoading(true);
    await logar(email,password);
    setIsLoading(false);
  } 

  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position" enabled >
          <Header>
            <Title>IFPB - Campus Cajazeiras</Title>
            
            <SubTitle>
              Faça seu login para começar{'\n'} 
              uma experiência incrível.
            </SubTitle>
          </Header>

          <Form>
            <InputForm 
              iconName="mail"
              name="email"
              control={control}
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}/* não fica corrigindo palavras */
              autoCapitalize="none" /* não fica induzindo a colocar a primeira letra maiúscula */
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
              title="Login"
              onPress={handleSubmit(handleSignIn)}
              loading={isLoading}
            />

            <Button
              title="Criar conta gratuita"
              color={theme.colors.secondary}
              onPress={handleCreateUser}
            />
          </Footer>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container>
  );
}