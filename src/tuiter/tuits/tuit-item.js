import {useDispatch} from "react-redux";
import {deleteTuit} from "./full-tuits-reducer"
import {AiOutlineHeart} from "react-icons/ai"
import {BsReply} from "react-icons/bs"
import {FaRetweet} from "react-icons/fa"

const TuitItem = (
  props 
) => {

  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  }

  const tuit = props.tuit

  return(
    <li className="list-group-item">
      <div className="row">
        <div className="col-auto">
          <img width={50}
            alt="profiletuit"
            className="float-end rounded-circle"
            src={`/images/${tuit.image}`}/>
        </div>
        <div className="col-10">
          <span><b>{tuit.userName}</b> | {tuit.topic} | {tuit.time}</span>
          <br/>
          <span>{tuit.title}</span>
          <br/>
          <span><AiOutlineHeart/>{tuit.likes} | <BsReply/>{tuit.replies} | <FaRetweet/>{tuit.retuits} </span>
        </div>
        <div className="col-12">
          <div>
            <i className="bi bi-x-lg float-end"
              onClick={() => deleteTuitHandler(tuit._id)}></i>
          </div>
      </div>
    </div>
  </li>
 )
}
export default TuitItem;