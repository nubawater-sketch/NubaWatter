<section
  id="hero"
  class="relative min-h-screen w-full bg-white flex flex-col md:flex-row overflow-hidden"
>
  <!-- LEFT CONTENT SIDE -->
  <div
    class="relative w-full md:w-[50%] lg:w-[45%] min-h-[60vh] md:min-h-screen flex flex-col justify-center px-8 sm:px-12 lg:px-20 xl:pl-32 pt-32 pb-32 z-10 bg-white"
  >
    <!-- Central Text -->
    <div class="space-y-6">
      <div class="flex items-center gap-3">
        <div class="w-12 h-[2px] bg-[#00b4d8]"></div>
        <h4
          class="text-[#00b4d8] font-black uppercase tracking-[0.4em] text-xs"
        >
          Calidad Premium
        </h4>
      </div>

      <h1
        class="text-5xl md:text-6xl lg:text-7xl font-black text-[#003049] leading-none tracking-tight"
      >
        EL AGUA MÁS <br />
        <span class="text-[#00b4d8]">PURA EN TU</span> <br />
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-[#003049] to-[#00b4d8]"
          >HOGAR</span
        >
      </h1>

      <p
        class="text-slate-600 font-medium text-lg max-w-md leading-relaxed pt-4"
      >
        Llevamos frescura y salud a cada rincón con nuestro sistema de
        purificación de 7 etapas. <span
          class="block mt-2 text-[#00b4d8] font-bold"
          >¡Hacemos repartos en todo Toluca!</span
        >
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-wrap items-center gap-6 pt-6">
        <a
          href="#contact"
          class="px-8 py-4 bg-[#003049] text-white font-black uppercase tracking-widest text-sm rounded-full hover:bg-[#00b4d8] hover:shadow-xl transition-all duration-300"
        >
          Hacer Pedido
        </a>
        <a
          href="#about"
          class="group flex items-center gap-3 text-[#003049] font-black uppercase tracking-widest text-sm"
        >
          <span
            class="border-b-2 border-[#003049]/20 group-hover:border-[#003049] transition-all"
            >Ver Proceso</span
          >
          <svg
            class="w-5 h-5 group-hover:translate-x-2 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            /></svg
          >
        </a>
      </div>
    </div>

    <!-- Bottom Status / Location Labels -->
    <div
      class="absolute bottom-8 left-8 sm:left-12 lg:left-20 xl:left-32 flex items-end justify-between z-20"
    >
      <div
        class="flex flex-wrap gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-300"
      >
        <a
          href="https://www.google.com/maps?q=19%C2%B015'24.6%22N+99%C2%B033'21.3%22W"
          target="_blank"
          rel="noopener noreferrer"
          class="flex flex-col gap-3 group cursor-pointer"
        >
          <span
            class="text-slate-900 group-hover:text-[#00b4d8] transition-colors"
            >Nuestra Ubicación</span
          >
          <div class="w-1.5 h-1.5 bg-[#003049] rounded-full mx-auto"></div>
        </a>
      </div>
    </div>
  </div>

  <!-- RIGHT VISUAL SIDE (THE CIRCLE) -->
  <div
    class="relative w-full md:w-[50%] lg:w-[55%] min-h-[40vh] md:min-h-screen bg-white"
  >
    <!-- PERFECT CIRCULAR ARC CONTAINER -->
    <div class="absolute inset-0 overflow-hidden bg-white">
      <!-- The Giant Circle that creates the arc -->
      <div
        class="absolute top-0 md:top-1/2 left-0 translate-y-0 md:-translate-y-1/2 w-full h-full md:w-[120vh] md:h-[120vh] bg-[#003049] rounded-none md:rounded-full shadow-none md:shadow-[-20px_0_60px_rgba(0,0,0,0.15)] overflow-hidden"
      >
        <!-- Background content inside the circle -->
        <div class="absolute inset-0 bg-[#003049]">
          <div
            class="absolute inset-0 bg-gradient-to-br from-[#00b4d8]/30 to-transparent"
          ></div>
        </div>
      </div>
    </div>

    <!-- Floating Circular "PIDE" Button -->
    <div
      class="absolute left-1/2 top-0 md:left-0 md:top-1/2 -translate-y-1/2 -translate-x-1/2 z-30"
    >
      <button
        onclick={() =>
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" })}
        class="relative w-24 h-24 lg:w-32 lg:h-32 bg-[#00b4d8] rounded-full shadow-xl flex items-center justify-center group hover:bg-[#003049] transition-all duration-500 border-4 border-white active:scale-95"
      >
        <div class="flex flex-col items-center transition-transform relative z-10">
          <span
            class="text-white font-black tracking-tight text-xl lg:text-2xl leading-none"
            >PIDE</span
          >
          <span
            class="text-white/90 font-bold uppercase tracking-[0.2em] text-[10px] mt-1"
            >Ahora</span
          >
        </div>
      </button>
    </div>

    <!-- Right Side Floating Info -->
    <div
      class="absolute bottom-16 right-16 text-white z-20 hidden lg:block text-right"
    >
      <div class="flex items-center justify-end gap-4 mb-4">
        <span class="text-[10px] font-black uppercase tracking-[0.3em]"
          >Pureza Certificada</span
        >
        <div class="h-px w-16 bg-[#00b4d8]"></div>
      </div>
      <p class="text-lg font-bold leading-tight opacity-90 max-w-[250px]">
        7 Etapas de Filtración <br />
        <span class="text-[#00b4d8]">Grado Alimenticio</span>
      </p>
    </div>
  </div>

  <!-- Bottom Wave Divider (Transition to About) -->
  <div
    class="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none"
  >
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      class="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px] fill-white"
    >
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
      ></path>
    </svg>
  </div>
</section>

<style>
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fadeIn {
    animation: fadeIn 1s ease-out forwards;
  }
</style>
