import React from "react";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import Footer from "@/components/Footer";

function About() {
  return (
    <>
      <nav className="md:h-[150px] h-[100px] z-[20]">
        <NavBar />
      </nav>
      <main className="flex flex-col gap-16 max-w-[1200px] mx-10 items-center">
        <section className="md:flex hidden items-center justify-between w-[100%]">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-2">
              <h1 className="acorn-bold title text-8xl">I'm Edgar</h1>
              <h1 className="acorn-bold text-6xl">Software developer</h1>
            </div>
            <p className="acorn-regular text-lg max-w-[600px]">
              I'm a software developer with a passion for solve problems. I love to create software that makes 
              life easier for people, that makes the world a better place.
            </p>
            <p className="acorn-regular text-lg max-w-[600px]">
              I’m currently looking for a job as a software developer.
            </p>
          </div>
          <Image
            src="FotoSilla.jpg"
            width={400}
            height={400}
            alt="Profile image"
            className="rounded-full"
          />
        </section>
        <section className="hidden md:flex flex-col items-center gap-10 w-[100%]">
          <h2 className="acorn-bold text-2xl max-w-[600px] text-center">
            If I had to define my life in some way, I would say that I am a person who enjoys the simple things in life.
          </h2>
          <div className="flex bg-[#FFFFFF] bg-opacity-[10%] rounded-2xl p-16 gap-32">
            <div className="flex flex-col gap-16">
              <div className="flex flex-col gap-5">
                <h1 className="acorn-bold text-4xl">Programming</h1>
                <p className="montserrat font-bold">
                  I currently workin on some personal projects, so this aspect takes up a significant part of my day.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <h1 className="acorn-bold text-4xl">Tea</h1>
                <p className="montserrat font-bold">
                  In my day, tea is a must, whether I’m working or reading, I love being accompanied by my cup of tea.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-16">
              <div className="flex flex-col gap-5">
                <h1 className="acorn-bold text-4xl">Sports</h1>
                <p className="montserrat font-bold">
                  I’ve been practicing sports since I was a child, and it’s something I’m passionate about. I love to play soccer and volleyball.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <h1 className="acorn-bold text-4xl">Read</h1>
                <p className="montserrat font-bold">
                  In my free time, I always like to be reading a book. For me, it’s a moment to forget about the world and immerse myself in an incredible story.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="hidden md:flex flex-col items-center gap-10 w-[100%]">
          <h1 className="acorn-bold text-5xl max-w-[600px] text-center">
            Skills
          </h1>
          <div className="flex bg-[#FFFFFF] bg-opacity-[30%] rounded-2xl p-16 gap-32">
            <div className="flex flex-col gap-16">
              <div className="flex flex-col gap-5">
                <h1 className="acorn-bold text-4xl">Tecnologies</h1>
                <p className="montserrat font-bold">
                  The principal technologies that I use are Python, JavaScript, React, Sql, and C++.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <h1 className="acorn-bold text-4xl">Eficienci</h1>
                <p className="montserrat font-bold">
                  I’m a person who is always looking to improve my skills, so I’m always learning new things. For me the eficienci is very important.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-16">
              <div className="flex flex-col gap-5">
                <h1 className="acorn-bold text-4xl">Languages</h1>
                <p className="montserrat font-bold">
                  I speak Spanish and English in a conversacional level. Currently I'm learning English to level up my skills.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <h1 className="acorn-bold text-4xl">Continuous learning</h1>
                <p className="montserrat font-bold">
                  I’m always looking for new things to learn, so I’m always reading books, taking courses, and practicing new tools.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default About;
