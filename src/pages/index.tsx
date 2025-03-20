import About from '@/components/about';
import HeroSection from '../components/heroSection';
import Passion from '@/components/passion';
import Experience from '@/components/experience';
import Work from '@/components/work';

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Passion />
      <Experience />
      <Work />
    </>
  );
}
