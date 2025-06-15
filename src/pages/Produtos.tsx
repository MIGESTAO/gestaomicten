
import { Plus } from "lucide-react";
import { Card } from "@/components/ui/card";

const produtos = [
  { id: 1, nome: "Arroz", estoque: 20, preco: 259 },
  { id: 2, nome: "Feijão", estoque: 5, preco: 125 },
  { id: 3, nome: "Óleo", estoque: 2, preco: 87.5 },
  { id: 4, nome: "Macarrão", estoque: 10, preco: 69.9 },
];

const Produtos = () => (
  <div className="max-w-[960px] mx-auto w-full mt-8">
    <h2 className="text-2xl font-bold mb-4">Produtos</h2>
    <button className="flex items-center gap-2 px-4 py-2 rounded bg-primary text-primary-foreground hover:bg-primary/90 transition mb-4">
      <Plus className="w-5 h-5" /> Novo Produto
    </button>
    <Card className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-muted">
            <th className="py-3 px-4 text-left">Nome</th>
            <th className="py-3 px-4 text-left">Estoque</th>
            <th className="py-3 px-4 text-left">Preço (MT)</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((p) => (
            <tr key={p.id} className="border-t">
              <td className="py-2 px-4">{p.nome}</td>
              <td className={`py-2 px-4 ${p.estoque < 5 ? "text-red-600 font-semibold" : ""}`}>{p.estoque}</td>
              <td className="py-2 px-4 font-medium text-blue-900">MT {p.preco.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  </div>
);

export default Produtos;
