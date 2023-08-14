import beautfiullinkbio from '../../../assets/ez-logo/beautfiullinkbio.png'
import ezKaro from '../../../assets/ez-logo/newez2.png'

const BeautifulPortFolioLink = () => {
  return (
    <div className='flex justify-center flex-col items-center'>
        <div className="logosection flex flex-col items-center ">
            <img src={ezKaro} alt="" style={{width:'60%'}} />
        </div>
        <div className="beautiful-links flex items-center flex-col">
            <h1 className='text-5xl font-bold'>A Beautiful Portfolio: <br /><span className='flex items-center ml-20'>Your Link in Bio</span></h1>
            <p className='text-2xl' style={{fontWeight:"400"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero placeat neque laudantium.</p>
        </div>
        <div className='mt-5 flex flex-row items-center'>
            <button className=' p-3 rounded-2xl' style={{background:"#1DBF73"}}> Create you ez Link</button>
        </div>
            <img src={beautfiullinkbio} alt="" style={{objectFit:"contain",maxWidth:"60%"}}className='mt-4' />

    </div>
  )
}

export default BeautifulPortFolioLink