import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import UseAxiosSecure from "../../../components/hooks/UseAxiosSecure";
import UseAuth from "../../../components/UseAuth/UseAuth";
import Swal from "sweetalert2";
import "./CheckOut.css";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const CheckOut = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [axiosSecure] = UseAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const { user } = UseAuth();
  const [processing, setProcessing] = useState(false);
  const location = useLocation();
  const data = location.state;
  const {
    coachName,
    coachEmail,
    coachPhoto,
    StudentName,
    studentEmail,
    studentImage,
    category,
    image,
    price,
    seat,
    student,
    CoachId,
    _id,
  } = data;

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

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
      setCardError(error?.message);
    } else {
      setCardError("");
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "Anonymous",
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError?.message);
    }

    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      const paymentInfo = {
        StudentName,
        studentEmail,
        studentImage,
        coachName,
        coachEmail,
        coachPhoto,
        category,
        image,
        price,
        transactionId: paymentIntent.id,
        date: new Date().toLocaleString(),
        classId: _id,
        CoachId,
        student,
        seat,
      };

      axiosSecure.post("/payments", paymentInfo).then((res) => {
        if (res.data.insertResult.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully Booked",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Student | Payment</title>
      </Helmet>

      <h3 className="text-xl font-bold ml-8">Confirm Payment</h3>
      <div className="divider w-2/3 ml-8"></div>
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
      {cardError && <p className="text-red-500 ml-8">{cardError}</p>}
    </>
  );
};

export default CheckOut;
