import React, { useState, useEffect } from "react";
import AxiosService from "../services/axios.service";
import AuthService from "../services/auth.service";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [flickr, setFlickr] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    
    if (user) {
      setCurrentUser(user);
    }
  }, []);
  function search() {
    // alert("You clicked me!"+searchText);
    AxiosService.getFlickr(searchText).then(
      (response) => {
        setFlickr(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  return (
    <div>
      { currentUser ? (
        <div>
        <div >
          <input type="text"  placeholder="Search Flickr by Tags" onChange={(e) => setSearchText(e.target.value)}/><button type="button" className="btn btn-light" onClick={search}>Search</button>
        </div>
        <section className="card-container">
        {flickr.items?.map((val, key) => {
            return (<div className="card" key={key}>
            <img src={val.media.m}/>  
            <p>{val.title}</p>  
            </div>);
        })}
        </section>
        </div>
      ) : (
        <div></div>  
      )}
    </div>  
  );

}

export default Home;
