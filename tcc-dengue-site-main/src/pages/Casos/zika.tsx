import React, { useEffect, useState } from "react";
import { LabelList, Pie, PieChart } from "recharts";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Link } from "react-router-dom";

interface ChartDataItem {
  dados: string;
  visitors: number;
  fill: string;
}

export interface DiseaseStats {
  title: string; 
  value: number;
}

export interface DiseaseCategory {
  [key: string]: DiseaseStats[];
}

export interface DiseaseResponse {
  id: string;
  tipo: DiseaseCategory[];
}

const Zika: React.FC = () => {
  const [chartData, setChartData] = useState<ChartDataItem[]>([]);
  const [dados, setDados] = useState<DiseaseStats[]>([]);

  async function fetchZika() {
    try {
      const response = await axios.get("http://localhost:3000/disease/Zika");
      const fullData = response.data;
      console.log(fullData);
      const extractedData = fullData.map(
        (item: { chartData: unknown }) => item.chartData
      );
      setChartData(extractedData.flat());
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }

  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:3000/disease/Dados");
      const fullData: DiseaseResponse[] = response.data;
      console.log(fullData);
      const extractedData: DiseaseStats[] = fullData
        .flatMap((item) => item.tipo)
        .flatMap((category) => category["2"] || []);
  
      setDados(extractedData);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }

useEffect(() => {
  fetchZika();
    fetchData();
  }, []);

  const chartConfig = {
    visitors: {
      label: "Casos",
    },
    valid: {
      label: "Sim",
      color: "hsl(var(--primary))",
    },
    novalid: {
      label: "Não",
      color: "hsl(var(--accent-foreground))",
    },
  } satisfies ChartConfig;

  return (
    <div className="mx-auto container">
      <div className="max-w-44 flex items-center justify-center mt-8">
        <Link
          to="/AcompanharCasos"
          className="px-6 py-2 bg-cyan-900 rounded-lg text-white"
        >
          <p>Voltar</p>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h3 className="font-semibold my-4 text-3xl">Zika-Virus</h3>
        <div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4 mb-4">
            {dados.map((item, index) => (
              <Card
                key={index}
                className="flex flex-col items-center border border-blue-500 text-center"
              >
                <CardHeader className="pb-0">
                  <CardTitle className="text-sm text-blue-500">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 pb-2">
                  {/* Formata valor no padrão brasileiro (6.636.763) */}
                  <p className="text-3xl font-bold text-blue-500">
                    {item.value.toLocaleString("pt-BR")}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
              <CardTitle>Casos de Zika Confirmados</CardTitle>
              <CardDescription>Janeiro - Dezembro 2024</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
              <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square max-h-[300px] [&_.recharts-text]:fill-background"
              >
                <PieChart>
                  <ChartTooltip
                    content={
                      <ChartTooltipContent nameKey="visitors" hideLabel />
                    }
                  />
                  <Pie data={chartData} dataKey="visitors">
                    <LabelList
                      dataKey="dados"
                      className="fill-background"
                      stroke="none"
                      fontSize={12}
                      formatter={(value: keyof typeof chartConfig) =>
                        chartConfig[value]?.label
                      }
                    />
                  </Pie>
                </PieChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
              <p>
                Total de casos identificados:{" "}
                {chartData
                  .reduce((acc, cur) => acc + cur.visitors, 0)
                  .toLocaleString("pt-BR")}
              </p>
            </CardFooter>
          </Card>
        </div>
        <p className="mt-4">Todos os dados foram retirados do site do governo <a href="https://app.powerbi.com/view?r=eyJrIjoiYzQyOTI4M2ItZTQwMC00ODg4LWJiNTQtODc5MzljNWIzYzg3IiwidCI6IjlhNTU0YWQzLWI1MmItNDg2Mi1hMzZmLTg0ZDg5MWU1YzcwNSJ9&pageName=ReportSectionbd7616200acb303571fc">Site Oficial</a></p>
      </div>
    </div>
  );
};

export default Zika;
