import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Download,
  AlertCircle,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function DiagnosticResults() {
  const diagnosticData = [
    {
      name: "Chronic Obstructive Pulmonary Disease (COPD)",
      description:
        "AI detected significant airflow limitation and inflammation.",
      confidence: 85,
      severity: "high",
    },
    {
      name: "Bacterial Pneumonia",
      description:
        "Indications of localized lung infection with fluid accumulation.",
      confidence: 65,
      severity: "medium",
    },
    {
      name: "Early Stage Lung Nodules",
      description:
        "Small, round-oss nodules identified; further investigation recommended.",
      confidence: 60,
      severity: "medium",
    },
  ];

  const probabilityData = [
    { name: "COPD", value: 85 },
    { name: "Asthma", value: 78 },
    { name: "Nodules", value: 60 },
  ];

  return (
    <div className="flex min-h-screen bg-gray-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 md:ml-64 bg-gray-900 text-white">
        <div className="p-4 md:p-8 space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl md:text-4xl font-bold font-display">
              AI Diagnostic Results
            </h1>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                <AlertCircle className="w-6 h-6" />
              </button>
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=user"
                  alt="User"
                  className="w-full h-full rounded-full"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Diagnostic Summary */}
            <div className="lg:col-span-2 space-y-6">
              {/* Diagnostic Summary */}
              <div>
                <h2 className="text-2xl font-bold mb-6 font-display">
                  Diagnostic Summary
                </h2>

                <div className="space-y-4">
                  {diagnosticData.map((diagnosis, index) => (
                    <Card
                      key={index}
                      className={`p-5 bg-gray-800 border-l-4 ${
                        diagnosis.severity === "high"
                          ? "border-red-500"
                          : diagnosis.severity === "medium"
                            ? "border-yellow-500"
                            : "border-green-500"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-white font-display text-lg">
                          {diagnosis.name}
                        </h3>
                        <span
                          className={`text-sm font-semibold ${
                            diagnosis.severity === "high"
                              ? "text-red-400"
                              : diagnosis.severity === "medium"
                                ? "text-yellow-400"
                                : "text-green-400"
                          }`}
                        >
                          Confidence: {diagnosis.confidence}%
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm font-dm">
                        {diagnosis.description}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Lung Scan Viewer */}
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-6 font-display">
                  Lung Scan Viewer with AI Annotations
                </h2>

                <div className="bg-black rounded-lg p-8 flex items-center justify-center min-h-[400px]">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/2663d6b18a88c3f4cf5642060ab24af797d7ef45?width=800"
                    alt="Lung Scan with AI Annotations"
                    className="max-w-full h-auto rounded-lg"
                  />
                </div>
              </div>

              {/* How AI Derived This Result */}
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-6 font-display">
                  How the AI Derived This Result
                </h2>

                <Card className="p-6 bg-gray-800 border-gray-700">
                  <p className="text-gray-300 mb-6 font-dm">
                    Our advanced AI models analyze a multimodal dataset
                    including high-resolution lung CT scans, acoustic patterns
                    from cough and breath sounds, and various clinical and
                    environmental parameters. This integrated approach allows
                    for a holistic understanding of your lung health.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-white mb-2 font-display">
                        Scan Analysis
                      </h3>
                      <p className="text-gray-400 text-sm font-dm">
                        For lung scans, the AI utilizes deep learning algorithms
                        to identify subtle abnormalities, such as nodules,
                        infiltrates, and structural changes indicative of
                        chronic conditions like COPD or fibrosis. Color-coded
                        overlays highlight these areas, with different colors
                        representing varying levels of concern or specific
                        pathological patterns.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-white mb-2 font-display">
                        Acoustic Biomarkers
                      </h3>
                      <p className="text-gray-400 text-sm font-dm">
                        Cough and breath sounds are processed using spectral
                        analysis to detect specific acoustic biomarkers
                        associated with respiratory diseases. For instance, the
                        frequency, duration, and timbre of coughs can
                        differentiate between asthma, bronchitis, and pneumonia.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-white mb-2 font-display">
                        Clinical Data Integration
                      </h3>
                      <p className="text-gray-400 text-sm font-dm">
                        Finally, clinical inputs such as age, medical history,
                        and environmental exposures are integrated to refine the
                        diagnostic probabilities, ensuring personalized and
                        contextually relevant results. The confidence scores
                        reflect the model's certainty based on the totality of
                        the analyzed data.
                      </p>

                      <ul className="mt-4 space-y-2 text-sm text-gray-400">
                        <li className="flex items-start gap-2">
                          <span className="text-lungsense-blue">•</span>
                          <span>
                            <strong>"Feature Extraction:"</strong> Automated
                            identification of key patterns from each data
                            modality.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-lungsense-blue">•</span>
                          <span>
                            <strong>"Ensemble Modeling:"</strong> Combination of
                            multiple AI models for robust and accurate
                            predictions.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-lungsense-blue">•</span>
                          <span>
                            <strong>"Cross-Referencing:"</strong> Validation of
                            findings across different data types to enhance
                            diagnostic precision.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Right Column - Distribution & Download */}
            <div className="space-y-6">
              {/* Disease Probability Distribution */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-semibold mb-2 font-display">
                  Disease Probability Distribution
                </h3>
                <p className="text-gray-400 text-sm mb-6 font-dm">
                  AI-generated probabilities for potential lung conditions.
                </p>

                {/* Bar Chart */}
                <div className="space-y-4">
                  {probabilityData.map((item, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-300 font-dm">
                          {item.name}
                        </span>
                        <span className="text-sm font-semibold text-lungsense-blue">
                          {item.value}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-8">
                        <div
                          className="bg-lungsense-blue h-8 rounded-full transition-all flex items-center justify-end pr-2"
                          style={{ width: `${item.value}%` }}
                        >
                          <span className="text-xs text-white font-semibold">
                            {item.value}%
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-xs text-gray-500 text-center font-dm">
                  Probability
                </div>
              </Card>

              {/* Download Report */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-semibold mb-2 font-display">
                  Download Comprehensive Report
                </h3>
                <p className="text-gray-400 text-sm mb-6 font-dm">
                  Access your full AI diagnostic report in PDF format.
                </p>

                <Button className="w-full bg-lungsense-blue hover:bg-lungsense-blue/90 font-display font-semibold py-6">
                  <Download className="w-5 h-5 mr-2" />
                  Download Report
                </Button>
              </Card>

              {/* Next Steps */}
              <Card className="p-6 bg-gradient-to-br from-lungsense-blue/20 to-transparent border-lungsense-blue">
                <div className="flex items-start gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-2 font-display">
                      Important Notice
                    </h3>
                    <p className="text-gray-300 text-sm font-dm">
                      This AI analysis is for informational purposes only.
                      Please consult with a healthcare professional for proper
                      medical diagnosis and treatment.
                    </p>
                  </div>
                </div>
                <Link to="/patient/recommendations">
                  <Button className="w-full bg-white text-gray-900 hover:bg-gray-100 font-display font-semibold mt-4">
                    View Personalized Recommendations
                  </Button>
                </Link>
              </Card>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>© 2025 Lung Sense. All rights reserved. DigiRomics.</p>
          </footer>
        </div>
      </main>
    </div>
  );
}
