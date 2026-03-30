function StatusPanel({ loading, error, data }) {
    return (
        <div>
            <h2>Status Panel</h2>
            {loading && (
                <div>
                    <span>Loading data...</span>
                </div>
            )}
            {error && (
                <div>
                    <span>{error}</span>
                </div>
            )}
            {!loading && !error && data.length > 0 && (
                <div>
                    <span>Successfully loaded {data.length} items</span>
                </div>
            )}
        </div>
    );
}

export default StatusPanel;