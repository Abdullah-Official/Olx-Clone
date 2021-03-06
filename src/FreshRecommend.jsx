import React, { useEffect, useState } from "react";
import "./FreshRecommend.css";
import FreshCard from "./FreshCard";
import CardData from "./CardData";
import SellCard from "./SellCard";
import firebase from "./firebase";
import { useParams } from "react-router";
import Loading from "./Loading";

function FreshRecommend() {
    const {id} = useParams()
  const [fresh, setFresh] = useState("");
  const [DataOfCards, setDataOfCards] = useState("");

  const loadMore = () => {
    setFresh(() => {
      return (
        <p className=" my-3 alert alert-danger alert-dismissible fade show">
          Sorry ! there are no more AD's ..
          <i
            className="close"
            style={{ cursor: "pointer" }}
            data-dismiss="alert"
            aria-label="Close"
          >
            &times;
          </i>
        </p>
      );
    });
  };
  useEffect(() => {
    const dataRef = firebase.database().ref("Cards");
    console.log(dataRef)
    dataRef.on("value", (snapshot) => {
      const data = snapshot.val();
      console.log(data)
      const DataOfCards = [];
      for (let id in data) {
        DataOfCards.push(data[id]);
      }
      setDataOfCards(DataOfCards.reverse());
    //   console.log(DataOfCards);
    });
  }, []);
  return (
    <>
      <div className="FreshMedia" style={{ height: "" }}>
        <div style={{ height: "auto", marginTop: "-90px" }}>
          <div className="container-fluid freshMain" style={{ width: "100%" }}>
            {/* <div className="row mediaFresh1"> */}
              <div className="row p-3 gy-3 mediaFresh ">
                <h6 className="heading">Fresh Recommendations</h6>

                {DataOfCards ? (
                  DataOfCards.map((props, i) => (
                    <FreshCard
                      key={i}
                      place={props.place}
                      price={props.price}
                      imgsrc={props.image}
                      title={props.product}
                    />
                  ))
                ) : (
                  <Loading/>
                )}
              </div>
            {/* </div> */}
          </div>
          <div className="container">
            {fresh}
            <div className="buttonLoad ml-5 my-5">
              <button onClick={loadMore}>Load More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FreshRecommend;
