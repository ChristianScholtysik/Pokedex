import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="hero ">
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            {/* <h1 className=" pokeball-headline mb-5 text-8xl font-bold"></h1> */}
            {/* <p className="mb-5">Enter the Pokemon Arena</p> */}
            <Link to="/pokemon/">
              <button className="pokeball">
                <img src="/public/Poké_Ball_icon.svg.png" alt="" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
