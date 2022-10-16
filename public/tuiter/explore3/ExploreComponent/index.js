
import PostSummaryList from "./PostSummaryList/index.js"

const ExploreComponent = () => {
    return(`
    <div class="d-flex flex-row flex-nowrap row w-100">
        <input type="text" class="form-control" placeholder="Search Twitter">
        <a href="#"><i class="fa-solid fa-gear fa-2x"></i></a>
    </div>
    <div class="d-flex flex-row flex-nowrap row w-100">
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a href="#" class="nav-link active">For you</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Trending</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">News</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Sports</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Entertainment</a>
            </li>
        </ul>
    </div>
    <div class="d-flex flex-row flex-nowrap row w-100">
        <img src="ExploreComponent/maincard.png" width="100%">
    </div>

    ${PostSummaryList()}
    `);
   }
export default ExploreComponent;

