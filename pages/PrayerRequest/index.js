import Head from "next/head";
import Footer from "../../shared/Footer/Footer";
import Header from "../../shared/Header/Header";


export default function PrayerRequest(){


    return (
        <div>
            <Head>
              <title>Prayer Request</title>
            </Head>
            <Header/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          
            <div className=" def-grey">
        

      <div className="about-bg" >



      </div>


      <div className="container-fluid page-layout">
        <div className="container my-bg p-3 p-lg-5 add_border">
          <h1 className="lato-heading py-3 py-lg-5 text-center  text-muted  ">PRAYER REQUEST</h1>

          <form className="lato-text">

            <div className="row ">

              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Name:</label>
                  <input type="text" className="form-control rounded-0 bw-0" id="exampleInputEmail1" aria-describedby="emailHelp" />
         
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Lastname:</label>
                  <input type="text" className="form-control rounded-0 bw-0" id="exampleInputPassword1"/ >
                </div>
              </div>
            </div>

            <br/>
            <div className="row">

              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email:</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <small id="emailHelp" className="form-text text-muted">example@example.com.</small>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Phone Number:</label>
                  <input type="tel" className="form-control" id="exampleInputPassword1"/>
                </div>
              </div>
            </div>
           
          <br/>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Prayer Request</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <br/>

            <div className="text-center ">
              <button type="submit" className="btn btn-dark btn-md rounded-0 btn-block">SUBMIT</button>
            </div>
          </form>
        
         
        </div>
      </div>
    </div>
      <br/>
    <Footer/>
        </div>
    )
}