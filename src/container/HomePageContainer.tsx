import { Container } from "@/components/global/Container";
import { InputField } from "@/components/global/Input";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Rocket, Zap } from "lucide-react";
import Link from "next/link";

type Props = {};

const HomePageContainer = (props: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-16 pb-20 md:pt-24 md:pb-32">
          <Container>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
                <Code2 className="h-4 w-4" />
                <span className="text-sm font-medium">Frontend Engineer</span>
              </div>

              <h1 className="text-4xl font-bold mb-6 md:text-5xl lg:text-6xl lg:leading-tight">
                Crafting Digital{" "}
                <span className="text-[#F16A00]">Experiences</span> That Inspire
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed md:text-2xl">
                Passionate about creating beautiful, functional, and
                user-centered web applications that make a difference.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#F16A00] hover:bg-[#e55f00] text-white"
                  data-testid="test-home-about-button"
                >
                  <Link href="/about" className="flex items-center gap-2">
                    Learn More About Me
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  data-testid="test-home-contact-button"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    Get In Touch
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50" data-testid="test-home-features">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 md:text-4xl">
                What I Bring to the Table
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Combining technical expertise with creative problem-solving to
                deliver exceptional results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code2 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Clean Code</h3>
                <p className="text-gray-600">
                  Writing maintainable, scalable, and efficient code following
                  best practices and modern standards.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Fast Performance</h3>
                <p className="text-gray-600">
                  Optimizing applications for speed and smooth user experiences
                  across all devices.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Modern Tech</h3>
                <p className="text-gray-600">
                  Leveraging the latest technologies and frameworks to build
                  cutting-edge web applications.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="bg-gray-900 text-white py-12"
        data-testid="test-home-footer"
      >
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">Stephen Gift</h3>
              <p className="text-gray-400">Frontend Engineer</p>
            </div>

            <nav className="flex flex-col sm:flex-row gap-6 text-center">
              <Link
                href="/"
                className="text-gray-400 hover:text-white transition-colors"
                data-testid="test-home-footer-link"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-400 hover:text-white transition-colors"
                data-testid="test-home-footer-link"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-white transition-colors"
                data-testid="test-home-footer-link"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Stephen Gift. All rights reserved.
            </p>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default HomePageContainer;
