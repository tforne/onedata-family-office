import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import SectorsSection from '@/components/SectorsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <SectorsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
