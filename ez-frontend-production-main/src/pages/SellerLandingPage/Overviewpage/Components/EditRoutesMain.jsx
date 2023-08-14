import { Link } from "react-router-dom";
import "../UpdateDetails.css";

const EditRoutesMain = ({ linkRoute, imgSrc, profileName }) => {
  return (
    <div
      className="flex items-center justify-evenly edit-route-box"
      style={{
        borderRadius: "20px",
        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
        width: "210px",
        height: "180px",
      }}
    >
      <Link to={linkRoute}>
        <div className="flex flex-col items-center  justify-evenly">
          <div>
            <h3 className="text-lg font-medium profile-name-edit-route">{profileName}</h3>
          </div>
          <div>
            <img
              src={imgSrc}
              style={{ maxWidth: "173px", maxHeight: "109px" }}
              className="img-edit-route"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EditRoutesMain;
