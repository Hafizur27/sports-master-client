import footer from '../../../assets/fotter.png'
const Footer = () => {
  const yearNow = new Date().getFullYear();
  return (
    <div>
      <footer className="footer p-10 bg-yellow-600 text-white">
        <div>
        <img src={footer} alt="" className='w-2/3 '/>
          <h3 className="text-2xl font-bold ml-4">Sports <span className="text-black">Master</span></h3>
          
        </div>
        <div>
          <span className="footer-title">contact</span>
          <a className="link link-hover">Phone: +008-999-555-888</a>
          <a className="link link-hover">Email: info@gmail.com</a>
        </div>
        <div>
          <span className="footer-title">Address</span>
          <a className="link link-hover">Dhaka</a>
          <a className="link link-hover">Tangail</a>
          <a className="link link-hover">Gazipur</a>
         
        </div>
      </footer>
      <div className="footer footer-center p-4 bg-yellow-600 text-white">
        <div>
          <p>Copyright © {yearNow} - All right reserved by Hafizur Rahman</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
