<!-- src/routes/+page.svelte -->

<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Facilities from "$lib/components/Facilities.svelte";
  import Gallery from "$lib/components/Gallery.svelte";
  import AdmissionCTA from "$lib/components/AdmissionCTA.svelte";
  import Footer from "$lib/components/Footer.svelte";

  import "$lib/styles/global.css";
</script>

<Navbar />

<main class="overflow-x-hidden">
  <Hero />
  <Facilities />
  <Gallery />
  <AdmissionCTA />
</main>

<Footer />