import "./uidesigner.css";

const UiDesigners = () => {
  return (
    <div>
      <div className="flex items-center">
        <h1 className="text-4xl font-bold">
          Join Our Growing Professionals Community <br />{" "}
          <span
            className="flex justify-center mt-2 font-bold"
            style={{ color: "#1DBF73" }}
          >
            UI Designers..
          </span>
        </h1>
      </div>

{/* imagessection */}
      <div className="flex " style={{maxWidth:"1150px",margin:"auto"}}>
        {/* contains two section-> left part contains 10 images in two row adn right part contains one image at center to the space that conained by two row */}
        <div className="left-section">
          <div className="imgsection" style={{borderRadius:"24px"}} >
            <img src="https://cdn.pixabay.com/photo/2023/01/14/12/45/software-7718110_1280.jpg" alt="" />
            <button>Andrew Hill</button>
          </div> 
          <div className="imgsection" style={{borderRadius:"50%"}}>
            <img src="https://cdn.pixabay.com/photo/2023/01/14/12/45/software-7718110_1280.jpg" alt="" />
            <button>Andrew Hill</button>
          </div> 
          <div className="imgsection">
            <img src="https://cdn.pixabay.com/photo/2023/01/14/12/45/software-7718110_1280.jpg" alt="" />
            <button>Andrew Hill</button>
          </div><div className="imgsection">
            <img src="https://cdn.pixabay.com/photo/2023/01/14/12/45/software-7718110_1280.jpg" alt="" />
            <button>Andrew Hill</button>
          </div> 
          <div className="imgsection">
            <img src="https://cdn.pixabay.com/photo/2023/01/14/12/45/software-7718110_1280.jpg" alt="" />
            <button>Andrew Hill</button>
          </div> 
          <div className="imgsection">
            <img src="https://cdn.pixabay.com/photo/2023/01/14/12/45/software-7718110_1280.jpg" alt="" />
            <button>Andrew Hill</button>
          </div><div className="imgsection">
            <img src="https://cdn.pixabay.com/photo/2023/01/14/12/45/software-7718110_1280.jpg" alt="" />
            <button>Andrew Hill</button>
          </div> 
          <div className="imgsection">
            <img src="https://cdn.pixabay.com/photo/2023/01/14/12/45/software-7718110_1280.jpg" alt="" />
            <button>Andrew Hill</button>
          </div> 
          <div className="imgsection">
            <img src="https://cdn.pixabay.com/photo/2023/01/14/12/45/software-7718110_1280.jpg" alt="" />
            <button>Andrew Hill</button>
          </div>
          <div className="imgsection">
            <img src="https://cdn.pixabay.com/photo/2023/01/14/12/45/software-7718110_1280.jpg" alt="" />
            <button>Andrew Hill</button>
          </div>
        </div>
        <div className="right-section">
          <span>💝</span>
          <button>What's your <br />skill</button>
          <button  className="btns">Become a seller</button>
        </div>
      </div>
    </div>
  );
};

export default UiDesigners;

