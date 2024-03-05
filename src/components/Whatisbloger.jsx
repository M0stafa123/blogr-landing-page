const Whatisbloger = () => {
  return (
    <article className="md:flex items-center">
      <section>
        <img
          className="block md:hidden mx-auto"
          src="./images/illustration-laptop-mobile.svg"
          alt="laptop-mobile"
        />
        <img
          className="hidden md:block md:w-[400px] lg:w-auto"
          src="./images/illustration-laptop-desktop.svg"
          alt="laptop-desktop"
        />
      </section>
      <section className="text-center md:w-[550px] md:text-start p-4">
        <div>
          <h2 className="text-heading text-2xl md:text-4xl my-5 ">
            Free, open, simple
          </h2>
          <p className="text-bodyCopy">
            Blogr is a free and open source application backed by a large community of
            helpful developers. It supports features such as code syntax highlighting.
            RSS feeds, social media integration. third• party commenting tools. and
            works seamlessly with Google Analytics. The architecture is clean and is
            relatively easy to learn.
          </p>
        </div>
        <div>
          <h2 className="text-heading text-2xl md:text-4xl my-5">Powerful tooling</h2>
          <p className="text-bodyCopy">
            Batteries included. We built a simple and straightforward CLI tool that
            makes customization and deployment a breeze. but capable of producing even
            the most complicated sites.
          </p>
        </div>
      </section>
    </article>
  );
};

export default Whatisbloger;
