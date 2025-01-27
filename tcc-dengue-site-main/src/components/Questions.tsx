"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

// Definindo as perguntas
const perguntas = [
  {
    id: 1,
    question: "Há quanto tempo você começou a sentir os sintomas?",
    options: ["Menos de 1 semana", "1 a 2 semanas", "Mais de 2 semanas"],
    weight: 0,
  },
  {
    id: 2,
    question: "Você está apresentando febre?",
    options: ["Sim", "Não"],
    weight: 1,
  },
  {
    id: 3,
    question: "Se sim, qual é a intensidade da febre?",
    options: [
      "Leve (38-38,5°C)",
      "Moderada (38,6-39°C)",
      "Alta (acima de 39°C)",
    ],
    weight: 0,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    condition: (answers: any) => answers[2] === "Sim",
  },
  {
    id: 4,
    question: "Você está sentindo dores musculares e articulares?",
    options: ["Sim", "Não"],
    weight: 1,
  },
  {
    id: 5,
    question: "Está tendo dores de cabeça intensas?",
    options: ["Sim", "Não"],
    weight: 1,
  },
  {
    id: 6,
    question: "Você notou manchas vermelhas na pele ou erupções cutâneas?",
    options: ["Sim", "Não"],
    weight: 1,
  },
  {
    id: 7,
    question: "Está experimentando dor atrás dos olhos?",
    options: ["Sim", "Não"],
    weight: 1,
  },
  {
    id: 8,
    question: "Você tem sentido cansaço extremo ou fraqueza?",
    options: ["Sim", "Não"],
    weight: 1,
  },
  {
    id: 9,
    question:
      "Está com sintomas gastrointestinais, como náuseas, vômitos ou diarreia?",
    options: ["Sim", "Não"],
    weight: 1,
  },
  {
    id: 10,
    question:
      "Você observou inchaço nas articulações ou em qualquer outra parte do corpo?",
    options: ["Sim", "Não"],
    weight: 1,
  },
  {
    id: 11,
    question:
      "Está com algum dos seguintes sintomas: conjuntivite, vermelhidão nos olhos ou sensibilidade à luz?",
    options: ["Sim", "Não"],
    weight: 1,
  },
  {
    id: 12,
    question:
      "Você teve contato recente com alguém que foi diagnosticado com dengue, zika ou chikungunya?",
    options: ["Sim", "Não"],
    weight: 1,
  },
  {
    id: 13,
    question:
      "Você mora ou esteve em uma área com surtos de dengue, zika ou chikungunya?",
    options: ["Sim", "Não"],
    weight: 1,
  },
  {
    id: 14,
    question:
      "Você teve algum histórico recente de viagens para áreas endêmicas?",
    options: ["Sim", "Não"],
    weight: 1,
  },
  // Continue para outras perguntas...
];

// Esquema de validação com Zod
const FormSchema = z.object({
  answers: z.record(z.string()), // Um objeto com respostas onde as chaves são os ids das perguntas
});

export function Questions() {
  const [pontuacao, setPontuacao] = useState(0);
  const [step, setStep] = useState(0);
  const { toast } = useToast()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      answers: {},
    },
  });

  // Função para avançar para a próxima pergunta e calcular a pontuação
  const handleAnswer = (questionId: number, answer: string) => {
    const currentQuestion = perguntas.find((q) => q.id === questionId);
    const newPontuacao =
      currentQuestion && answer === "Sim"
        ? pontuacao + currentQuestion.weight
        : pontuacao;

    setPontuacao(newPontuacao);
    setStep(step + 1); // Avança para a próxima pergunta
  };

  // Submissão do formulário ao completar as perguntas
  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    toast({
        description: "Seus dados foram enviados para analise. Agrademos sua colaboração.",
      })
  }

  // Renderização das perguntas
  const renderPergunta = () => {
    const pergunta = perguntas[step];

    if (!pergunta) return null;

    // Checagem de condição para exibir a pergunta
    if (pergunta.condition && !pergunta.condition(form.getValues("answers"))) {
      setStep(step + 1);
      return null;
    }

    return (
      <div className="flex justify-center items-center">
        <FormField
          key={pergunta.id}
          control={form.control}
          name={`answers.${pergunta.id}`}
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>{pergunta.question}</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={(value) => {
                    field.onChange(value);
                    handleAnswer(pergunta.id, value); // Processa a resposta e avança para a próxima pergunta
                  }}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  {pergunta.options.map((option, index) => (
                    <FormItem
                      key={index}
                      className="flex items-center space-x-3 space-y-0"
                    >
                      <FormControl>
                        <RadioGroupItem value={option} />
                      </FormControl>
                      <FormLabel className="font-normal">{option}</FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    );
  };

  // Renderização do resultado final
  const renderResult = () => {
    if (pontuacao >= 10) {
      return (
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-lg font-bold">Interpretação</h3>
          <p>
            Há uma possibilidade maior de você estar com uma das doenças
            transmitidas pelo mosquito Aedes aegypti (dengue, zika ou
            chikungunya).
          </p>
          <p>
            Recomendação: Procure um profissional de saúde para uma avaliação
            médica detalhada.
          </p>
        </div>
      );
    } else if (pontuacao >= 5) {
      return (
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-lg font-bold">Interpretação</h3>
          <p>
            É possível que você tenha uma infecção viral, mas a probabilidade de
            estar com dengue, zika ou chikungunya é menor.
          </p>
          <p>
            Recomendação: Continue monitorando seus sintomas e consulte um
            médico se eles persistirem.
          </p>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-lg font-bold">Interpretação</h3>
          <p>
            É improvável que você esteja com dengue, zika ou chikungunya, mas
            continue observando seu estado de saúde.
          </p>
          <p>Recomendação: Fique atento a qualquer mudança nos sintomas.</p>
        </div>
      );
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6 flex flex-col justify-center items-center">
        {/* Renderiza a pergunta atual ou o resultado final */}
        {step < perguntas.length ? renderPergunta() : renderResult()}

        {/* Botão para enviar o formulário após responder todas as perguntas */}
        {step >= perguntas.length && (
          <Button type="submit" className="mt-4">
            Enviar
          </Button>
        )}
      </form>
    </Form>
  );
}
