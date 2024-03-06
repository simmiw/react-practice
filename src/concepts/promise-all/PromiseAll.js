import React, { useEffect, useState } from "react";
import "./PromiseAll.scss";

const PromiseAll = () => {
  const [products, setproducts] = useState(null);
  const [comments, setComments] = useState(null);
  const [personDetails, setPersonDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true); 
    const firstAPI = fetch("https://dummyjson.com/products").then((r) =>
      r.json()
    );
    const secondAPI = fetch("https://dummyjson.com/comments").then((r) =>
      r.json()
    );

    const myPromise = new Promise(function (resolve, reject) {
      setTimeout(() => {
        const person = {
          name: "Simmi",
          age: 28,
          city: "Amsterdam",
        };
        resolve(person);
      }, 2000);
    });

    Promise.all([firstAPI, secondAPI, myPromise])
      .then(function (response) {
        setproducts(response[0].products);
        setComments(response[1].comments);
        setPersonDetails(response[2]);
        setIsLoading(false); 
       })
      .catch(() => {
        setIsLoading(false);
        console.log("API is Failed");
        setError("Data fetching is Failed");
      });
  }, []);
  return (
    <>
      {isLoading ? <div>Data is being Fetched</div> : null}
      {error ? <div> Dats Fetching is Failed</div> : null}
      {products
        ? products.map((item) => {
            return (
              <div className="response" key={item.id}>
                <div>Product: {item.title}</div>
                <div>Brand: {item.brand}</div>
                <div>Price: ${item.price}</div>
                <div>Rating: {item.rating}</div>
              </div>
            );
          })
        : null}
      {comments
        ? comments.map((comment) => {
            return (
              <div key={comment.id}>
                <div>Post ID: {comment.postId}</div>
                <div>username: {comment.user.username}</div>
              </div>
            );
          })
        : null}
      {personDetails ? (
        <div>
          <div>{personDetails.name}</div>
          <div>{personDetails.age}</div>
          <div>{personDetails.city}</div>
        </div>
      ) : null}
    </>
  );
};

export default PromiseAll;
