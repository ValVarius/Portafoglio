import React from 'react'
import "./style.css"


export default function ContactCard() {
    return (
        <div>
        {/* <div className="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="valerio-varani-635ba31a1"><a className="LI-simple-link" href='https://www.linkedin.com/in/valerio-varani-635ba31a1?trk=profile-badge'>Valerio Varani</a></div> */}
        <div className="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="valerio-varani-635ba31a1"><a className="LI-simple-link" href='https://www.linkedin.com/in/valerio-varani-635ba31a1?trk=profile-badge'>Valerio Varani</a></div>
        <iframe id = 'gitbadge' src="https://githubbadge.appspot.com/valvarius"  frameBorder="0"></iframe>
        <br/>

        <form>
                
                
                <div className="form-group">
                <label for="exampleInputPassword1">Name</label>
                <input type="name" className="form-control" />
                </div>

                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea className="form-control"  rows="4"></textarea>
                  </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        )
}
