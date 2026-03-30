function DataDisplay({ data, loading, error }) {
    if (loading) {
        return (
            <div>
                <h2>Data Display</h2>
                <div>
                    <p>Loading data...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <h2>Data Display</h2>
                <div>
                    <p>No data to display due to error</p>
                </div>
            </div>
        );
    }

    if (data.length === 0) {
        return (
            <div>
                <h2>Data Display</h2>
                <div>
                    <p>No data available</p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <h2>Data Display</h2>
            <div>
                {data.map(item => (
                    <div key={item.id}>
                        <div>
                            <h3>{item.name}</h3>
                            <span>
                                {item.priority}
                            </span>
                        </div>
                        <div>
                            <p>{item.description}</p>
                        </div>
                        <div>
                            <span>ID: {item.id}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DataDisplay;