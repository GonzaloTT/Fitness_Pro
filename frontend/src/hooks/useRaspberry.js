import { useState, useEffect, useRef, useCallback } from "react";

const RPI_IP = "10.1.32.74";
export const STREAM_URL = `http://${RPI_IP}:8080/video`;
const API_URL = `http://${RPI_IP}:5000`;

export function useRaspberry(pollInterval = 800) {
  const [stats, setStats] = useState(null);
  const [connected, setConnected] = useState(false);
  const [error, setError] = useState(null);
  const intervalRef = useRef(null);

  const fetchStats = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/stats`, { signal: AbortSignal.timeout(1500) });
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      setStats(data);
      setConnected(true);
      setError(null);
    } catch (e) {
      setConnected(false);
      setError("Sin conexión con la Raspberry");
    }
  }, []);

  const sendCommand = useCallback(async (cmd) => {
    try {
      await fetch(`${API_URL}/control`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cmd }),
        signal: AbortSignal.timeout(2000),
      });
    } catch (e) {
      console.warn("Command failed:", cmd, e);
    }
  }, []);

  useEffect(() => {
    fetchStats();
    intervalRef.current = setInterval(fetchStats, pollInterval);
    return () => clearInterval(intervalRef.current);
  }, [fetchStats, pollInterval]);

  return { stats, connected, error, sendCommand };
}
