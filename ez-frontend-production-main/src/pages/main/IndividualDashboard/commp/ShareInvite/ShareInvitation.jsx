import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./ShareInvitation.css";

export const ShareInvitation = ({ setInvitebox, websiteLink }) => {

    // const websiteLink = "https://www.ezage.in";
    const defaultMessage = "Check out this website: " + websiteLink;
  const onSet = () => {
    setInvitebox(false);
  };
  return (
    <>
      <div className="sharebox ">
        <div className="shareHeading">
          <div className="closeicon" onClick={() => setInvitebox(false)}>
            <h1> Share Invitation </h1>
            <p>
              {" "}
              <button onClick={onSet}>
                {" "}
                <CloseIcon />
              </button>
            </p>
          </div>
        </div>
        <div className="paragraph">
          <p>
            {" "}
            We are active on your favourite platforms and run a lot of campaigns
            that you'd like{" "}
          </p>
        </div>

        <div className="popover">
          <a
            href={`mailto:?body=${encodeURIComponent(defaultMessage)}`}
            className="link"
            target="_blank"
          >
            <EmailIcon />
            Send via Email
          </a>
        </div>
        <div className="popover">
          <a
            href={`https://wa.me/?text=${encodeURIComponent(defaultMessage)}`}
            className="link"
            target="_blank"
          >
            <WhatsAppIcon />
            Send via WhatsApp
          </a>
        </div>
        <div className="popover">
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
              websiteLink
            )}&title=&summary=&source=`}
            className="link"
            target="_blank"
          >
            <LinkedInIcon />
            Send via LinkedIn
          </a>
        </div>
        <div className="popover">
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              defaultMessage
            )}`}
            className="link"
            target="_blank"
          >
            <TwitterIcon />
            Send via Twitter
          </a>
        </div>
      </div>
    </>
  );
};

export default ShareInvitation;
