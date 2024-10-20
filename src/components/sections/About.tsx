import { client, urlFor } from '@/lib/sanity';
import Image from 'next/image';

async function fetchImages() {
  const query = '*[_type == "homePage"][0]';

  const { aboutImage } = await client.fetch(query);

  return urlFor(aboutImage).url();
}

const About = async () => {
  const data = await fetchImages();

  return (
    <section className="page-container flex w-full flex-col gap-6 py-16 lg:flex-row lg:py-48">
      <div className="flex-grow overflow-hidden rounded-2xl lg:basis-1/2">
        <Image
          src={data}
          alt="About Image"
          className="h-full w-full object-cover"
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-grow flex-col text-pretty rounded-2xl bg-[#00643c] p-8 text-white lg:basis-1/2 lg:px-12 lg:py-16">
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
