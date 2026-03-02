<!-- src/lib/effects/BlobBackground.svelte -->

<script>
  export let intensity = 1; // adjust blob size/visibility if needed
</script>

<div class="absolute inset-0 overflow-hidden pointer-events-none -z-10">
  <!-- Blue blob -->
  <div
    class="blob bg-blue-600"
    style="
      width: {380 * intensity}px;
      height: {380 * intensity}px;
      top: 8%;
      left: 5%;
    "
  ></div>

  <!-- Purple blob -->
  <div
    class="blob bg-purple-600"
    style="
      width: {420 * intensity}px;
      height: {420 * intensity}px;
      top: 40%;
      right: 10%;
      animation-delay: 4s;
    "
  ></div>

  <!-- Gold soft blob -->
  <div
    class="blob bg-yellow-400"
    style="
      width: {300 * intensity}px;
      height: {300 * intensity}px;
      bottom: 10%;
      left: 35%;
      animation-delay: 8s;
      opacity: 0.25;
    "
  ></div>
</div>
