import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./tuit-item";
import "./tuits.json"

const TuitsList = () => {
 
 const tuitsArray = useSelector(state => state.tuits)
 console.log(tuitsArray)
 return(
   <ul className="list-group">
     {
       tuitsArray.map(tuit =>
         <TuitItem
           key={tuit._id} tuit={tuit}/> )
     }
   </ul>
   
 );
};
export default TuitsList;