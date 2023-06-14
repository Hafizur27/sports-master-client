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
      <AwesomeSlider animation="foldOutAnimation"  play={true} cancelOnInteraction={false} interval={6000}>
        <div className="relative">
          <img src={volleyball} />
          <div className="absolute bottom-5 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] md:p-4 sm:w-1/3">
            <h2 className="md:text-2xl font-bold  ">
              Experience the thrill of volleyball <br /> at our Sports Master
              Academy.
            </h2>
            <hr />
            <hr />
            <p className="text-xl from-accent-focus ">
              Master serving, spiking, setting, and teamwork with skilled
              coaches.
            </p>
            <hr />
            <hr />
            <p className="bold">
              Join us to elevate your game and make lasting memories <br /> on
              the volleyball court. Success starts here!
            </p>
          </div>
        </div>
        <div className="relative">
          <img src={football} />
          <div className="absolute bottom-5 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] p-4">
            <h2 className="text-2xl font-bold ">
              Passion, skill, and teamwork <br /> in the world of football.
            </h2>
            <hr />
            <hr />
            <p className="text-xl from-accent-focus ">
              Games played by two teams aiming to score goals.
            </p>
            <hr />
            <hr />
            <p className="bold">
              Unlock your potential, train hard, and join our Sports Master
              Academy. <br /> Lets make champions together!
            </p>
          </div>
        </div>
        <div className="relative">
          <img src={cricket} />
          <div className="absolute bottom-5 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] p-4">
            <h2 className="text-2xl font-bold ">
              Discover the joy of cricket <br /> at our premier Sports Master
              Academy.
            </h2>
            <hr />
            <hr />
            <p className="text-xl from-accent-focus ">
              Learn batting, bowling, fielding, and strategy from expert
              coaches.
            </p>
            <hr />
            <hr />
            <p className="bold">
              Join us to unleash your potential and become <br /> a cricket
              champion. Excellence awaits you!
            </p>
          </div>
        </div>
        <div className="relative">
          <img src={basketball} />
          <div className="absolute bottom-4 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] p-4">
            <h2 className="text-2xl font-bold ">
              Embrace the excitement of basketball <br /> at our Sports Master
              Academy.
            </h2>
            <hr />
            <hr />
            <p className="text-xl from-accent-focus ">
              Improve shooting, dribbling, passing, and defense under expert
              coaching guidance.
            </p>
            <hr />
            <hr />
            <p className="bold">
              Step up your game, ignite your passion, and soar <br /> to new
              heights with us. Join now!
            </p>
          </div>
        </div>
        <div className="relative">
          <img src={badminton} />
          <div className="absolute bottom-5 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] p-4">
            <h2 className="text-2xl font-bold ">
              Discover the finesse of badminton <br /> at our premier academy
              Academy.
            </h2>
            <hr />
            <hr />
            <p className="text-xl from-accent-focus ">
              Learn smashing, drop shots, footwork, and strategy from
              experienced coaches.
            </p>
            <hr />
            <hr />
            <p className="bold">
              Unleash your potential, dominate the court, and join <br /> our
              community of badminton enthusiasts. Start today!
            </p>
          </div>
        </div>
        <div className="relative">
          <img src={tenis} />
          <div className="absolute bottom-5 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] p-4">
            <h2 className="text-2xl font-bold ">
              Experience the thrill of tennis <br /> at our premier academy
              Academy.
            </h2>
            <hr />
            <hr />
            <p className="text-xl from-accent-focus ">
              Master serves, forehands, backhands, volleys, and tactics with
              expert coaching.
            </p>
            <hr />
            <hr />
            <p className="bold">
              Unleash your potential, excel on the court, and join <br /> our
              community of passionate tennis players. Start today!
            </p>
          </div>
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Banner;
