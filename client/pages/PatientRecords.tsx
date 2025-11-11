import Sidebar from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { FileText, Calendar, TrendingUp } from "lucide-react";

export default function PatientRecords() {
  const records = [
    {
      id: 1,
      name: "Chest X-ray Analysis",
      date: "2024-01-15",
      diagnosis: "Normal",
      confidence: "95%",
    },
    {
      id: 2,
      name: "Lung Sound Recording",
      date: "2024-01-10",
      diagnosis: "Mild Congestion",
      confidence: "87%",
    },
    {
      id: 3,
      name: "Combined Analysis",
      date: "2024-01-05",
      diagnosis: "Healthy",
      confidence: "92%",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 md:ml-64">
        <div className="p-4 md:p-8 space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900 font-display">
              Your Records
            </h1>
            <div className="w-10 h-10 bg-lungsense-blue rounded-full flex items-center justify-center text-white font-bold">
              ©
            </div>
          </div>

          {/* Records List */}
          <div className="grid gap-6">
            {records.map((record) => (
              <Card key={record.id} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-lungsense-blue-light rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-lungsense-blue" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1 font-display text-lg">
                      {record.name}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {record.date}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-semibold text-gray-900 mb-1 font-display">
                      {record.diagnosis}
                    </div>
                    <div className="flex items-center gap-1 text-lungsense-green text-sm font-medium justify-end">
                      <TrendingUp className="w-4 h-4" />
                      {record.confidence}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
