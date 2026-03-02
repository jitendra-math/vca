<!-- src/lib/components/Navbar.svelte -->

<script>
	let open = false;

	function toggle() {
		open = !open;
	}
</script>

<nav class="fixed top-0 left-0 w-full z-50">
	<!-- glass background -->
	<div class="backdrop-blur-xl bg-[#0b0f1a]/70 border-b border-white/10">
		<div class="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">

			<!-- logo -->
			<div class="flex items-center gap-3">
				<img src="/logo.webp" alt="logo" class="w-10 h-10 rounded-full object-cover" />
				<span class="font-bold tracking-wide text-white text-lg">
					VCA
				</span>
			</div>

			<!-- desktop menu -->
			<div class="hidden md:flex items-center gap-8 text-sm font-medium">
				<a href="#home" class="hover:text-blue-400 transition">Home</a>
				<a href="#facilities" class="hover:text-blue-400 transition">Facilities</a>
				<a href="#gallery" class="hover:text-blue-400 transition">Gallery</a>
				<a href="#contact" class="hover:text-blue-400 transition">Contact</a>

				<a href="#admission" class="btn-glow text-sm ml-2">
					Admission Open
				</a>
			</div>

			<!-- mobile button -->
			<button
				on:click={toggle}
				class="md:hidden relative w-10 h-10 flex items-center justify-center"
				aria-label="menu"
			>
				<div class="flex flex-col gap-[5px]">
					<span class={`block h-[2px] w-6 bg-white transition ${open ? "rotate-45 translate-y-[7px]" : ""}`}></span>
					<span class={`block h-[2px] w-6 bg-white transition ${open ? "opacity-0" : ""}`}></span>
					<span class={`block h-[2px] w-6 bg-white transition ${open ? "-rotate-45 -translate-y-[7px]" : ""}`}></span>
				</div>
			</button>
		</div>
	</div>

	<!-- mobile drawer -->
	{#if open}
		<div class="md:hidden backdrop-blur-2xl bg-[#0b0f1a]/95 border-b border-white/10">
			<div class="px-6 py-6 flex flex-col gap-5 text-base">

				<a href="#home" on:click={() => (open = false)} class="hover:text-blue-400">Home</a>
				<a href="#facilities" on:click={() => (open = false)} class="hover:text-blue-400">Facilities</a>
				<a href="#gallery" on:click={() => (open = false)} class="hover:text-blue-400">Gallery</a>
				<a href="#contact" on:click={() => (open = false)} class="hover:text-blue-400">Contact</a>

				<div class="pt-4 border-t border-white/10">
					<a href="#admission" class="btn-glow block text-center">
						Apply for Admission
					</a>
				</div>
			</div>
		</div>
	{/if}
</nav>