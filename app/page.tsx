
import { Hero7 } from "@/components/hero-section-demo-1";
import { Button } from "@/components/ui/button";
import { Tooltip } from "@/components/ui/tooltip-card";
import { CometCard } from "@/components/ui/comet-card";
import { FloatingDock } from "@/components/ui/floating-dock";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { LoaderThree } from "@/components/ui/loader";
import { EasterEggMarquee } from "@/components/easter-egg-marquee";

import {
  Home as HomeIcon,
  User,
  FolderGit2,
  Mail,
  Code2,
  Palette,
  Zap,
  Globe,
  Server,
  Linkedin,
  Instagram,
  Github,
} from "lucide-react";
import ExpandableCardDemo from "@/components/expandable-card-demo-standard";

export default function Home() {
  const dockItems = [
    {
      title: "Home",
      icon: <HomeIcon className="h-full w-full" />,
      href: "#",
    },
    {
      title: "About",
      icon: <User className="h-full w-full" />,
      href: "#about",
    },
    {
      title: "Projects",
      icon: <FolderGit2 className="h-full w-full" />,
      href: "#projects",
    },
    {
      title: "Contact",
      icon: <Mail className="h-full w-full" />,
      href: "#contact",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen w-full justify-center items-center overflow-x-hidden">
      <Hero7 />

      {/* About & Skills Combined Section */}
      <section className="min-h-screen w-full flex items-center justify-center py-8">
        <div className="w-full max-w-7xl px-4 md:px-8 space-y-8">
          {/* About Section */}
          <div id="about" className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* About Text - Left Side */}
              <div className="flex flex-col items-start text-left">
                <div className="space-y-3 text-base text-white">
                  <p>
                    I&apos;m a Third Year Electronics and Telecommunication undergraduate student at{" "}
                    <Tooltip
                      content="Vishwakarma Institute of Technology (VIT), Pune is a well-known autonomous engineering institute located in Bibwewadi, Pune. Established in 1983 and managed by the Bansilal Ramnath Agarwal Charitable Trust, it is permanently affiliated with Savitribai Phule Pune University and approved by AICTE. VIT Pune offers undergraduate, postgraduate, and doctoral programs in engineering and is recognized for its strong academic structure, active technical culture, and consistent placement record, making it one of the reputable engineering colleges in western India."
                      tooltipClassName="w-fit min-w-32"
                    >
                      <span className="font-semibold text-green-500 cursor-pointer hover:underline decoration-dotted underline-offset-4">
                        Vishwakarma Institute of Information Technology
                      </span>
                    </Tooltip>
                    , maintaining a strong academic record with a current GPA of 8.7.
                  </p>
                  <p>
                    My passion lies at the intersection of hardware and software technologies, with a
                    particular interest in the semiconductor industry and its cutting-edge developments.
                  </p>
                  <p>
                    I&apos;m also deeply fascinated by software engineering, currently expanding my
                    knowledge in backend development to build a comprehensive skill set that bridges
                    both domains. My academic excellence reflects my dedication to learning and my
                    ability to excel in complex technical environments.
                  </p>
                  <div className="flex gap-4 mt-6">
                    <Tooltip
                      content="Click to learn more about my skills and expertise"
                    >
                      <Button>My Skills</Button>
                    </Tooltip>
                  </div>
                </div>
              </div>

              {/* Comet Card - Right Side */}
              {/* Comet Card - Right Side */}
              <div className="flex justify-center lg:justify-end w-full">
                <CometCard className="w-full max-w-md scale-90 md:scale-75 origin-top md:origin-top-right">
                  <div className="bg-neutral-900/80 border border-green-500/20 p-8 rounded-2xl h-64 flex flex-col justify-center items-center gap-4 relative overflow-hidden backdrop-blur-sm">
                    {/* Background glow for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-600/10 to-transparent pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center gap-2">
                      <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                        Sameer Chavan
                      </h3>
                      <p className="text-green-400 font-medium text-center">
                        VIIT Pune
                      </p>

                      <div className="flex items-center gap-2 mt-2 text-neutral-300">
                        <Mail className="w-4 h-4" />
                        <span className="text-sm">sameerc040@gmail.com</span>
                      </div>

                      <div className="flex gap-6 mt-6">
                        <a
                          href="https://www.linkedin.com/in/chavan-sameer?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transform hover:scale-110 transition-transform"
                        >
                          <Linkedin className="w-8 h-8 text-[#0077b5]" />
                        </a>
                        <a
                          href="https://www.instagram.com/the_samarium?igsh=NHF4N21obTdsM3J6"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transform hover:scale-110 transition-transform"
                        >
                          <Instagram className="w-8 h-8 text-[#E1306C]" />
                        </a>
                        <a
                          href="https://github.com/the-samarium"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transform hover:scale-110 transition-transform"
                        >
                          <Github className="w-8 h-8 text-[#333333] dark:text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </CometCard>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div id="skills" className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Column 1 - Development */}
              <CardSpotlight className="p-6">
                <h3 className="text-xl font-bold mb-4 text-green-500 relative z-10">Development</h3>
                <ul className="space-y-3 relative z-10">
                  <li className="flex items-start gap-3">
                    <Code2 className="w-5 h-5 mt-1 text-[#61DAFB] flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">React & Next.js</p>
                      <p className="text-xs text-white/80">Full-stack Web Apps</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Server className="w-5 h-5 mt-1 text-[#339933] flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">Node.js & Express</p>
                      <p className="text-xs text-white/80">Backend Systems</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Palette className="w-5 h-5 mt-1 text-[#06B6D4] flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">Tailwind CSS</p>
                      <p className="text-xs text-white/80">Modern Styling</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 mt-1 text-[#FF0080] flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">Framer Motion</p>
                      <p className="text-xs text-white/80">Advanced Animations</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Globe className="w-5 h-5 mt-1 text-[#0096FF] flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">REST APIs</p>
                      <p className="text-xs text-white/80">Scalable Architecture</p>
                    </div>
                  </li>
                </ul>
              </CardSpotlight>

              {/* Column 2 - Languages */}
              <CardSpotlight className="p-6">
                <h3 className="text-xl font-bold mb-4 text-green-500 relative z-10">Languages</h3>
                <ul className="space-y-3 relative z-10">
                  <li className="flex items-start gap-3">
                    <Code2 className="w-5 h-5 mt-1 text-[#00599C] flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">C++</p>
                      <p className="text-xs text-white/80">Data Structures & Algo</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Code2 className="w-5 h-5 mt-1 text-[#3776AB] flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">Python</p>
                      <p className="text-xs text-white/80">Scripting & AI</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Code2 className="w-5 h-5 mt-1 text-[#00ADD8] flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">Go</p>
                      <p className="text-xs text-white/80">Fundamentals</p>
                    </div>
                  </li>
                </ul>
              </CardSpotlight>

              {/* Column 3 - Tools */}
              <CardSpotlight className="p-6">
                <h3 className="text-xl font-bold mb-4 text-green-500 relative z-10">Tools</h3>
                <ul className="space-y-3 relative z-10">
                  <li className="flex items-start gap-3">
                    <FolderGit2 className="w-5 h-5 mt-1 text-[#F05032] flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">Git & GitHub</p>
                      <p className="text-xs text-white/80">Version Control</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 mt-1 text-[#2496ED] flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">Docker (Learning)</p>
                      <p className="text-xs text-white/80">Containerization</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 mt-1 text-[#FF6C37] flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">n8n (Learning)</p>
                      <p className="text-xs text-white/80">Workflow Automation</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Palette className="w-5 h-5 mt-1 text-[#A855F7] flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">ComfyUI</p>
                      <p className="text-xs text-white/80">Stable Diffusion Workflows</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Globe className="w-5 h-5 mt-1 text-[#000000] dark:text-[#FFFFFF] flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">Vercel & AWS</p>
                      <p className="text-xs text-white/80">Deployment & Cloud</p>
                    </div>
                  </li>
                </ul>
              </CardSpotlight>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen w-full flex items-center justify-center py-12 pb-12 mb-2">
        <div className="w-full max-w-7xl px-4 md:px-8 ">
          <h2 className="text-4xl mb-12 text-center">Featured Projects</h2>
          <ExpandableCardDemo />
        </div>
      </section>

      {/* Outside the Terminal Section */}
      <section className="h-full w-full flex items-center justify-center py-8 pt-4 bg-gradient-to-b from-transparent to-neutral-100 dark:to-neutral-900">
        <div className="w-full md:w-3/4 border border-gray-900 bg-black/80 p-4 md:p-8 rounded-2xl max-w-7xl mx-4 md:mx-0 overflow-hidden relative">
          <DottedGlowBackground className="absolute inset-0 pointer-events-none" opacity={0.5} />

          <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,_1.1fr)_minmax(0,_1.2fr)] gap-10 md:gap-14 items-start">
            {/* Loader Left Side */}
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col justify-center items-center text-center tracking-tight text-white w-full max-w-xl lg:max-w-2xl h-64 md:h-80 p-6 md:p-8 rounded-xl bg-black/60">
                <LoaderThree />
                <div className="mt-6 text-sm md:text-base font-normal">
                  <span className="text-white italic">
                    &quot;The winner takes it all...&quot;
                  </span>
                </div>
              </div>
            </div>

            {/* Text & Spotify - Right Side */}
            <div className="space-y-6">
              <h2 className="text-4xl mb-6 text-white text-start">Outside the Terminal</h2>
              <div>
                <p className="text-base text-white mb-6 leading-relaxed">
                  I can code for hours fueled by nothing but coffee and my incredibly diverse playlist! When I&apos;m not debugging,
                  you&apos;ll catch me binge-watching series, exploring films, rewatching comfort shows for the hundredth time, or
                  discovering hidden gem documentaries. My music taste knows no boundaries— literally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pluribus Easter Egg (subtle scroll) */}
      <EasterEggMarquee />

      {/* Footer */}
      <footer id="contact" className="w-full py-8 relative">
        <CardSpotlight className="w-full">
          <div className="w-full max-w-7xl mx-auto px-8 py-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* About Column */}
              <div>
                <h3 className="text-lg font-bold mb-4 text-green-500">About</h3>
                <p className="text-sm text-white leading-relaxed">
                  Student and developer passionate about creating beautiful, functional web experiences. Always learning, always building.
                </p>
              </div>

              {/* Quick Links Column */}
              <div>
                <h3 className="text-lg font-bold mb-4 text-green-500">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#about" className="text-sm text-white hover:text-green-400 transition-colors">About</a>
                  </li>
                  <li>
                    <a href="#skills" className="text-sm text-white hover:text-green-400 transition-colors">Skills</a>
                  </li>
                  <li>
                    <a href="#projects" className="text-sm text-white hover:text-green-400 transition-colors">Projects</a>
                  </li>
                </ul>
              </div>

              {/* Connect Column */}
              <div className="flex flex-col items-center md:items-start">
                <h3 className="text-lg font-bold mb-4 text-green-500 text-center md:text-left">Connect</h3>
                <div className="flex flex-col gap-4 w-full">
                  <a
                    href="mailto:sameerc040@gmail.com"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 group"
                  >
                    <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    Reach Me
                  </a>
                  <div className="flex gap-4 mt-2 justify-center md:justify-start">
                    <a href="https://www.linkedin.com/in/chavan-sameer" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-colors">
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="https://github.com/the-samarium" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-colors">
                      <Github className="w-6 h-6" />
                    </a>
                    <a href="https://www.instagram.com/the_samarium" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-colors">
                      <Instagram className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-center text-sm text-white">
                © {new Date().getFullYear()} Built with Next.js & Tailwind CSS.
              </p>
            </div>
          </div>
        </CardSpotlight>
      </footer>

      {/* Floating Dock */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <FloatingDock items={dockItems} />
      </div>
    </main>
  );
}
