

import logo from './logo.png'
import Image from 'next/image'
import React from 'react'



export default function Header(){

  React.useEffect(()=>{
    window.addEventListener("scroll",function(){
      // console.log(window.scrollY)
        window.scrollY> 100 ? document.getElementById('daddy').classList.add('custom-shadow') : document.getElementById('daddy').classList.remove('custom-shadow')
    })
  })
    return(
      <div>
       
    {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
    <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&family=Rosarivo&family=Varta:wght@300&display=swap" rel="stylesheet"/>

   
    <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;1,100&display=swap" rel="stylesheet"/> */}



        <nav id="daddy" className=" navbar navbar-expand-lg navbar-light bg-light custom-header position-fixed w-100" style={{zIndex: 3000}}>
        <div className="container">
        <a className="navbar-brand" href="/">
            <div className="d-flex align-items-center justify-content-center">
                <div>
                    {/* <img src={logo} width="60px"/> */}
                    <Image src={logo} width="60px"></Image>
                </div>
                <div className="mx-2 text-center">
                    <span className="logo-heading ">Little Lamb Church</span>
                    <hr className="p-0  m-0" />
                    <span className="rosa logo-subheading">VANASTHALIPURAM</span>
                </div>
            </div>
        </a>

   
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item mx-3 text-uppercase">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
              {/* <li className="nav-item mx-3 text-uppercase">
                <a className="nav-link" href="/About">About</a>
              </li> */}
              <li className="nav-item mx-3 text-uppercase">
                <a className="nav-link" href="/Worship">Worship</a>
              </li>
              <li className="nav-item mx-3 text-uppercase">
                <a className="nav-link" href="/Sermons">Sermons</a>
              </li>
              <li className="nav-item mx-3 text-uppercase">
                <a className="nav-link" href="/under_construction">Events</a>
              </li>
              <li className="nav-item mx-3 text-uppercase special-btn px-2">
                <a className="nav-link " style={{color:"white"}} href="/PrayerRequest">Prayer Request</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    )
}