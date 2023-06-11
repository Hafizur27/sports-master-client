import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";
import { Elements } from "@stripe/react-stripe-js";
import useSelectClass from "../../../components/hooks/useSelectClass";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);
const Payment = () => {
  const [allClass] = useSelectClass();
  const cost = allClass?.reduce((sum, item) => sum + item?.price, 0);
  const totalCost = parseFloat(cost.toFixed(2))
  return (
    <div className="w-full">
      <Elements stripe={stripePromise}>
        <CheckOut price={totalCost} allClass={allClass}></CheckOut>
      </Elements>
    </div>
  );
};

export default Payment;
