"use client";
import React from "react";

export default function UsageBar({ used, total }) {
  const percentage = (parseFloat(used) / parseFloat(total)) * 100;

  return (
    <div>
      <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
        <div
          className="bg-blue-600 h-4 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="flex justify-between text-sm text-gray-600">
        <span>{used} Used</span>
        <span>{total} Total</span>
      </div>
    </div>
  );
}
