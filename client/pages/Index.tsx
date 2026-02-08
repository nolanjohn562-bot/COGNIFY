import { AppLayout } from "@/components/AppLayout";
import { Link } from "react-router-dom";
import { CheckCircle2, Zap, Brain, MessageSquare, X } from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [showLearnMore, setShowLearnMore] = useState(false);
  return (
    <AppLayout>
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                  <span className="text-primary font-semibold text-sm">
                    Advanced AI Technology
                  </span>
                </div>
                <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">
                  Chat with C.O.G.N.I.F.Y
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Experience the power of intelligent conversation.
                  C.O.G.N.I.F.Y understands context, learns from interactions,
                  and provides thoughtful responses tailored to your needs.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/chat"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-xl transition-shadow text-lg"
                >
                  Start Chatting
                  <MessageSquare className="ml-2 w-5 h-5" />
                </Link>
                <button
                  onClick={() => setShowLearnMore(true)}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-primary hover:text-primary transition-colors text-lg"
                >
                  Learn More
                </button>
              </div>

              {/* Trust Badges */}
              <div className="space-y-3 pt-8">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Trusted by
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Fast & Reliable
                  </span>
                  <span className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                    Privacy First
                  </span>
                  <span className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Always Free
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative h-96 lg:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-3xl" />
              <div className="relative bg-white rounded-2xl border border-gray-200 p-6 shadow-xl">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-900">
                      AI Assistant
                    </h3>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-gray-300" />
                      <div className="w-3 h-3 rounded-full bg-gray-300" />
                      <div className="w-3 h-3 rounded-full bg-gray-300" />
                    </div>
                  </div>

                  {/* Chat Messages Preview */}
                  <div className="space-y-4">
                    <div className="flex justify-start">
                      <div className="bg-gray-100 text-gray-900 rounded-lg rounded-bl-none px-4 py-3 max-w-xs">
                        <p className="text-sm">
                          What can C.O.G.N.I.F.Y help me with?
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg rounded-br-none px-4 py-3 max-w-xs">
                        <p className="text-sm">
                          I can help with writing, analysis, coding, creative
                          projects, and much more!
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-start">
                      <div className="bg-gray-100 text-gray-900 rounded-lg rounded-bl-none px-4 py-3 max-w-xs">
                        <p className="text-sm">Tell me more...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need for intelligent conversations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Intelligent Learning
              </h3>
              <p className="text-gray-600">
                Powered by advanced machine learning models that understand
                context and nuance.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 hover:border-secondary hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Lightning Fast
              </h3>
              <p className="text-gray-600">
                Get instant responses with our optimized infrastructure and
                real-time processing.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Natural Conversation
              </h3>
              <p className="text-gray-600">
                Experience human-like interactions with contextual understanding
                and creative responses.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 hover:border-secondary hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Always Accurate
              </h3>
              <p className="text-gray-600">
                Reliable responses with continuous learning and improvement over
                time.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Multi-Purpose
              </h3>
              <p className="text-gray-600">
                Use for writing, coding, analysis, brainstorming, and much more.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 hover:border-secondary hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Easy Integration
              </h3>
              <p className="text-gray-600">
                Simple API and intuitive interface for seamless integration into
                your workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience AI Excellence?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of users enjoying intelligent conversations with
            C.O.G.N.I.F.Y
          </p>
          <Link
            to="/chat"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:shadow-xl transition-shadow text-lg"
          >
            Start Chatting Now
            <MessageSquare className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Learn More Modal */}
      {showLearnMore && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-primary to-secondary text-white px-6 py-6 flex items-center justify-between border-b">
              <h2 className="text-2xl font-bold">
                Learn More About C.O.G.N.I.F.Y
              </h2>
              <button
                onClick={() => setShowLearnMore(false)}
                className="p-1 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  C.O.G.N.I.F.Y is an intelligent AI chatbot designed to help
                  users think, learn, and create more efficiently. Built to
                  provide fast, natural, and meaningful conversations,
                  C.O.G.N.I.F.Y can assist with answering questions, generating
                  ideas, solving problems, and supporting everyday tasks.
                </p>
                <p>
                  Whether you're studying, coding, brainstorming, or just
                  exploring new topics, C.O.G.N.I.F.Y is here to make
                  information more accessible and interaction more engaging.
                  With a simple interface and powerful AI behind it,
                  C.O.G.N.I.F.Y brings smart conversation right to your
                  fingertips.
                </p>
              </div>

              {/* Modal Footer CTA */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link
                  to="/chat"
                  onClick={() => setShowLearnMore(false)}
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg transition-shadow"
                >
                  Start Chatting with C.O.G.N.I.F.Y
                  <MessageSquare className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </AppLayout>
  );
}
