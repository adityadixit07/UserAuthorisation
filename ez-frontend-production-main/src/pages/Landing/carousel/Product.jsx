import { Avatar} from "@mui/material";
import "./carousel.css";


const colorShades = [
  "#52BE80", "#58D68D", "#45B39D", "#48C9B0", "#1ABC9C",
  "#47A8BD", "#5D6D7E", "#5499C7", "#2980B9", "#2471A3",
  "#717D7E", "#6C7A89", "#808080", "#839192", "#8D979E",
  "#616A6B", "#707B7C", "#626567", "#515A5A", "#424949",
  "#FAD02E", "#F7D358", "#F4D03F", "#F0E68C", "#EAE678",
  "#E6B71E", "#E3A857", "#DDADAF", "#D2B4DE", "#C39BD3",
  "#212F3D", "#1B2631", "#17202A", "#0E6251", "#0B5345",
  "#117A65", "#0E6655", "#186A3B", "#148F77", "#1E8449",
  "#196F3D", "#138D75", "#0E6655", "#117A65", "#117864",
  "#B0DB4E", "#A9DFBF", "#A2D9CE", "#73C6B6", "#76D7C4",
  
];
let currentIndex=0;



export default function Product(props) {
  const backgroundColor = colorShades[currentIndex];
  currentIndex = (currentIndex + 1) % colorShades.length;
  return (
    <div className="card flex flex-col pb-4 w-72">
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:"column",position:'relative'}}>
      <div
          className="background-layer"
          style={{
            background: backgroundColor,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "22%",
            zIndex: -1,
          }}
        ></div>
        <Avatar src={props.url} sx={{width:"145px",height:"145px",marginTop:"24px",zIndex:1}} />
        <h2 className="text-center mt-2 text-lg">{props.name}</h2>
        <h5 className="text-center font-semibold mt-1 leading-8 hover:text-green-700 hover:ease-linear">Sr. Software Engineer</h5>
        <span className="mt-1">{props.objective}</span>
        <img src={props.company} className='company-image mt-4' alt="company"/>
        <p className="mt-6"><button className="btn">Book Session</button></p>
        {/* <span className="mt-2">1500/- per session</span> */}
      </div>
    </div>
  );
}
