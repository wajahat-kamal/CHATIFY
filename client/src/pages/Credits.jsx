import React, { useEffect, useState } from "react";
import Loading from "./Loading";

function Credits() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPlans = async () => {
    setPlans();
    setLoading(false);
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  if (loading) return <Loading />;

  return (
    <div class="max-w-7xl h-screen overflow-y-scroll mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 class="text-3xl font-semibold text-center mb-10 xl:mt-30 text-gray-800 dark:text-white">
        Credit Plans
      </h2>
      <div class="flex flex-wrap justify-center gap-8">
        {plans.map((plan) => (
          <div
            key={plan._id}
            className="border border-gray-200 dark:border-purple-700  rounded-lg shadow hover:shadow-lg transition-shadow p-6 min-w-[300px] flex flex-col bg-white dark:bg-transparent"
          >
            <div class="flex-1">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {plan.name}
              </h3>
              <p class="text-2xl font-bold text-purple-600 dark:text-purple-300 mb-4">
                ${plan.price}
                <span class="text-base font-normal text-gray-600 dark:text-purple-200">
                  {" "}
                  {plan.credits} Credits
                </span>
              </p>
              <ul class="list-disc list-inside text-sm text-gray-700 dark:text-purple-200 space-y-1">
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <button class="mt-6 bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white font-medium py-2 rounded transition-colors cursor-pointer">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Credits;
