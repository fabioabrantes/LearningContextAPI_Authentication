import {useNavigation} from '@react-navigation/native';

import {
  Container,
  Title,
  ButtonBack,
  Icon
} from './styles';

interface Props{
  title:string;
  navigationPage:"Login" | "RegisterUser" | "Home";
}

export function Header({title,navigationPage}:Props){
  const navigation = useNavigation();
 
  function goBackToListProducts(){
    navigation.navigate(navigationPage);
  }
  
  return (
    <Container>
      <ButtonBack onPress={goBackToListProducts}>
        <Icon name="arrow-left" />
      </ButtonBack>
      <Title> {title} </Title>
    </Container>
  );
}