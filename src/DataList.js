const DataList = ({ data }) => {
    return (
      <div className="data-list">
        {data.map(item => (
          <div className="data-details">
            <p>{JSON.stringify(item)}</p>
          </div>
        ))}
      </div>
    );
  }
   
  export default DataList;