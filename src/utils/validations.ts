import * as Yup from 'yup';

export const schemaValidationSignIn = Yup.object({
   email: Yup.string()
        .email('email inválido')
        .required('Por favor, forneça um email!'),
  password: Yup.string()
        .min(5,'password menor que 5 caracteres')
        .max(10,'password maior que 10 caracteres')
        .required('Por favor, forneça uma senha!'),
});

export const schemaValidationRegister = Yup.object({
      name: Yup.string()
        .required('Por favor, forneça um nome!')
        .min(3,'o nome deve ser no minimo 3 caracteres'),
      email: Yup.string()
           .email('email inválido')
           .required('Por favor, forneça um email!'),
     password: Yup.string()
           .min(6,'password menor que 6 caracteres')
           .max(10,'password maior que 10 caracteres')
           .required('Por favor, forneça uma senha!'),
   });

   export const schemaValidationRegisterProduct = Yup.object({
      name: Yup.string()
            .required('Por favor, forneça o nome do produto!'),
      price: Yup.string()
            .required('Por favor, forneça o preço do produto!'),
     descriptions: Yup.string()
            .required('Por favor, forneça uma desrição do produto!'),
   });