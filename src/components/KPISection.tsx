import React from 'react';
import { TrendingUp, Users, Database, BarChart } from 'lucide-react';
import KPIChart from './KPIChart';
import StatsCard from './StatsCard';

export default function KPISection() {
  const monthlyData = {
    projects: {
      labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
      data: [35, 42, 45, 48, 52, 58],
    },
    clients: {
      labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
      data: [85, 90, 92, 95, 98, 100],
    },
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">
          Nuestro Impacto en Números
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <StatsCard
            title="Proyectos Activos"
            value="58"
            trend={12}
            Icon={TrendingUp}
          />
          <StatsCard
            title="Clientes Activos"
            value="100+"
            trend={8}
            Icon={Users}
          />
          <StatsCard
            title="Bases de Datos"
            value="250+"
            trend={15}
            Icon={Database}
          />
          <StatsCard
            title="Reportes Generados"
            value="1.2K"
            trend={24}
            Icon={BarChart}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <KPIChart
            title="Crecimiento de Proyectos"
            data={monthlyData.projects.data}
            labels={monthlyData.projects.labels}
            color="#3b82f6"
          />
          <KPIChart
            title="Satisfacción de Clientes"
            data={monthlyData.clients.data}
            labels={monthlyData.clients.labels}
            color="#10b981"
          />
        </div>
      </div>
    </section>
  );
}