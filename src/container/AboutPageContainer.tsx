import { Container } from "@/components/global/Container";
import { Code2, Target, Zap, Heart, Rocket } from "lucide-react";

type Props = {};

const AboutPageContainer = (props: Props) => {
  return (
    <main data-testid="test-about-page" className="min-h-screen">
      <Container>
        {/* Hero Header */}
        <div className="text-center pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <Code2 className="h-4 w-4" />
            <span className="text-sm font-medium">Frontend Engineer</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 md:text-5xl lg:text-6xl">
            About <span className="text-[#F16A00]">Me</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating digital experiences that are both
            beautiful and functional
          </p>
        </div>

        {/* Bio Section */}
        <section data-testid="test-about-bio" className="mb-12">
          <div className=" backdrop-blur-xl rounded-2xl border p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Rocket className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-blue-600 ">Bio</h2>
            </div>
            <div className="space-y-4 leading-relaxed">
              <p className="text-lg">
                I'm{" "}
                <span className="font-semibold text-blue-600">
                  Stephen Gift
                </span>
                , a passionate Frontend Engineer with a love for clean,
                scalable, and user-focused design. I believe in creating digital
                experiences that not only look great but also provide meaningful
                value to users.
              </p>
              <p>
                My journey in web development has been driven by curiosity and a
                constant desire to learn. I enjoy solving complex problems and
                turning ideas into reality through code, always keeping
                accessibility and performance at the forefront of my work.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>
          </div>
        </section>

        {/* Goals Section */}
        <section data-testid="test-about-goals" className="mb-12">
          <div className=" rounded-2xl border p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-green-600">
                Goals in this Program
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <p className="">
                    Improve advanced frontend skills in React and Next.js with
                    modern patterns and best practices
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <p className="">
                    Deepen understanding of accessibility standards and
                    performance optimization techniques
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <p className="">
                    Collaborate effectively in team-based projects and learn
                    from industry professionals
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <p className="">
                    Master state management, testing strategies, and deployment
                    workflows
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Areas of Confidence Section */}
        <section data-testid="test-about-confidence" className="mb-12">
          <div className=" rounded-2xl border p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Zap className="h-6 w-6 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-orange-600">
                Areas I'm Growing In
              </h2>
            </div>
            <div className="space-y-6">
              <p className=" text-lg leading-relaxed">
                I'm actively working to gain more confidence in backend
                integrations and automated testing pipelines. While I have
                experience with these areas, I'm focused on deepening my
                expertise to become a more well-rounded developer.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className=" rounded-xl p-4 border border-[#F16A00] ">
                  <h3 className="font-semibold  mb-2">Backend Integration</h3>
                  <p className="text-sm text-gray-600">
                    API design, database management, and server-side logic
                  </p>
                </div>
                <div className=" rounded-xl p-4 border border-[#F16A00]">
                  <h3 className="font-semibold  mb-2">Testing Pipelines</h3>
                  <p className="text-sm text-gray-600">
                    End-to-end testing, CI/CD workflows, and test automation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Note to Future Self */}
        <section data-testid="test-about-future-note" className="mb-12">
          <div className="rounded-2xl border p-4 md:p-6 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Note to Future Self</h2>
            </div>
            <div className="space-y-4 text-blue-100 leading-relaxed">
              <blockquote className="text-xl italic border-l-4 border-[#F16A00] pl-4 py-2">
                "Keep building, stay consistent, and trust your process. Every
                small progress counts."
              </blockquote>
              <p>
                Remember why you started this journey. The challenges you face
                today are building the foundation for tomorrow's success. Stay
                curious, keep learning, and don't underestimate the power of
                consistent effort.
              </p>
              <p>
                Your growth is not just about technical skills, but about
                becoming a better problem-solver, teammate, and contributor to
                the developer community.
              </p>
            </div>
          </div>
        </section>

        {/* Extra Thoughts */}
        <section data-testid="test-about-extra" className="mb-16">
          <div className=" rounded-2xl border p-4 md:p-6  shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Code2 className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-purple-600">
                Extra Thoughts
              </h2>
            </div>
            <div className="space-y-4  leading-relaxed">
              <p className="text-lg">
                This journey is more than a test; it's a stepping stone toward
                mastery and mentorship. Each line of code, every solved bug, and
                all the challenges overcome are building blocks for a meaningful
                career in technology.
              </p>
              <p>
                I'm excited about the opportunity to grow alongside like-minded
                developers and contribute to projects that make a real impact.
                The future of web development is bright, and I'm committed to
                being part of shaping it in positive ways.
              </p>
              <div className=" border border-[#9810fa] rounded-xl p-4 mt-6">
                <p className=" font-medium text-center">
                  "The only way to do great work is to love what you do." -
                  Steve Jobs
                </p>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default AboutPageContainer;
