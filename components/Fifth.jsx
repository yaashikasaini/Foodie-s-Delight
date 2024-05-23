import React from "react";

const Fifthpage = () => {
  function subscribeClicked() {
    alert("Okk");
  }

  return (
    <div className="background-7">
      <div className="l-constrained">
        <div className="row-2 group">
          <img
            className="vector-smart-object-double-click-to-edit-19"
            src="src/images/vector_smart_object_doubl_5.png"
            alt=""
            width="91"
            height="123"
          />
          <img
            className="vector-smart-object-double-click-to-edit-20"
            src="src/images/vector_smart_object_doubl_3.png"
            alt=""
            width="34"
            height="37"
          />
          <p className="title-14">Subscribe</p>
          <img
            className="vector-smart-object-double-click-to-edit-21"
            src="src/images/vector_smart_object_doubl_8.png"
            alt=""
            width="106"
            height="105"
          />
          <img
            className="vector-smart-object-double-click-to-edit-22"
            src="src/images/vector_smart_object_doubl_4.png"
            alt=""
            width="34"
            height="37"
          />
        </div>
        <p className="body-text-14">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum.
        </p>
        <div className="row-7 group">
          <img
            className="vector-smart-object-double-click-to-edit-23"
            src="src/images/vector_smart_object_doubl_2.png"
            alt=""
            width="34"
            height="37"
          />
          <div className="col-7">
            <div className="row-16 group">
              <div className="shape-holder-2">
                <input className="text-12" placeholder="Your Email" />
              </div>
              <div className="button-4">
                <a href="#" onClick={subscribeClicked}>Subscribe</a>
              </div>
              <img
                className="vector-smart-object-double-click-to-edit-24"
                src="src/images/vector_smart_object_doubl_7.png"
                alt=""
                width="80"
                height="104"
              />
            </div>
            <div className="row-10 group">
              <img
                className="vector-smart-object-double-click-to-edit-25"
                src="src/images/vector_smart_object_doubl_9.png"
                alt=""
                width="128"
                height="101"
              />
              <img
                className="vector-smart-object-double-click-to-edit-26"
                src="src/images/vector_smart_object_doubl.png"
                alt=""
                width="115"
                height="108"
              />
              <img
                className="vector-smart-object-double-click-to-edit-27"
                src="src/images/vector_smart_object_doubl_6.png"
                alt=""
                width="17"
                height="26"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fifthpage;
