import "./blog.css";

import { featuredBlogs, popularBlogs } from "./Blogs";

export function Blog() {
   return (
      <>
         <header className="blog-header">
            <h1>The Project Blog</h1>
            <p>Designs and layouts to help you with your app.</p>
         </header>
         <section className="blogs-container">
            {featuredBlogs.map((blog) => (
               <div key={blog.title} className="blog-card large-card">
                  <div className="card-image">
                     <img src={blog.image} alt={blog.title} />
                  </div>
                  <div className="card-body" style={{ backgroundColor: blog.textBg }}>
                     <span className="card-badge" style={{ color: blog.textBg }}>
                        {" "}
                        {blog.badge.toLocaleUpperCase()}{" "}
                     </span>
                     <div className="card-title"> {blog.title} </div>
                     <div>{blog.descp} </div>
                  </div>
               </div>
            ))}
         </section>
         <section className="blogs-container">
            {popularBlogs.map((blog) => (
               <div key={blog.title} className="blog-card">
                  <div className="card-image">
                     <img src={blog.image} alt={blog.title} />
                  </div>
                  <div className="card-body">
                     <span className="card-badge"> {blog.badge.toLocaleUpperCase()} </span>
                     <div className="card-title"> {blog.title} </div>
                     <div>{blog.descp} </div>
                  </div>
               </div>
            ))}
         </section>
      </>
   );
}
