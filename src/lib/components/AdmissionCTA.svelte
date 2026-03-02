<!-- src/lib/components/AdmissionCTA.svelte -->

<section id="admission" class="section">

  <div class="relative overflow-hidden rounded-3xl">

    <!-- gradient bg -->
    <div class="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-90"></div>

    <!-- glow blobs -->
    <div class="absolute -top-24 -left-24 w-80 h-80 bg-blue-400 opacity-30 blur-3xl rounded-full"></div>
    <div class="absolute -bottom-24 -right-24 w-80 h-80 bg-purple-400 opacity-30 blur-3xl rounded-full"></div>

    <!-- content -->
    <div class="relative z-10 text-center px-6 py-16 md:py-20">

      <h2 class="text-3xl md:text-5xl font-extrabold">
        Admissions Open 2026
      </h2>

      <p class="mt-4 text-white/90 max-w-2xl mx-auto text-lg">
        Secure your child's future with quality education, discipline and
        strong academic foundation at Virat Children Academy.
      </p>

      <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

        <!-- apply button -->
        <a
          href="#"
          class="bg-white text-black px-8 py-3 rounded-full font-semibold shadow-xl hover:scale-105 transition"
        >
          Apply for Admission
        </a>

        <!-- call button -->
        <a
          href="tel:0000000000"
          class="border border-white/60 px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition"
        >
          Call Now
        </a>

      </div>

      <p class="mt-6 text-sm text-white/80">
        Limited seats available • Contact now for admission details
      </p>

    </div>
  </div>

</section>
