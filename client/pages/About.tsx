import { AppLayout } from "@/components/AppLayout";
import { Link } from "react-router-dom";
import {
  Brain,
  Zap,
  Shield,
  Users,
  Lightbulb,
  MessageSquare,
} from "lucide-react";

export default function About() {
  return (
    <AppLayout>
      <div className="bg-gradient-to-b from-white via-blue-50 to-gray-50">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-primary font-semibold text-sm">
                About C.O.G.N.I.F.Y
              </span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Cognitive Optimization & Generation Network Interface For You
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              C.O.G.N.I.F.Y is an advanced AI chatbot designed to empower users
              to think better, learn faster, and create more effectively.
              Whether you're a student, professional, creator, or curious
              learner, C.O.G.N.I.F.Y is your intelligent companion for any task.
            </p>
          </div>
        </section>

        {/* What is C.O.G.N.I.F.Y Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  What is C.O.G.N.I.F.Y?
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    C.O.G.N.I.F.Y stands for Cognitive Optimization & Generation
                    Network Interface For You. It's a sophisticated AI assistant
                    powered by state-of-the-art machine learning technology that
                    understands context, reasoning, and nuance in human
                    language.
                  </p>
                  <p>
                    Built on advanced neural networks, C.O.G.N.I.F.Y engages in
                    natural conversations and helps you tackle challenges across
                    multiple domains—from technical problems to creative
                    projects.
                  </p>
                  <p>
                    The core philosophy behind C.O.G.N.I.F.Y is simple: make
                    powerful AI technology accessible to everyone. No
                    complicated interfaces, no steep learning curves—just
                    intelligent conversation that adapts to your needs.
                  </p>
                </div>
              </div>
              <div className="relative h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-3xl" />
                <div className="relative bg-white rounded-2xl border border-gray-200 p-8 shadow-xl">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Brain className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Intelligent AI
                        </h4>
                        <p className="text-sm text-gray-600">
                          Advanced neural networks for deep understanding
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Zap className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Lightning Fast
                        </h4>
                        <p className="text-sm text-gray-600">
                          Instant responses powered by optimized infrastructure
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Secure & Private
                        </h4>
                        <p className="text-sm text-gray-600">
                          Your data is protected with enterprise-grade security
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What C.O.G.N.I.F.Y Does */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What C.O.G.N.I.F.Y Does
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                C.O.G.N.I.F.Y helps you across a wide spectrum of tasks and
                challenges
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-blue-50 rounded-xl border border-blue-200">
                <Lightbulb className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Enhance Your Thinking
                </h3>
                <p className="text-gray-700">
                  Break down complex problems, explore different perspectives,
                  challenge assumptions, and develop critical thinking skills
                  through guided conversations.
                </p>
              </div>

              <div className="p-8 bg-purple-50 rounded-xl border border-purple-200">
                <Users className="w-10 h-10 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Accelerate Your Learning
                </h3>
                <p className="text-gray-700">
                  Get personalized explanations, study guides, practice
                  questions, and answers to help you master new subjects and
                  skills faster than ever before.
                </p>
              </div>

              <div className="p-8 bg-indigo-50 rounded-xl border border-indigo-200">
                <MessageSquare className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Boost Your Creativity
                </h3>
                <p className="text-gray-700">
                  Generate ideas, write content, brainstorm solutions, create
                  stories, and unlock your creative potential with AI-powered
                  inspiration and feedback.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Who Uses C.O.G.N.I.F.Y?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  📚 Students & Learners
                </h3>
                <p className="text-gray-700">
                  Get homework help, understand difficult concepts, prepare for
                  exams, and learn at your own pace with personalized guidance.
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  💼 Professionals
                </h3>
                <p className="text-gray-700">
                  Boost productivity with email writing, document analysis, code
                  debugging, and decision-making support for your daily tasks.
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  🎨 Creators & Writers
                </h3>
                <p className="text-gray-700">
                  Generate ideas, overcome writer's block, craft compelling
                  narratives, and refine your creative projects with AI
                  collaboration.
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  👨‍💻 Developers & Programmers
                </h3>
                <p className="text-gray-700">
                  Debug code, learn new programming languages, solve technical
                  problems, and accelerate development with intelligent code
                  assistance.
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  🧠 Curious Minds
                </h3>
                <p className="text-gray-700">
                  Explore any topic, ask questions, dive deep into subjects that
                  interest you, and satisfy your intellectual curiosity.
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  🌍 Everyone Else
                </h3>
                <p className="text-gray-700">
                  If you need help with anything—research, brainstorming,
                  planning, or just having a meaningful
                  conversation—C.O.G.N.I.F.Y is here for you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Core Values
            </h2>

            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Accessibility
                  </h3>
                  <p className="text-gray-700">
                    AI should be available to everyone, regardless of technical
                    background. C.O.G.N.I.F.Y breaks down barriers and makes
                    powerful technology accessible to all.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Privacy & Security
                  </h3>
                  <p className="text-gray-700">
                    Your privacy is sacred. We protect your data with
                    enterprise-grade security and never compromise on your
                    personal information.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Continuous Improvement
                  </h3>
                  <p className="text-gray-700">
                    We're always learning and improving. Your feedback shapes
                    C.O.G.N.I.F.Y's evolution, making it smarter and more
                    helpful every day.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white flex-shrink-0 font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Ethical AI
                  </h3>
                  <p className="text-gray-700">
                    We build C.O.G.N.I.F.Y responsibly, with ethical principles
                    at the core. Honesty, transparency, and fairness guide our
                    development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience C.O.G.N.I.F.Y?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Start chatting today and discover how C.O.G.N.I.F.Y can help you
              think, learn, and create better
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
      </div>
    </AppLayout>
  );
}
