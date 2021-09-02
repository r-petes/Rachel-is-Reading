import React from "react";
import EachBlog from "./EachBlog";
 
function Blogs(props) {
  return (
    <div>
      <div>
      <h1>Writings</h1>
      <EachBlog
        link=""
        image=""
        title=""
        category=""
      />
      </div>
      <div>
      <h1>Writings</h1>
      <EachBlog
        link=""
        image=""
        title=""
        category=""
      />
    </div>
    </div>
  )
}
 
export default Blogs;
