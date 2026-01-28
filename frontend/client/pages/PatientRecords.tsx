import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Calendar, Eye, Activity, Waves } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// --- TYPES ---
interface AnalysisRecord {
  id: number;
  date: string;
  type: string;
  topDiagnosis: string;
  diagnostics: Array<{
    name: string;
    confidence: number;
  }>;
}

// --- MOCK DATA ---
const records: AnalysisRecord[] = [
  { id: 1, date: "2024-01-15", type: "X-ray Analysis", topDiagnosis: "COPD", diagnostics: [{ name: "COPD", confidence: 85 }, { name: "Asthma", confidence: 78 }, { name: "Nodules", confidence: 60 }] },
  { id: 2, date: "2024-01-10", type: "Lung Sound Recording", topDiagnosis: "Mild Congestion", diagnostics: [{ name: "Bronchitis", confidence: 72 }, { name: "Asthma", confidence: 65 }, { name: "Normal", confidence: 55 }] },
  { id: 3, date: "2024-01-05", type: "Combined Analysis", topDiagnosis: "Healthy", diagnostics: [{ name: "Normal", confidence: 92 }, { name: "Minor Inflammation", confidence: 35 }, { name: "Allergies", confidence: 28 }] },
  { id: 4, date: "2023-12-28", type: "Lung Sound Recording", topDiagnosis: "Wheezing", diagnostics: [{ name: "Asthma", confidence: 88 }, { name: "COPD", confidence: 40 }, { name: "Normal", confidence: 10 }] },
  { id: 5, date: "2023-12-15", type: "X-ray Analysis", topDiagnosis: "Pneumonia", diagnostics: [{ name: "Pneumonia", confidence: 95 }, { name: "Infection", confidence: 90 }, { name: "Normal", confidence: 5 }] },
];

const chartData = records.slice(0, 5).reverse().map(r => ({
  date: new Date(r.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
  crackles: r.diagnostics[0]?.confidence || 0,
  cough: r.diagnostics[1]?.confidence || 0,
  wheeze: r.diagnostics[2]?.confidence || 0,
}));

// --- DENSE ORIGINAL SPECTROGRAM COMPONENT ---
const DenseSpectrogram = ({ label }: { label: string }) => {
  const heatmapData = [
    [20, 30, 10, 80, 15], [25, 35, 15, 85, 20], [30, 40, 10, 90, 25],
    [40, 60, 20, 60, 80], [45, 65, 25, 55, 85], [50, 70, 30, 50, 90],
    [80, 50, 20, 30, 95], [85, 55, 25, 35, 90], [90, 45, 15, 25, 85],
  ];

  const getColor = (intensity: number) => {
    if (intensity < 30) return `bg-blue-900/80`;
    if (intensity < 50) return `bg-cyan-600/80`;
    if (intensity < 75) return `bg-yellow-400/80`;
    return `bg-red-500/90`;
  };

  return (
    <div className="flex flex-col bg-lungsense-blue p-3 rounded-lg shadow-lg">
      <div className="flex items-center gap-2 mb-2">
        <Waves className="w-3 h-3 text-cyan-400" />
        <span className="text-[10px] font-bold text-white uppercase tracking-wider">{label}</span>
      </div>
      <div className="flex gap-1 h-24">
        <div className="flex flex-col justify-between text-[8px] text-gray-400 font-mono pr-1 py-1">
          <span>2k</span>
          <span>800</span>
          <span>100</span>
        </div>
        {[0, 1, 2, 3, 4].map((colIndex) => (
          <div key={colIndex} className="flex-1 flex flex-col gap-[1px]">
            {heatmapData.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`flex-1 w-full rounded-[1px] transition-all hover:opacity-100 opacity-90 ${getColor(row[colIndex])}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function PatientRecords() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-[linear-gradient(135deg,#C9D4F4_0%,#ECEBFA_50%,#F5F2FD_100%)] overflow-hidden">
      <Sidebar />
      <main className="flex-1 md:ml-64 flex flex-col h-full">
        <div className="flex flex-col h-full p-4 md:p-8 space-y-6">

          <div className="flex-none flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900 font-display">Patient History</h1>
            <div className="w-10 h-10 bg-lungsense-blue rounded-full overflow-hidden">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" alt="User" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-none">
            {/* SPECTROGRAM SECTION */}
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-white/40 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-lungsense-blue" />
                  <h3 className="text-lg font-display font-bold text-gray-800">Acoustic Analysis</h3>
                </div>
                {/* COLOR LEGEND */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-blue-900 rounded-sm"></div>
                    <span className="text-[10px] text-gray-500 font-medium">Low</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-yellow-400 rounded-sm"></div>
                    <span className="text-[10px] text-gray-500 font-medium">Med</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-red-500 rounded-sm"></div>
                    <span className="text-[10px] text-gray-500 font-medium">High</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <DenseSpectrogram label="Cough" />
                <DenseSpectrogram label="Wheeze" />
                <DenseSpectrogram label="Crackles" />
                <DenseSpectrogram label="Rhonchi" />
              </div>
            </Card>

            {/* RESPIRATORY TRENDS */}
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-white/40 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <Waves className="w-5 h-5 text-lungsense-blue" />
                <h3 className="text-lg font-display font-bold text-gray-800">Respiratory Endpoints</h3>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis dataKey="date" fontSize={10} tickLine={false} axisLine={false} />
                    <YAxis domain={[0, 100]} fontSize={10} tickLine={false} axisLine={false} />
                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', fontSize: '12px' }} />
                    <Legend iconType="circle" wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                    <Line type="monotone" dataKey="crackles" stroke="#4ade80" strokeWidth={2} dot={{ r: 4 }} name="Crackles" />
                    <Line type="monotone" dataKey="cough" stroke="#f87171" strokeWidth={2} dot={{ r: 4 }} name="Cough" />
                    <Line type="monotone" dataKey="wheeze" stroke="#a78bfa" strokeWidth={2} dot={{ r: 4 }} name="Wheeze" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>

          {/* RECORDS LIST */}
          <div className="flex-1 min-h-0 overflow-y-auto pr-2 pb-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-300">
            <h3 className="text-lg font-bold text-gray-800 font-display sticky top-0 bg-[#ECEBFA]/90 backdrop-blur-sm py-2 z-10">
                Analysis Records
            </h3>
            <div className="grid gap-6">
              {records.map((record) => (
                <Card key={record.id} className="p-6 hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm border-white/40">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-lungsense-blue-light rounded-lg flex items-center justify-center flex-shrink-0">
                      {record.type.includes("Sound") ? <Activity className="w-6 h-6 text-lungsense-blue" /> : <FileText className="w-6 h-6 text-lungsense-blue" />}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 font-display">{record.type}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-2"><Calendar className="w-4 h-4" />{new Date(record.date).toLocaleDateString()}</div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-between h-full">
                      <Button onClick={() => navigate("/patient/results", { state: { record } })} className="bg-lungsense-blue hover:bg-lungsense-blue/90 text-white font-display font-medium" size="sm">
                        <Eye className="w-4 h-4 mr-2" /> View Full Analysis
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}