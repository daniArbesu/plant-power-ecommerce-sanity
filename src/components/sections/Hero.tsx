const Hero = () => {
  return (
    <section className="md:bg-hero-image-with-shadows w-full bg-[#d8f28d] bg-no-repeat pt-32 text-[#00643c] sm:pt-48 md:min-h-fit md:bg-[auto_70vh] md:bg-[100%_100%] md:pt-0">
      <div className="flex flex-col">
        <div className="page-container w-full space-y-8 sm:space-y-12 sm:px-14 md:mx-24 md:max-w-96 md:pb-24 md:pt-48">
          <h2 className="font-display text-5xl font-black uppercase leading-none sm:text-6xl">
            Ciência, eficácia e comprovação
          </h2>
          <p>
            Acreditamos que você merece o melhor e é por isso que oferecemos suplementos
            cuidadosamente desenvolvidos priorizando a ciência, eficácia e comprovação em cada
            aspecto dos nossos produtos.
          </p>
        </div>
        <div className="bg-hero-image-no-shadows md:bg-hero-image-with-shadows min-h-[40rem] w-full bg-cover bg-center bg-no-repeat sm:min-h-[60rem] md:hidden md:min-h-fit md:bg-[auto_70vh] md:bg-[100%_100%]" />
      </div>
    </section>
  );
};

export default Hero;
