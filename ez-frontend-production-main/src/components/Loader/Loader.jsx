//import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "./Loader.css";


const Loading = () => {
  return (
    <div className='container'>
      <div className='overlay'>
        <div className='loader'>
          <div className='loader--dot'></div>
          <div className='loader--dot'></div>
          <div className='loader--dot'></div>
          <div className='loader--dot'></div>
          <div className='loader--dot'></div>
          <div className='loader--dot'></div>
          <div className='loader--text'></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
