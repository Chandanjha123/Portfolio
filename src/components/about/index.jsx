import React from "react";
import ItemLayout from "./ItemLayout";
import Image from "next/image";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
      <ItemLayout
  className={"col-span-full lg:col-span-8 row-span-2 flex-col items-start"}
>
  <h2 className="text-xl md:text-2xl text-left w-full capitalize">
    Architect of Enchantment
  </h2>
  <div className="w-full overflow-visible"> {/* Added container div */}
    <p className="font-light text-xs sm:text-sm md:text-base w-full max-w-full">
     { `Hi, I'm Chandan Jha — a passionate and curious developer with a love for building impactful web and software solutions. I specialize in front-end development using HTML, CSS, JavaScript, and React, and I also have a solid grip on backend logic with Java. Whether it's designing sleek user interfaces or writing efficient code, I aim to blend creativity with functionality. I enjoy taking on new challenges and constantly leveling up my skills. This portfolio is a reflection of my journey, showcasing the projects and experiences that shape me as a web and Java developer. Thanks for stopping by!`}
    </p>
  </div>
</ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            1+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2+ <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}>
          <div className="w-full h-auto">
            <Image
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Chandanjha123&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
              alt="Chandan Jha's Top Languages"
              width={500}
              height={150}
              className="w-full h-auto"
              unoptimized
              loading="lazy"
            />
          </div>
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <div className="w-full h-auto">
            <Image
              src="https://github-readme-stats.vercel.app/api?username=Chandanjha123&theme=transparent&show_icons=true&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&bg_color=EB545400"
              alt="Chandan Jha's GitHub Stats"
              width={800}
              height={150}
              className="w-full h-auto"
              unoptimized
              loading="lazy"
            />
          </div>
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <div className="w-full h-auto">
            <Image
              src="https://skillicons.dev/icons?i=bootstrap,css,figma,firebase,git,github,html,js,mongodb,mysql,nextjs,nodejs,npm,react,replit,tailwind,threejs,vercel,vite,vscode,java,python"
              alt="Chandan Jha's Skills"
              width={1200}
              height={100}
              className="w-full h-auto"
              unoptimized
              loading="lazy"
            />
          </div>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;