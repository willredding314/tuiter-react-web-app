

const WhoToFollowListItem = (who) => {
    return(`
        <div class="d-flex flex-row flex-nowrap justify-content-between row border">
            <div class="p-2">
                <img class="" src="${who.avatarIcon}" width="35" height="35" />
            </div>
            <div class="p-2">
                <div>
                    ${who.userName} <i class="fa-solid fa-check"></i>
                </div>
                <div class="text-secondary">
                        ${who.handle}
                </div>
            </div>
            <div class="p-2 justify-content-end">
                    <button type="submit" class="btn btn-primary rounded-pill ">Follow</button>
            </div>
        </div>
    `)
}

export default WhoToFollowListItem;
