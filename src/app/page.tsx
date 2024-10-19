import About from '@/components/sections/About';
import Featured from '@/components/sections/Featured';
import Hero from '@/components/sections/Hero';
import Products from '@/components/sections/Products';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Products />
      <Featured />
    </main>
  );
}
