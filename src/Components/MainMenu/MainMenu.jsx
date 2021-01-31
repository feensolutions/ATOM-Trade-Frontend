import React from 'react'
import './MainMenu.css'
const MainMenu=(props)=>{
    return(

    <div className="menu_container">
        <div className="heading">
            <h6 className="title">{props.title}</h6>
        </div>

        <div className="menu">
            { props.children.map(
                (item,id)=>{
                   
                    return(
                    item!==null?<div className="options" key={id}>
                        {item}
                    </div> :null
                    )
                }
            )}


           
        </div>
    </div>
   
    )
}


export default MainMenu