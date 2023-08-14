import { Avatar, Container } from "@mui/material";
import "./carousel.css";


const colorShades = [
  "#FF5733", "#FFBD33", "#33FF64", "#33C4FF", "#7A33FF",
  "#FFE333", "#33FFCC", "#3391FF", "#CC33FF", "#B133FF",
  "#33FF6D", "#33FFCB", "#338DFF", "#FF33D0", "#F3FF33",
  "#FF5733", "#FFBD33", "#33FF64", "#33C4FF", "#7A33FF",
  "#FFE333", "#33FFCC", "#3391FF", "#CC33FF", "#B133FF",
  "#33FF6D", "#33FFCB", "#338DFF", "#FF33D0", "#F3FF33",
  "#FF5733", "#FFBD33", "#33FF64", "#33C4FF", "#7A33FF",
  "#FFE333", "#33FFCC", "#3391FF", "#CC33FF", "#B133FF",
  "#33FF6D", "#33FFCB", "#338DFF", "#FF33D0", "#F3FF33",
  "#FF5733", "#FFBD33", "#33FF64", "#33C4FF", "#7A33FF",
  "#FFE333", "#33FFCC",
];

  
let currentIndex=0;
export default function Product(props) {
  const backgroundColor = colorShades[currentIndex];
  currentIndex = (currentIndex + 1) % colorShades.length;
  return (
    <div className="card flex flex-col pb-4">
      {/* <div>
        <Container className="image-sec">
          <img className="product--image" src={props.url} alt="product image" />
        </Container>
        <h2>{props.name}</h2>
        <p className="objective">{props.objective}</p>
        <div className="flex items-center ml-7 mt-2">
          <img src={props.company} className="company-logo" />
        </div>
      </div> */}
      <Container sx={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:"column",position:'relative'}}>
      <div
          className="background-layer"
          style={{
            background: backgroundColor,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "27%",
            zIndex: -1,
          }}
        ></div>
        <Avatar src={props.url} sx={{width:"145px",height:"145px",marginTop:"24px",zIndex:1}} />
        <h2 className="text-center font-bold mt-2 text-lg">Aditya Dixit</h2>
        <h5 className="text-center mt-1 text-sm">Sr. Software Engineer</h5>
        <span className="mt-1">{props.objective}</span>
        <img src={props.company} alt="company" style={{maxWidth:"60%",objectFit:'cover'}} className="mt-3" />
        <p className="mt-6"><button className="btn">Book Session</button></p>
        {/* <span className="mt-2">1500/- per session</span> */}
      </Container>

      {/* <span> 15000 per months</span> */}
      {/* if you want to book sesssion then pass the props thats it. */}
    </div>
  );
}
