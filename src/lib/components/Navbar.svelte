<script>
  import { onMount } from "svelte";
  let scrolled = $state(false);

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 50;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
</script>

<nav
  class="fixed top-0 left-0 w-full z-[60] transition-all duration-700 {scrolled
    ? 'bg-[#003049]/95 backdrop-blur-xl py-3 shadow-sm'
    : 'bg-transparent py-8 border-b border-transparent'} lg:px-16 px-6"
>
  <div class="max-w-[1800px] mx-auto flex justify-between items-center">
    <!-- Left Side: Text Logo -->
    <div class="flex flex-col">
      <a
        href="#hero"
        class="group flex items-center gap-3 w-fit transition-transform hover:scale-105"
      >
        <div class="flex flex-col">
          <img
            src="/Logo-PNG.png"
            alt="Logo Purificadora"
            class="h-20 md:h-24 w-auto drop-shadow-md transition-all group-hover:scale-110"
          />
        </div></a
      >
    </div>

    <!-- Right Side: Clean Navigation Links -->
    <div class="hidden lg:flex items-center gap-12">
      <a
        href="#hero"
        class="text-[12px] font-bold uppercase tracking-[0.15em] text-[#ffffff] hover:text-blue-500 transition-colors"
        >Inicio</a
      >
      <a
        href="#about"
        class="text-[12px] font-bold uppercase tracking-[0.15em] text-[#ffffff] hover:text-blue-500 transition-colors"
        >Nosotros</a
      >
      <a
        href="#packages"
        class="text-[12px] font-bold uppercase tracking-[0.15em] text-[#ffffff] hover:text-blue-500 transition-colors"
        >Planes</a
      >
      <a
        href="#contact"
        class="text-[12px] font-bold uppercase tracking-[0.15em] text-[#ffffff] hover:text-blue-500 transition-colors"
        >Contacto</a
      >
      <a
        href="#contact"
        class="text-[12px] font-bold uppercase tracking-[0.15em] text-white bg-[#003049] px-6 py-2.5 rounded hover:bg-[#00b4d8] hover:shadow-lg transition-all"
        >Hacer Pedido</a
      >
    </div>

    <!-- Mobile Toggle -->
    <div class="lg:hidden dropdown dropdown-end">
      <div
        tabindex="0"
        role="button"
        class="btn btn-ghost btn-circle text-slate-800"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path></svg
        >
      </div>
      <ul
        tabindex="-1"
        class="menu menu-sm dropdown-content mt-3 z-[1] p-6 shadow-xl bg-white border border-slate-100 w-64 gap-6 rounded-lg"
      >
        <li>
          <a
            href="#hero"
            class="text-slate-600 hover:text-[#003049] text-lg font-medium tracking-wide uppercase px-0"
            >Inicio</a
          >
        </li>
        <li>
          <a
            href="#about"
            class="text-slate-600 hover:text-[#003049] text-lg font-medium tracking-wide uppercase px-0"
            >Nosotros</a
          >
        </li>
        <li>
          <a
            href="#packages"
            class="text-slate-600 hover:text-[#003049] text-lg font-medium tracking-wide uppercase px-0"
            >Planes</a
          >
        </li>
        <li>
          <a
            href="#contact"
            class="text-slate-600 hover:text-[#003049] text-lg font-medium tracking-wide uppercase px-0"
            >Contacto</a
          >
        </li>
        <li class="mt-4">
          <a
            href="#contact"
            class="text-white bg-[#003049] font-bold hover:bg-[#00b4d8] text-center py-3 rounded-lg tracking-wide uppercase px-0 w-full inline-block"
            >Hacer Pedido</a
          >
        </li>
      </ul>
    </div>
  </div>
</nav>
