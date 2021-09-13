import React from "react";
import EachBook from "./EachBook";
 
function Books(props) {
  return (
    <div className="container">
      <div className="row">
        <p className="page-headers col-12 col-md-2">some books I've loved recently</p>
        <div className="col-12 col-md-10">
          <div>
            <p>book</p>
            <EachBook
              link=""
              image=""
              title=""
              category=""
            />
            </div>
            <div>
            <p>book</p>
            <EachBook
              link=""
              image=""
              title=""
              category=""
            />
          </div>
        </div>  
    </div>
  </div>
  )
}
 
export default Books;