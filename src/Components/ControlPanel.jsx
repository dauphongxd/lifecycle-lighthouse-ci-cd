function ControlPanel({ onReload, filter, onFilterChange, loading }) {
    return (
        <div>
            <h2>Controls Panel</h2>
            <div>
                <button 
                    onClick={onReload} 
                    disabled={loading}                >
                    {loading ? 'Loading...' : 'Reload'}
                </button>
                
                <div>
                    <label>Filter:</label>
                    <select 
                        id="filter"
                        value={filter} 
                        onChange={(e) => onFilterChange(e.target.value)}
                    >
                        <option value="All">All</option>
                        <option value="High">High Priority</option>
                        <option value="Low">Low Priority</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default ControlPanel;