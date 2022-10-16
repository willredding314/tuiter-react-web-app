const NavigationSidebar = () => {
    return(`
      <div class="list-group">
        <a class="list-group-item" href="/">
        <i class="fab fa-twitter"></i></a>
        <a href="#" class="list-group-item list-group-item-action">
        <i class="fa-solid fa-house"></i> <span class="d-none d-xl-block text-nowrap">Home<span> </a>
        <a href="#" class="list-group-item list-group-item-action active">
        <i class="fa fa-hashtag" aria-hidden="true"></i> <span class="d-none d-xl-block text-nowrap"> Explore <span> </a>
        <a href="#" class="list-group-item list-group-item-action">
        <i class="fa-solid fa-bell"></i> <span class="d-none d-xl-block text-nowrap"> Notifications <span> </a>
        <a href="#" class="list-group-item list-group-item-action">
        <i class="fa fa-envelope" aria-hidden="true"></i> <span class="d-none d-xl-block text-nowrap"> Messages <span> </a>
        <a href="#" class="list-group-item list-group-item-action">
        <i class="fa-solid fa-bookmark"></i> <span class="d-none d-xl-block text-nowrap"> Bookmarks <span> </a>
        <a href="#" class="list-group-item list-group-item-action">
        <i class="fa-solid fa-list"></i> <span class="d-none d-xl-block text-nowrap"> Lists <span> </a>
        <a href="#" class="list-group-item list-group-item-action">
        <i class="fa-solid fa-user"></i> <span class="d-none d-xl-block text-nowrap"> Profile <span> </a>
        <a href="#" class="list-group-item list-group-item-action">
        <i class="fa-solid fa-ellipsis"></i> <span class="d-none d-xl-block text-nowrap"> More <span> </a>
      </div>
      <div class="d-grid mt-2">
        <a href="tweet.html"
           class="btn btn-primary btn-block rounded-pill">
           Tweet</a>
        
      </div>
    `);
   }
   export default NavigationSidebar;