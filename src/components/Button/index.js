import React from 'react';

import { Container, Text } from './styles';

export default function Button({ label, click, flex, bgColor}) {

  let size = 1;
  if(flex) {
    size = parseInt(flex)
  }
   let bg = '#333';
   if(bgColor) {
     bg = bgColor
   }
  
 

  return (
        <Container 
        style={{ flex: size, backgroundColor: bg }}
         onPress={() => click(label)} >
            <Text>{label}</Text>
        </Container>
  );
}
