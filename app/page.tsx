import Header from '../components/Header';
import Hero from '../components/Hero';
import Buro from '../components/Buro';
import Approach from '../components/Approach';
import PracticeAreas from '../components/PracticeAreas';
import VisualBreak from '../components/VisualBreak';
import Lawyer from '../components/Lawyer';
import Process from '../components/Process';
import Publications from '../components/Publications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import { breaks, media } from '../content/site';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Buro />
        <Approach />
        <PracticeAreas />
        <VisualBreak image={media.break1} alt={breaks.first.alt} line={breaks.first.line} position={breaks.first.position} />
        <Lawyer />
        <Process />
        <Publications />
        <VisualBreak image={media.break2} alt={breaks.second.alt} line={breaks.second.line} position={breaks.second.position} />
        <Contact />
      </main>
      <Footer />
      <Reveal />
    </>
  );
}
