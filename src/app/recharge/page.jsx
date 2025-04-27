"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import esimData from "@/data/esimData.json";
import PlanCard from "@/components/PlanCard";

export default function RechargePage() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [recharged, setRecharged] = useState(false);
  const router = useRouter();

  const currentPlan = esimData.plan; 

  const handleRecharge = () => {
    if (selectedPlan) {
      setTimeout(() => {
        setRecharged(true);
      }, 500);
    }
  };

  const handleBackToDashboard = () => {
    router.push("/dashboard"); 
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
     
      <button
        onClick={handleBackToDashboard}
        className="text-blue-600 hover:underline mb-4"
      >
        ← Back to Dashboard
      </button>

      <h1 className="text-2xl font-bold mb-4">Manage SIM</h1>

      {/* Current Plan Display */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">Current Plan</h2>
        <div className="grid md:grid-cols-2 gap-4 text-gray-700">
          <div>
            <p className="font-semibold">Plan Name</p>
            <p className="mb-2">{currentPlan.name}</p>
            <p className="font-semibold">Validity</p>
            <p>
            <span className="mb-2">{currentPlan.validFrom}</span> - <span className="mb-2">{currentPlan.validUntil}</span>
            </p>
            
          </div>
          <div>
            <p className="font-semibold">Price</p>
            <p className="mb-2">{currentPlan.price}</p>
            <p className="font-semibold">Remaining Data</p>
            <p className="mb-2">{currentPlan.remainingData}</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Available Plans</h2>

      {!recharged ? (
        <>
          {/* Available Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {esimData.availablePlans.map((plan, idx) => (
              <PlanCard
                key={idx}
                plan={plan}
                selected={selectedPlan?.name === plan.name}
                onClick={() => setSelectedPlan(plan)}
              />
            ))}
          </div>

        
          <button
            onClick={handleRecharge}
            disabled={!selectedPlan}
            className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700 disabled:bg-gray-400"
          >
            {selectedPlan ? `Recharge with ${selectedPlan.name}` : "Select a Plan"}
          </button>
        </>
      ) : (
        <div className="bg-green-100 p-6 rounded-lg shadow text-green-800">
          <h2 className="text-2xl font-semibold mb-2">Recharge Successful!</h2>
          <p className="mb-4">You have successfully recharged with {selectedPlan.name}.</p>

       
          <button
            onClick={handleBackToDashboard}
            className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
          >
            Back to Dashboard
          </button>
        </div>
      )}
    </div>
  );
}
