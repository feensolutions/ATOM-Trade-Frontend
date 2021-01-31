import React from 'react'
import './Recommendation.css'
const RecommendationMenu=({title,data})=>{
    return(
        <div className="recommendation">
            <div className="header">
                <span className="title">{title}</span>
            </div>
            
            {data.map((item)=><div className="recommendation_options">{item}</div>)}
           
        </div>
    )
}

export default RecommendationMenu