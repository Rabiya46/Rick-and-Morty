import React, { useEffect, useState } from "react";

const Post = ({ image, name, status, location, species, origin }) => {
  const [colorStatus, setColorStatus] = useState("unknown");

  useEffect(() => {
    if (status === "Alive") {
      setColorStatus("alive");
    } else if (status === "Dead") {
      setColorStatus("dead");
    }
  }, [status]);

  return (
    <>
      <img src={image} alt="img" />
      <div className="userInfo">
        <h1 className="userText">{name}</h1>
        <div className={colorStatus}></div>
        <span>
          {status}-{species}
        </span>
        <br />
        <h5>Last know location:</h5>
        <h3 className="userText">{origin}</h3>
        <h5>First seen in:</h5>
        <h3 className="userText">{location}</h3>
      </div>
    </>
  );
};

export default Post;
