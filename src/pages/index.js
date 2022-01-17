import React from "react";
import axios from "axios";

const index = ({ value }) => {
  return (
    <div>
      <h1>Biker shop</h1>
      <p>Description of the page</p>
      <p>{value.message}</p>
    </div>
  );
};

export async function getStaticProps(context) {
  const res = await axios.get("https://api.chucknorris.io/jokes/random");

  return {
    props: {
      value: {
        message: res.data.value,
      },
    }, // will be passed to the page component as props
  };
}

export default index;
