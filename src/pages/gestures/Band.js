import React from "react";
import Painting from "../../components/Painting";
import YoutubeEmbed from "../../components/YoutubeEmbed";

const Band = (props) => {
  return (
    <Painting {...props} nickname="Band">
      I play drums in a surf rock band called{" "}
      <a href="https://thebeachpeople.bandcamp.com/" alt="">
        The Beach People
      </a>{" "}
      that inspired this painting.
      <YoutubeEmbed embedId="QfnGNlOmKPw" />
    </Painting>
  );
};

export default Band;
