export interface ChartDataItem {
    dados: string;
    visitors: number;
    fill: string;
  }
  
  export interface ChartDataDocument {
    id?: string;
    chartData: ChartDataItem[];
  }
  
  export interface DadosDocument {
    id?: string;
    tipo: ChartDataItem[];
  }
  
  export interface DiseaseStats {
    title: string; 
    value: number; 
  }