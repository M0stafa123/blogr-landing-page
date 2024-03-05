const StateOfArt = () => {
  return (
    <article className="relative after:-z-10 z-10 after:bg-cover after:bg-[-6px_-128px] after:h-[300px] md:after:bg-center after:bg-no-repeat after:w-full md:after:h-full after:absolute after:top-0 after:left-0 after:bg-patterCircles bg-body mt-40 rounded-bl-[4.5rem] after:rounded-bl-[4.5rem] after:rounded-tr-[4.5rem] md:h-[400px] rounded-tr-[4.5rem] text-white md:flex items-center  text-center">
      <section className="relative">
        <img
          className="relative md:top-auto top-[-150px]"
          src="./images/illustration-phones.svg"
          alt="illustration-phones"
        />
      </section>
      <section className=" w-11/12 mx-auto relative top-[-150px] md:static md:w-[500px] md:text-start p-4">
        <h2 className=" text-2xl font-medium my-5 text-footerText md:text-4xl">
          State of the Art Infrastructure
        </h2>
        <p className=" text-footerText md:text-lg">
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly. no matter where your readers are. keeping your site competitive.
        </p>
      </section>
    </article>
  );
};

export default StateOfArt;
