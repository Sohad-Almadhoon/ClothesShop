import React from 'react'
import img1 from '../img/about/a6.jpg';
function KnowUs() {
  return (
    <div className="know-us">
      <div className="container">
        <div className="know-us-photo">
          <img src={img1} alt="know-us" />
        </div>
        <div className="know-us-text">
          <h2>Who Are We?</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <span>
            A picture is not just worth a thousand words—on social media,
            pictures are worth many, many shares and likes too.
          </span>
          <marquee direction="right">
            we bet you’ll find an image creator here that can help.
          </marquee>
        </div>
      </div>
    </div>
  );
}

export default KnowUs