'use client';
import esimData from '@/data/esimData.json';
import UsageBar from '@/components/UsageBar';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const router = useRouter();
  const { usage, plan, currentSession } = esimData;

  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const date = new Date(currentSession.started);
    setFormattedDate(date.toLocaleString());
  }, [currentSession.started]);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
        <button onClick={() => router.push('/recharge')} className="bg-blue-600 text-white px-6 py-2 rounded">
          Manage SIM
        </button>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow mb-6">
        <h3 className="text-xl font-semibold mb-2">Data Usage</h3>
        <p className="text-gray-500 mb-2">{plan.name} plan</p>
        <UsageBar used={parseFloat(usage.usedData)} total={parseFloat(usage.totalData)} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-2">Remaining Data</h3>
          <p className="text-3xl font-bold">{plan.remainingData}</p>
          <div className="text-gray-600 mt-4 text-sm space-y-1">
            <p>Total Data: {usage.totalData}</p>
            <p>Used Data: {usage.usedData}</p>
            <p>SMS Total: {usage.smsTotal}</p>
            <p>SMS Used: {usage.smsUsed}</p>
            <p>Voice Total: {usage.voiceTotal}</p>
            <p>Voice Used: {usage.voiceUsed}</p>
            <p>Valid From: {plan.validFrom}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-2">Current Session</h3>
          <p className="text-3xl font-bold">{currentSession.usageMB} MB</p>
          <div className="text-gray-600 mt-4 text-sm space-y-1">
            <p>Session ID: {currentSession.sessionId}</p>
            {formattedDate && (
              <p>Started: {formattedDate}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
