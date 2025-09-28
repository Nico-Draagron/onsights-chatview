import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { User, Zap, Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  chartUrl?: string;
  data?: any;
}

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.type === 'user';

  return (
    <div className={`flex gap-3 message-enter ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
          <Zap className="h-4 w-4 text-primary-foreground" />
        </div>
      )}
      
      <div className={`max-w-2xl ${isUser ? 'order-1' : ''}`}>
        <Card className={`p-4 ${
          isUser 
            ? 'bg-chat-user text-chat-user-foreground' 
            : 'bg-chat-assistant text-chat-assistant-foreground'
        }`}>
          <div className="space-y-3">
            <p className="text-sm leading-relaxed whitespace-pre-wrap">
              {message.content}
            </p>
            
            {/* Chart Display */}
            {message.chartUrl && (
              <div className="space-y-3">
                <div className="rounded-lg border bg-card p-4">
                  <img 
                    src={message.chartUrl} 
                    alt="Gráfico gerado" 
                    className="w-full rounded-md"
                  />
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="h-3 w-3 mr-1" />
                    Baixar
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="h-3 w-3 mr-1" />
                    Compartilhar
                  </Button>
                </div>
              </div>
            )}
            
            {/* Data Table */}
            {message.data && (
              <div className="rounded-lg border bg-card p-4">
                <h4 className="mb-2 text-sm font-medium">Dados Consultados</h4>
                <div className="overflow-x-auto">
                  <pre className="text-xs text-muted-foreground">
                    {JSON.stringify(message.data, null, 2)}
                  </pre>
                </div>
              </div>
            )}
          </div>
        </Card>
        
        <p className={`mt-1 text-xs text-muted-foreground ${isUser ? 'text-right' : 'text-left'}`}>
          {format(message.timestamp, 'HH:mm', { locale: ptBR })}
        </p>
      </div>
      
      {isUser && (
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted">
          <User className="h-4 w-4 text-muted-foreground" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;