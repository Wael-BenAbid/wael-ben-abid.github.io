/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Twitter, Camera, Code2, ArrowRight, Instagram, Facebook, MessageCircle } from 'lucide-react';
import profileImage from './media/WhatsApp Image 2026-03-03 at 02.58.33.jpeg';

const App = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative bg-[#030303] selection:bg-indigo-500/30 font-sans overflow-x-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-900/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-900/20 blur-[150px] rounded-full" />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse:60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <main className="relative z-10 w-full max-w-5xl px-6 py-20 flex flex-col items-center">
        {/* Profile Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center mb-16"
        >
          <div className="relative mb-8">
            {/* Animated Ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 border border-dashed border-white/10 rounded-full"
            />
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#030303] bg-zinc-900">
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
                Développeur
              </span>
              <div className="w-1 h-1 bg-zinc-700 rounded-full" />
              <span className="flex items-center gap-2">
                <Camera size={16} className="text-purple-400" />
                Photographe
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
          <h2 className="text-xl md:text-3xl font-semibold text-white mb-6 leading-tight">
            Une nouvelle expérience visuelle et technique arrive dans quelques jours.
          </h2>
          <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
            Je prépare un portfolio qui fusionne l'art de la photographie avec la précision du développement web. 
            Restez à l'écoute pour le lancement officiel.
          </p>
        </motion.div>

        {/* Section Compétences et Profil */}
        <section className="mb-20 w-full max-w-3xl mx-auto bg-zinc-900/40 rounded-xl p-8 shadow-lg border border-white/10">
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-400 mb-6 flex items-center gap-2">
            <Code2 size={28} className="text-indigo-400" /> Compétences & Profil
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <Camera size={20} className="text-purple-400" /> Langues
              </h3>
              <ul className="text-zinc-300 mb-4">
                <li>Français : <span className="text-green-400">Courant</span></li>
                <li>Anglais : <span className="text-yellow-400">Conversationnel</span></li>
              </ul>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <Code2 size={20} className="text-indigo-400" /> Backend
              </h3>
              <ul className="text-zinc-300 mb-4">
                <li>Java (Spring Boot), Node.js, Python (Django)</li>
                <li>Base de données : SQL (PostgreSQL, MySQL), NoSQL (MongoDB)</li>
              </ul>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <Code2 size={20} className="text-pink-400" /> Frontend
              </h3>
              <ul className="text-zinc-300 mb-4">
                <li>React, Angular, TypeScript, HTML/CSS</li>
              </ul>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <Code2 size={20} className="text-green-400" /> Mobile
              </h3>
              <ul className="text-zinc-300 mb-4">
                <li>Flutter, Android (Kotlin/Java)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <Code2 size={20} className="text-indigo-400" /> Expériences
              </h3>
              <ul className="text-zinc-300 mb-4">
                <li><span className="font-bold text-white">Développeur Full Stack | CIAM Solution</span> (Jan 2023 - Fév 2023)<br/>Gestion Scolaire (Java/Spring Boot/Angular)</li>
                <li><span className="font-bold text-white">Développeur Mobile (Flutter) | Galactech</span> (Jan 2024 - Fév 2024)<br/>Jeu Tic-Tac-Toe professionnel (Flutter, Cloud)</li>
                <li><span className="font-bold text-white">Stagiaire Technique | Skidata</span> (Jan 2022 - Fév 2022)<br/>Surveillance, contrôle d'accès, serveurs HA</li>
                <li><span className="font-bold text-white">Stagiaire PFE | Tunisie Telecom</span> (Jan 2022 - Fév 2022)</li>
                <li><span className="font-bold text-white">Restaurant Manager (Saisonnier) | Capitaine El Bounta</span> (Ghar El Melh, Juin 2019 - Présent)</li>
              </ul>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <Code2 size={20} className="text-purple-400" /> Formations
              </h3>
              <ul className="text-zinc-300 mb-4">
                <li>Licence en Technologies de l'Informatique | ISET Bizerte (2022 - 2026)</li>
                <li>Baccalauréat Technique | Med Ali Annabi (2021)</li>
              </ul>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <Camera size={20} className="text-pink-400" /> Centres d'intérêts
              </h3>
              <ul className="text-zinc-300">
                <li>Technologie, Photographie, Football, Gaming, Trading</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action & Socials */}
        <div className="flex flex-col items-center gap-10">
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
      <footer className="py-10 text-center border-t border-white/5 w-full">
        <p className="text-zinc-700 text-[10px] uppercase tracking-[0.6em] font-bold">
          © 2024 • WAEL BEN ABID • DIGITAL ARCHITECT & VISUAL STORYTELLER
        </p>
      </footer>

      {/* Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
   );
};

export default App;
