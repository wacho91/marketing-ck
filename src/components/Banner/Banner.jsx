
import BannerImg from "../../assets/3.png"

const Banner = () => {
  return (
    <div className="container py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[700px] md:min-h-[600px]">
        {/*Text Content Section*/}
        <div className="space-y-8 flex flex-col justify-center items-center text-center md:text-left py-20 px-10 md:pr-10 md:py-0 md:px-0 md:items-start">
            <h1 className="text-4xl md:text-5xl font-semibold text-black/80">
                Design is not what it looks like and feels like. Design is how{" "}
                <br />
                <span className="text-gray-400 underline">It Works</span>
            </h1>
            <button className="primary-btn hover:bg-black text-black hover:text-white duration-300">
                More News 
            </button>
            <div className="flex gap-3">
                <div className="space-y-2">
                    <p className="font-semibold text-lg">Design Tools</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
                </div>
                <div className="space-y-2">
                    <p className="font-semibold text-lg">Design Tools</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
                </div>
            </div>
        </div>
        {/*Banner Image Section*/}
        <div>
            <img 
                src={BannerImg} 
                alt="Image"
                className="w-[90%] md:w-[550px] xl:w-[600px] md:!scale-125" 
            />
        </div>
      </div>
    </div>
  )
}

export default Banner
