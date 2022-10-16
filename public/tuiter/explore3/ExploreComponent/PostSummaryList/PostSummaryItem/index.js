

const PostSummaryItem = (post) => {
    return (`
    <div class="border d-flex flex-row flex-nowrap justify-content-between row w-100">
        <div class="col">
            <p class="m-0 text-secondary">${post.topic}</p>
            <p class="m-0"><b>${post.userName}<i class="fa-solid fa-check"></i> - ${post.time}</b></p>
            <p class="m-0 text-secondary">${post.title} </p>
            <p class="m-0 text-secondary">${post.tweets} </p>
        </div>
        <img class="p-2" src="${post.image}" width="100" height="100">
    </div>
    `);
}

export default PostSummaryItem;