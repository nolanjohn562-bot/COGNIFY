import { AppLayout } from "@/components/AppLayout";
import {
  Brain,
  Zap,
  MessageSquare,
  Lightbulb,
  Code,
  BookOpen,
  Clock,
  Smile,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Intelligent Conversations",
    description:
      "C.O.G.N.I.F.Y understands context, nuance, and follows complex reasoning. Have natural, meaningful conversations on any topic.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Responses",
    description:
      "Get instant replies powered by state-of-the-art AI infrastructure. No waiting around—immediate, relevant answers.",
  },
  {
    icon: Code,
    title: "Coding & Technical Help",
    description:
      "Debug code, write functions, learn programming concepts, and solve technical problems across multiple languages.",
  },
  {
    icon: Lightbulb,
    title: "Creative Ideas & Brainstorming",
    description:
      "Generate creative writing, brainstorm projects, develop concepts, and explore innovative solutions with AI assistance.",
  },
  {
    icon: BookOpen,
    title: "Learning & Education",
    description:
      "Explain complex topics, answer exam questions, provide study guides, and help you master new subjects efficiently.",
  },
  {
    icon: MessageSquare,
    title: "Versatile Assistance",
    description:
      "From writing emails to analyzing data, summarizing documents to translating text—handle diverse tasks seamlessly.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Chat anytime, anywhere. C.O.G.N.I.F.Y is always available to help, no matter the time or timezone.",
  },
  {
    icon: Smile,
    title: "User-Friendly Interface",
    description:
      "Simple, intuitive chat interface designed for everyone. No complex menus—just type and get responses instantly.",
  },
];

export default function Features() {
  return (
    <AppLayout>
      <div className="bg-gradient-to-b from-white via-blue-50 to-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              C.O.G.N.I.F.Y Features
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover all the powerful capabilities that make C.O.G.N.I.F.Y the
              ultimate AI assistant for thinking, learning, and creating
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Additional Benefits Section */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Why Choose C.O.G.N.I.F.Y?
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-md bg-primary text-white">
                      ✓
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Always Learning
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Continuously improved with the latest AI advancements to
                      provide better responses
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-md bg-primary text-white">
                      ✓
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Privacy Focused
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Your conversations are secure and your privacy is our top
                      priority
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-md bg-primary text-white">
                      ✓
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Free to Use</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Start chatting immediately with no subscription required
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-md bg-primary text-white">
                      ✓
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Instant Access
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      No sign-up delays or complicated onboarding—just start
                      chatting
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Experience All These Features?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Start chatting with C.O.G.N.I.F.Y today and unlock the power of
              intelligent AI assistance
            </p>
            <a
              href="/chat"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-xl transition-shadow text-lg"
            >
              Start Chatting Now
              <MessageSquare className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
