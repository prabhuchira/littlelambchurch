import Head from "next/head";
import BreadCrumb from "../../shared/BreadCrumb/BreadCrumb";
import Footer from "../../shared/Footer/Footer";
import Header from "../../shared/Header/Header";
// import  worship from "./../S"

import { CaretDownOutlined, CalendarOutlined } from '@ant-design/icons'
import React from "react";

let songs = [
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

	const searchRef = React.useRef();
	const [songsCopy,setCopySongs] =  React.useState([]);
	const [activeTab,setActiveTab] = React.useState(0)


	const getDates = () =>{

		let dArray = [];
		let stYear = 2019;
		while( stYear <= new Date().getFullYear() )
		dArray.push(stYear++);
		return dArray.reverse();
	}


	const filterDate = ( year,index) =>{
		console.log(year,"FILTER DATE")
		console.log(index);
		let newSongs = [...songsCopy.filter(i => new Date(i.snippet.publishedAt).getFullYear() == year)];
		console.log(newSongs,"NEW_SONGS_FILTER_DATE")
		setActiveTab(year);
		
		setSongs(newSongs)
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

        const myRes = await fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=1000&playlistId=PLWhGKfRW0UWDnCqVhRKkAyDY2fTBjkvIo&key=AIzaSyDwfR7vKOJ5zq6QVjzvPsX2RDxsE1qADyM");
        const res =  await myRes.json();
        
        console.log(res,"RES");
		setCopySongs(res.items);
        return setSongs(res.items)
		// return setSongs([]);
    }

	React.useEffect(()=>{
		// myreq();
		console.log(getDates().reverse(),"GET_DATES")
	},[]);


	return (
		<div>
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
								<button className=" btn btn-md btn-light border-1  " > Filters <CaretDownOutlined className="align-middle" /></button>
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
										
										{
											  getDates().map((year,index)=><li  onClick={()=>filterDate(index,year)}><span style={activeTab == index ? {backgroundColor:"black",color:"white"} : {}}>{year}</span></li>)
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
										songs.length > 0 ? songs.map(i => {
											return (
												<div key={i.snippet.title} className="col-lg-5 ">
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
																<button className="btn btn-md view_youtube" style={{ fontSize: "12px !important" }}>&#9658; VIEW ON YOUTUBE</button>
															</div>
														</div>
													</div>
												</div>
											)
										}):

										<div className="song_item my-3">
											No Items

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