import React, { useState } from 'react';

import Button from './src/components/Button';
import Display from './src/components/Display';
 import { Container, Linha } from './styles';

export default function Calculator() {
  const [operation, setOperation] = useState([]);

  

 
  useEffect(() => {

  }, [operation])
 
  function clearAll() {
   setOperation([]);
 }
 
 function cancelEntry(){
   setOperation(operation.slice(0, operation.length - 1));
 }
 
 function isOperator(value){
   return (['+', '-', '*', '%', '/'].indexOf(value) > -1);
   }
 
 
   function calc() {
 
   if(operation.length > 2) {
   
     setOperation([eval(operation.join(''))]);
 
 
   }else {
 
     return 
   }
   
   }
 
  function pushOperation(value){
     
 
     if(operation.length > 2){
 
     
 
      let result = eval(operation.join(''));
      
      setOperation([result, value]);
      
 
     } else if(value === '='){
 
       calc();
 
      
      
     }else  {
 
       setOperation([...operation, value]);
 
     }
   }
 
   function addDot(){
     let lastOperation = getLastOperation();
     if(typeof lastOperation === 'string' && lastOperation.split('').indexOf('.') > -1 ) return;
   
     if(isOperator(lastOperation) || !lastOperation){
   
       pushOperation('0.');
   
     } else{
       setLastOperation(lastOperation.toString() + '.');
   
     }
   
   }
 
 function addOperation(value){
 
 
   if(isNaN(getLastOperation())){
 
     if(isOperator(value)){
 
       setLastOperation(value);
 
     }else{
 
       pushOperation(value);
      
     }
 
   }else{
 
     if(isOperator(value)){
      
       pushOperation(value);
      
 
     }else{
 
      let newValue = getLastOperation() + value;
       setLastOperation(newValue);
     
 
     }
 
   } 
 
 }
 
 function getLastOperation(){
 
  return operation[operation.length - 1];
  
 }
 
 function setLastOperation(value){
   
   const newOperation = [...operation]
   
  newOperation[newOperation.length - 1] = value
  
  setOperation(newOperation);
  
 }
 

  return (
          <Container>
              <Display value={operation} />
              <Linha>
                <Button label='Ac' click={clearAll}  flex='2'/>
                <Button label='%' click={ addOperation} />
                <Button label='DEL' click={cancelEntry}/>
              </Linha>

              <Linha>
                <Button label='7' click={ addOperation}/>
                <Button label='8' click={ addOperation}/>
                <Button label='9' click={ addOperation}/>
                <Button label='/' bgColor='#DC143C' click={ addOperation}/>
              </Linha>

              <Linha>
                <Button label='4' click={ addOperation}/>
                <Button label='5' click={ addOperation}/>
                <Button label='6' click={ addOperation}/>
                <Button label='*' bgColor='#DC143C' click={ addOperation}/>
              </Linha>

              <Linha>
                <Button label='1' click={ addOperation}/>
                <Button label='2' click={ addOperation}/>
                <Button label='3' click={ addOperation}/>
                <Button label='-' bgColor='#DC143C' click={ addOperation}/>
              </Linha>

              <Linha>
                <Button label='0' click={ addOperation}/>
                <Button label='.' click={addDot}/>
                <Button label='=' bgColor='#960e6d' click={calc}/>
                <Button label='+' bgColor='#DC143C' click={ addOperation}/>
              </Linha>
              
          </Container>
  );
}
