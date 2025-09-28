import { Wind, Sun, Zap, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface QuickActionsProps {
  onQuickAction: (question: string) => void;
}

const quickQuestions = [
  {
    icon: Wind,
    text: "Geração eólica em agosto de 2025",
    question: "Qual foi a geração eólica total no mês de agosto de 2025?"
  },
  {
    icon: Sun,
    text: "Fator de capacidade solar",
    question: "Qual o fator de capacidade médio das usinas solares no último trimestre?"
  },
  {
    icon: Zap,
    text: "Restrições operacionais",
    question: "Quantos dias as usinas eólicas foram restringidas por constrained-off em setembro?"
  },
  {
    icon: BarChart3,
    text: "Ranking de usinas",
    question: "Quais são as 10 usinas com maior geração de energia renovável?"
  }
];

const QuickActions = ({ onQuickAction }: QuickActionsProps) => {
  return (
    <div className="border-t bg-muted/30 px-6 py-4">
      <div className="mx-auto max-w-4xl">
        <h3 className="mb-3 text-sm font-medium text-muted-foreground">
          Perguntas Sugeridas
        </h3>
        
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {quickQuestions.map((item, index) => (
            <Card
              key={index}
              className="cursor-pointer transition-all duration-fast hover:shadow-md hover:bg-card-hover"
              onClick={() => onQuickAction(item.question)}
            >
              <div className="p-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-sm font-medium leading-tight">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickActions;