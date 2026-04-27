<script>
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href="/Logo.png" type="image/png" />
  <link rel="apple-touch-icon" href="/Logo.png" />
  <title>Purificadora de Agua | Venta de Garrafones en Toluca, Metepec y San Mateo Atenco</title>
  <meta
    name="description"
    content="Venta de garrafones de agua purificada de la mejor calidad. Servicio a domicilio rápido y confiable en Toluca, Metepec y San Mateo Atenco."
  />
  <meta
    name="keywords"
    content="purificadora, garrafones, venta de garrafones, agua, agua purificada, san mateo atenco, metepec, toluca, servicio a domicilio"
  />

  <meta property="og:title" content="Purificadora de Agua | Venta de Garrafones a Domicilio" />
  <meta
    property="og:description"
    content="Venta de garrafones de agua purificada. Cubrimos Toluca, Metepec y San Mateo Atenco con el mejor servicio."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://tupurificadora.com" />
  <meta property="og:locale" content="es_MX" />
  {@html `<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Purificadora de Agua",
    "description": "Venta de garrafones de agua purificada con servicio a domicilio.",
    "url": "https://tupurificadora.com",
    "areaServed": [
      {
        "@type": "City",
        "name": "Toluca"
      },
      {
        "@type": "City",
        "name": "Metepec"
      },
      {
        "@type": "City",
        "name": "San Mateo Atenco"
      }
    ],
    "keywords": "purificadora, garrafones, venta de garrafones, agua, san mateo atenco, metepec, toluca"
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
