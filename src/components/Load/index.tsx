import { ActivityIndicator } from 'react-native';
import {useTheme} from 'styled-components/native';

import {Container,Spinner} from './styles';

export const Load: React.FC = () => {
  
  const theme = useTheme();
  return (
    <Container>
      <Spinner 
        color={theme.colors.secondary}
        size="large"
      />
    </Container>
  );
}
