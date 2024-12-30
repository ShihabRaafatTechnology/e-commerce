const Home = () => {
  return (
    <div className="flex h-[85vh]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-5/6 mx-auto items-center relative after:absolute after:content-leaf-overlay after:bottom-20 after:right-0 after:z-[-1]">
        <div className="w-full">
          <img src="/img/organic-products-hero.png" alt=""/>
        </div>
        <div className="before:content-leaf">
          <h5 className="font-extrabold merriweather-bold text-2xl">Best Quality Products</h5>
          <h1 className="font-extrabold merriweather-black-italic text-6xl my-5">Join The Organic Movement!</h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button className="bg-secondary text-white merriweather-bold text-md w-[140px] py-2 rounded-full tracking-widest mt-7 hover:bg-primary transition-all duration-300 before:ease relative h-12 overflow-hidden border border-secondary shadow-2xl before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-primary before:duration-300 hover:text-white hover:shadow-primary hover:before:h-64 hover:before:-translate-y-32">
            <span className="relative z-10">SHOP NOW</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
