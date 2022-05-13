import Footer from "../../shared/Footer/Footer";
import Header from "../../shared/Header/Header";
// import  worship from "./../S"

import React from 'react';
import Head from "next/head";



let songs = [

    {
        date:"8 days ago",
        yt_link:"https://www.youtube.com/embed/hLlcabNjeFM?start=345&end=622&enablejsapi=1",
        title:"Randi Yehovanu Gurchi"
    },
    {
        date:"8 days ago",
        yt_link:"https://www.youtube.com/embed/hLlcabNjeFM?start=640&end=1005&enablejsapi=1",
        title:"Jayamichina Devuniki"
    },
    {
        date:"8 days ago",
        yt_link:"https://www.youtube.com/embed/mJvEcW1bfGQ?start=884&end=1244",
        title:"Geetham Geetham "
    },
    {
        date:"8 days ago",
        yt_link:"https://www.youtube.com/embed/vBYw64oIdlI?start=2180&end=2657",
        title:"Jaya Prabhu  "
    },
    
]

export default function Worship(){


    const [songList,setSongList] = React.useState(songs);
    let songsCopy = songs;



    const searchRef = React.useRef();

  
    const searchHandler = ()=>{
        let newSongs = songsCopy.filter(i=>i.title.startsWith(searchRef.current.value))
        console.log(songsCopy)
        setSongList(newSongs)
    }

    return(
        <div>

            <Head>
                <title>Worship</title>
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
                        <h3  className="mx-2 px-3  custom_heading" style={{color:"white"}}>Worship</h3>
                        {/* <h3  className="mx-2 px-3  custom_heading">Sermons</h3> */}
                        </div>
                        <input ref={searchRef} onInput={searchHandler} style={{maxWidth:"400px"}} className="form-control rounded-2" type="search" placeholder="Search Songs" />
                    </div>
                    
                </div>
            </div>
           
                    
            <div className=" my-bg text-center">
                <div className="container ">
                    <div className="row text-center" >
                       {
                           songList.map(i=>{
                               return(
                                <div key={i.yt_link} className="col-lg-5 m-3 song_item">
                       
                         
                          
                                <div >
                                    
                                    <div className="mx-2 text-start h4 text-red song_title my-3">{i.title} </div>
                                </div>
                                {/* <iframe width={"500px"} height={"250px"}  src={i.yt_link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}

                                <div className="frame-container" >
                                    <iframe className="responsive-iframe"  src={i.yt_link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>

                                
                                <br/>
                                
                                <div className="d-flex justify-content-between align-items-center my-2">
                                    <div className="mx-3 text-start my-1 song_date" >{i.date}
                                    </div>
    
                                    <div className="mx-3 text-start my-1 song_date">
                                        <button className="btn btn-md view_youtube">&#9658; VIEW ON YOUTUBE</button>
                                    </div>
                                </div>
                                
                            </div>
                               )
                           })
                       }
                        
                       
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}