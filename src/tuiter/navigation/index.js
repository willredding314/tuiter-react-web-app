import React from "react";

console.log(window.location.pathname)

const NavigationSidebar = (
 {
   path = window.location.pathname
 }
) => {
 return (
   <div className="list-group">
     <a href="/" className="list-group-item">Tuiter</a>
     <a href="/tuiter/home" className={`list-group-item
                    ${path === '/tuiter/home'?'active':''}`}>
       Home
     </a>
     <a href="/tuiter" className={`list-group-item
                    ${path === '/tuiter/'?'active':''}`}>
       Explore
     </a>
     <a href="/" className={`list-group-item
                    ${path === 'notifications'?'active':''}`}>
       Notifications
     </a>
     <a href="/" className={`list-group-item
                    ${path === 'messages'?'active':''}`}>
       Messages
     </a>
     <a href="/" className={`list-group-item
                    ${path === 'bookmarks'?'active':''}`}>
       Bookmarks
     </a>
     <a href="/" className={`list-group-item
                    ${path === 'lists'?'active':''}`}>
       Lists
     </a>
     <a href="/" className={`list-group-item
                    ${path === 'profile'?'active':''}`}>
       Profile
     </a>
     <a href="/" className={`list-group-item
                    ${path === 'more'?'active':''}`}>
       More
     </a>
   </div>
 );
};
export default NavigationSidebar;