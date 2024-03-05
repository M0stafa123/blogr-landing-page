const Footer = () => {
  return (
    <footer className=" bg-footerBackground  rounded-tr-[4.5rem] ">
      <div className="flex flex-col md:flex-row md:justify-around md:items-start md:mx-auto md:w-[900px] py-10 items-center justify-center gap-10">
        <img src="./images/logo.svg" alt="logo" />
        <ul>
          <li>Product</li>
          <li>Overview </li>
          <li>pricing</li>
          <li>Marketplace</li>
          <li>Features</li>
          <li>Integrations</li>
        </ul>
        <ul>
          <li>Company</li>
          <li>About</li>
          <li>Team</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
        <ul>
          <li>Connect</li>
          <li>Contact</li>
          <li>Newsletter</li>
          <li>LinkedIn</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
