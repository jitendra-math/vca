<!-- src/lib/components/Footer.svelte -->

<footer id="contact" class="relative mt-24 border-t border-white/10">

  <!-- Background subtle glow -->
  <div class="absolute inset-0 -z-10 bg-gradient-to-t from-[#0b0f1a] via-[#0b0f1a]/95 to-transparent"></div>

  <div class="section py-16">

    <div class="grid md:grid-cols-3 gap-10">

      <!-- School Info -->
      <div>
        <h3 class="text-xl font-bold gradient-text">
          Virat Children Academy
        </h3>
        <p class="text-white/70 mt-4 text-sm leading-relaxed">
          Providing quality education with strong academic foundation and
          competitive exam preparation in Kuchaman City.
        </p>
      </div>

      <!-- Quick Links -->
      <div>
        <h4 class="font-semibold text-lg mb-4">Quick Links</h4>
        <ul class="space-y-3 text-white/70 text-sm">
          <li><a href="#home" class="hover:text-blue-400 transition">Home</a></li>
          <li><a href="#facilities" class="hover:text-blue-400 transition">Facilities</a></li>
          <li><a href="#gallery" class="hover:text-blue-400 transition">Gallery</a></li>
          <li><a href="#admission" class="hover:text-blue-400 transition">Admission</a></li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div>
        <h4 class="font-semibold text-lg mb-4">Contact Us</h4>
        <ul class="space-y-3 text-white/70 text-sm">
          <li>📍 Kuchaman City, Rajasthan</li>
          <li>📞 +91 00000 00000</li>
          <li>✉️ info@vcaacademy.in</li>
        </ul>

        <div class="mt-6">
          <a
            href="https://wa.me/910000000000"
            target="_blank"
            class="btn-outline text-sm"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

    </div>

    <!-- Bottom line -->
    <div class="mt-12 pt-6 border-t border-white/10 text-center text-white/60 text-sm">
      © {new Date().getFullYear()} Virat Children Academy. All rights reserved.
    </div>

  </div>
</footer>