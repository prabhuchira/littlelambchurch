import Head from "next/head";
import BreadCrumb from "../../shared/BreadCrumb/BreadCrumb";
import Footer from "../../shared/Footer/Footer";
import Header from "../../shared/Header/Header";
// import  worship from "./../S"

import { CaretDownOutlined, CalendarOutlined } from '@ant-design/icons'
import React from "react";
import BackShadow from "../../shared/BackShadow/BackShadow";
import FiltersMobile from "../FiltersMobile/FiltersMobile";




const youtubePlaylists = {
    
    
    
    data_by_year:[
		
    {name:"2023",playlistId:"PLWhGKfRW0UWDnCqVhRKkAyDY2fTBjkvIo"},
    {name:"2022",playlistId:"PLWhGKfRW0UWC1qfZlbEwh41_RtvNw35Vl"},
    {name:"2021",playlistId:"PLWhGKfRW0UWAlyqY6yw0mE-mWSOm1d-_7"},
    {name:"2020",playlistId:"PLWhGKfRW0UWD3iTKSKRouxwvH8mIPzQ2w"},
    
],
    data_by_tags:[
        { name:"Lent",playlistId:"PLWhGKfRW0UWCB5igveomaNtpq9yU7dVs8"},
        {name:"Youth Retreats",playlistId:"PLWhGKfRW0UWAUEJ01446CkRP1OAdo5Tdc"},
        {name:"Baptisms",playlistId:"PLWhGKfRW0UWAuccT7sJH9XKKbYyk8rEuk"},
        
    ]
}


let songsExample = [
	{
		id: 1,
		date: "13th Feb 2022",
		yt_link: "https://www.youtube.com/embed/2BFfXC5_cdM",
		title: "Do you know who you are ?",
		speaker: "Rev.Dr. Sudharshan Rao",
		tags: ["#Lent Meeting"]
	},
	{
		id: 2,
		date: "8th May 2022",
		yt_link: "https://www.youtube.com/embed/hLlcabNjeFM",
		title: "A Mothers Request",
		speaker: "Rev.Dr. Sudharshan Rao",
		tags: ["#Lent Meeting"]
	},
	{
		id: 3,
		date: "  11th April 2022 ",
		yt_link: "https://www.youtube.com/embed/xXioLath8rQ",
		title: "Jesus Curses a Fig Tree",
		speaker: "Rev.Dr. Sudharshan Rao",
		tags: ["#Lent Meeting"]
	},
	{
		id: 4,
		date: "10th April 2022",
		yt_link: "https://www.youtube.com/embed/vBYw64oIdlI",
		title: "Palm Sunday Service  ",
		speaker: "Rev.Dr. Sudharshan Rao",
		tags: ["#Lent Meeting", "Christmas"]
	},
]
export default function Worship() {

	const [songs,setSongs] = React.useState([]);
    const [loading,setLoading] = React.useState(false);

	const searchRef = React.useRef();
	const [songsCopy,setCopySongs] =  React.useState([]);
	const [activeTab,setActiveTab] = React.useState("2023");
	const [pageProps,setPageProps] = React.useState({
		resultsPerPage:0,
		pageLength:0,
		pageNextToken:null
	});

	const [launchFiltersWindows,setLaunchFiltersWindow] = React.useState(false);


    const openVideoInYoutube = (videoID) =>{
        window.open("https://www.youtube.com/watch?v="+videoID);
    }

	const getDates = () =>{

		let dArray = [];
		let stYear = 2019;
		while( stYear <= new Date().getFullYear() )
		dArray.push(stYear++);
		return dArray.reverse();
	}


	const filterDate = ( index,year) =>{
		console.log(year,"FILTER DATE")
		console.log(index);
        let newSongs = [];
		 newSongs = songsCopy.filter(i => new Date(i.snippet.publishedAt).getFullYear() == year);
		console.log(newSongs,"NEW_SONGS_FILTER_DATE")
		setActiveTab(index);
		
		setSongs(newSongs)
        console.log(songs,"AFTER CFILTERING")
	}


	const searchHandler = () => {
		console.log(songs,"Songs");
		console.log(songsCopy,"SONGS,COPY")
		console.log(searchRef.current.value,"Inout value")
		
		let newSongs = [...songsCopy.filter(i => new String(i.snippet.title).includes(searchRef.current.value))]
		// console.log(newSongs,"newSongs")
		// // console.log(songs)
		setSongs(newSongs)
	}
	
	const myreq = async()=>{

		  // 2021 - Playlist : PLWhGKfRW0UWD5E1Bq2rH-JG85xal-G4Os
        //2023 - PLWhGKfRW0UWDnCqVhRKkAyDY2fTBjkvIo

       const myRes = await fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=1000&playlistId=PLWhGKfRW0UWAlyqY6yw0mE-mWSOm1d-_7&key=AIzaSyDwfR7vKOJ5zq6QVjzvPsX2RDxsE1qADyM");
        const res =  await myRes.json();
         
        console.log(res,"RES");
		setCopySongs(res.items);
		setPageProps({
			 pageLength:res.pageInfo.totalResults,
			 resultsPerPage:res.pageInfo.resultsPerPage,
			 pageNextToken:res.nextPageToken
		})
         setSongs(res.items)
         return;
		// return setSongs([]);
    }

	const launchFilterDialog = ()=>{
		console.log('Filter Dialog is called')
		setLaunchFiltersWindow(true)
		
	}

	const closeLaunchFilterDialog =()=>{
		setLaunchFiltersWindow(false)
	}

	React.useEffect(()=>{
		// myreq();
        console.log('WINDOWS',"CALLED TWICE")
        callYoutubeEndPoint(youtubePlaylists.data_by_year[0]);
	// 	setSongs(example)
	// 	setPageProps({
	// 		pageLength:example.pageInfo.totalResults,
	// 		resultsPerPage:example.pageInfo.resultsPerPage,
	// 		pageNextToken:res.nextPageToken
	//    })
		
	},[]);


    const callYoutubeEndPoint = async (value,index) => {
        console.log(value,index);
        setLoading(true);
        const myRes = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=1000&playlistId=${value.playlistId}&key=AIzaSyDwfR7vKOJ5zq6QVjzvPsX2RDxsE1qADyM`);
         myRes.json().then(res=>{
            setSongs([])
            
                setCopySongs(res.items);
                setSongs(res.items)
                setLoading(false)
          
            console.log(songs,"SONG_ITEMS");
            console.log(res.items,"RES_ITEMS");
      
           
        });
        

       
        // console.log(songs,res.items,"SONGS")
        // console.log(value.name,res.items,"RES")
        setActiveTab(value.name);
        
    }

	return (
		<div>
		{
		
		launchFiltersWindows &&
		
		<BackShadow>
			<div style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height:"100vh"
      }}>
      <div
        style={{
          backgroundColor:'white',
          width:"65%"
        }}
      >
				<FiltersMobile closeLaunchFilterDialog={closeLaunchFilterDialog} youtubePlaylists={youtubePlaylists} activeTab={activeTab} callYoutubeEndPoint={callYoutubeEndPoint}/>
				</div>
				</div>

			
			</BackShadow>
		}
			<Head>
				<title>Sermons</title>
			</Head>
			<Header />
			<br />
			<br />
			<br />
			<br />
			<div className=" custom_bg">
				<div className="container" >
					<div className="search_bar">
						<h3 className="mx-2 px-3" style={{ color: "white" }}>Sermons</h3>
						<input  ref={searchRef} onInput={searchHandler} style={{ maxWidth: "400px" }} className="form-control rounded-2" type="search" placeholder="Search Sermons" />
					</div>
				</div>
			</div>
			<div className=" my-bg3  p-3 ">
				<div className="container ">
					<div className="row   " >
						<div className="col-lg-3 d-block d-lg-none ">
							<div className="text-end ">
								<button className=" btn btn-md btn-light border-1  " onClick={launchFilterDialog}> Filters <CaretDownOutlined className="align-middle" /></button>
							</div>
						</div>
						<div className="col-lg-3 d-none d-lg-block  ">
							<div className="my-bg2 m-1 rounded-2">
								<div className="p-4">
									<h3>Year</h3>
									<ul style={
										{
											padding: "0px",
											listStyleType: 'none',
											fontSize: "17px"
										}
									}
										className="years"
									>
										
										{/* {
											  getDates().map((year,index)=><li  onClick={()=>filterDate(index,year)}><span style={activeTab == index ? {backgroundColor:"black",color:"white"} : {}}>{year}</span></li>)
										} */}


{/* <li  onClick={()=>filterDate(index,year)}><span style={activeTab == index ? {backgroundColor:"black",color:"white"} : {}}>{year}</span></li> */}
                                        {
                                            youtubePlaylists.data_by_year.map((yearData,index)=> <li key={index} onClick={()=>  callYoutubeEndPoint(yearData,index)}><span style={activeTab == yearData.name ? {backgroundColor:"black",color:"white"} : {}} >{yearData.name}</span></li>)
                                        }

									</ul>
								</div>
							</div>
							<div className="my-bg2 m-1 my-3 rounded-2">
								<div className="p-4">
									<h3>Tags</h3>
									<ul style={
										{
											padding: "0px",
											listStyleType: 'none',
											fontSize: "17px"
										}
									}
										className="years"
									>
										{/* <li><span>Christmas</span></li>
										<li><span>Lent Meetings</span></li>
										<li><span>Good Friday</span></li>
										<li><span>Easter</span></li> */}

                                        {
                                            youtubePlaylists.data_by_tags.map((tagData,index)=> <li key={index} onClick={()=>callYoutubeEndPoint(tagData,index)}><span style={activeTab == tagData.name ? {backgroundColor:"black",color:"white"} : {}} >{tagData.name}</span></li>)
                                        }
									</ul>
								</div>
							</div>
						</div>
						
						<div className="col-lg-9 ">
						{/* <div className="song_item my-3">
							
							{ pageProps.pageLength > 0 && <span className="px-4">Showing Items {pageProps.pageLength} of {songs.length },  <a href="">View Page 2</a> </span>}

						</div> */}
							<div className="  rounded-2">
								<div className="row text-center" >
									{
										songs.length > 0 ? songs.reverse().map(i => {
											return  (
												i.snippet.title !== "Private video" && <div key={i.etag} className="col-lg-5 ">
													<div className="  p-3   my-2 song_item rounded-2">
														<div className="my-2">
															<div className=" text-start h4 text-red sermon_title ">{new String(i.snippet.title).replaceAll(/Little Lamb Church|2023/g,"")} </div>
															{/* <div className="text-start text-uppercase sermon_speaker">{i.speaker}</div> */}
															{/* <div className=" rounded-3   text-start d-block my-2 " style={{ textAlign: 'left', fontSize: "12px" }}>{i.tags.length > 0 ? i.tags.map(tag => <span key={Math.random(100) * 29} className="px-2 bg-primary text-white p-1 rounded-3 mx-1" >Windows</span>) : null}</div> */}
														</div>
														<br />
														{/* <iframe width={"500px"} height={"250px"}  src={i.yt_link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
														<div className="frame-container" >
															<iframe className="responsive-iframe" src={"https://www.youtube.com/embed/"+i.snippet.resourceId.videoId} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
														</div>
														<br />
														<div className="d-flex justify-content-between align-items-center my-2" style={{ fontSize: '12px' }}>
															<div className="mx-3 text-start my-1 song_date" ><CalendarOutlined className="align-middle px-1 " />{new Date(i.snippet.publishedAt).toLocaleDateString().replaceAll("/","-")}
															</div>
															<div className="mx-3 text-start my-1 song_date">
																<button className="btn btn-md view_youtube" style={{ fontSize: "12px !important" }} onClick={()=>openVideoInYoutube(i.snippet.resourceId.videoId)}>&#9658; VIEW ON YOUTUBE</button>
															</div>
														</div>
													</div>
												</div>
											)
										}):

										<div className="song_item my-3">
											{loading ? "Loading" : "No Items"}

										</div>
									}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}