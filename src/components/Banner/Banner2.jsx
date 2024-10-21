
import BannerImg from "../../assets/4.png" 

const Banner2 = () => {
  return (
    <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[700px] md:min-h-[600px]">
            {/* Banner Image section */}
            <div className="flex justify-center items-center">
                <img src={BannerImg} alt="" className="w-[90%] md:w-[550px] xl:w-[600px] md:!scale-110"/>

            </div>
            {/* Text Content section */}
            <div>

            </div>
        </div>
    </div>
  )
}

export default Banner2
