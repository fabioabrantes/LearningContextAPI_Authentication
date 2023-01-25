import React from 'react';

import {Container,ErrorText} from './styles';

interface Props{
  description: string | undefined;
}

export function ErrorInput({description}:Props) {
  
  return (
    <Container>
      <ErrorText>{description}</ErrorText>
    </Container>
  );
}
