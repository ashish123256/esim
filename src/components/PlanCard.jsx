"use client";
import React from "react";

export default function PlanCard({ plan, selected, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`p-6 rounded-lg shadow cursor-pointer ${
        selected ? "border-2 border-blue-600" : "bg-white"
      }`}
    >
      <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
      <p className="text-blue-600 text-2xl font-bold mb-4">{plan.price}</p>
      <ul className="text-sm text-gray-600 space-y-1">
        <li>Data: {plan.data}</li>
        <li>Validity: {plan.validity}</li>
        <li>Speed: {plan.speed}</li>
        {plan.support && <li>Support: {plan.support}</li>}
        {plan.roaming && <li>Roaming: ✅</li>}
      </ul>
    </div>
  );
}
