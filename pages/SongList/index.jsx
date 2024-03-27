import React, { useEffect } from "react";
import Header from "../../shared/Header/Header";
import Song from "../../shared/Song/Song";




const SongList = () => {


  

    const [songList,setSongList] = React.useState([]);

    const myreq = async()=>{

        const myRes = await fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=1000&playlistId=PLWhGKfRW0UWDnCqVhRKkAyDY2fTBjkvIo&key=AIzaSyDwfR7vKOJ5zq6QVjzvPsX2RDxsE1qADyM");
        const res =  await myRes.json();
        
        console.log(res,"RES");
        return setSongList(res.items)
    
    }
    
    React.useEffect(()=>{
        myreq();
    },[])
    
    const searchRef = React.createRef();

    const submitSearch=()=>{
        console.log(searchRef.current.value,"SUBMIT SEARCH VAL")
    }

    return (
        <div>

           
            <Header />
            {/* <title>Song List</title> */}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="text-center def-grey p-lg-5">
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLWhGKfRW0UWDnCqVhRKkAyDY2fTBjkvIo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                <div className="about-bg"  >
                </div>
                <div className="container-fluid text-center page-layout ">
                    <div className="container my-bg p-3 p-lg-5 add_border" >
                        {/* <h1 className="lato-heading py-1    "></h1> */}
                        {/* <h1 className="lato-heading py-5    ">OUR STORY</h1> */}
                        <div className="row align-items-center">
                            <div className="row">

                                <div className="col-lg-1">Search: </div>
                                <div  className="col-lg-10" >

                                 <input type="search" ref={searchRef} className="full-width form-control"  />
                                </div>

                                <div className="col-lg-1" >

                                 <button className="btn btn-primary" onClick={submitSearch}>Search</button>
                                </div>
                            </div>
                            {/* <div className="col-lg-6 text-center my-3">
                                <img className="rounded-3" src="https://lh5.googleusercontent.com/p/AF1QipNOXGAVnsfMH-qegCw3TnYSksiWJWn0OwWVSfLj=w660-h715-p-k-no" width="100%" height="auto" />
                            </div>
                            <div className="col text-start">
                                <p style={{ textAlign: "justify" }} className="lato-text text-muted p-3">
                                    The church is not a building, but a body of believers with a specific nature and purpose. These biblical roles or ministries of the church are foundational to it. What are these roles? They are many, but key to any church are foundations in worship, edification and evangelism. Worship is God-centered and Christ-centered. It is not about entertaining Christians with flashy displays or presentations, but about expressing our love by worshiping our Creator. We are to praise and glorify God in worship. As such, every Christian needs to be part of regular fellowship and worship. Edification is also a role of the church. It involves edifying believers, but also nurturing, building up or helping believers to mature in Christ. To this end, churches are tasked with a variety of ministries such as Bible study, continuing education in related areas, praying for one another, acts of genuine hospitality and more. Evangelism is also a key role of the church. This means reaching out to a lost world with the Good News about Jesus. Since people often have questions or doubts about Christ and Christianity, knowing the truth and being able to defend it (apologetics) is also part of the role of the church. But beyond evangelism in the sense of reaching out with the gospel, the church must also express compassion and mercy tangibly by helping others. In following Christ’s example to love others, the church, too, must seek to make a real difference in the world while not neglecting to share the message of Christ. If a church fails to fulfill any of these key roles – worship, edification, evangelism – then the church is not functioning as God intends. Granted, there are times when churches face challenges and struggles to one degree or another, but a healthy church seeks to overcome such challenges in a way that honors God and His intentions for His church.
                                </p>
                            </div> */}


                            <div className="col-lg-12 my-3 text-left">
                                   
                                    {
                                    songList.length>0 && songList.map(song=>{
                                        return <Song key={song.snippet.title} title={song.snippet.title} content={song.snippet} />
                                    })
                                    }
                                    {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLWhGKfRW0UWDnCqVhRKkAyDY2fTBjkvIo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>




         
                <div className="text-center def-grey p-lg-5">

                    <div>
                        https://jsonplaceholder.typicode.com/todos/1
                    </div>
                </div>
           
        </div>
    )
}





export default SongList;