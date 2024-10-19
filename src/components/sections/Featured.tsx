import Image from 'next/image';
import featuredImage from './images/featured-image.jpg';
import { ArrowRightIcon } from '../Icons';

const Featured = () => {
  return (
    <section className="space-y-6 px-5 pb-16">
      <div className="overflow-hidden rounded-2xl">
        <Image src={featuredImage} alt="Featured Image" className="aspect-square object-cover" />
      </div>
      <div className="space-y-8 rounded-2xl bg-[#c4d97f] p-8 md:space-y-12">
        <div className="space-y-5 md:space-y-6">
          <h2>Imunidade o Ano INteiro</h2>
          <p>
            Ingredientes cientificamente estudados em doses efetivas para fortalecer seu sistema
            imunológico
          </p>
        </div>
        <ul className="list-inside list-disc border-t border-black">
          <li className="border-b border-black py-1">Fortalece a imunidade</li>
          <li className="border-b border-black py-1">Ação antioxidante</li>
          <li className="border-b border-black py-1">Efeito anti-inflamatório</li>
          <li className="border-b border-black py-1">Aporte de vitaminas e minerais</li>
          <li className="border-b border-black py-1">Testado em laboratórios acreditados</li>
        </ul>
        <button className="font-display flex h-12 w-fit items-center justify-between gap-5 rounded-[2.5rem] bg-black px-4 py-3 pl-6 text-left uppercase text-white">
          <span>Acessar PRODUTO</span>
          <ArrowRightIcon className="size-4" />
        </button>
      </div>
    </section>
  );
};

export default Featured;
