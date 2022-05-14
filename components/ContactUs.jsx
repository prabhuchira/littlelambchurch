


export default function ContactUs(){

    return(
        
        <div className="contact-us">
        <div className="container ">
          <div className="py-5 ">
            
              <h1 className="main-heading mt-5">Contact Us</h1>

              <div className="row " >
                <div className="col-md-8 my-2">
                  <div className="row my-4">
                  <div className="col-md-4  "  style={{flex:1}}>

                  <input className="custom-input   w-100" placeholder="Firstname" type="text" />

                  </div>
                  <div className="col-md-4 " style={{flex:1}}>
                  <input className="custom-input  w-100" placeholder="Lastname" type="text" />

                  </div>
                </div>

                <div className="row my-4">
                  <div className="col-md-4  "  style={{flex:1}}>

                  <input className="custom-input   w-100" placeholder="Email" type="text" />

                  </div>
                  {/* <div className="col-md-12 " style={{flex:1}}>
                  <textarea draggable="false" className="custom-input  w-100" cols="30" rows="10" placeholder="Message"  ></textarea>

                  </div> */}
                </div>

                  <div className="col-md-12 " style={{flex:1}}>
                  <textarea draggable="false" className="custom-input  w-100" cols="30" rows="10" placeholder="Message"  ></textarea>

                  </div>
                
                </div>


                
               
                <div className="col-md-4 my-4 text-left address">
                    
              

                    <div className="mapouter add_border"><div className="gmap_canvas">
                      <div className="frame-container">
                      <iframe className="responsive-iframe"  id="gmap_canvas" src="https://maps.google.com/maps?q=little%20lamb%20church&t=&z=19&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe><a href="https://putlocker-is.org"></a><br/>
                      </div>
                    {/* <style>.mapouter{position:relative;text-align:right;height:393px;width:388px;}</style>
                    <style>.gmap_canvas {overflow:hidden;background:none!important;height:393px;width:388px;}</style> */}
                    
                    </div></div>
                    <br/>
                    8HJ9+F6W, HIG, Hastina Puram Colony,
                    TV Colony, Vanasthalipuram,
                    Telangana 500070
                    
                </div>
              </div>
              

              <div className="text-center">
                <button className="special-btn px-3 py-1 "  >SUBMIT</button>
              </div>
            </div>
        </div>
      </div>

    )
}