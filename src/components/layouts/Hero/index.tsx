import { heroImg } from "../../../assets/images";

const Hero = () => {
  return (
    <section>
      <div className="container h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="w-full lg:h-[500px] grid grid-cols-1 lg:grid-cols-2 gap-y-8">
          <div className="flex flex-col items-center lg:items-start justify-center gap-4">
            <h1 className="text-2xl sm:text-4xl font-semibold text-center lg:text-start">
              Butuh bimbingan? <br /> Yuk belajar bersama kami
            </h1>

            <p className="sm:w-[450px] md:w-[500px] text-sm sm:text-base text-center lg:text-start">
              Ajarin merupakan platform yang membantu kalian dalam mendapatkan
              pengajar yang ahli di bidangnya dan kelompok belajar yang saling
              mendukung.
            </p>

            <div>
              <button className="btn btn-neutral">Pesan Sekarang</button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={heroImg}
              alt=""
              className="size-[300px] sm:size-[500px] lg:w-full lg:h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
