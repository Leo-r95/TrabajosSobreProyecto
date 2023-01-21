import React from "react";
import "./aboutus.css";
import Damian from "../img/fotosnuestras/Damian.jpg";
import Gonzalo from "../img/fotosnuestras/Gonzalo.jpeg";
import Leonel from "../img/fotosnuestras/Leonel.jpeg";

const AboutUs = () => {
  return (
    <section className="aboutuscolor">
      <div className="clearfix">
        <img
          src={Gonzalo}
          className="col-md-6 float-md-start mb-3 ms-md-3 tamaño"
          alt="..."
        />

        <p>
          A paragraph of placeholder text. We're using it here to show the use
          of the clearfix className. We're adding quite a few meaningless
          phrases here to demonstrate how the columns interact here with the
          floated image.
        </p>

        <p>
          As you can see the paragraphs gracefully wrap around the floated
          image. Now imagine how this would look with some actual content in
          here, rather than just this boring placeholder text that goes on and
          on, but actually conveys no tangible information at. It simply takes
          up space and should not really be read.
        </p>

        <p>
          And yet, here you are, still persevering in reading this placeholder
          text, hoping for some more insights, or some hidden easter egg of
          content. A joke, perhaps. Unfortunately, there's none of that here.
        </p>
      </div>
      <div className="clearfix">
        <img
          src={Damian}
          className="col-md-6 float-md-end mb-3 ms-md-3 tamaño"
          alt="..."
        />

        <p>
          A paragraph of placeholder text. We're using it here to show the use
          of the clearfix className. We're adding quite a few meaningless
          phrases here to demonstrate how the columns interact here with the
          floated image.
        </p>

        <p>
          As you can see the paragraphs gracefully wrap around the floated
          image. Now imagine how this would look with some actual content in
          here, rather than just this boring placeholder text that goes on and
          on, but actually conveys no tangible information at. It simply takes
          up space and should not really be read.
        </p>

        <p>
          And yet, here you are, still persevering in reading this placeholder
          text, hoping for some more insights, or some hidden easter egg of
          content. A joke, perhaps. Unfortunately, there's none of that here.
        </p>
      </div>
      <div className="clearfix">
        <img
          src={Leonel}
          className="col-md-6 float-md-start mb-3 ms-md-3 tamaño"
          alt="..."
        />

        <p>
          A paragraph of placeholder text. We're using it here to show the use
          of the clearfix className. We're adding quite a few meaningless
          phrases here to demonstrate how the columns interact here with the
          floated image.
        </p>

        <p>
          As you can see the paragraphs gracefully wrap around the floated
          image. Now imagine how this would look with some actual content in
          here, rather than just this boring placeholder text that goes on and
          on, but actually conveys no tangible information at. It simply takes
          up space and should not really be read.
        </p>

        <p>
          And yet, here you are, still persevering in reading this placeholder
          text, hoping for some more insights, or some hidden easter egg of
          content. A joke, perhaps. Unfortunately, there's none of that here.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
