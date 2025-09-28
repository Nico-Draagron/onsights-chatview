import { useState } from "react";
import { Database, Download, FileText, TrendingUp, Wind, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const datasets = [
  {
    id: 'fator-capacidade-eolica',
    title: 'Fator de Capacidade - Geração Eólica',
    description: 'Dados de fator de capacidade das usinas eólicas por período',
    icon: Wind,
    lastUpdate: '2025-09-28',
    records: '45.2k',
    format: 'CSV',
  },
  {
    id: 'fator-capacidade-solar',
    title: 'Fator de Capacidade - Geração Solar',
    description: 'Dados de fator de capacidade das usinas fotovoltaicas',
    icon: Sun,
    lastUpdate: '2025-09-28',
    records: '32.1k',
    format: 'CSV',
  },
  {
    id: 'restricao-eolica',
    title: 'Restrições Operacionais - Eólicas',
    description: 'Restrições por constrained-off em usinas eólicas',
    icon: TrendingUp,
    lastUpdate: '2025-09-27',
    records: '12.8k',
    format: 'CSV',
  },
  {
    id: 'restricao-solar',
    title: 'Restrições Operacionais - Solares',
    description: 'Restrições por constrained-off em usinas fotovoltaicas',
    icon: TrendingUp,
    lastUpdate: '2025-09-27',
    records: '8.3k',
    format: 'CSV',
  },
];

const recentCharts = [
  {
    title: 'Geração Eólica por Estado',
    type: 'Barras',
    timestamp: '15:30',
    preview: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjEyMCI+PC9zdmc+'
  },
  {
    title: 'Evolução Temporal das Restrições',
    type: 'Linhas',
    timestamp: '14:22',
    preview: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjEyMCI+PC9zdmc+'
  },
];

const DataPanel = () => {
  const [activeTab, setActiveTab] = useState('datasets');

  return (
    <div className="h-full border-l bg-card/30">
      <div className="p-4">
        <div className="mb-4 flex items-center gap-3">
          <Database className="h-5 w-5 text-primary" />
          <h2 className="font-semibold">Dados & Visualizações</h2>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="datasets">Datasets</TabsTrigger>
            <TabsTrigger value="charts">Gráficos</TabsTrigger>
          </TabsList>

          <TabsContent value="datasets" className="mt-4">
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">
                Datasets Disponíveis
              </h3>
              
              {datasets.map((dataset) => (
                <Card key={dataset.id} className="transition-all hover:shadow-md">
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                          <dataset.icon className="h-4 w-4 text-primary" />
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="text-sm font-medium leading-tight">
                            {dataset.title}
                          </h4>
                          <p className="mt-1 text-xs text-muted-foreground">
                            {dataset.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-xs">
                            {dataset.format}
                          </Badge>
                          <span className="text-muted-foreground">
                            {dataset.records} registros
                          </span>
                        </div>
                        
                        <Button variant="ghost" size="sm">
                          <Download className="h-3 w-3" />
                        </Button>
                      </div>
                      
                      <div className="text-xs text-muted-foreground">
                        Atualizado: {dataset.lastUpdate}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <Button variant="outline" className="w-full">
                <FileText className="h-4 w-4 mr-2" />
                Ver Dicionários
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="charts" className="mt-4">
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">
                Últimos Gráficos
              </h3>
              
              {recentCharts.map((chart, index) => (
                <Card key={index} className="transition-all hover:shadow-md">
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className="aspect-[2/1] rounded-lg bg-muted/50 flex items-center justify-center">
                        <TrendingUp className="h-8 w-8 text-muted-foreground" />
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium">
                          {chart.title}
                        </h4>
                        <div className="flex items-center justify-between mt-1">
                          <Badge variant="outline" className="text-xs">
                            {chart.type}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {chart.timestamp}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Download className="h-3 w-3 mr-1" />
                          Baixar
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DataPanel;