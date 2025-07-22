/*
Formulários

O método onChange observa os inputs e toda vez que o conteúdo
muda, conseguimos capturar o conteúdo atual do INPUT.

Evento onSubmit no React:
Uma função de onSubmit
function onSubmit(e: React.FormEvent<HTMLElement>) {
    e.preventDefault();
}

E depois passamos para um botão ou formulário:

<button type="submit" onClick={onSubmit}>
  Salvar
</button>

Observação: O próprio React já passa o event (e) para os
métodos.

Outra forma de fazer isso, mas no Form
O próprio form tem o método onSubmit e podemos passar a 
função feita anteriormente:
<form onSubmit={onSubmit}>


Input não controlado x Input controlado

Input controlado -> Recebe o conteúdo atual e o conteúdo
também reflete nele. O Input controlado tem seu valor
controlado pelo estado do React.
Características:
O valor do input vem de uma variável de estado (useState).
A cada mudança no input, você atualiza o estado com onChange.
O React é quem "manda" no valor do campo.

Input não controlado -> Gerenciado pelo próprio DOM.
Características:
O React não controla diretamente o valor do input.
Você acessa o valor usando uma referência (ref).
O valor não precisa ser armazenado em um useState.

React Hook Form
É uma das bibliotecas mais utilizadas para gerenciar dados
de formulários.
Com o React Hook Form não é necessário criar estados para 
obter dados do formulário.

Algumas funcionalidades do React Hook Form:
Controller -> Controlar cada um dos inputs
useForm -> Extrair elementos que serão utilizados dentro 
do formulário.

useForm
Podemos utilizar o control em cada um dos inputs para que
os inputs entendam que devem reportar/enviar os dados ao
controller.

const { control } = useForm();

O Controller é um componente e passamos a propriedade control
para ele entender para quem irá fazer o envio:

<Controller
  control={control}
  name="name"
  render={({ field }) => (
    <input type="text" placeholder="Nome do evento" {...field} />
  )}
/>

No Controller, passamos três propriedades principais:
control: referência usada para o React Hook Form controlar 
o input.
name: nome do campo, que será a chave no objeto de dados 
enviados.
render: função responsável por renderizar o componente de 
input.
Dentro da função render, usamos a desestruturação para obter 
o objeto field, que contém todas as propriedades e métodos 
necessários para conectar o input ao React Hook Form 
(como onChange, onBlur, value, etc.). Ao espalhar {...field} 
no input, garantimos que ele seja totalmente controlado pelo 
formulário.

Outro método importante do useForm() é o handleSubmit.
O handleSubmit é responsável por processar o envio do 
formulário. Ele coleta os dados de todos os campos 
controlados pelo React Hook Form e os passa como argumento 
para a função onSubmit, geralmente chamada de data.
Assim, o handleSubmit garante que os dados estejam validados 
e prontos antes de serem enviados para a função onSubmit.

Definindo valores iniciais
const { control, handleSubmit } = useForm({
  defaultValues: {
    name: "",
  },
});

Tipagem do Formulário
type FormData = {
  name: string;
  date: string;
  subject: string;
  description: string;
};

Nesse type adicionamos todos os names que passamos.

const { control, handleSubmit } = useForm<FormData>({
  defaultValues: {
    name: "",
  },
});

function onSubmit(data: FormData) {
  console.log(data);
}

Controller em Select:
<Controller
          name="subject"
          render={({ field }) => (
            <select {...field}>
              <option value="" disabled>
                Selecione...
              </option>

              <option value="technology">React</option>
              <option value="entertainment">Node.js</option>
              <option value="business">Javascript</option>
              <option value="business">Typescript</option>
            </select>
          )}
        />

Controller em textarea:
<Controller
          control={control}
          name="description"
          render={({ field }) => (
            <textarea placeholder="Descrição" rows={4} {...field} />
          )}
        />

Observação: Não é obrigatório utilizar o defaultValues.

YUP
É uma biblioteca muito utilizada baseada em Schema para
validação. Bem parecida com o Zod.

Instalar o Yup
npm i @hookform/resolvers yup

Para utilizar o yup, importamos:
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

E passamos o resolver do yup:
const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      name: "",
      date: "",
      subject: "",
      description: "",
    },
    resolver: yupResolver(schema),
  });

O resolver recebe o yupResolver que recebe o schema:
const schema = yup.object({
  name: yup.string().required("Nome é obrigatório."),
  date: yup.string().required("Data é obrigatória"),
  subject: yup.string().required("Selecione um assunto"),
  description: yup
    .string()
    .required("Descrição é obrigatória")
    .min(10, "A descrição precisa ter pelo menos 10 caracteres"),
});

Exibir erros de validação
Utilizando o formState: { errors } podemos recuperar os erros
e exibi-los.

Dessa forma:
const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      date: "",
      subject: "",
      description: "",
    },
    resolver: yupResolver(schema),
  });

Exibimos a mensagem dessa forma:
{errors.name?.message && (
  <span className="error">{errors.name.message}</span>
)}

*/
