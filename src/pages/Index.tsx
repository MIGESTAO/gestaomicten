
import { ShoppingBasket, List, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";

const metrics = [
  {
    icon: <List className="text-primary w-8 h-8" />,
    label: "Produtos",
    value: 34, // Exemplo
    hint: "Cadastrados",
  },
  {
    icon: <ShoppingBasket className="text-green-700 w-8 h-8" />,
    label: "Vendas Hoje",
    value: 12,
    hint: "MT 5230", // Meticais
  },
  {
    icon: <BarChart3 className="text-blue-600 w-8 h-8" />,
    label: "Estoque Baixo",
    value: 3,
    hint: "Faça reposição",
  },
];

const Index = () => {
  return (
    <div className="flex flex-col gap-8 w-full max-w-[1200px] mx-auto">
      <h1 className="text-3xl font-bold mt-4 mb-2 text-left">
        Bem-vindo(a) à Peixaria Micten!
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {metrics.map((m, idx) => (
          <Card key={idx} className="flex flex-row items-center gap-5 p-6 min-h-[110px]">
            {m.icon}
            <div>
              <span className="text-xl font-bold">{m.value}</span>
              <div className="text-muted-foreground">{m.label}</div>
              <div className="text-xs text-gray-400">{m.hint}</div>
            </div>
          </Card>
        ))}
      </div>
      <div className="bg-card rounded-xl py-6 px-6 shadow border mt-6 w-full">
        <h2 className="font-semibold text-lg mb-1">Resumo do dia</h2>
        <ul className="list-disc ml-6 mt-4 space-y-1 text-muted-foreground">
          <li>Caixa aberto às 08:00</li>
          <li>Vendas em andamento. Fluxo estável.</li>
          <li>3 produtos com estoque abaixo de 5 unidades.</li>
        </ul>
      </div>
    </div>
  );
};

export default Index;
