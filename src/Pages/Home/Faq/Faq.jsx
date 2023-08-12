import Lottie from "lottie-react";
import faq from "../../../assets/faq.json";
import AOS from "aos";
import "aos/dist/aos.css";

const Faq = () => {
  AOS.init();
  return (
    <div className="py-10">
      <h1 className="text-4xl text-center mb-10">
        <span className="text-yellow-500">Frequently Asked</span> Question
      </h1>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <div
            className="w-md-1/2 w-full"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <Lottie animationData={faq} loop={true} className="w-2/3"></Lottie>
          </div>

          <div
            className="w-md-1/2 w-full"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="collapse collapse-plus">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-yellow-500 text-primary-content peer-checked:bg-yellow-500 peer-checked:text-secondary-content">
                How can You Booking a Sports?
              </div>
              <div className="collapse-content bg-white text-primary-content peer-checked:bg-white peer-checked:text-black mt-4">
                <p>
                  You can place a booking by visiting our website and adding the
                  desired Sports to your dashboard. Proceed to the payment page
                  to complete your purchase.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-yellow-500 text-primary-content peer-checked:bg-yellow-500 peer-checked:text-secondary-content">
                What payment methods do we accept?
              </div>
              <div className="collapse-content bg-white text-primary-content peer-checked:bg-white peer-checked:text-black mt-4">
                <p>
                  We accept Stripe payment methods. Choose the payment option
                  during the checkout process.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-yellow-500 text-primary-content peer-checked:bg-yellow-500 peer-checked:text-secondary-content">
                How long does selecting sports take?
              </div>
              <div className="collapse-content bg-white text-primary-content peer-checked:bg-white peer-checked:text-black mt-4">
                <p>
                  Selecting sports may depending on your Choice and the selected
                  class stored the student dashboard. Generally, selected class
                  are processed when student make successful payment. student
                  can visit his/him transaction id. Student can delete her
                  select class.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-yellow-500 text-primary-content peer-checked:bg-yellow-500 peer-checked:text-secondary-content">
                What is our return policy?
              </div>
              <div className="collapse-content bg-white text-primary-content peer-checked:bg-white peer-checked:text-black mt-4">
                <p>
                  We have a hassle-free return policy. If you are not satisfied
                  with your purchase, you can return the items within 30 days of
                  delivery. Please review our Returns & Refunds page for more
                  detailed information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
