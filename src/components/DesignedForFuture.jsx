const ForFuture = () => {
  return (
    <article>
      <h2 className="text-heading text-2xl text-center my-10 font-semibold">
        Designed for the future
      </h2>
      <div className="md:flex items-center gap-5">
        <section className="my-10 order-1">
          <img
            className="block md:hidden  mx-auto  "
            src="./images/illustration-editor-mobile.svg"
            alt="illustration-editor-mobile"
          />
          <img
            className="hidden md:block md:w-[400px] lg:w-auto"
            src="./images/illustration-editor-desktop.svg"
            alt="illustration-editor-desktop"
          />
        </section>
        <section className="text-center w-11/12 mx-auto md:w-[550px] md:text-start p-4">
          <div className="my-10">
            <h2 className="text-2xl text-heading mb-4 md:text-4xl ">
              Introducing an extensible editor
            </h2>
            <p className="text-bodyCopy">
              Blogr features an exceedingly intuitive interface which lets you focus on
              one thing: creating content. The editor supports management of multiple
              blogs and allows easy manipulation of embeds such as images. videos. and
              Markdown. Extensibility with plugins and themes provide easy ways to add
              functionality or change the looks of a blog.
            </p>
          </div>
          <div>
            <h2 className="text-2xl text-heading mb-4 md:text-4xl">
              Robust content management
            </h2>
            <p className="text-bodyCopy">
              Flexible content management enables users to easily move through posts.
              Increase the usability of your blog by adding customized categories,
              sections. format. or flow. With this functionality. you're in full
              control.
            </p>
          </div>
        </section>
      </div>
    </article>
  );
};

export default ForFuture;
