import { 
  Container,
  Title,
  Amount,
  Footer,
  Description
 } from './styles';

import {ProductDTO} from '../../dto/ProductDTO';

interface Props {
  data: ProductDTO;
}

export function ProductCard({data}:Props){
  return (
    <Container key={data.id}>
      <Title>{data.name}</Title>

      <Amount>R$ {data.price} </Amount>

      <Footer>
        <Title>Descrição</Title>
        <Description>{data.descriptions}</Description>
      </Footer>
    </Container>
  );
}