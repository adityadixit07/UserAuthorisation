import  { useState } from "react";
import speaker from "../../../../assets/ez-logo/speaker.png";
import "./seller.css";
import genegas from "../../../../assets/ez-logo/ez_karo-removebg-preview 2.png";
import ShareInvitation from "./ShareInvite/ShareInvitation";
import { WEB_URI } from "../../../../services/helper.js";
import InviteCard from "./InviteCard";
import { Box, Container, Typography } from "@mui/material";

function Invite({ user }) {
  const [invitebox, setInvitebox] = useState(false);
  const [copied, setCopied] = useState(false);

  const referralCode = user.username;
  const link = `${WEB_URI}/${referralCode}`;

  const copyText = () => {
    const input = document.getElementById("referralLink");
    input.disabled = false;
    input.select();
    document.execCommand("copy");
    input.disabled = true;
    setCopied(true);
  };

  const onSet = () => {
    setInvitebox(true);
  };

  return (
    <div id="invite" className="p-2 md:p-0 relative">
      <div className="flex items-center gap-5 py-5 pt-10">
        <h1 className="md:text-5xl text-4xl font-semibold">Invite & Earn</h1>
        <div className="w-20 h-20">
          <img className="w-full h-full bg-cover" src={speaker} alt="speaker" />
        </div>
      </div> 

      {/*card  */}

     <div className="flex invite gap-5 items-center overflow-x-auto w-50">
        {[
          {
            article: "Double the Rewards: 3 months free each",
            duration: "*3 months",
          },
          {
            article: "Double the Rewards: 3 months free each",
            duration: "*No Commissions",
          },
          {
            article: " Friends + Benefits: Earn when they earn",
            duration: "*Profit Sharing ",
          },
        ].map((data, index) => {
          return (
            <div key={index} className="rounded-[10px] p-5 flex flex-col justify-between bg-slate-100 min-w-[250px] h-[300px]">
              <h2 className="w-[68%] font-semibold">{data.article}</h2>
              <div className="w-full flex justify-end items-end">
                <img className="w-[75%] h-[75%] object-cover" src={genegas} alt="" />
              </div>
              <h5 className="font-medium">{data.timing}</h5>
            </div>
          );
        })}
      </div>
      <div className="absolute z-10 m-3 bottom-10">
        {invitebox && (
          <ShareInvitation setInvitebox={setInvitebox} websiteLink={link} />
        )}
      </div>
      <div className="w-full md:w-[60%] flex flex-col gap-5 py-10">
        <button
          className="rounded-[10px] w-full p-2.5 items-center text-base font-bold bg-green-500 text-white"
          onClick={onSet}
        >
          {" "}
          Send Invite Link
        </button>
      </div>

      <InviteCard link={link} copyText={copyText} copied={copied} />
    </div>
  );
}

export default Invite;
