
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
            <div className="space-y-8 flex flex-col justify-center items-center text-center md:text-left py-20 px-10 md:pl-10 md:py-0 md:px-0 md:items-start xl:max-w-[400px] mx-auto">
                <p className="uppercase">
                    Tech addicts
                </p>
                <h1 className="text-4xl xl:text-5xl font-semibold text-black/80">
                    They really understood our <br />
                    <span className="text-gray-400 underline">Needs</span>
                </h1>
                <button className="primary-btn hover:bg-black  text-black hover:text-white duration-300">
                    More News
                </button>
            </div>
        </div>
    </div>
  )
}

export default Banner2
