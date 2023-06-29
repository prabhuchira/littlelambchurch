import Footer from "../../shared/Footer/Footer";
import Header from "../../shared/Header/Header";
// import  worship from "./../S"


import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";



import React from 'react';
import Head from "next/head";
import BreadCrumb from "../../shared/BreadCrumb/BreadCrumb";


const firebaseConfig = {
	apiKey: "AIzaSyBTXyCeyzAH6yNJcP6Uc2amkM1zK9bkdSw",
	authDomain: "testingapp-41f3b.firebaseapp.com",
	databaseURL: "https://testingapp-41f3b-default-rtdb.firebaseio.com",
	projectId: "testingapp-41f3b",
	storageBucket: "testingapp-41f3b.appspot.com",
	messagingSenderId: "334951218090",
	appId: "1:334951218090:web:74ccbf15748ff95ae8c9d3",
	measurementId: "G-YYR4MJE9PD"
  };
  

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);
  console.log(db,"DB")

  



let songs = [
	{
		Date: "8 days ago",
		SongLink: "https://www.youtube.com/embed/hLlcabNjeFM?start=345&end=622&enablejsapi=1",
		SongName: "Randi Yehovanu Gurchi"
	},
	{
		Date: "8 days ago",
		SongLink: "https://www.youtube.com/embed/hLlcabNjeFM?start=640&end=1005&enablejsapi=1",
		SongName: "Jayamichina Devuniki"
	},
	{
		Date: "8 days ago",
		SongLink: "https://www.youtube.com/embed/mJvEcW1bfGQ?start=884&end=1244",
		SongName: "Geetham Geetham "
	},
	{
		Date: "8 days ago",
		SongLink: "https://www.youtube.com/embed/vBYw64oIdlI?start=2180&end=2657",
		SongName: "Jaya Prabhu  "
	},
]
export default function Worship() {
	const [songList, setSongList] = React.useState(songs);
	let songsCopy = songs;
	const searchRef = React.useRef();
	const searchHandler = () => {
		let newSongs = songsCopy.filter(i => i.title.startsWith(searchRef.current.value))
		console.log(songsCopy)
		setSongList(newSongs)
	}

	const fetchSongs = async()=>{
		await getDocs(collection(db,"songs")).then((querySnapshot)=>{
			const newData = querySnapshot.docs
			.map((doc) => ({...doc.data(), id:doc.id }));	
			setSongList(newData)
			console.log(newData,"NEW DATA")
	
		})
	  }


	React.useEffect(()=>{
		fetchSongs();
	},[])

	const addSong = async()=>{
		console.log('Add Song')
		await addDoc(collection(db,"songs"),{
			Date: "100 days ago",
			SongLink: "https://www.youtube.com/embed/hLlcabNjeFM?start=345&end=622&enablejsapi=1",
			SongName: "Windows"
		}).then(res=>{
			console.log(res.id,"Added Id")
		})
	}

	return (
		<div>
			<Head>
				<title>Worship</title>
			
			</Head>
			<Header />
			
			<br />
			<br />
			<br />
			<br />
			<div className=" custom_bg">
			{/* <button onClick={addSong}>Add Song</button> */}
				<div className="container" >
					<div className="search_bar">
						<div className="d-flex">
							<div className="mx-2 px-3">
								<h3 style={{ color: "white" }}>
									Worship
								</h3>
								{/* <BreadCrumb/> */}
							</div>

						</div>
						<input ref={searchRef} onInput={searchHandler} style={{ maxWidth: "400px" }} className="form-control rounded-2" type="search" placeholder="Search Songs" />
					</div>
				</div>
			</div>
			<div className=" my-bg text-center">
				<div className="container ">
					<div className="row text-center" >
						{
							songList.map(i => {
								return (
									<div key={i.SongLink} className="col-lg-5 ">
										<div className="m-3 song_item">
											<div className="my-3">
												<div className="mx-2 text-start h4 text-red song_title ">{i.SongName} </div>
												<div className="mx-4  text-start text-uppercase sermon_speaker">LLC Choir</div>
											</div>
											{/* <iframe width={"500px"} height={"250px"}  src={i.yt_link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
											<div className="frame-container" >
												<iframe className="responsive-iframe" src={i.SongLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
											</div>
											<br />
											<div className="d-flex justify-content-between align-items-center my-2">
												<div className="mx-3 text-start my-1 song_date" >
													{i.Date}<br />
													<div className="badge badge-pill  bg-light text-dark ">#praise</div>
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
			<Footer />
		</div>
	)
}