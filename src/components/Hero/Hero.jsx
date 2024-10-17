
const Hero = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[700px] md:min-h-[600px]">
        {/*Text content section*/}
        <div className="space-y-5 flex flex-col justify-center items-center text-center md:text-left py-20 px-10 md:pr-24 md:py-0 md:items-start">
            <h1 className="text-4xl xl:text-5xl font-bold">
                Unlock a Passion, Side Hustle, or New{" "}
                <span className="text-gray-400 underline">Profession</span>
            </h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dignissimos eligendi mollitia{" "}
            </p>
            <button className="primary-btn bg-gray-900 hover:bg-primary duration-300">
                More News
            </button>
        </div>
        {/*Hero image section*/}
      </div>
    </div>
  )
}

export default Hero
