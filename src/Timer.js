import React from "react";

const Name = () => {
  return (
  <section className="movie-container">
  <Movie />
  </section>) ;
};

const Movie = () => {
  return (
  <article>
    <ImageComponent/>
    <Title/>
   </article>
     );
};


const ImageComponent = () => {
  return (
    <img
      src="https://occ-0-3215-3662.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUlS120Zm-Rx3_6ujMwKhgWn17KjtMAIYXpb4bu6ocaM0E13v4skaMaWXyYuT_d7rqF51UuTJKQghV0q-eNFOl9xtBVkv-Z-Uog_8pOrx2wpixzP1qvnX87zdC5DqYDH5-Fu.jpg?r=b69"
      alt="netflix"
    />
  );
};
const Title = () => {
  const style = {
    heading:{
      color:"red",
      fontSize:"30px",
    },
    smallheading:{
      color:"Green",
      fontSize:"10px"
    }
  }
  return (
     <h2 style={style.heading}>This is netflix img 
     <span style={style.smallheading}>Small Title</span></h2>
  );
};
const Time = () => {
  const user = {
    firstName: "Sravan",
    lastName: "Goud"
  };
  return (
    <section className="container">
      <h1>Now Time is {new Date().toLocaleTimeString()}</h1>
      <h2>{user.firstName}{user.lastName}{user.firstName}{user.lastName}</h2>
      <h2>{user.firstName}{user.lastName}</h2>
      <h2>{user.firstName}{user.lastName}</h2>
      <h2>{user.firstName}{user.lastName}</h2>
      <h2>{user.firstName}{user.lastName}</h2>
      <h2>{user.firstName}{user.lastName}</h2>
      <h2>{user.firstName}{user.lastName}</h2>
      <Name/> <Name/>
      <Name/>
      <Name/>
      <Name/>
      <Name/>
      <Name/>
    </section>
  );
};

export default Time;
