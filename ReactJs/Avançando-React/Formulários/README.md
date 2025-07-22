# React Js - Formulários

## Conceitos Fundamentais

### onChange
O método `onChange` observa os inputs e captura o conteúdo atual toda vez que há mudança.

### onSubmit
```javascript
function onSubmit(e: React.FormEvent<HTMLElement>) {
    e.preventDefault();
}
```

## Input Controlado vs Não Controlado

### Input Controlado
- Valor controlado pelo estado do React
- Usa `useState` para gerenciar o valor
- Atualiza estado com `onChange`

### Input Não Controlado
- Gerenciado pelo próprio DOM
- Acessa valor usando referência (`ref`)
- Não precisa de `useState`

## React Hook Form

Biblioteca para gerenciar formulários sem necessidade de estados.

### useForm
```javascript
const { control, handleSubmit } = useForm();
```

### Controller
```javascript
<Controller
  control={control}
  name="name"
  render={({ field }) => (
    <input type="text" placeholder="Nome" {...field} />
  )}
/>
```

### Tipagem
```javascript
type FormData = {
  name: string;
  date: string;
  subject: string;
  description: string;
};

const { control, handleSubmit } = useForm<FormData>({
  defaultValues: {
    name: "",
  },
});
```

## Validação com Yup

### Instalação
```bash
npm i @hookform/resolvers yup
```

### Schema de Validação
```javascript
const schema = yup.object({
  name: yup.string().required("Nome é obrigatório."),
  description: yup
    .string()
    .required("Descrição é obrigatória")
    .min(10, "Mínimo 10 caracteres"),
});
```

### Exibir Erros
```javascript
const { control, handleSubmit, formState: { errors } } = useForm({
  resolver: yupResolver(schema),
});

{errors.name?.message && (
  <span className="error">{errors.name.message}</span>
)}
```
