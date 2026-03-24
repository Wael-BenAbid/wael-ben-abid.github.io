/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Twitter, Camera, Code2, ArrowRight, Instagram, Facebook, MessageCircle } from 'lucide-react';
import profileImage from './media/WhatsApp Image 2026-03-03 at 02.58.33.jpeg';
import logoImage from './media/portefeuille.png';
import noiseSvg from './media/noise.svg';

const App = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative bg-[#0c0c0e] selection:bg-indigo-500/30 font-sans overflow-x-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-900/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-900/20 blur-[150px] rounded-full" />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse:60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Header / Navigation */}
      <header className="relative z-50 w-full max-w-6xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logoImage} alt="Portfolio" className="w-10 h-10 rounded-lg" />
          <span className="text-white font-bold text-lg">Wael Ben Abid</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-zinc-400 hover:text-white transition-colors">Accueil</a>
          <a href="#skills" className="text-zinc-400 hover:text-white transition-colors">Compétences</a>
          <a href="#gallery" className="text-zinc-400 hover:text-white transition-colors">Galerie</a>
          <a href="#contact" className="text-zinc-400 hover:text-white transition-colors">Contact</a>
        </nav>
      </header>

      <main className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center">
        {/* Profile Section - Hero */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center mb-16"
          id="home"
        >
          <div className="relative mb-8">
            {/* Animated Ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 border border-dashed border-white/10 rounded-full"
            />
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#0c0c0e] bg-zinc-900">
                <img 
                  src={profileImage}
                  alt="Wael Ben Abid" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            {/* Badge */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-2 -right-2 bg-white text-black px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl flex items-center gap-2"
            >
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              Disponible
            </motion.div>
          </div>

          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-3">
              Wael Ben Abid
            </h1>
            <div className="flex items-center justify-center gap-4 text-zinc-400 font-medium tracking-wide">
              <span className="flex items-center gap-2">
                <Code2 size={16} className="text-indigo-400" />
                Développeur Full Stack
              </span>
              <div className="w-1 h-1 bg-zinc-700 rounded-full" />
              <span className="flex items-center gap-2">
                <Camera size={16} className="text-purple-400" />
                Photographe Aérien
              </span>
            </div>
          </div>
        </motion.div>

        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center mb-16 max-w-2xl"
        >
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
            Je conçois des solutions techniques robustes avec <span className="text-white font-semibold">Django & React</span> 
            tout en capturant le monde sous des angles uniques grâce à la <span className="text-white font-semibold">photographie par drone</span>.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <div className="flex gap-4 mb-20">
          <a href="#contact" className="px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all flex items-center gap-2">
            Me Contacter
            <ArrowRight size={18} />
          </a>
          <a href="/cv-wael.pdf" className="px-6 py-3 border border-zinc-700 text-zinc-300 rounded-full hover:bg-zinc-800 transition-all">
            Télécharger CV
          </a>
        </div>

        {/* Section Compétences - Cartes Interactives */}
        <section className="mb-20 w-full" id="skills">
          <h2 className="text-2xl font-bold mb-8 border-l-4 border-indigo-500 pl-4 text-white">
            Compétences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Backend Card */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl hover:border-indigo-500/50 transition-all cursor-pointer"
            >
              <h3 className="text-indigo-400 font-bold mb-4 flex items-center gap-2">
                <Code2 size={20} /> Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-zinc-800 px-3 py-1 rounded-md text-sm text-gray-300">Python (Django)</span>
                <span className="bg-zinc-800 px-3 py-1 rounded-md text-sm text-gray-300">Node.js</span>
                <span className="bg-zinc-800 px-3 py-1 rounded-md text-sm text-gray-300">Java (Spring Boot)</span>
                <span className="bg-zinc-800 px-3 py-1 rounded-md text-sm text-gray-300">PostgreSQL</span>
                <span className="bg-zinc-800 px-3 py-1 rounded-md text-sm text-gray-300">Docker</span>
              </div>
            </motion.div>

            {/* Frontend Card */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl hover:border-purple-500/50 transition-all cursor-pointer"
            >
              <h3 className="text-purple-400 font-bold mb-4 flex items-center gap-2">
                <Code2 size={20} /> Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-zinc-800 px-3 py-1 rounded-md text-sm text-gray-300">React</span>
                <span className="bg-zinc-800 px-3 py-1 rounded-md text-sm text-gray-300">TypeScript</span>
                <span className="bg-zinc-800 px-3 py-1 rounded-md text-sm text-gray-300">Tailwind CSS</span>
                <span className="bg-zinc-800 px-3 py-1 rounded-md text-sm text-gray-300">Angular</span>
              </div>
            </motion.div>

            {/* Créatif Card */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl hover:border-pink-500/50 transition-all cursor-pointer"
            >
              <h3 className="text-pink-400 font-bold mb-4 flex items-center gap-2">
                <Camera size={20} /> Créatif
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-zinc-800 px-3 py-1 rounded-md text-sm text-gray-300">DJI Mini 4 Pro</span>
                <span className="bg-zinc-800 px-3 py-1 rounded-md text-sm text-gray-300">Adobe Lightroom</span>
                <span className="bg-zinc-800 px-3 py-1 rounded-md text-sm text-gray-300">Montage Vidéo</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Galerie Photo */}
        <section className="mb-20 w-full" id="gallery">
          <h2 className="text-2xl font-bold mb-8 border-l-4 border-blue-500 pl-4 text-white">
            Captures & Perspectives
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="group relative overflow-hidden rounded-xl h-48 bg-zinc-800">
              <img src={profileImage} alt="Drone shot 1" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-end p-4 transition-opacity">
                <p className="text-xs text-white">Vue aérienne - DJI Mini 4 Pro</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl h-48 bg-zinc-800">
              <img src={profileImage} alt="Drone shot 2" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-end p-4 transition-opacity">
                <p className="text-xs text-white">Perspective unique</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl h-48 bg-zinc-800">
              <img src={profileImage} alt="Drone shot 3" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-end p-4 transition-opacity">
                <p className="text-xs text-white">Horizon capturé</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl h-48 bg-zinc-800">
              <img src={profileImage} alt="Drone shot 4" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-end p-4 transition-opacity">
                <p className="text-xs text-white">Vue panoramique</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Compétences et Profil (Expériences) */}
        <section className="mb-20 w-full max-w-3xl mx-auto bg-zinc-900/40 rounded-xl p-8 shadow-lg border border-white/10">
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-400 mb-6 flex items-center gap-2">
            <Code2 size={28} className="text-indigo-400" /> Expériences & Formations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <Code2 size={20} className="text-indigo-400" /> Expériences
              </h3>
              <ul className="text-zinc-300 mb-4 space-y-3">
                <li><span className="font-bold text-white">Développeur Full Stack | CIAM Solution</span> (Jan 2023 - Fév 2023)<br/>Gestion Scolaire (Java/Spring Boot/Angular)</li>
                <li><span className="font-bold text-white">Développeur Mobile (Flutter) | Galactech</span> (Jan 2024 - Fév 2024)<br/>Jeu Tic-Tac-Toe professionnel</li>
                <li><span className="font-bold text-white">Stagiaire Technique | Skidata</span> (Jan 2022 - Fév 2022)<br/>Surveillance, contrôle d'accès</li>
              </ul>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <Camera size={20} className="text-pink-400" /> Centres d'intérêts
              </h3>
              <ul className="text-zinc-300">
                <li>Technologie, Photographie, Football, Gaming, Trading</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <Code2 size={20} className="text-purple-400" /> Formations
              </h3>
              <ul className="text-zinc-300 mb-4 space-y-2">
                <li>Licence en Technologies de l'Informatique | ISET Bizerte (2022 - 2026)</li>
                <li>Baccalauréat Technique | Med Ali Annabi (2021)</li>
              </ul>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <Camera size={20} className="text-purple-400" /> Langues
              </h3>
              <ul className="text-zinc-300">
                <li>Français : <span className="text-green-400">Courant</span></li>
                <li>Anglais : <span className="text-yellow-400">Conversationnel</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action & Socials */}
        <div className="flex flex-col items-center gap-10" id="contact">
          <motion.a
            href="https://wa.me/21628713038"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-sm uppercase tracking-widest overflow-hidden transition-all flex items-center gap-3"
          >
            <span className="relative z-10 flex items-center gap-3">
              Me contacter sur WhatsApp <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>

          <div className="flex items-center gap-6 md:gap-8">
            {[
              { icon: Github, href: "https://github.com/Wael-BenAbid", color: "hover:text-white" },
              { icon: Instagram, href: "https://www.instagram.com/wael_ben_abid", color: "hover:text-pink-500" },
              { icon: Facebook, href: "https://www.facebook.com/waelbenabid", color: "hover:text-blue-500" },
              { icon: MessageCircle, href: "https://wa.me/21628713038", color: "hover:text-green-500" },
              { icon: Mail, href: "mailto:waelbenabid1@gmail.com", color: "hover:text-red-400" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + (i * 0.1) }}
                className={`text-zinc-600 ${social.color} transition-all duration-300 transform hover:-translate-y-1`}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-10 text-center border-t border-white/5 w-full mt-20">
        <p className="text-zinc-700 text-[10px] uppercase tracking-[0.6em] font-bold">
          © 2024 • WAEL BEN ABID • DIGITAL ARCHITECT & VISUAL STORYTELLER
        </p>
      </footer>

      {/* Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url(noiseSvg)]" />
    </div>
   );
};

export default App;
