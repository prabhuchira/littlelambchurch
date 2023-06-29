import React from "react";

import { CloseOutlined } from "@ant-design/icons"


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

function FiltersMobile(props){

    React.useEffect(()=>{
       console.log(youtubePlaylists,"YOUTUBE PLAYLISTS")
       setYoutubeFilters(youtubePlaylists);
      
    },[])

    const songName = React.createRef();
    const date = React.createRef();
    const songLink = React.createRef();


    const [youtubeFilters,setYoutubeFilters] = React.useState({})

  
   


    return(
        <form>
        <div className="p-5" style={{backgroundColor:"white"}}>
            
         

            <div className="container-fluid">

          <div className="d-flex justify-content-between align-items-center">
          <h3 className="text-primary">Filters </h3>
          <div style={{
            fontSize:'24px',
            color:'red'
          }}><CloseOutlined></CloseOutlined></div>
          </div>
           
         
            <hr/>
                <div className="row">
                

                <div className="col-lg-12 d-none d-lg-block  ">
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
                                          youtubePlaylists.data_by_year.map((yearData,index)=> <li key={index} onClick={ ()=>props.callYoutubeEndPoint(yearData,index)}><span style={props.activeTab == yearData.name ? {backgroundColor:"black",color:"white"} : {}} >{yearData.name}</span></li>)
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
                                          youtubePlaylists.data_by_tags.map((tagData,index)=> <li   onClick={ ()=>props.callYoutubeEndPoint(tagData,index)} key={index} ><span style={props.activeTab == tagData.name ? {backgroundColor:"black",color:"white"} : {}} >{tagData.name}</span></li>)  
                                        }
									</ul>
								</div>
							</div>
						</div>


  
</div>
            </div>


        </div>
       
        </form>
    )
}

export default FiltersMobile;

