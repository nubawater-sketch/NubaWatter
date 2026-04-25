<script>
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href="/Logo-PNG.png" type="image/png" />
  <link rel="apple-touch-icon" href="/Logo-PNG.png" />
  <title>Purificadora de Agua | Calidad y Frescura</title>
  <meta
    name="description"
    content="Agua pura y cristalina para tu hogar o negocio. Planes de distribución accesibles y servicio a domicilio confiable."
  />
  <meta
    name="keywords"
    content="agua purificada, purificadora, garrafones, servicio a domicilio, agua, hidratación"
  />

  <meta property="og:title" content="Purificadora de Agua | Servicio a Domicilio" />
  <meta
    property="og:description"
    content="Agua 100% pura para tu familia y empresa. Conoce nuestros planes de distribución."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://tupurificadora.com" />
  {@html `<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Purificadora de Agua",
    "description": "Servicio de purificación y distribución de agua a domicilio.",
    "url": "https://tupurificadora.com"
  }
  </script>`}
</svelte:head>

<div
  class="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-[#215A69] selection:text-white antialiased"
>
  <Navbar />
  <main class="flex-grow">
    {@render children()}
  </main>
  <Footer />
</div>
