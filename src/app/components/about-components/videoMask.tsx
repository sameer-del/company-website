// components/VideoMask.js
export default function VideoMask() {
  return (
    <div className="flex items-center justify-center  ">
      {/* Wrapper with Letter R Mask */}
      <div className="relative w-[500px] h-[400px] rounded-[30px]">
        <div className="absolute  inset-0 bg-black mix-blend-multiply clip-r">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            src="/assests/about/about-video.mp4"
          />
        </div>
      </div>
    </div>
  );
}
