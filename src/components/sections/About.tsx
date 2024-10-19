import Image from 'next/image';
import aboutImage from './images/about-image.png';

const About = () => {
  return (
    <section className="flex w-full max-w-[120rem] flex-col gap-6 px-5 py-16">
      <div className="h-full overflow-hidden rounded-2xl">
        <Image src={aboutImage} alt="About Image" className="aspect-square object-cover" />
      </div>
      <div className="flex h-full flex-col text-pretty rounded-2xl bg-[#00643c] p-8 text-white">
        <div className="space-y-5">
          <h2>Inspirada pela natureza comprovada pela ciência</h2>
          <p>
            Criamos Plant Power com uma base rigorosamente científica, validada por terceiros e
            livre de ingredientes nocivos em todas as nossas formulações, pois tudo que queremos é
            levar sempre o melhor para as pessoas.
          </p>
        </div>
        <hr className="my-12" />
        <ul className="list-outside list-disc pl-6">
          <li className="mb-1 list-item">Truelabel®: Segurança, densidade, eficácia e entrega</li>
          <li className="mb-1 list-item">Livre de corantes e conservantes artificiais</li>
          <li className="mb-1 list-item">Livre de sucralose e aspartame</li>
          <li className="mb-1 list-item">Livre de substâncias banidas</li>
          <li className="mb-1 list-item">Desenvolvido por especialistas</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
