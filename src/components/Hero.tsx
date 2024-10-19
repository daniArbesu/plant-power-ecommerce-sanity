const Hero = () => {
  return (
    <section className="overflow-hidden bg-[#d8f28d] pt-32 text-[#00643c]">
      <div className="flex max-w-[120rem] flex-col gap-8 px-5">
        <h2 className="font-display text-5xl font-black uppercase leading-none md:text-6xl">
          Ciência, eficácia e comprovação
        </h2>
        <p>
          Acreditamos que você merece o melhor e é por isso que oferecemos suplementos
          cuidadosamente desenvolvidos priorizando a ciência, eficácia e comprovação em cada aspecto
          dos nossos produtos.
        </p>
      </div>
      <div className="bg-hero-image min-h-[60rem] bg-cover bg-center"></div>
    </section>
  );
};

export default Hero;
