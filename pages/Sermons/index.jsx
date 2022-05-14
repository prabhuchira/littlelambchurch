import Head from "next/head";
import BreadCrumb from "../../shared/BreadCrumb/BreadCrumb";
import Footer from "../../shared/Footer/Footer";
import Header from "../../shared/Header/Header";
// import  worship from "./../S"

let songs = [

    {
        date:"13th Feb 2022",
        yt_link:"https://www.youtube.com/embed/2BFfXC5_cdM",
        title:"Do you know who you are ?",
        speaker:"Rev.Dr. Sudharshan Rao"
    },
    
    {
        date:"8th May 2022",
        yt_link:"https://www.youtube.com/embed/hLlcabNjeFM",
        title:"A Mothers Request",
        speaker:"Rev.Dr. Sudharshan Rao"
    
    },
    {
        date:"  11th April 2022 ",
        yt_link:"https://www.youtube.com/embed/xXioLath8rQ",
        title:"Jesus Curses a Fig Tree",
        speaker:"Rev.Dr. Sudharshan Rao"
    },
    {
        date:"10th April 2022",
        yt_link:"https://www.youtube.com/embed/vBYw64oIdlI",
        title:"Palm Sunday Service  ",
        speaker:"Rev.Dr. Sudharshan Rao"
    },
    
]


export default function Worship(){
    return(
        <div>
            <Head>
                <title>Sermons</title>
            </Head>
            <Header/>
            <br/>
            <br/>
            <br/>
            <br/>
            
            
            <div className=" custom_bg">
                <div className="container" >
                    <div className="search_bar">
                        <div className="d-flex">
                        <h3  className="mx-2 px-3  gotham" style={{color:"white"}}>Sermons</h3>
                        {/* <h3  className="mx-2 px-3  custom_heading">Sermons</h3> */}
                        </div>
                        <input style={{maxWidth:"400px"}} className="form-control rounded-2" type="search" placeholder="Search Sermons" />
                    </div>
                    
                </div>
            </div>
           
                    
            <div className=" my-bg3  p-3 d-xs-none d-lg-block">
                <div className="container ">
                    <div className="row   " >
                       <div className="col-lg-3  ">
                           <div className="my-bg2 m-1 rounded-2">
                                  <div className="p-4">
                                      <h3>Year</h3>
                                      <ul style={
                                          {padding:"0px",
                                          listStyleType:'none',
                                            fontSize:"17px"
                                            }
                                          
                                          }
                                          className="years"
                                          >
                                          <li><span>2021</span></li>
                                          <li><span>2020</span></li>
                                          <li><span>2019</span></li>
                                      </ul>
                                     
                                  </div>
                           </div>

                           <div className="my-bg2 m-1 my-3 rounded-2">
                                  <div className="p-4">
                                      <h3>Tags</h3>
                                      <ul style={
                                          {padding:"0px",
                                          listStyleType:'none',
                                            fontSize:"17px"
                                            }
                                          
                                          }
                                          className="years"
                                          >
                                          <li><span>Christmas</span></li>
                                          <li><span>Lent Meetings</span></li>
                                          <li><span>Good Friday</span></li>
                                          <li><span>Easter</span></li>
                                      </ul>
                                     
                                  </div>
                           </div>
                        </div>

                       <div className="col-lg-9 ">
                       <div className="  rounded-2">
                       <div className="row text-center" >
                       {
                           songs.map(i=>{
                               return(
                                   <div className="col-lg-5 ">
                                <div key={i.yt_link} className="  p-3   my-2 song_item rounded-2">
                       
                         
                          
                                <div className="my-2">
                                    
                                    <div className=" text-start h4 text-red sermon_title ">{i.title} </div>
                                    <div className="text-start text-uppercase sermon_speaker">{i.speaker}</div>
                                </div>
                                <br/>
                                {/* <iframe width={"500px"} height={"250px"}  src={i.yt_link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}

                                <div className="frame-container" >
                                    <iframe className="responsive-iframe"  src={i.yt_link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>

                                
                                <br/>
                                
                                <div className="d-flex justify-content-between align-items-center my-2" style={{fontSize:'13px'}}>
                                    <div className="mx-3 text-start my-1 song_date" >{i.date}
                                    </div>
    
                                    <div className="mx-3 text-start my-1 song_date">
                                        <button className="btn btn-md view_youtube">&#9658; VIEW ON YOUTUBE</button>
                                    </div>
                                </div>
                                
                            </div>
                            </div>
                               )
                           })
                       }
                        
                       
                    </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}