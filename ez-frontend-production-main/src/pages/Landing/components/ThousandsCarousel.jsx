
import { inspiringData,responsive} from '../carousel/data'
import InspiringData from './InspiringData'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";

const ThousandsCarousel = () => {
    const inpiress=inspiringData((data,index)=>(
        <InspiringData key={index} name={data.name} imageLink={data.imageLink} role={data.role} />
    ))
  return (
    <div>
        <Carousel responsive={responsive}>
            {inpiress}
        </Carousel>
    </div>
  )
}

export default ThousandsCarousel