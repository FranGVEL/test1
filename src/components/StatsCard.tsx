import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  trend: number;
  Icon: LucideIcon;
}

export default function StatsCard({ title, value, trend, Icon }: StatsCardProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-gray-700 rounded-lg">
            <Icon className="h-6 w-6 text-blue-400" />
          </div>
          <div>
            <p className="text-gray-400 text-sm">{title}</p>
            <h3 className="text-2xl font-bold text-gray-100">{value}</h3>
          </div>
        </div>
        <div className={`text-sm ${trend >= 0 ? 'text-green-400' : 'text-red-400'}`}>
          {trend >= 0 ? '+' : ''}{trend}%
        </div>
      </div>
    </div>
  );
}