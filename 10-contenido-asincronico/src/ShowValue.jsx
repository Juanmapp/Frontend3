function ShowValue({ params }) {
    console.log(`ShowValue render, ${params.value}`);
    
    return <div className="value">{params.value}</div>;
    }

export default ShowValue