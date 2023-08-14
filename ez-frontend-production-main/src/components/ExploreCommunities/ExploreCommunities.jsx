import React from 'react';
import './ExploreCommunities.css';
import './../CommunityMapping/CommunityMapping.css'
import Explorecom from "../../Assets/Explorecom.gif";

function ExploreCommunities() {
  return (
    <div className="expcommap w-full p-3">
      <div className="">
        <p className="expcomtext">Join a Community for </p>
        <div className="expcomsubtext-container">
          <p className="expcomsubtext">Founders... Techies...Students...</p>
        </div>
        <div className="comsubtext-container">
          <p className="comsubtext">Enjoy, network and engage with people sharing your interests !!! </p>
        </div>
      </div>
      <div>
        <div className='h-36 overflow-hidden rounded-md'>
          <img src={Explorecom} alt="Explorecom" className="Explorecom-gif bg-cover" />

        </div>
        <button className="expcom-button">Explore Communities </button>

      </div>
    </div>
  );
}

export default ExploreCommunities;
