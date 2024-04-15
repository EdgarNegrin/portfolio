import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";

function Projects() {
  return (
    <>
      <nav className="h-[150px] z-20">
        <NavBar />
      </nav>
      <main className="flex flex-col gap-16 mx-10 max-w-[1200px]">
        <section className="md:flex hidden items-center">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-2">
              <h1 className="acorn-bold title text-8xl">My Projects </h1>
              <h1 className="acorn-bold text-6xl">Works and personal projects.</h1>
            </div>
            <p className="acorn-regular text-lg max-w-[600px]">
              Here you can find some of the projects that I have been working on
              during my career as a student computer engineer and also some personal
              projects that I have developed in my free time.
            </p>
          </div>
        </section>
        <section className="md:flex hidden flex-col gap-10 items-center">
          <h2 id="proyect">
            Music Locator
          </h2>
          <div className="flex justify-between w-full">
            <div className="">
              <a href={"https://github.com/SyTW-2122/E05"} target="_blank">
                <div
                  style={{
                    width: "500px",
                    height: "400px",
                    position: "relative",
                    bottom: 0,
                    right: 0,
                  }}
                >
                  <Image
                    className="object-cover h-auto absolute rounded-[40px] hover:translate-x-[20px] transition-all"
                    src="../../../public/localizador.png"
                    layout="fill"
                    alt="Web Football Data"
                  />
                </div>
              </a>
            </div>
            <div>
              <p className=" py-5 z-10 px-10 right-0 acorn-bold text-2xl">
                Within this project, a web application has been developed 
                that allows locating Spotify users as well as the song they are 
                currently listening to. For this purpose, the Spotify 
                API has been utilized. 
              </p>
              <ul className="py-5 z-10 px-10 right-0 acorn-bold text-2xl">
                  <li>Node</li>
                  <li>React</li>
                  <li>Mongo Express</li>
                  <li>Github Actions</li>
                  <li>Cypress</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="md:flex hidden flex-col gap-10 items-center">
          <h2 id="proyect">
            Digital image processor
          </h2>
          <div className="flex justify-between">
            <div className="">
              <a href={"https://github.com/sergiolbd/Digital-Image-Processor"} target="_blank">
                <div
                  style={{
                    width: "500px",
                    height: "400px",
                    position: "relative",
                    bottom: 0,
                    right: 0,
                  }}
                >
                  <Image
                    className="object-cover h-auto absolute rounded-[40px] hover:translate-x-[20px] transition-all"
                    src="../../../public/imageProcessor.png"
                    layout="fill"
                    alt="Image Processor"
                  />
                </div>
              </a>
            </div>
            <div>
              <p className=" py-5 z-10 px-10 right-0 acorn-bold text-2xl">
                
                In this project carried out during the computer engineering 
                career, a digital image processor has been developed that allows 
                performing various operations on images, such as rotating, scaling, 
                changing brightness, contrast, among others 
              </p>
              <ul className="py-5 z-10 px-10 right-0 acorn-bold text-2xl">
                  <li>Python</li>
                  <li>PyQt5 (Grafic interface)</li>
                  <li>Numpy</li>
                  <li>OpenCV</li>
                  <li>Matplotlib</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="md:flex hidden flex-col gap-10 items-center">
          <h2 id="proyect">
            Web Football Data
          </h2>
          <div className="flex justify-between w-full">
            <div className="">
              <a href={"https://github.com/EdgarNegrin/TFG-EdgarNegrin"} target="_blank">
                <div
                  style={{
                    width: "500px",
                    height: "400px",
                    position: "relative",
                    bottom: 0,
                    right: 0,
                  }}
                >
                  <Image
                    className="object-cover h-auto absolute rounded-[40px] hover:translate-x-[20px] transition-all"
                    src="../../../public/footballData.png"
                    layout="fill"
                    alt="Web Football Data"
                  />
                </div>
              </a>
            </div>
            <div>
              <p className="py-5 z-10 px-10 right-0 acorn-bold text-2xl">
                Within this webpage, there are various methods of visualizing
                datasets to compare information and draw conclusions 
                from them. Additionally, a model has been created that 
                enables us to predict the outcome of a football match 
                between two teams in the Spanish league.
              </p>
              <ul className="py-5 z-10 px-10 right-0 acorn-bold text-2xl">
                  <li>Django</li>
                  <li>Python</li>
                  <li>HTML</li>
                  <li>SQLite</li>
                  <li>Matplotlib</li>
                  <li>Pandas</li>
                  <li>XGBoost</li>
              </ul>
            </div>
    
                
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default Projects;
