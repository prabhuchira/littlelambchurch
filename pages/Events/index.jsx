import Header from "../../shared/Header/Header";
import Head from 'next/head'





const events = [
    {
        year:"2022",
        date:"25",
        month:"DECEMBER",
        eventName:"Christmas",
        timing:"09:30 AM - 12:30 PM"
    },
    {
        year:"2022",
        date:"17",
        month:"APRIL",
        eventName:"Easter",
        timing:"09:30 AM - 12:30 PM"
    },
    {
        year:"2022",
        date:"15",
        month:"APRIL",
        eventName:"Good Friday",
        timing:"09:30 AM - 12:30 PM"
    },
    {
        year:"2022",
        date:"15",
        month:"APRIL",
        eventName:"Good Friday",
        timing:"09:30 AM - 12:30 PM"
    }
]

export default function Events(){
    return(
        <div>
            <Head>
                <title>LLC Events</title>
            </Head>
            <Header/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <div className="container">
                <div className="h1  text-muted my-3 mx-3 gotham">UPCOMING EVENTS</div>

                <br/>
                <div className="myEvents roboto" >
                    {events.map(event=>  <div className="eventsItem  text-muted">
                        <div className="lato-heading h6 ">{event.year}</div>
                        <div className="lato-heading h1 ">{event.date}</div>
                        <div className="event_month_name">{event.month}</div>
                        <br/>
                        <br/>
                        <div className="lato-heading h2 text-danger ">{event.eventName}</div>
                        <div className="lato-heading" style={{fontSize:'15px'}}>{event.timing}</div>
                    </div>)}
                  
                </div>
            </div>
        </div>
    )
}