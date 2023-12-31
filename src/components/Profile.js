import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeMedia } from "../utils/watchListSlice";
import { useState } from "react";

const Profile = () => {
  const storedUserJSON = localStorage.getItem("userData");
  const storedUser = JSON.parse(storedUserJSON);
  const diapatch = useDispatch();
  const watchList = useSelector((state) => state.watchList);
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("monthly");

  const removeWatch = (id) => {
    diapatch(removeMedia(id));
  };

  const handleUpgradeClick = () => {
    setShowModal(true);
  };

  const handleCloseModalClick = () => {
    setShowModal(false);
  };
  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };
  const plans = {
    monthly: {
      name: "Monthly Plan",
      price: 199,
    },
    yearly: {
      name: "Yearly Plan",
      price: 159,
    },
  };
  const handlePayNow = () => {
    // try {
    //   const res = await updateProfile({
    //     _id: userInfo._id,
    //     membership:"Plus",
    //     jwt:userInfo.jwt
    //   }).unwrap();
    //   dispatch(setCredentials(res));
    //   toast.success(`Payment successful for ${plans[selectedPlan].name}`);
    //   navigate("/profile");
    // } catch (err) {
    //   toast.error(err?.data?.message || err.error);
    // }
  };
  return (
    <div className="flex min-h-screen bg-black">
      <Header />

      <div class="w-full max-w-screen-xl mx-auto p-8 my-24">
        <div class="mt-18 text-center mb-5 text-white">
          <h1 className="font-bold text-2xl">User Profile</h1>
        </div>
        <div class="flex flex-wrap gap-5">
          <div class="flex w-full gap-5">
            <div class="w-1/2 p-5 bg-gray-200 rounded-lg shadow-md border-r border-gray-300">
              <h2 class="font-bold text-2xl mb-2.5 text-black">
                Account Information
              </h2>
              <p className="font-semibold">
                Name: {storedUser.name || "user"}{" "}
                {<span className="shining-badge">Plus</span>}
              </p>
              <p>Email: {storedUser.email || "johndoe@example.com"}</p>
            </div>
            <div class="w-1/2 p-5 bg-gray-200 rounded-lg shadow-md border-r border-gray-300">
              <h2 class="font-bold text-2xl mb-2.5 text-black">
                Upgrade to Flixxit Plus
              </h2>
              <p>Enhance your experience with premium features.</p>
              <button
                className="font-bold p-2 mt-2 mr-2 mb-2 text-white bg-red-700 rounded-lg"
                onClick={handleUpgradeClick}
              >
                Upgrade Now
              </button>
              {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-70">
                  <div className="bg-gradient-to-r from-red-900 to-black opacity-75 absolute inset-0"></div>
                  <div className="relative bg-black text-white rounded-lg p-5">
                    <button
                      className="absolute top-2 right-2 text-white"
                      onClick={handleCloseModalClick}
                    >
                      X
                    </button>
                    <h2>Upgrade to Flixxit Plus</h2>
                    <div className="flex justify-center space-x-5 mb-5">
                      {" "}
                      {Object.keys(plans).map((plan) => (
                        <div
                          key={plan}
                          className={`p-2 border-2 border-gray-300 rounded-lg cursor-pointer transition-colors duration-300 ${
                            selectedPlan === plan ? "selected" : ""
                          }`}
                          onClick={() => handlePlanChange(plan)}
                        >
                          <h3>{plans[plan].name}</h3>
                          <p>₹{plans[plan].price.toFixed(2)} / month</p>
                        </div>
                      ))}
                    </div>
                    <div className="border-t-2 border-gray-300 pt-5 mt-5">
                      <h3 className="text-lg mb-2.5">Invoice Summary</h3>
                      <p className="text-lg mb-2.5">
                        Subscription: {plans[selectedPlan].name}
                      </p>
                      <p className="text-base mb-2.5">
                        Total Amount: ₹{plans[selectedPlan].price.toFixed(2)}
                      </p>
                      <button
                        className="font-bold p-2 mt-2 mr-2 mb-2 text-white bg-red-700 rounded-lg"
                        onClick={handlePayNow}
                      >
                        Pay Now
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Content Consumed */}
          <div class="w-full p-5 bg-gray-200 rounded-lg shadow-md">
            <h1 className="font-bold text-xl">Content Consumed</h1>
            {watchList.length > 0 ? (
              <div class="max-h-50 overflow-y-scroll">
                {watchList.map((media) => (
                  <div
                    class="flex items-center p-3 border-b border-gray-300"
                    key={media.movieTitle}
                  >
                    <img
                      class="w-32 h-32 mr-4 rounded"
                      src={IMG_CDN_URL + media.posterPath}
                      alt={media.title}
                    />
                    <h2 class="text-lg m-0 flex-1 overflow-hidden whitespace-nowrap overflow-ellipsis">
                      {media.title}
                    </h2>

                    <button
                      className="text-center mt-2.5 hover:font-bold"
                      onClick={() => removeWatch(media.id)}
                    >
                      remove
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p>No movies</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
