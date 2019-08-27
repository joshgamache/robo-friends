import React from 'react';

const Card = ({
  name,
  email,
  id
}) => { // {} destructures "props"
  return ( <
    div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' >
    <
    img alt = "RoboFriends"
    src = {
      `https://robohash.org/${id}?size=200x200`
    }
    /> <
    div >
    <
    h5 className = 'f5' > {
      name
    } < /h5> <
    p > {
      email
    } < /p> <
    /div> <
    /div>
  );
}

export default Card;