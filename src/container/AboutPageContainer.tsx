import { Container } from "@/components/global/Container";

type Props = {};

const AboutPageContainer = (props: Props) => {
  return (
    <main data-testid="test-about-page">
      <Container>
        <h1 className="text-3xl font-semibold mb-4">About Me</h1>

        <section data-testid="test-about-bio">
          <h2 className="text-xl font-medium mb-2">Bio</h2>
          <p>
            I'm Stephen Gift Dada, a passionate Frontend Engineer with a love
            for clean, scalable, and user-focused design...
          </p>
        </section>

        <section data-testid="test-about-goals">
          <h2 className="text-xl font-medium mb-2">Goals in this Program</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Improve advanced frontend skills in React and Next.js.</li>
            <li>
              Deepen understanding of accessibility and performance
              optimization.
            </li>
            <li>Collaborate effectively in team-based projects.</li>
          </ul>
        </section>

        <section data-testid="test-about-confidence">
          <h2 className="text-xl font-medium mb-2">Areas of Low Confidence</h2>
          <p>
            I’m working to gain more confidence in backend integrations and
            automated testing pipelines.
          </p>
        </section>

        <section data-testid="test-about-future-note">
          <h2 className="text-xl font-medium mb-2">Note to Future Self</h2>
          <p>
            Keep building, stay consistent, and trust your process. Every small
            progress counts.
          </p>
        </section>

        <section data-testid="test-about-extra">
          <h2 className="text-xl font-medium mb-2">Extra Thoughts</h2>
          <p>
            This journey is more than a test; it’s a stepping stone toward
            mastery and mentorship.
          </p>
        </section>
      </Container>
    </main>
  );
};

export default AboutPageContainer;
