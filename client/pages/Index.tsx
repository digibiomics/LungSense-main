import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Activity } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="flex items-center gap-2">
            <Activity className="w-8 h-8 text-lungsense-blue" />
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 font-display tracking-tight">
              LungSense
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Hero Section */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 font-display leading-tight">
              Advanced AI-Powered
              <br />
              Lung Health Analysis
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto italic font-display">
              Some information about the product. Advanced respiratory
              diagnostics using cutting-edge AI technology for accurate health
              assessments.
            </p>
          </div>


          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            <div className="p-6 bg-lungsense-blue-light rounded-lg">
              <div className="w-12 h-12 bg-lungsense-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 font-display">
                X-Ray Analysis
              </h3>
              <p className="text-sm text-gray-600">
                Upload and analyze chest X-rays with AI precision
              </p>
            </div>

            <div className="p-6 bg-lungsense-green/10 rounded-lg">
              <div className="w-12 h-12 bg-lungsense-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 font-display">
                Sound Recording
              </h3>
              <p className="text-sm text-gray-600">
                Record and analyze chest and cough sounds
              </p>
            </div>

            <div className="p-6 bg-lungsense-yellow/10 rounded-lg">
              <div className="w-12 h-12 bg-lungsense-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 font-display">
                AI Diagnosis
              </h3>
              <p className="text-sm text-gray-600">
                Get instant AI-powered health insights
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="pt-8 text-sm text-gray-500">
            <p>
              LungSense uses advanced machine learning models to provide
              preliminary health assessments. Always consult with healthcare
              professionals for medical advice.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <Link to="/select-role">
              <Button
                size="lg"
                className="bg-lungsense-blue hover:bg-lungsense-blue/90 text-white px-12 py-6 text-lg font-display font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Get Started
              </Button>
            </Link>
          </div>


        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-auto">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600">
          <p>&copy; 2024 LungSense. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
