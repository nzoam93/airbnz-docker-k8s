import './Filter.css'

export default function Filter() {
    return (
        <div className="filter-icons">

            <div className="filter-item">
                <i className="fa-solid fa-fire fa-2x filter-icon" /> <span className="caption">Trending</span>
            </div>
            <div className="filter-item">
                <i className="fa-solid fa-umbrella-beach fa-2x filter-icon" /> <span className="caption">Beach</span>
            </div>
            <div className="filter-item">
                <i className="fa-solid fa-snowflake fa-2x filter-icon" /> <span className="caption">Snow</span>
            </div>
            <div className="filter-item">
                <i className="fa-solid fa-sliders fa-2x filter-icon" /> <span className="caption">Filter</span>
            </div>
        </div>
    )
}
