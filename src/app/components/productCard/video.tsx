import Video from "next-video";
import videoSample from "/videos/VID_20241130_163119.mp4";

export default function VideoPage() {
    return (
        <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
            <h2 className="mb-5 text-2xl">
                Video da banda
            </h2>
            <Video
                src={videoSample}
                autoPlay
                muted
                loop
                playsInline
                controls={false} // false if it's a bg video inside hero section
                className=""
            ></Video>

            <div className="mb-4 flex justify-between align-center">
                <p>Curtir video da banda</p>                
            </div>
        </aside>
    )
}