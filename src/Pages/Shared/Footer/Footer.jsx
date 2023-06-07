
const Footer = () => {
    const yearNow = new Date().getFullYear();
    return (
        <div>
            <footer className="footer p-10 bg-yellow-600 text-white">
  <div>
    <img src="" alt="" />
    <h3 className="text-xl font-bold">Sports Master</h3>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
 
</footer>
<div className="footer footer-center p-4 bg-yellow-600 text-white">
  <div>
    <p>Copyright © {yearNow} - All right reserved by ACME Industries Ltd</p>
  </div>
</div>
        </div>
    );
};

export default Footer;