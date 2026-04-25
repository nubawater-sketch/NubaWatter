<script>
  import { onMount } from "svelte";

  // Control de Video en bucle cinemático
  const videos = ["/Video1.mp4", "/Video2.mp4"];
  let activeIndex = $state(0);
  /** @type {HTMLVideoElement | undefined} */
  let v1_el;
  /** @type {HTMLVideoElement | undefined} */
  let v2_el;

  const handleEnded1 = () => {
    activeIndex = 1;
    if (v2_el) {
      v2_el.currentTime = 0;
      v2_el.play().catch(() => {});
    }
  };
  const handleEnded2 = () => {
    activeIndex = 0;
    if (v1_el) {
      v1_el.currentTime = 0;
      v1_el.play().catch(() => {});
    }
  };

  onMount(() => {
    if (v1_el) v1_el.play().catch(() => {});
  });
</script>

<section
  id="hero"
  class="relative min-h-screen w-full bg-white flex flex-col md:flex-row overflow-hidden"
>
  <!-- LEFT CONTENT SIDE -->
  <div
    class="relative w-full md:w-[50%] lg:w-[45%] min-h-[60vh] md:min-h-screen flex flex-col justify-center px-8 sm:px-16 lg:px-24 xl:pl-40 pt-32 pb-20 z-10 bg-white"
  >
    <!-- Central Text -->
    <div class="space-y-8 animate-fadeIn">
      <div class="flex items-center gap-3">
        <div class="w-12 h-[2px] bg-[#00b4d8]"></div>
        <h4
          class="text-[#00b4d8] font-black uppercase tracking-[0.4em] text-xs"
        >
          Calidad Premium
        </h4>
      </div>

      <h1
        class="text-6xl md:text-7xl lg:text-8xl font-black text-[#003049] leading-[0.9] tracking-tighter"
      >
        EL AGUA MÁS <br />
        <span class="text-slate-200 drop-shadow-sm">PURA EN TU</span> <br />
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-[#003049] to-[#00b4d8]"
          >HOGAR</span
        >
      </h1>

      <p class="text-slate-500 font-medium text-xl max-w-md leading-relaxed">
        Llevamos frescura y salud a cada rincón con nuestro sistema de
        purificación de 7 etapas. <span class="block mt-3 text-[#00b4d8] font-bold">¡Hacemos repartos en todo Toluca!</span>
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-wrap items-center gap-6 pt-4">
        <a
          href="#contact"
          class="px-10 py-5 bg-[#003049] text-white font-black uppercase tracking-widest text-sm rounded-full hover:bg-[#00b4d8] hover:shadow-[0_20px_40px_rgba(0,48,73,0.3)] transition-all duration-500"
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
      class="absolute bottom-12 left-8 sm:left-16 lg:left-24 xl:left-40 right-12 flex items-end justify-between"
    >
      <div
        class="flex flex-wrap gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-300"
      >
        <a href="https://www.google.com/maps?q=19%C2%B015'24.6%22N+99%C2%B033'21.3%22W" target="_blank" rel="noopener noreferrer" class="flex flex-col gap-3 group cursor-pointer">
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
    class="relative w-full md:w-[50%] lg:w-[55%] min-h-[40vh] md:h-screen bg-white"
  >
    <!-- PERFECT CIRCULAR ARC CONTAINER -->
    <div class="absolute inset-0 overflow-hidden bg-white">
      <!-- The Giant Circle that creates the arc -->
      <div
        class="absolute top-1/2 left-0 -translate-y-1/2 w-[160vh] h-[160vh] bg-[#003049] rounded-full shadow-[-40px_0_100px_rgba(0,0,0,0.2)] overflow-hidden"
      >
        <!-- Video content inside the circle -->
        <div class="absolute inset-0 bg-slate-900">
          <video
            bind:this={v1_el}
            src={videos[0]}
            onended={handleEnded1}
            autoplay
            muted
            playsinline
            class="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 {activeIndex ===
            0
              ? 'opacity-100'
              : 'opacity-0'}"
          ></video>
          <video
            bind:this={v2_el}
            src={videos[1]}
            onended={handleEnded2}
            muted
            playsinline
            class="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 {activeIndex ===
            1
              ? 'opacity-100'
              : 'opacity-0'}"
          ></video>
          <div
            class="absolute inset-0 bg-gradient-to-l from-transparent via-[#003049]/20 to-[#003049]/60"
          ></div>
        </div>
      </div>
    </div>

    <!-- Floating Circular "PIDE" Button with SUPERPOSITION Effect -->
    <div class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-30">
      <!-- Decorative Outer Rings for Superposition -->
      <div
        class="absolute inset-0 scale-[1.4] bg-[#00b4d8]/10 rounded-full blur-2xl animate-pulse"
      ></div>
      <div
        class="absolute inset-0 scale-[1.2] border-2 border-[#00b4d8]/20 rounded-full"
      ></div>

      <button
        onclick={() =>
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" })}
        class="relative w-32 h-32 lg:w-40 lg:h-40 bg-[#00b4d8] rounded-full shadow-[0_30px_60px_rgba(0,180,216,0.6)] flex items-center justify-center group hover:scale-110 transition-all duration-700 border-[12px] border-white active:scale-95 overflow-hidden"
      >
        <!-- Glass Shine Effect -->
        <div
          class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/30 to-transparent pointer-events-none"
        ></div>

        <div
          class="flex flex-col items-center group-hover:rotate-12 transition-transform relative z-10"
        >
          <span
            class="text-white font-black italic tracking-tighter text-3xl lg:text-4xl leading-none"
            >PIDE</span
          >
          <span
            class="text-white/80 font-bold uppercase tracking-[0.2em] text-[10px] mt-1"
            >Ahora</span
          >
        </div>

        <!-- Inner glow -->
        <div
          class="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(255,255,255,0.4)]"
        ></div>
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
