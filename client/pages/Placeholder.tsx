import { AppLayout } from "@/components/AppLayout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface PlaceholderProps {
  title: string;
  description: string;
}

export function Placeholder({ title, description }: PlaceholderProps) {
  return (
    <AppLayout>
      <div className="min-h-[calc(100vh-200px)] bg-gradient-to-b from-white via-blue-50 to-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mb-6">
            <span className="text-white text-2xl">✨</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-lg text-gray-600 mb-8">{description}</p>

          <div className="space-y-4">
            <p className="text-sm text-gray-500">
              This page is coming soon! Let us know what you'd like to see here.
            </p>
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg transition-shadow"
            >
              Back to Home
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
