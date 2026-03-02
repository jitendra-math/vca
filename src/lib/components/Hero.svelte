<!-- src/lib/components/Hero.svelte -->

<script>
  import BlobBackground from "$lib/effects/BlobBackground.svelte";
</script>

<section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden">

  <!-- Background image -->
  <div class="absolute inset-0">
    <img
      src="/school1.webp"
      alt="School building"
      class="w-full h-full object-cover opacity-40"
    />
    <div class="absolute inset-0 bg-[#0b0f1a]/80"></div>
  </div>

  <!-- Blobs -->
  <BlobBackground intensity={1.2} />

  <!-- Content -->
  <div class="section text-center">

    <!-- Heading -->
    <h1 class="text-4xl md:text-6xl font-extrabold leading-tight">
      <span class="gradient-text">Virat Children Academy</span><br />
      <span class="text-white">Kuchaman City</span>
    </h1>

    <!-- Subtitle -->
    <p class="mt-6 text-white/80 max-w-2xl mx-auto text-lg">
      Modern education with strong academic foundation and competitive exam preparation.
      Building future leaders with discipline, knowledge and confidence.
    </p>

    <!-- Buttons -->
    <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
      <a href="#admission" class="btn-glow">
        Apply for Admission
      </a>

      <a href="tel:0000000000" class="btn-outline">
        Call Now
      </a>
    </div>

    <!-- Glass info cards -->
    <div class="mt-16 grid md:grid-cols-3 gap-6">

      <div class="glass p-6 card-hover">
        <h3 class="font-semibold text-lg">Classes</h3>
        <p class="text-white/70 mt-2 text-sm">
          Playgroup to Senior Secondary with modern curriculum.
        </p>
      </div>

      <div class="glass p-6 card-hover">
        <h3 class="font-semibold text-lg">Competitive Prep</h3>
        <p class="text-white/70 mt-2 text-sm">
          NDA, JEE & NEET foundation with experienced faculty.
        </p>
      </div>

      <div class="glass p-6 card-hover">
        <h3 class="font-semibold text-lg">Smart Campus</h3>
        <p class="text-white/70 mt-2 text-sm">
          Digital classes, sports facilities and disciplined environment.
        </p>
      </div>

    </div>

  </div>
</section>