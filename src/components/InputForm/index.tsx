import React from 'react';
import {Input, Props as InputCustomProps} from '../Input';
import {Control, Controller,FieldError} from'react-hook-form';
import {ErrorInput} from '../ErrorInput';

interface Props extends InputCustomProps{
  control:Control<any>;
  name:"email" | "password" | "name" | "price" | "descriptions";
  error?:FieldError;
}
export function InputForm({
  control,
  name,
  error,
  iconName,
  ...rest
}:Props){
  return (
    <>
      <Controller 
        control={control}
        render={({field:{onChange, onBlur,value}})=>(
          <Input 
            iconName = {iconName}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            {...rest}
          />
        )}
        name={name}
      />
      {
          !!error && <ErrorInput description={error.message}/>
      }
    </>
  );
}