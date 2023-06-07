import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import football from "../../../assets/banner/football-1.jpg";
import cricket from "../../../assets/banner/cricket-1.jpg";
import volleyball from "../../../assets/banner/volleyball-1.jpg";
import basketball from "../../../assets/banner/basketball-1.jpg";
import badminton from "../../../assets/banner/badmintion-1.jpg";
import tenis from "../../../assets/banner/tenis-1.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <div className="relative">
          <img src={football} />
          <div>
            <p className="absolute top-20 text-white">Legend 2</p>
          </div>
        </div>
        <div className="relative">
          <img src={cricket} />
          <div>
            <p className="absolute top-20 text-white">Legend 2</p>
          </div>
        </div>
        <div className="relative">
          <img src={volleyball} />
          <div>
            <p className="absolute top-20 text-white">Legend 2</p>
          </div>
        </div>
        <div className="relative">
          <img src={basketball} />
          <div>
            <p className="absolute top-20 text-white">Legend 2</p>
          </div>
        </div>
        <div className="relative">
          <img src={badminton} />
          <div>
            <p className="absolute top-20 text-white">Legend 2</p>
          </div>
        </div>
        <div className="relative">
          <img src={tenis} />
          <div>
            <p className="absolute top-20 text-white">Legend 2</p>
          </div>
        </div>

      
       
      </Carousel>
    </div>
  );
};

export default Banner;
