import { AppLayout } from "@/components/AppLayout";
import { ChatWindow } from "@/components/ChatWindow";

export default function Chat() {
  return (
    <AppLayout>
      <div className="min-h-[calc(100vh-200px)] bg-gradient-to-b from-white via-blue-50 to-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Neuron AI Assistant
            </h1>
            <p className="text-lg text-gray-600">
              Ask me anything. I'm here to help with questions, creative tasks,
              coding, analysis, and more.
            </p>
          </div>

          {/* Main Chat Window */}
          <ChatWindow height="h-[600px]" />

          {/* Quick Tips */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-gray-900 mb-2">💡 Tip 1</h3>
              <p className="text-sm text-gray-600">
                Ask follow-up questions to dive deeper into topics
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-gray-900 mb-2">🎯 Tip 2</h3>
              <p className="text-sm text-gray-600">
                Be specific in your questions for better, more accurate answers
              </p>
            </div>
            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
              <h3 className="font-semibold text-gray-900 mb-2">⚡ Tip 3</h3>
              <p className="text-sm text-gray-600">
                Try different phrasings if you don't get the response you want
              </p>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
