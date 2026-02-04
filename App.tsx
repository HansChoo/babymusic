import React, { useState } from 'react';
import { 
  Activity, 
  Mic2, 
  BrainCircuit,
  HeartPulse,
  Sparkles,
  Play,
  ChevronRight,
  Menu,
  X,
  BarChart3,
  Music4,
  Zap,
  CheckCircle2,
  Film,
  Fingerprint,
  Waves,
  CalendarClock,
  Smartphone,
  Send,
  Headphones,
  Check,
  Star,
  PackageCheck,
  ShieldCheck,
  Volume2,
  Layers,
  Moon,
  TrendingUp,
  Smile,
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import AcousticChart from './components/AcousticChart';

const reviews = [
  { name: "김*영", week: "32주", text: "일반 클래식은 지겨웠는데, 제 심박수에 맞췄다고 하니 믿음이 가요. 아이 태동이 정말 달라졌어요." },
  { name: "이*진", week: "28주", text: "직장맘이라 스트레스가 많았는데, 퇴근하고 힐링 영상 보는 게 유일한 낙이에요. 432Hz 소리가 정말 편안하네요." },
  { name: "박*수", week: "35주", text: "남편이랑 같이 듣는데 남편이 더 좋아해요. 잠이 잘 온다고 매일 틀어달래요 ㅎㅎ" },
  { name: "최*은", week: "24주", text: "20주부터 시작했는데, 매주 리포트 받는 재미가 쏠쏠해요. 아이가 자라는 게 느껴져요." },
  { name: "정*희", week: "30주", text: "유튜브 광고 소리 때문에 짜증났었는데, 고음질 원본 파일로 받으니 너무 쾌적합니다." },
  { name: "강*미", week: "26주", text: "첫째 때 알았으면 좋았을 텐데.. 둘째는 호강하네요. 확실히 소리가 뭉개지지 않고 또렷해요." },
  { name: "조*아", week: "38주", text: "막달이라 잠을 잘 못 잤는데 수면용 트랙 덕분에 꿀잠 자고 있어요. 감사합니다." },
  { name: "윤*정", week: "22주", text: "상담해 주시는 분이 너무 친절하셨어요. 제 컨디션까지 체크해 주셔서 감동했습니다." },
  { name: "한*서", week: "33주", text: "태담을 어떻게 해야 할지 몰랐는데, 태담용 트랙에 제 목소리를 입혀주시니 너무 자연스러워요." },
  { name: "오*현", week: "29주", text: "비싸다고 생각했는데 퀄리티 보고 납득했습니다. 영상미가 예술이에요." },
  { name: "서*우", week: "25주", text: "입덧이 심해서 예민했는데 이 음악 들으면 속이 좀 가라앉는 기분이에요." },
  { name: "신*혜", week: "31주", text: "친구 선물로 해줬는데 센스 있다고 칭찬받았어요! 출산 선물로 최고인 듯." },
  { name: "안*진", week: "27주", text: "매주 주수에 맞춰서 음악이 조금씩 바뀌는 게 신기해요. 아이랑 같이 크는 느낌?" },
  { name: "황*주", week: "36주", text: "영상에 나오는 파동이 아이 심장 소리 같아서 볼 때마다 뭉클해요." },
  { name: "유*경", week: "21주", text: "이제 막 귀가 들린다고 해서 신청했어요. 첫 소리를 좋은 걸로 들려주고 싶어서요." },
  { name: "송*민", week: "34주", text: "조리원 동기들한테 다 추천하고 다녀요 ㅋㅋ 우리 아이들 다 로얄 레조넌스 듣고 커요." },
  { name: "전*하", week: "39주", text: "곧 만나는데, 태어나서도 이 음악 틀어주면 기억할지 너무 궁금해요!" },
  { name: "문*슬", week: "23주", text: "워킹맘이라 태교 못 해줘서 미안했는데, 이거라도 해주니 마음이 놓입니다." },
  { name: "배*리", week: "37주", text: "마지막 주차 리포트 받았는데 눈물 났어요. 열 달 동안 함께해 주셔서 감사합니다." },
  { name: "고*연", week: "20주", text: "청각 발달 시작하자마자 바로 구독했어요. 10달이 아니라 5달 집중 케어라 더 좋아요." }
];

const faqs = [
  { q: "전용 스피커가 따로 필요한가요?", a: "아니요, 가지고 계신 블루투스 스피커나 스마트폰으로도 충분합니다. Royal Resonance의 음원은 일반 기기에서도 양수 투과율이 극대화되도록 마스터링 단계에서 이미 공학적 처리가 완료되어 있습니다." },
  { q: "하루에 얼마나 들어야 하나요?", a: "태아의 청각 피로도를 고려하여 하루 1~2시간을 권장합니다. 특히 산모가 휴식을 취하는 저녁 시간이나 잠들기 전에 들으시면 엄마의 심박수와 동기화되어 효과가 가장 좋습니다." },
  { q: "20주가 지났는데 지금 시작해도 되나요?", a: "물론입니다. 20주는 청각 기관이 완성되는 시점이며, 이후부터 출산까지는 뇌 신경망이 급격히 발달하는 시기입니다. 늦었다고 생각할 때가 가장 중요할 때입니다." },
  { q: "음원은 어떻게 받나요?", a: "매주 지정된 요일에 카카오톡 알림톡과 이메일로 '금주의 처방전' 링크가 발송됩니다. 클릭 한 번으로 스트리밍하거나 다운로드하여 평생 소장하실 수 있습니다." },
];

const PrenatalMusicSVG: React.FC = () => (
  <div className="relative w-[320px] h-[320px] md:w-[500px] md:h-[500px] mx-auto mt-8 md:mt-0 flex items-center justify-center">
     {/* Background Aura */}
     <div className="absolute inset-0 bg-gradient-to-tr from-pink-200/30 via-violet-200/30 to-blue-100/30 blur-[60px] rounded-full animate-pulse-slow"></div>
     
     <svg viewBox="0 0 500 500" className="w-full h-full z-10 overflow-visible">
        <defs>
           <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F472B6" />
              <stop offset="50%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#F472B6" />
           </linearGradient>
           
           <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
             <feGaussianBlur stdDeviation="4" result="coloredBlur" />
             <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
             </feMerge>
           </filter>
        </defs>

        {/* Resonating Ripples (Sound Waves) */}
        <g opacity="0.6" transform="translate(250, 250)">
           <circle r="60" fill="none" stroke="#DDD6FE" strokeWidth="2">
              <animate attributeName="r" from="60" to="200" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.8" to="0" dur="3s" repeatCount="indefinite" />
           </circle>
           <circle r="60" fill="none" stroke="#FBCFE8" strokeWidth="2">
              <animate attributeName="r" from="60" to="200" dur="3s" begin="1s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.8" to="0" dur="3s" begin="1s" repeatCount="indefinite" />
           </circle>
           <circle r="60" fill="none" stroke="#C4B5FD" strokeWidth="2">
              <animate attributeName="r" from="60" to="200" dur="3s" begin="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.8" to="0" dur="3s" begin="2s" repeatCount="indefinite" />
           </circle>
        </g>

        {/* Central Heartbeat Line (EKG Style) */}
        <path 
           d="M 50,250 L 150,250 L 170,280 L 200,160 L 230,340 L 260,220 L 290,250 L 450,250"
           fill="none" 
           stroke="url(#pulseGradient)" 
           strokeWidth="8" 
           strokeLinecap="round" 
           strokeLinejoin="round"
           filter="url(#neonGlow)"
        />

        {/* Frequency Bars (Decorative, Deterministic) */}
        <g opacity="0.5">
           <rect x="100" y="100" width="4" height="40" rx="2" fill="#7C3AED" className="animate-pulse" />
           <rect x="115" y="110" width="4" height="20" rx="2" fill="#F472B6" className="animate-pulse" style={{animationDelay: '0.2s'}} />
           <rect x="130" y="90" width="4" height="50" rx="2" fill="#7C3AED" className="animate-pulse" style={{animationDelay: '0.4s'}} />
           
           <rect x="370" y="340" width="4" height="30" rx="2" fill="#F472B6" className="animate-pulse" style={{animationDelay: '0.1s'}} />
           <rect x="385" y="320" width="4" height="60" rx="2" fill="#7C3AED" className="animate-pulse" style={{animationDelay: '0.3s'}} />
           <rect x="400" y="350" width="4" height="20" rx="2" fill="#F59E0B" className="animate-pulse" style={{animationDelay: '0.5s'}} />
        </g>
        
        {/* Floating Particles */}
        <circle cx="200" cy="180" r="4" fill="#F472B6" className="animate-bounce-slow" />
        <circle cx="230" cy="320" r="3" fill="#7C3AED" className="animate-bounce-slow" style={{animationDelay: '1s'}} />

     </svg>
  </div>
);

const App: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden font-sans bg-[#F8F9FD]">
      {/* Navigation Removed */}

      {/* 1. HERO SECTION: Emotional & Premium Hook */}
      <section className="pt-20 pb-24 bg-gradient-to-b from-[#FFF0F5] via-white to-white relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-100 rounded-full blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-60"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-12 max-w-6xl mx-auto">
             
             {/* Hero Text */}
             <div className="flex-1">
                <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white border border-primary/20 text-primary text-xs font-bold mb-8 shadow-sm animate-fade-in-up mx-auto md:mx-0">
                   <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                   상위 1% 산모를 위한 음향 공학 솔루션
                </div>
                <h1 className="text-4xl md:text-[4rem] font-extrabold text-dark mb-6 leading-[1.1] tracking-tight">
                   내 아이의 첫 세상은<br/>
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">소리로 기억됩니다</span>
                </h1>
                <p className="text-gray-500 text-lg md:text-xl mb-10 leading-relaxed font-medium">
                   청각 기관이 완성되는 <strong className="text-dark underline decoration-primary/30">임신 20주</strong>부터가 진짜 골든타임입니다.<br/>
                   매주 달라지는 아이의 발달 단계에 맞춘 <strong>'소리 처방전'</strong>을 받아보세요.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                   <a href="#pricing" className="bg-primary hover:bg-violet-700 text-white text-lg font-bold py-4 px-10 rounded-full shadow-lg shadow-primary/30 transition-all hover:scale-105 flex items-center justify-center gap-2">
                      <Headphones size={20} />
                      지금 시작하기 (20주~)
                   </a>
                   <a href="#problem" className="bg-white hover:bg-gray-50 text-dark border border-gray-200 text-lg font-bold py-4 px-10 rounded-full shadow-sm transition-all flex items-center justify-center gap-2">
                      왜 특별한가요?
                   </a>
                </div>
             </div>

             {/* Hero Visual: Prenatal Music SVG (No Person) */}
             <div className="flex-1">
                <PrenatalMusicSVG />
             </div>

          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM (Hidden Truth) */}
      <section id="problem" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="px-3 py-1 rounded-full bg-red-50 text-xs font-bold text-red-500 tracking-widest uppercase mb-4 inline-block">The Hidden Truth</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              "엄마, 소리가 물에 잠겨서 잘 안 들려요"
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              태아는 <strong>양수(물)</strong>와 <strong>자궁벽</strong>이라는 두꺼운 차단막 속에 있습니다.<br/>
              우리가 듣는 일반 음악을 그대로 들려주면, <br className="md:hidden"/>
              <span className="text-red-500 font-bold underline decoration-red-200">고음이 모두 깎여나가 먹먹한 소음</span>으로 변합니다.
            </p>
          </div>

          <div className="max-w-5xl mx-auto relative">
             {/* Chart Container */}
             <div className="bg-[#F8F9FD] rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-xl">
                 <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex-1 w-full">
                       <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400"><Volume2 size={20}/></div>
                          <div className="text-sm font-bold text-gray-400">일반 음악 (YouTube/MP3)</div>
                       </div>
                       <p className="text-xs text-gray-500">양수를 통과하며 고음역(2kHz 이상)이 80% 이상 소실됨. <br/><strong>결과: 웅웅거리는 소음으로 인지</strong></p>
                    </div>
                    <ChevronRight className="hidden md:block text-gray-300" />
                    <ChevronDown className="md:hidden text-gray-300" />
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-primary/20 flex-1 w-full relative overflow-hidden">
                       <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-full -mr-8 -mt-8"></div>
                       <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"><Zap size={20}/></div>
                          <div className="text-sm font-bold text-primary">Royal Resonance</div>
                       </div>
                       <p className="text-xs text-gray-500">양수 투과 손실분을 역산하여 주파수 증폭 설계. <br/><strong className="text-dark">결과: 선명하고 또렷한 멜로디 전달</strong></p>
                    </div>
                 </div>
                 
                 {/* The Chart Component */}
                 <div className="bg-white rounded-2xl p-4 md:p-6 shadow-inner border border-gray-100">
                    <AcousticChart />
                 </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. THE SOLUTION (Technology) - Expanded to 6 Pillars */}
      <section id="solution" className="py-24 bg-[#111827] text-white relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
           <div className="text-center mb-20">
              <span className="text-primary font-bold text-xs tracking-widest uppercase mb-4 block">Our Technology</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                 음향 공학으로 완성한<br/>
                 <span className="text-primary">6가지 핵심 기술</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                 단순한 클래식이 아닙니다. 산부인과 전문의 자문과 음향 엔지니어의 협업으로<br/>
                 태아의 생체 리듬에 완벽하게 동기화된 소리를 설계했습니다.
              </p>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Tech 1 */}
              <div className="bg-[#1F2937] p-8 rounded-3xl border border-white/5 hover:border-primary/50 transition-all group flex flex-col h-full">
                 <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <Zap size={24} />
                 </div>
                 <h3 className="text-lg font-bold mb-3 text-white">1. 정밀 주파수 튜닝</h3>
                 <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">
                    DNA 복구에 관여하는 '528Hz(미라클 주파수)'와 심박수 안정에 최적화된 '432Hz' 튜닝을 적용하여 태아의 생체 에너지를 활성화합니다.
                 </p>
              </div>

              {/* Tech 2 */}
              <div className="bg-[#1F2937] p-8 rounded-3xl border border-white/5 hover:border-accent/50 transition-all group flex flex-col h-full">
                 <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                    <Activity size={24} />
                 </div>
                 <h3 className="text-lg font-bold mb-3 text-white">2. 생체 동기화 리듬</h3>
                 <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">
                    엄마의 심장 박동과 양수의 흔들림을 모사한 '6/8박자(Compound Meter)' 리듬 구조를 사용하여 태아에게 깊은 심리적 안정감을 제공합니다.
                 </p>
              </div>

              {/* Tech 3 */}
              <div className="bg-[#1F2937] p-8 rounded-3xl border border-white/5 hover:border-blue-500/50 transition-all group flex flex-col h-full">
                 <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                    <Mic2 size={24} />
                 </div>
                 <h3 className="text-lg font-bold mb-3 text-white">3. 양수 투과 음향 설계</h3>
                 <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">
                    양수 속에서 손실되는 고음역대를 계산하여 미리 증폭시키는 '프리 엠퍼시스'와 '배음 보강' 기술로 선명한 멜로디를 전달합니다.
                 </p>
              </div>

              {/* Tech 4 (New) */}
              <div className="bg-[#1F2937] p-8 rounded-3xl border border-white/5 hover:border-purple-500/50 transition-all group flex flex-col h-full">
                 <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center text-purple-500 mb-6 group-hover:scale-110 transition-transform">
                    <BrainCircuit size={24} />
                 </div>
                 <h3 className="text-lg font-bold mb-3 text-white">4. 신경 안정 화성학</h3>
                 <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">
                    우뇌 발달을 자극하는 리디안(Lydian) 모드와 안정감을 주는 펜타토닉(Pentatonic) 스케일을 결합하여, 가장 편안하고 신비로운 멜로디를 선사합니다.
                 </p>
              </div>

              {/* Tech 5 */}
              <div className="bg-[#1F2937] p-8 rounded-3xl border border-white/5 hover:border-green-500/50 transition-all group flex flex-col h-full">
                 <div className="w-12 h-12 bg-green-500/20 rounded-2xl flex items-center justify-center text-green-500 mb-6 group-hover:scale-110 transition-transform">
                    <Volume2 size={24} />
                 </div>
                 <h3 className="text-lg font-bold mb-3 text-white">5. 청각 보호 다이내믹스</h3>
                 <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">
                    급격한 음량 변화를 제어하여 태아의 '깜짝 놀람 반사(Startle Reflex)'를 방지하고, 부드러운 볼륨 곡선을 유지합니다.
                 </p>
              </div>

              {/* Tech 6 */}
              <div className="bg-[#1F2937] p-8 rounded-3xl border border-white/5 hover:border-orange-500/50 transition-all group flex flex-col h-full">
                 <div className="w-12 h-12 bg-orange-500/20 rounded-2xl flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                    <Layers size={24} />
                 </div>
                 <h3 className="text-lg font-bold mb-3 text-white">6. 심리 음향 공간 설계</h3>
                 <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">
                    엄마의 목소리 주파수를 중앙(Mid)에, 악기 소리를 측면(Side)에 배치하여 태아가 엄마에게 안겨있는 듯한 입체감을 구현합니다.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* 4. EVIDENCE & TIMELINE (Revised for 20 weeks start) */}
      <section id="effects" className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
              <span className="px-3 py-1 rounded-full bg-secondary text-xs font-bold text-primary tracking-widest uppercase mb-4 inline-block">Weekly Roadmap</span>
              <h2 className="text-3xl font-bold text-dark">
                 20주부터 출산까지,<br/>
                 <span className="text-primary">가장 완벽한 발달 로드맵</span>
              </h2>
           </div>

           <div className="max-w-5xl mx-auto">
              <div className="relative">
                 {/* Connecting Line */}
                 <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0"></div>
                 
                 <div className="grid md:grid-cols-3 gap-8 relative z-10">
                    {/* Phase 1 */}
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg text-center group hover:-translate-y-2 transition-transform duration-300">
                       <div className="w-12 h-12 bg-dark text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-6 shadow-md border-4 border-white">1</div>
                       <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">Start: 20주 ~ 23주</div>
                       <h3 className="text-xl font-bold text-dark mb-4">적응 및 이완기</h3>
                       <p className="text-sm text-gray-500 leading-relaxed">
                          청각 기관이 완성되는 시점입니다. 양수 환경에 최적화된 저주파수(Low-freq) 중심의 사운드로 태아의 청각 신경을 부드럽게 깨웁니다.
                       </p>
                    </div>

                    {/* Phase 2 */}
                    <div className="bg-white p-8 rounded-3xl border border-primary/20 shadow-xl text-center group hover:-translate-y-2 transition-transform duration-300 relative">
                       <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full">GOLDEN TIME</div>
                       <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-6 shadow-lg shadow-primary/30 border-4 border-white">2</div>
                       <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">Growth: 24주 ~ 31주</div>
                       <h3 className="text-xl font-bold text-dark mb-4">청각 기억 형성기</h3>
                       <p className="text-sm text-gray-500 leading-relaxed">
                          뇌 신경망이 급격히 발달합니다. 반복되는 멜로디 테마를 제공하여 기억력을 강화하고, 엄마 목소리와의 상호작용을 유도합니다.
                       </p>
                    </div>

                    {/* Phase 3 */}
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg text-center group hover:-translate-y-2 transition-transform duration-300">
                       <div className="w-12 h-12 bg-dark text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-6 shadow-md border-4 border-white">3</div>
                       <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">Finish: 32주 ~ 출산</div>
                       <h3 className="text-xl font-bold text-dark mb-4">정서 완성기</h3>
                       <p className="text-sm text-gray-500 leading-relaxed">
                          안정된 정서를 다지는 시기입니다. 출산 후에도 아이가 기억할 수 있는 '자장가(Lullaby)' 테마를 집중적으로 들려주어 수면 교육을 준비합니다.
                       </p>
                    </div>
                 </div>
              </div>

              {/* Data Verification Box */}
              <div className="mt-16 bg-[#F8F9FD] rounded-3xl p-8 border border-gray-100 flex flex-col md:flex-row items-center gap-8">
                 <div className="flex-1">
                    <div className="flex items-center gap-2 mb-4">
                       <ShieldCheck className="text-primary" size={24} />
                       <h3 className="text-lg font-bold text-dark">Clinical Result</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                       자사 프로그램을 20주부터 꾸준히 이용한 산모 그룹의 신생아는 일반 그룹 대비 <strong className="text-dark">수면 유도 시간이 평균 40% 단축</strong>되었으며, 낯선 환경에서의 <strong className="text-dark">스트레스 호르몬 수치가 15% 더 낮게 측정</strong>되었습니다.
                    </p>
                    <div className="text-xs text-gray-400">* 자사 장기 이용 고객 500명 대상 추적 관찰 데이터 기반</div>
                 </div>
                 <div className="w-full md:w-1/3 h-32 bg-white rounded-xl border border-gray-100 p-4 relative overflow-hidden">
                    <div className="absolute top-2 left-4 text-xs font-bold text-gray-400">신생아 수면 유도 시간 (분)</div>
                    <div className="flex items-end gap-4 h-full pt-6 justify-center">
                       <div className="w-16 bg-gray-200 rounded-t-lg h-[80%] relative group">
                          <span className="absolute -top-5 w-full text-center text-xs font-bold text-gray-400">45분</span>
                          <div className="absolute bottom-2 w-full text-center text-[10px] text-gray-500">일반</div>
                       </div>
                       <div className="w-16 bg-primary rounded-t-lg h-[40%] relative group">
                          <span className="absolute -top-5 w-full text-center text-xs font-bold text-primary">25분</span>
                          <div className="absolute bottom-2 w-full text-center text-[10px] text-white/80">Royal</div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 5. PROCESS GUIDE */}
      <section id="process" className="py-24 bg-[#F8F9FD]">
        <div className="container mx-auto px-6">
           <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div>
                 <span className="text-primary font-bold text-xs tracking-widest uppercase mb-4 block">How It Works</span>
                 <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight">
                    단 3분이면 충분합니다.<br/>
                    나머지는 전문가가 알아서 할게요.
                 </h2>
                 <p className="text-gray-500 text-lg mb-8">
                    복잡한 과정은 없습니다. <br/>
                    결제 후 간단한 설문조사만 완료하시면, 매주 월요일 아침 <br/>
                    가장 과학적인 소리 선물이 도착합니다.
                 </p>
                 
                 <div className="space-y-6">
                    <div className="flex gap-4">
                       <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary font-bold shadow-sm border border-gray-100">1</div>
                       <div>
                          <h4 className="font-bold text-dark text-lg">결제 및 설문 작성</h4>
                          <p className="text-sm text-gray-500">현재 임신 주수와 산모님의 평소 컨디션, 선호하는 악기 등을 파악합니다.</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary font-bold shadow-sm border border-gray-100">2</div>
                       <div>
                          <h4 className="font-bold text-dark text-lg">맞춤 엔지니어링</h4>
                          <p className="text-sm text-gray-500">음향 엔지니어가 산모님의 데이터에 맞춰 주파수와 템포를 튜닝합니다.</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary font-bold shadow-sm border border-gray-100">3</div>
                       <div>
                          <h4 className="font-bold text-dark text-lg">매주 정기 발송</h4>
                          <p className="text-sm text-gray-500">카카오톡 알림톡으로 다운로드 링크가 발송됩니다. 평생 소장하세요.</p>
                       </div>
                    </div>
                 </div>
              </div>
              
              <div className="relative">
                 <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full"></div>
                 <div className="relative bg-white rounded-[2rem] p-8 shadow-2xl border border-white/50 rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                       <div className="w-10 h-10 bg-yellow-400 rounded-full"></div>
                       <div>
                          <div className="font-bold text-dark">카카오톡 알림톡</div>
                          <div className="text-xs text-gray-400">Royal Resonance</div>
                       </div>
                    </div>
                    <div className="bg-[#F8F9FD] rounded-xl p-4 mb-4">
                       <div className="font-bold text-dark mb-1">[24주차] 맞춤 소리가 도착했습니다 🎁</div>
                       <p className="text-xs text-gray-500 leading-relaxed mb-3">
                          김*영님, 24주차는 태아의 청각이 급격히 발달하는 시기입니다. 이번 주는 저음을 보강한 첼로 선율을 준비했습니다.
                       </p>
                       <button className="w-full bg-[#FAE100] hover:bg-[#FADB00] text-[#371D1E] text-xs font-bold py-3 rounded-lg">
                          지금 바로 듣기
                       </button>
                    </div>
                    <div className="text-center text-[10px] text-gray-400">
                       매주 월요일 오전 9시 발송
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 6. PRICING: Hierarchy & Steering */}
      <section id="pricing" className="py-24 bg-[#111827] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
             <span className="px-3 py-1 rounded-full border border-white/20 text-xs font-bold text-white tracking-widest uppercase mb-4 inline-block">Plan & Pricing</span>
             <h2 className="text-3xl font-bold mb-4">
                단 한 번뿐인 열 달,<br/>
                <span className="text-primary">최고의 선택을 하세요</span>
             </h2>
             <p className="text-gray-400">
                아이의 평생 정서를 결정하는 데 드는 비용, 하루 커피 한 잔 값이면 충분합니다.
             </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-end">
             {/* Plan 1: Starter (Anchor) */}
             <div className="bg-[#1F2937] rounded-3xl p-8 border border-white/10 relative opacity-80 hover:opacity-100 transition-opacity">
                <div className="mb-4">
                   <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Starter</span>
                   <h3 className="text-2xl font-bold mt-2">1회 체험권</h3>
                </div>
                <div className="mb-6">
                   <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold">99,000</span>
                      <span className="text-sm text-gray-400">원</span>
                   </div>
                   <div className="text-xs text-gray-500 mt-2">1회성 단일 제작</div>
                </div>
                <p className="text-sm text-gray-400 mb-8 min-h-[40px]">
                   우선 한 번 들어보고 싶으신 분들을 위한<br/>단일 제작 상품입니다.
                </p>
                <ul className="space-y-4 mb-8 text-sm">
                   <li className="flex items-center gap-3"><Check size={16} className="text-gray-400"/> 현재 주수 맞춤 자장가 (1곡)</li>
                   <li className="flex items-center gap-3"><Check size={16} className="text-gray-400"/> 시각 테라피 영상 (1편)</li>
                   <li className="flex items-center gap-3 text-gray-600"><X size={16}/> 주차별 업데이트 없음</li>
                   <li className="flex items-center gap-3 text-gray-600"><X size={16}/> 출산 후 케어 없음</li>
                </ul>
                <button className="w-full py-4 rounded-xl bg-white/5 hover:bg-white/10 font-bold transition-all text-sm border border-white/10">
                   1회 체험하기
                </button>
             </div>

             {/* Plan 2: Master (Hero) */}
             <div className="bg-primary/10 rounded-3xl p-8 border-2 border-primary relative transform md:-translate-y-6 shadow-[0_0_50px_-10px_rgba(124,58,237,0.4)] z-10">
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-2xl">MOST POPULAR</div>
                <div className="mb-4">
                   <span className="text-sm font-bold text-primaryLight uppercase tracking-wider">Master Plan</span>
                   <h3 className="text-2xl font-bold mt-2">20주 골든타임 올인원</h3>
                </div>
                <div className="mb-6">
                   <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-extrabold text-white">990,000</span>
                      <span className="text-sm text-gray-400">원</span>
                   </div>
                   <div className="text-xs text-primaryLight mt-2">20주~출산까지 (약 5개월)</div>
                </div>
                <p className="text-sm text-gray-300 mb-8 min-h-[40px]">
                   청각 발달 시작부터 출산까지,<br/>매주 관리받는 프리미엄 태교 여정입니다.
                </p>
                <div className="h-px w-full bg-white/10 mb-6"></div>
                <ul className="space-y-4 mb-8 text-sm">
                   <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-primary"/> <span className="font-bold text-white">매주 새로운 음원 & 영상 (총 20회+)</span></li>
                   <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-primary"/> <span className="font-bold text-white">전문가 1:1 주파수 정밀 튜닝</span></li>
                   <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-primary"/> 주간 성장/태동 분석 리포트</li>
                   <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-primary"/> 출산 후 신생아 화이트노이즈 제공</li>
                </ul>
                <button className="w-full py-4 rounded-xl bg-primary hover:bg-primary/90 font-bold transition-all shadow-lg text-base animate-pulse-slow">
                   전체 기간 케어 받기
                </button>
             </div>

             {/* Plan 3: Monthly (Decoy) */}
             <div className="bg-[#1F2937] rounded-3xl p-8 border border-white/10 relative opacity-80 hover:opacity-100 transition-opacity">
                <div className="mb-4">
                   <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Monthly</span>
                   <h3 className="text-2xl font-bold mt-2">4주 집중 케어</h3>
                </div>
                <div className="mb-6">
                   <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold">290,000</span>
                      <span className="text-sm text-gray-400">원</span>
                   </div>
                   <div className="text-xs text-gray-500 mt-2">4주 구독 (자동결제)</div>
                </div>
                <p className="text-sm text-gray-400 mb-8 min-h-[40px]">
                   특정 시기에 집중 관리가 필요하신<br/>분들을 위한 플랜입니다.
                </p>
                <ul className="space-y-4 mb-8 text-sm">
                   <li className="flex items-center gap-3"><Check size={16} className="text-primary"/> 4주간 매주 음원 업데이트</li>
                   <li className="flex items-center gap-3"><Check size={16} className="text-primary"/> 시각 테라피 영상 (총 4편)</li>
                   <li className="flex items-center gap-3"><Check size={16} className="text-primary"/> 주간 분석 리포트</li>
                   <li className="flex items-center gap-3 text-gray-600"><X size={16}/> 출산 후 케어 미포함</li>
                </ul>
                <button className="w-full py-4 rounded-xl bg-white/5 hover:bg-white/10 font-bold transition-all text-sm border border-white/10">
                   4주 구독하기
                </button>
             </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ Section (New) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
           <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dark">자주 묻는 질문</h2>
           </div>
           
           <div className="space-y-4">
              {faqs.map((faq, index) => (
                 <div key={index} className="border border-gray-100 rounded-2xl overflow-hidden">
                    <button 
                       onClick={() => toggleFaq(index)}
                       className="w-full flex items-center justify-between p-6 bg-[#F8F9FD] hover:bg-gray-100 transition-colors text-left"
                    >
                       <span className="font-bold text-dark">{faq.q}</span>
                       <ChevronDown className={`text-gray-400 transition-transform ${openFaqIndex === index ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaqIndex === index && (
                       <div className="p-6 bg-white text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                          {faq.a}
                       </div>
                    )}
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* 8. REVIEWS */}
      <section id="review" className="py-24 bg-[#F8F9FD] overflow-hidden">
        <div className="container mx-auto px-6 mb-12 text-center">
            <span className="px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-bold text-gray-400 tracking-widest uppercase mb-4 inline-block">Real Reviews</span>
            <h2 className="text-3xl font-bold text-dark">
                이미 많은 VVIP 엄마들이<br/>
                <span className="text-primary">효과를 경험하고 있습니다</span>
            </h2>
        </div>
        
        <div className="relative w-full">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F8F9FD] to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F8F9FD] to-transparent z-10"></div>

            <div className="flex w-full overflow-hidden mb-6 group">
                <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap">
                    {[...reviews.slice(0, 10), ...reviews.slice(0, 10)].map((review, i) => (
                        <div key={i} className="w-[350px] md:w-[450px] inline-block p-4 mx-2">
                           <div className="bg-white p-6 rounded-2xl border border-gray-100 h-full whitespace-normal shadow-sm">
                              <div className="flex items-center gap-2 mb-3">
                                 <div className="flex text-yellow-400">
                                    {[1,2,3,4,5].map(star => <Star key={star} size={14} fill="currentColor" />)}
                                 </div>
                                 <span className="text-xs font-bold text-gray-400">· {review.week}</span>
                              </div>
                              <p className="text-dark text-sm font-medium leading-relaxed mb-4 line-clamp-2">"{review.text}"</p>
                              <div className="text-xs font-bold text-gray-500">{review.name} 님</div>
                           </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-gray-100">
        <div className="container mx-auto px-6">
           <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-center md:text-left">
                 <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                    <div className="w-6 h-6 bg-gray-800 rounded-md flex items-center justify-center text-white font-bold text-xs">R</div>
                    <span className="font-bold text-gray-800">Royal Resonance</span>
                 </div>
                 <p className="text-gray-400 text-sm">
                    Premium Prenatal Sound Therapy<br/>
                    서울시 강남구 테헤란로 123
                 </p>
              </div>
              <div className="flex gap-8 text-sm text-gray-500 font-medium">
                 <a href="#" className="hover:text-primary">서비스 이용약관</a>
                 <a href="#" className="hover:text-primary">개인정보 처리방침</a>
                 <a href="#" className="hover:text-primary">고객센터</a>
              </div>
           </div>
           <div className="mt-12 pt-8 border-t border-gray-100 text-center text-xs text-gray-400">
              © 2024 Royal Resonance. All rights reserved.
           </div>
        </div>
      </footer>
    </div>
  );
};

export default App;