
import { Card } from "@/components/ui/card";

const vendas = [
  { id: 1, data: "2024-06-15 10:03", cliente: "João", total: 1450 }, // valor já convertido p/ Meticais
  { id: 2, data: "2024-06-15 12:17", cliente: "Maria", total: 630 },
  { id: 3, data: "2024-06-15 15:41", cliente: "Pedro", total: 1228.5 },
];

const Vendas = () => (
  <div className="max-w-[960px] mx-auto w-full mt-8">
    <h2 className="text-2xl font-bold mb-4">Vendas do Dia</h2>
    <Card className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-muted">
            <th className="py-3 px-4 text-left">Data/Hora</th>
            <th className="py-3 px-4 text-left">Cliente</th>
            <th className="py-3 px-4 text-left">Total (MT)</th>
          </tr>
        </thead>
        <tbody>
          {vendas.map((v) => (
            <tr key={v.id} className="border-t">
              <td className="py-2 px-4">{v.data}</td>
              <td className="py-2 px-4">{v.cliente}</td>
              <td className="py-2 px-4 font-medium text-green-800">MT {v.total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  </div>
);

export default Vendas;
