import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {Checkbox } from "@/components/ui/checkbox";
// import { Input } from "@/components/ui/input";
import { Input } from "./ui/input";
import axios from "axios";

// Defina o esquema de validação do Zod
const FormSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  telefone: z.string().min(11, "Telefone é obrigatório"), // Considera a máscara
  cpf: z.string().min(11, "CPF é obrigatório"), // Considera a máscara
  idade: z.string()
  .min(1, "Idade é obrigatória")
  .transform((val) => Number(val)) // Transformar para número
  .refine((val) => !isNaN(val), "Idade inválida"), // Verifica se é um número válido
  endereco: z.string().min(1, "Endereço é obrigatório"),
  infos: z.boolean(),
});

export function SignInForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      cpf: "",
      idade: 0,
      endereco: "",
      infos: false
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const response = await axios.post('/save-user', data);
      console.log('Resposta do servidor:', response.data);
      alert("Dados salvos com sucesso!");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response) {
        console.error('Erro na resposta da API:', error.response.data);
        alert(`Erro: ${error.response.data.message}`);
      } else {
        console.error('Erro ao enviar dados:', error.message);
        alert("Houve um erro ao salvar os dados.");
      }
    }
  }

  return (
    <Card className="mx-auto max-w-xl">
      <CardHeader>
        <CardTitle className="text-xl">Deseja receber atualização</CardTitle>
        <CardDescription>Preencha os dados abaixo</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 flex flex-col justify-center items-center"
          >
            {/* Campo Nome */}
            <FormField
              control={form.control}
              name="nome"
              render={({ field }) => (
                <FormItem className="flex items-center gap-x-2">
                  <FormLabel className="w-24">Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu nome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Campo Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex items-center gap-x-2">
                  <FormLabel className="w-24">Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Seu email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Campo Telefone */}
            <FormField
              control={form.control}
              name="telefone"
              render={({ field }) => (
                <FormItem className="flex items-center gap-x-2">
                  <FormLabel className="w-24">Telefone</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu telefone" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Campo CPF */}
            <FormField
              control={form.control}
              name="cpf"
              render={({ field }) => (
                <FormItem className="flex items-center gap-x-2">
                  <FormLabel className="w-24">CPF</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu CPF" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Campo Idade */}
            <FormField
              control={form.control}
              name="idade"
              render={({ field }) => (
                <FormItem className="flex items-center gap-x-2">
                  <FormLabel className="w-24">Idade</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Sua idade" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Campo Endereço */}
            <FormField
              control={form.control}
              name="endereco"
              render={({ field }) => (
                <FormItem className="flex items-center gap-x-2">
                  <FormLabel className="w-24">Endereço</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu endereço" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
 <FormField
              control={form.control}
              name="infos"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-2 space-y-0 rounded-md border p-4 shadow">
                  <FormControl>
                  <Checkbox  
                  checked={field.value}
                  onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel className="">Deseja receber atualizações por email ou telefone?</FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Botão de Enviar */}
            <Button type="submit" className="w-full">
              Enviar
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
