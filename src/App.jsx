import { useEffect, useState, useCallback } from "react";
import StatusPanel from "./Components/StatusPanel";
import ControlPanel from "./Components/ControlPanel";
import DataDisplay from "./Components/DataDisplay";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("All");
  const [beaconStatus, setBeaconStatus] = useState("OFF");

  const simulateFetch = useCallback(() => {
    setLoading(true);
    setError(null);
    setData([]);

    setTimeout(() => {
      const randomSuccess = Math.random() > 0.5;
      
      if (randomSuccess) {
        const mockData = [
          { id: 1, name: "Task Alpha", priority: "High", description: "Critical system update" },
          { id: 2, name: "Task Beta", priority: "Low", description: "Documentation review" },
          { id: 3, name: "Task Gamma", priority: "High", description: "Security patch deployment" },
          { id: 4, name: "Task Delta", priority: "Low", description: "UI improvements" },
          { id: 5, name: "Task Epsilon", priority: "High", description: "Database optimization" },
          { id: 6, name: "Task Zeta", priority: "Low", description: "Code refactoring" },
          { id: 7, name: "Task Eta", priority: "High", description: "API integration" },
          { id: 8, name: "Task Theta", priority: "Low", description: "Testing suite update" }
        ];
        setData(mockData);
        setError(null);
      } else {
        setError("Failed to fetch data: Network timeout");
        setData([]);
      }
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    simulateFetch();
  // eslint-disable-next-line react-hooks/set-state-in-effect
  }, [simulateFetch]);

  useEffect(() => {
    const beaconInterval = setInterval(() => {
      setBeaconStatus(prev => prev === "ON" ? "OFF" : "ON");
    }, 1000);

    return () => clearInterval(beaconInterval);
  }, []);

  const filteredData = data.filter(item => {
    if (filter === "All") return true;
    return item.priority === filter;
  });

  return (
    <div>
      <h1>Lifecycle Lighthouse</h1>
      
      <div>
        Beacon Pulse: {beaconStatus}
      </div>

      <StatusPanel loading={loading} error={error} data={data} />
      
      <ControlPanel 
        onReload={simulateFetch} 
        filter={filter} 
        onFilterChange={setFilter}
        loading={loading}
      />
      
      <DataDisplay data={filteredData} loading={loading} error={error} />
      
      <footer style={{ marginTop: '20px', padding: '10px', borderTop: '1px solid #ccc' }}>
        <p>© 2026 Lifecycle Lighthouse - All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;
