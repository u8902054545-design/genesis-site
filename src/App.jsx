import React, { useState, useEffect } from 'react';
import { Zap, Layers, Shield, CreditCard, Play, Plus, Sparkles, ChevronRight, Video, Monitor, Cpu, Star } from 'lucide-react';

const GradientText = ({ children, className = '' }) => (
  <span className={`bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 ${className}`}>
    {children}
  </span>
);

const GlassCard = ({ children, className = '' }) => (
  <div className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl ${className}`}>
    {children}
  </div>
);

const App = () => {
  const [prompt, setPrompt] = useState('');
  const epicPrompt = 'Vecna rising from the crimson fog of the Upside Down, tentacles pulsating with dark energy, Stranger Things Season 5 cinematic style, 8k resolution, volumetric lighting, hyper-realistic, dark fantasy aesthetics.';
  const handleFillPrompt = () => setPrompt(epicPrompt);

  return (
    <div className='min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30'>
      <div className='fixed inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full' />
        <div className='absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/20 blur-[120px] rounded-full' />
      </div>

      <nav className='relative z-10 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto'>
        <div className='flex items-center space-x-2'>
          <div className='w-10 h-10 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20'>
            <Video size={24} />
          </div>
          <span className='text-2xl font-bold tracking-tighter italic'>GENESIS <span className='text-purple-500'>DROP</span></span>
        </div>
        <button className='bg-white text-black px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-200 transition-all'>Личный кабинет</button>
      </nav>

      <main className='relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-32'>
        <section className='text-center mb-24'>
          <div className='inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 animate-fade-in'>
            <Sparkles size={14} className='text-purple-400' />
            <span className='text-xs font-medium uppercase tracking-widest text-gray-300'>Новое поколение: Genesis v2.5</span>
          </div>
          <h1 className='text-6xl md:text-8xl font-bold tracking-tight mb-6 leading-tight'>
            Оживите ваше <br />
            <GradientText>Воображение</GradientText>
          </h1>
          <p className='max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed'>
            Создавайте кинематографические шедевры из текстовых описаний.
          </p>
        </section>

        <section className='mb-32'>
          <GlassCard className='p-1'>
            <div className='bg-[#0a0a0a] rounded-[22px] p-6 md:p-10'>
              <div className='flex flex-col space-y-6'>
                <div className='flex items-center justify-between'>
                  <h2 className='text-xl font-semibold flex items-center gap-2'>
                    <Zap size={20} className='text-purple-500' /> Генератор Видео
                  </h2>
                </div>
                <div className='relative group'>
                  <textarea 
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder='Опишите ваше видео здесь...'
                    className='relative w-full h-40 bg-black/50 border border-white/10 rounded-2xl p-6 text-lg focus:outline-none focus:border-purple-500/50 transition-all text-white'
                  />
                  <div className='absolute bottom-4 left-4'>
                    <button onClick={handleFillPrompt} className='flex items-center gap-2 text-[10px] uppercase tracking-wider font-bold text-purple-400 bg-purple-500/10 px-3 py-1.5 rounded-md border border-purple-500/20'>
                      <Star size={12} fill='currentColor' /> Эпичный Промпт: Stranger Things 5
                    </button>
                  </div>
                  <button className='absolute bottom-4 right-4 bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3 rounded-xl font-bold flex items-center gap-2'>
                    Генерировать <Play size={18} fill='white' />
                  </button>
                </div>
              </div>
            </div>
          </GlassCard>
        </section>
      </main>
    </div>
  );
};

export default App;
<div className="mt-8 text-center animate-pulse">
  <p className="text-red-600 font-bold text-xl">
    ВЕКНА, МЫ ТЕБЯ ВИДИМ. КЛУБ АДСКОГО ПЛАМЕНИ ЗДЕСЬ.
  </p>
</div>
