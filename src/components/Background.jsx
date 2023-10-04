const Background = () => {
  return (
    <div className="relative">
      <div className="overflow-hidden h-60 md:h-80 lg:h-96 xl:h-120">
        <video className="w-full h-auto" autoPlay loop muted>
          <source src="../../images/background.mp4" type='video/mp4'/>
        </video>
      </div>
    </div>
  )
}

export default Background;
