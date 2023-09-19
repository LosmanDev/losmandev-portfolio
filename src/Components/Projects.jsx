import { useState, useEffect } from "react";
import behind from "../assets/images/behind.webp";
import behind_service from "../assets/images/behind-service.webp";
import behind_waiting from "../assets/images/behind-waiting.webp";

const behind_images = [
  { src: behind, alt: "Behind The Cutz" },
  { src: behind_service, alt: "Behind The Cutz" },
  { src: behind_waiting, alt: "Behind The Cutz" },
];

export default function Projects() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % behind_images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [currentImageIndex]);

  return (
    <>
      <div className="animate-fadeDown pb-10 ">
        <div className="flex flex-col items-center justify-center animate-fadeIn pt-10 textFont">
          <h1 className="font-semibold text-center pb-8 sm:text-3xl text-2xl">
            Projects
          </h1>

          <div className="card sm:w-5/12 w-96 glass shadow-xl">
            <figure>
              <img
                key={behind_images[currentImageIndex].src}
                className="animate-fadeIn"
                src={behind_images[currentImageIndex].src}
                alt={behind_images[currentImageIndex].src}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Behind The Cutz</h2>
              <p className="text-slate-600 font-light">
                Behind The Cutz is a waitlist app developed for my local barber.
              </p>
              <div className="card-actions justify-center">
                <button className="btn btn-outline">&lt;Code/&gt;</button>
                <button className="btn btn-outline">Visit🌐 </button>
              </div>
            </div>
          </div>

          <div className="card sm:w-5/12 w-96 glass mt-5 shadow-xl">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt=""
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Test</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, commodi.
              </p>
              <div className="card-actions justify-center">
                <button className="btn btn-outline">&lt;Code/&gt;</button>
                <button className="btn btn-outline">Visit🌐</button>
              </div>
            </div>
          </div>
          <div className="card sm:w-5/12 w-96 glass mt-5 shadow-xl">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt=""
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Test</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, commodi.
              </p>
              <div className="card-actions justify-center">
                <button className="btn btn-outline">&lt;Code/&gt;</button>
                <button className="btn btn-outline">Visit🌐</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
