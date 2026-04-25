<script>
  const whatsappNumber = "527221024313"; // Reemplazar con el número real de WhatsApp SIN el signo +
  const msgWhatsApp =
    "Hola, quisiera pedir garrafones";
  const encodedMsg = encodeURIComponent(msgWhatsApp);
</script>

<section id="contact" class="pt-24 pb-48 bg-slate-50 relative overflow-hidden">
  <div class="max-w-[1400px] mx-auto px-6 md:px-12">
    <div
      class="bg-blue-50 border border-blue-100 rounded-3xl p-10 md:p-16 shadow-xl relative overflow-hidden"
    >
      <!-- Water Decor -->
      <div
        class="absolute top-0 right-0 w-64 h-64 bg-[#003049]/10 rounded-bl-full opacity-50"
      ></div>

      <div class="grid md:grid-cols-2 gap-12 relative z-10 items-center">
        <!-- Left: Text -->
        <div>
          <h3
            class="text-[#003049] font-bold uppercase tracking-[0.2em] text-sm mb-4"
          >
            Realiza tu pedido
          </h3>
          <h2
            class="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6"
          >
            Hidratación pura <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-[#003049] to-blue-500"
              >a tu puerta</span
            >
          </h2>
          <p class="text-slate-600 font-light text-lg mb-8">
            Garantiza la mejor calidad de agua para tu familia o empresa. Contáctanos por
            WhatsApp para solicitar tu garrafón o conocer nuestros planes de distribución.
          </p>
          <div
            class="flex items-center gap-4 text-slate-500 text-sm font-semibold mb-8"
          >
            <div class="flex items-center gap-2">
              <svg
                class="w-5 h-5 text-[#00b4d8]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                ><path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path></svg
              > Entrega Rápida
            </div>
            <div class="flex items-center gap-2">
              <svg
                class="w-5 h-5 text-[#00b4d8]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                ><path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path></svg
              > Calidad Garantizada
            </div>
          </div>
        </div>

        <!-- Right: CTA Card -->
        <div class="flex flex-col gap-8 justify-center max-w-sm mx-auto w-full animate-fadeIn">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodedMsg}`}
            target="_blank"
            class="group bg-[#003049] hover:bg-[#00b4d8] text-white p-8 rounded-[2rem] flex flex-col items-center gap-6 transition-all duration-700 shadow-2xl hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(0,48,73,0.3)] border border-white/10"
            aria-label="Contactar por WhatsApp"
          >
            <div
              class="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-[inset_0_0_20px_rgba(255,255,255,0.2)]"
            >
              <svg
                class="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"
                />
              </svg>
            </div>
            <div class="text-center">
              <h4 class="font-black text-2xl uppercase tracking-widest leading-none mb-2">
                WhatsApp
              </h4>
              <p class="text-white/60 text-xs font-bold uppercase tracking-widest">Respuesta inmediata</p>
            </div>
          </a>

          <div
            class="text-center text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mt-2 border-t border-slate-100 pt-8 flex flex-col gap-4"
          >
            <span>O LLÁMANOS DIRECTAMENTE</span>
            <div class="flex flex-col gap-2">
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodedMsg}`}
                target="_blank"
                class="text-[#003049] text-xl font-black hover:text-[#00b4d8] transition-colors"
              >
                +52 722 102 4313
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Bottom Wave Divider (Transition to Footer) -->
  <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0">
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px] fill-[#003049]">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
    </svg>
  </div>
</section>

<!-- Widget Botón Flotante Fijo WhatsApp -->
<a
  href={`https://wa.me/${whatsappNumber}?text=${encodedMsg}`}
  target="_blank"
  class="fixed bottom-6 right-6 z-50 bg-[#00b4d8] hover:bg-[#003049] text-white p-4 rounded-full shadow-none hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(33,90,105,0.6)] transition-all duration-500 group"
  aria-label="Contactar por WhatsApp"
>
  <!-- Tooltip -->
  <span
    class="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl pointer-events-none"
  >
    Pedir Garrafones Rápidamente
  </span>
  <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path
      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"
    />
  </svg>
</a>
