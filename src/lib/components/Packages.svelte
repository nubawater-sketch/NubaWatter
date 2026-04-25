<script>
  const plans = [
    {
      name: "Plan Básico",
      description: "Ideal para familias pequeñas.",
      price: "25",
      quantity: "10",
      features: ["Entrega a domicilio", "Agua 100% Pura", "Soporte WhatsApp"],
      popular: false
    },
    {
      name: "Plan Familiar",
      description: "Perfecto para hogares grandes.",
      price: "23",
      quantity: "20",
      features: ["Entrega prioritaria", "Ahorro por volumen", "Soporte 24/7"],
      popular: true
    },
    {
      name: "Plan Negocio",
      description: "Para oficinas y locales.",
      price: "20",
      quantity: "30",
      features: ["Logística programada", "Facturación disponible", "Atención VIP"],
      popular: false
    },
    {
      name: "Plan Restaurante",
      description: "Máximo volumen y ahorro.",
      price: "18",
      quantity: "100",
      features: ["Servicio dedicado", "Precio especial", "Calidad certificada"],
      popular: false
    }
  ];
</script>

<section id="packages" class="pt-32 pb-48 bg-white relative overflow-hidden">
  <!-- Decoración sutil superior -->
  <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00b4d8]/20 to-transparent"></div>

  <div class="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
    <div class="text-center max-w-3xl mx-auto mb-20 space-y-6 animate-fadeIn">
      <div class="flex items-center justify-center gap-3">
        <div class="w-8 h-[2px] bg-[#00b4d8]"></div>
        <h3 class="text-[#00b4d8] font-black uppercase tracking-[0.4em] text-xs">
          Nuestros Precios
        </h3>
        <div class="w-8 h-[2px] bg-[#00b4d8]"></div>
      </div>
      <h2 class="text-5xl md:text-6xl font-black text-[#003049] tracking-tighter leading-tight">
        PLANES DE <span class="text-slate-200">DISTRIBUCIÓN</span>
      </h2>
      <p class="text-slate-500 font-medium text-lg leading-relaxed">
        Elige el paquete que mejor se adapte a tus necesidades. <br class="hidden md:block"/> Precios competitivos con la mejor calidad en cada garrafón.
      </p>
    </div>

    <!-- Cards Container -->
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
      {#each plans as plan}
        <div class="group relative bg-slate-50 rounded-[2.5rem] p-10 flex flex-col h-full border border-slate-100 transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_40px_80px_-15px_rgba(0,48,73,0.15)] hover:bg-white">
          
          <!-- Modern Badge for Popularity (Subtle) -->
          {#if plan.popular}
            <div class="absolute top-6 right-8">
              <span class="bg-[#00b4d8] text-white text-[9px] font-black uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg shadow-[#00b4d8]/30">
                Popular
              </span>
            </div>
          {/if}

          <div class="mb-10">
            <h3 class="text-2xl font-black text-[#003049] tracking-tight group-hover:text-[#00b4d8] transition-colors">
              {plan.name}
            </h3>
            <p class="text-xs text-slate-400 font-bold uppercase tracking-widest mt-2">
              {plan.description}
            </p>
          </div>

          <!-- Price Display -->
          <div class="mb-10 space-y-1">
            <div class="flex items-baseline gap-1">
              <span class="text-xs font-black text-slate-400">$</span>
              <span class="text-6xl font-black text-[#003049] tracking-tighter">{plan.price}</span>
              <span class="text-xs font-black text-[#003049] ml-1">.00</span>
            </div>
            <div class="text-[10px] font-black text-slate-300 uppercase tracking-widest">
              MXN por garrafón
            </div>
          </div>

          <!-- Feature List -->
          <div class="mb-12 space-y-5 flex-grow">
             <div class="text-[10px] font-black text-[#00b4d8] uppercase tracking-[0.2em] mb-2">
               Paquete de {plan.quantity} uds.
             </div>
             {#each plan.features as feature}
               <div class="flex items-center gap-3">
                 <div class="w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-sm text-[#00b4d8]">
                   <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                   </svg>
                 </div>
                 <span class="text-sm font-semibold text-slate-600">{feature}</span>
               </div>
             {/each}
          </div>

          <!-- CTA Button -->
          <a
            href="#contact"
            class="block text-center w-full py-5 text-[10px] font-black uppercase tracking-[0.25em] bg-[#003049] text-white rounded-full hover:bg-[#00b4d8] transition-all duration-500 shadow-xl hover:shadow-[0_20px_40px_rgba(0,180,216,0.3)] active:scale-95"
          >
            Pedir Ahora
          </a>
        </div>
      {/each}
    </div>
  </div>

  <!-- Bottom Wave Divider -->
  <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0">
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[150px] fill-slate-50">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
    </svg>
  </div>
</section>
