import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import football from "../../../assets/banner/football-1.jpg";
import cricket from "../../../assets/banner/cricket-1.jpg";
import volleyball from "../../../assets/banner/volleyball-1.jpg";
import basketball from "../../../assets/banner/basketball-1.jpg";
import badminton from "../../../assets/banner/badmintion-1.jpg";
import tenis from "../../../assets/banner/tenis-1.jpg";

const Banner = () => {
  return (
    <div className="mb-16">
  <AwesomeSlider
    animation="foldOutAnimation"
    play={true}
    cancelOnInteraction={false}
    interval={6000}
    className="relative"
  >
    <div className="sm:relative">
      <img src={volleyball} alt="Volleyball" className="w-full"/>
      <div className="absolute bottom-5 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] p-4 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Experience the thrill of volleyball
          <br /> at our Sports Master Academy.
        </h2>
        <hr className="mb-2" />
        <hr className="mb-2" />
        <p className="text-xl sm:text-2xl mb-4">
          Master serving, spiking, setting, and teamwork with skilled coaches.
        </p>
        <hr className="mb-2" />
        <hr className="mb-2" />
        <p className="font-bold">
          Join us to elevate your game and make lasting memories
          <br /> on the volleyball court. Success starts here!
        </p>
      </div>
    </div>
    <div className="sm:relative">
      <img src={football} alt="Football" />
      <div className="absolute bottom-5 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] p-4 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Passion, skill, and teamwork
          <br /> in the world of football.
        </h2>
        <hr className="mb-2" />
        <hr className="mb-2" />
        <p className="text-xl sm:text-2xl mb-4">
          Games played by two teams aiming to score goals.
        </p>
        <hr className="mb-2" />
        <hr className="mb-2" />
        <p className="font-bold">
          Unlock your potential, train hard, and join our Sports Master Academy.
          <br /> Lets make champions together!
        </p>
      </div>
    </div>
    <div className="sm:relative">
      <img src={cricket} alt="Cricket" />
      <div className="absolute bottom-5 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] p-4 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Discover the joy of cricket
          <br /> at our premier Sports Master Academy.
        </h2>
        <hr className="mb-2" />
        <hr className="mb-2" />
        <p className="text-xl sm:text-2xl mb-4">
          Learn batting, bowling, fielding, and strategy from expert coaches.
        </p>
        <hr className="mb-2" />
        <hr className="mb-2" />
        <p className="font-bold">
          Join us to unleash your potential and become
          <br /> a cricket champion. Excellence awaits you!
        </p>
      </div>
    </div>
    <div className="sm:relative">
      <img src={basketball} alt="Basketball" />
      <div className="absolute bottom-4 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] p-4 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Embrace the excitement of basketball
          <br /> at our Sports Master Academy.
        </h2>
        <hr className="mb-2" />
        <hr className="mb-2" />
        <p className="text-xl sm:text-2xl mb-4">
          Improve shooting, dribbling, passing, and defense under expert coaching guidance.
        </p>
        <hr className="mb-2" />
        <hr className="mb-2" />
        <p className="font-bold">
          Step up your game, ignite your passion, and soar
          <br /> to new heights with us. Join now!
        </p>
      </div>
    </div>
    <div className="sm:relative">
      <img src={badminton} alt="Badminton" />
      <div className="absolute bottom-5 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] p-4 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Discover the finesse of badminton
          <br /> at our premier Sports Master Academy.
        </h2>
        <hr className="mb-2" />
        <hr className="mb-2" />
        <p className="text-xl sm:text-2xl mb-4">
          Learn smashing, drop shots, footwork, and strategy from experienced coaches.
        </p>
        <hr className="mb-2" />
        <hr className="mb-2" />
        <p className="font-bold">
          Unleash your potential, dominate the court, and join
          <br /> our community of badminton enthusiasts. Start today!
        </p>
      </div>
    </div>
    <div className="sm:relative">
      <img src={tenis} alt="Tennis" />
      <div className="absolute bottom-5 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] p-4 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Experience the thrill of tennis
          <br /> at our premier Sports Master Academy.
        </h2>
        <hr className="mb-2" />
        <hr className="mb-2" />
        <p className="text-xl sm:text-2xl mb-4">
          Master serves, forehands, backhands, volleys, and tactics with expert coaching.
        </p>
        <hr className="mb-2" />
        <hr className="mb-2" />
        <p className="font-bold">
          Unleash your potential, excel on the court, and join
          <br /> our community of passionate tennis players. Start today!
        </p>
      </div>
    </div>
  </AwesomeSlider>
</div>
  );
};

export default Banner;
