<script>
  const plans = [
    {
      name: "Plan Básico",
      description: "Ideal para familias pequeñas.",
      price: "25",
      quantity: "10",
      features: ["Entrega a domicilio", "Agua 100% Pura", "Soporte WhatsApp"],
      popular: false,
      theme: {
        bg: "bg-slate-800",
        border: "border-slate-700",
        accentText: "text-slate-300",
        accentBg: "bg-slate-600",
        pillBg: "bg-white/5",
        shadow: "shadow-[0_10px_30px_rgba(30,41,59,0.3)]",
        hoverShadow: "hover:shadow-[0_15px_40px_rgba(30,41,59,0.5)]",
        btnHoverText: "group-hover/btn:text-slate-900"
      }
    },
    {
      name: "Plan Familiar",
      description: "Perfecto para hogares grandes.",
      price: "23",
      quantity: "20",
      features: ["Entrega prioritaria", "Ahorro por volumen", "Soporte 24/7"],
      popular: true,
      theme: {
        bg: "bg-[#003049]",
        border: "border-[#003049]",
        accentText: "text-[#00b4d8]",
        accentBg: "bg-[#00b4d8]",
        pillBg: "bg-white/10",
        shadow: "shadow-[0_10px_30px_rgba(0,180,216,0.3)]",
        hoverShadow: "hover:shadow-[0_15px_40px_rgba(0,180,216,0.5)]",
        btnHoverText: "group-hover/btn:text-[#003049]"
      }
    },
    {
      name: "Plan Negocio",
      description: "Para oficinas y locales.",
      price: "20",
      quantity: "30",
      features: ["Logística programada", "Facturación disponible", "Atención VIP"],
      popular: false,
      theme: {
        bg: "bg-[#023e8a]",
        border: "border-[#023e8a]",
        accentText: "text-[#48cae4]",
        accentBg: "bg-[#0096c7]",
        pillBg: "bg-white/10",
        shadow: "shadow-[0_10px_30px_rgba(0,150,199,0.3)]",
        hoverShadow: "hover:shadow-[0_15px_40px_rgba(0,150,199,0.5)]",
        btnHoverText: "group-hover/btn:text-[#023e8a]"
      }
    },
    {
      name: "Plan Restaurante",
      description: "Máximo volumen y ahorro.",
      price: "18",
      quantity: "100",
      features: ["Servicio dedicado", "Precio especial", "Calidad certificada"],
      popular: false,
      theme: {
        bg: "bg-slate-950",
        border: "border-slate-900",
        accentText: "text-[#90e0ef]",
        accentBg: "bg-[#0077b6]",
        pillBg: "bg-white/10",
        shadow: "shadow-[0_10px_30px_rgba(0,119,182,0.3)]",
        hoverShadow: "hover:shadow-[0_15px_40px_rgba(0,119,182,0.5)]",
        btnHoverText: "group-hover/btn:text-slate-950"
      }
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
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto items-stretch">
      {#each plans as plan}
        <div class="group relative rounded-[2.5rem] p-8 lg:p-10 flex flex-col h-full border transition-all duration-700 hover:-translate-y-4 {plan.theme.bg} {plan.theme.border} shadow-2xl z-10">
          
          <div class="mb-8 relative">
            <div class="flex justify-between items-start mb-4 relative z-10">
               <div>
                 <h3 class="text-2xl font-black text-white tracking-tight mb-2 transition-colors">
                   {plan.name}
                 </h3>
                 <p class="text-[10px] text-slate-300 font-bold uppercase tracking-widest">
                   {plan.description}
                 </p>
               </div>
               {#if plan.popular}
                 <span class="bg-gradient-to-r from-[#00b4d8] to-[#0077b6] text-white text-[9px] font-black uppercase tracking-widest py-1.5 px-3 rounded-full shadow-lg whitespace-nowrap">
                   Más Elegido
                 </span>
               {/if}
            </div>
            
            <div class="h-px w-full bg-white/10 mt-6 transition-colors"></div>
          </div>

          <!-- Price Display -->
          <div class="mb-8">
            <div class="inline-block px-4 py-1.5 rounded-full {plan.theme.pillBg} {plan.theme.accentText} text-[9px] font-black uppercase tracking-[0.2em] mb-4">
              Paquete de {plan.quantity} uds.
            </div>
            <div class="flex items-baseline gap-1">
              <span class="text-2xl font-black text-white/60">$</span>
              <span class="text-7xl font-black text-white tracking-tighter">{plan.price}</span>
            </div>
            <div class="text-[10px] font-bold text-white/50 uppercase tracking-widest mt-1">
              MXN por garrafón
            </div>
          </div>

          <!-- Feature List -->
          <div class="mb-10 space-y-4 flex-grow">
             {#each plan.features as feature}
               <div class="flex items-start gap-4">
                 <div class="mt-0.5 w-6 h-6 rounded-full {plan.theme.accentBg} text-white shadow-lg shadow-black/20 flex items-center justify-center shrink-0 transition-colors duration-300">
                   <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                   </svg>
                 </div>
                 <span class="text-sm font-semibold text-slate-200 leading-relaxed">{feature}</span>
               </div>
             {/each}
          </div>

          <!-- CTA Button -->
          <a
            href="https://wa.me/5217228220821?text=Hola,%20me%20interesa%20el%20{encodeURIComponent(plan.name)}."
            target="_blank"
            class="group/btn relative w-full flex items-center justify-center gap-2 py-4 px-2 text-[10px] font-black uppercase tracking-widest rounded-2xl overflow-hidden transition-all duration-500 {plan.theme.accentBg} text-white {plan.theme.shadow} {plan.theme.hoverShadow} active:scale-95"
          >
            <!-- Button Background Sweep Effect -->
            <div class="absolute inset-0 w-0 bg-white transition-all duration-500 ease-out group-hover/btn:w-full z-0"></div>
            
            <span class="relative z-10 transition-colors duration-300 {plan.theme.btnHoverText}">Solicitar vía</span>
            
            <svg class="w-4 h-4 relative z-10 transition-colors duration-300 {plan.theme.btnHoverText}" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
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
