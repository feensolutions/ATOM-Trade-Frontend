import React from 'react'
import './MainMenu.css'
const MainMenu=(props)=>{
   
    return(
        
    <div className="menu_container">
        <div className="heading">
            <h6 className="title">{props.title}</h6>
        </div>

        <div className="menu">
        {props.data?props.data.map(
                (item,id)=>{
                   
                    return(
                    <div className="options" key={id}>
                        {item}
                    </div> 
                    )
                }
            ):null}

            {props.children?props.children.map(
                (item,id)=>{
                   
                    return(
                    item!==null?<div className="options" key={id}>
                        {item}
                    </div> :null
                    )
                }
            ):null}


           
        </div>
    </div>
   
    )
}


export default MainMenu