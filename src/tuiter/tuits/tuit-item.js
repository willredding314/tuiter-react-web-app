import {useDispatch} from "react-redux";
import {AiOutlineHeart} from "react-icons/ai"
import {BsReply} from "react-icons/bs"
import {FaRetweet} from "react-icons/fa"
import { updateTuitThunk, deleteTuitThunk } from "../../services/tuits-thunks";

const TuitItem = (
  props 
) => {

  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
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
          <span>{tuit.tuit}</span>
          <br/>
          <span><AiOutlineHeart onClick={() => dispatch(updateTuitThunk({
            ...tuit,
            likes: tuit.likes + 1
          }))}/>{tuit.likes} | 
                <BsReply/>{tuit.replies} | 
                <FaRetweet onClick={() => dispatch(updateTuitThunk({
                  ...tuit,
                  retuits: tuit.retuits + 1
                }))}/>{tuit.retuits} </span>
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