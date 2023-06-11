import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import UseAxiosSecure from "../../../components/hooks/UseAxiosSecure";
import UseAuth from "../../../components/UseAuth/UseAuth";
import Swal from "sweetalert2";
import './CheckOut.css';

const CheckOut = ({price, allClass}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [axiosSecure] = UseAxiosSecure();
  const [clientSecret, setClientSecret] = useState('');
  const {user} = UseAuth();
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');

  useEffect(()=>{
    if(price > 0){
      axiosSecure.post('/create-payment-intent', {price})
    .then(res => {
        setClientSecret(res.data.clientSecret)
    })
    }
  }, [price, axiosSecure])

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setProcessing(true);

    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'unknown',
          name: user?.displayName || 'Anonymous'
        },
      },
    },
    );

    if(confirmError){
      // to do
      console.log(confirmError)
    }

    setProcessing(false);
    if(paymentIntent.status ==='succeeded'){
      setTransactionId(paymentIntent.id);
      const paymentInfo = {
        name: user?.displayName,
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        quantity: allClass.length,
        menuId: allClass.map(data => data._id),
        selectedClassId: allClass.map(data => data.selectId),
        classesName: allClass.map(data => data.category)

      };
      axiosSecure.post('/payments', paymentInfo)
      .then(res => {
        console.log(res.data);
        if(res.data.insertResult.insertedId){
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Payment Info added',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    }
  };
  return (
    <>
      <form className="w-2/3 m-8" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-warning btn-sm"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500">{cardError}</p>}
      {transactionId && <p className="text-green-500">Transaction Id:{transactionId}</p>}
    </>
  );
};

export default CheckOut;
