<script>
  import { onDestroy } from 'svelte';
  import { page } from '$app/state';
  import { NAVBAR_CONFIG, DEFAULT_NAVBAR } from '$lib/navigation.js';

  let productOpen = $state(false);
  let desktopOpen = $state(false);
  let mobileOpen = $state(false);

  const currentPath = $derived(page.url.pathname.replace(/\/+$/, '') || '/');
  const config = $derived(NAVBAR_CONFIG[currentPath] ?? DEFAULT_NAVBAR);

  function closeMenus() {
    productOpen = false;
    desktopOpen = false;
    mobileOpen = false;
    document.body.classList.remove('overflow-hidden');
  }

  function openMobile() {
    mobileOpen = true;
    document.body.classList.add('overflow-hidden');
  }

  function handleWindowKeydown(event) {
    if (event.key === 'Escape') closeMenus();
  }

  function handleWindowClick(event) {
    const target = event.target;
    if (!(target instanceof Element)) return;
    if (!target.closest('[data-product-menu]')) productOpen = false;
    if (!target.closest('[data-desktop-menu]')) desktopOpen = false;
  }

  function handleLinkClick() {
    closeMenus();
  }

  onDestroy(() => {
    if (typeof document !== 'undefined') document.body.classList.remove('overflow-hidden');
  });
</script>

<svelte:window onkeydown={handleWindowKeydown} onclick={handleWindowClick} />

<header class="sticky top-0 z-50 border-b border-white/10 bg-[#101012]/95 text-white shadow-sm backdrop-blur-xl">
  <div class="navbar mx-auto min-h-16 max-w-[1600px] px-4 sm:px-6 lg:px-8">
    <div class="navbar-start flex-1 lg:flex-none">
      <div class="relative" data-product-menu>
        <button type="button" aria-expanded={productOpen} aria-controls="product-menu-panel" class="btn btn-ghost gap-2 px-2 text-white" onclick={() => productOpen = !productOpen}>
          <span class="text-lg font-black tracking-tight">FROKYTE</span>
          <i class:rotate-180={productOpen} class="fa-solid fa-chevron-down text-xs text-white/60 transition-transform duration-200"></i>
        </button>
        {#if productOpen}
          <div id="product-menu-panel" class="absolute left-0 top-full z-[70] mt-3 w-[min(340px,calc(100vw-2rem))] rounded-lg border border-white/10 bg-[#191a1d] p-4 text-white shadow-2xl">
            <p class="px-2 text-xs font-bold uppercase tracking-widest text-white/40">Frokyte</p>
            <h3 class="mb-3 mt-1 px-2 text-lg font-bold">Our projects</h3>
            <ul class="menu w-full">
              <li><a href="https://frokyte.github.io/fadeengine/" onclick={handleLinkClick} class="gap-3"><span class="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 font-black">F</span><span><span class="block font-semibold">FADE Engine</span><span class="block text-xs text-white/45">Our upcoming creation engine</span></span></a></li>
              <li><a href="https://rebase.js.org/" target="_blank" rel="noreferrer" onclick={handleLinkClick} class="gap-3"><span class="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 font-black">R</span><span><span class="block font-semibold">RebaseJS</span><span class="block text-xs text-white/45">Lightweight JavaScript toolkit</span></span></a></li>
            </ul>
            <div class="divider before:bg-white/10 after:bg-white/10"></div>
            <a href="https://frokyte.github.io/#studio" onclick={handleLinkClick} class="btn btn-ghost btn-sm w-full justify-between">About Frokyte <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        {/if}
      </div>
      <span class="mx-3 h-7 w-px bg-white/20"></span>
      <a href="/" class="text-sm font-bold tracking-tight">{config.brandLabel}</a>
    </div>

    <nav class="navbar-center hidden flex-1 lg:flex" aria-label="Main navigation">
      <ul class="menu menu-horizontal items-center gap-1 px-2 text-sm font-medium text-white/75">
        {#each config.desktopLinks as item}
          <li><a href={item.href} onclick={handleLinkClick}>{item.label}</a></li>
        {/each}
      </ul>
    </nav>

    <div class="navbar-end hidden flex-1 items-center justify-end gap-2 lg:flex">
      {#if config.desktopAction}
        <a href={config.desktopAction.href} class="btn btn-primary btn-sm rounded-md px-5">{config.desktopAction.label}</a>
      {/if}
      <div class="relative" data-desktop-menu>
        <button type="button" class="btn btn-ghost btn-square btn-sm text-white" aria-label="Open navigation" aria-expanded={desktopOpen} onclick={() => desktopOpen = !desktopOpen}><i class="fa-solid fa-bars text-lg"></i></button>
        {#if desktopOpen}
          <div class="absolute right-0 top-full z-[70] mt-4 w-[min(680px,95vw)] rounded-lg border border-white/10 bg-[#191a1d] p-8 text-white shadow-2xl">
            <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {#each config.mobileGroups as group}
                <section>
                  <h3 class="mb-4 text-xs font-bold uppercase tracking-widest text-white/40">{group.title}</h3>
                  <ul class="menu p-0">
                    {#each group.items as item}
                      <li><a href={item.href} onclick={handleLinkClick}>{item.label}</a></li>
                    {/each}
                  </ul>
                </section>
              {/each}
            </div>
          </div>
        {/if}
      </div>
    </div>

    <div class="navbar-end flex flex-1 justify-end lg:hidden">
      <button type="button" class="btn btn-ghost btn-square text-white" aria-label="Open navigation" onclick={openMobile}><i class="fa-solid fa-bars text-lg"></i></button>
    </div>
  </div>
</header>

{#if mobileOpen}
  <div class="mobile-nav fixed inset-0 z-[100] overflow-y-auto overscroll-contain bg-[#101012] text-white" role="dialog" aria-modal="true" aria-label="Mobile navigation">
    <div class="sticky top-0 z-10 flex min-h-20 items-center justify-between border-b border-white/10 bg-[#101012]/95 px-6 backdrop-blur-xl">
      <a href="/" class="flex items-center gap-3" onclick={handleLinkClick}><span class="text-2xl font-black">FROKYTE</span><span class="h-7 w-px bg-white/20"></span><span class="text-sm font-bold">{config.brandLabel}</span></a>
      <button type="button" class="btn btn-ghost btn-square btn-lg text-white" aria-label="Close navigation" onclick={closeMenus}><i class="fa-solid fa-xmark text-xl"></i></button>
    </div>
    <div class="mx-auto max-w-3xl px-6 py-10">
      {#each config.mobileGroups as group}
        <section class="mb-9">
          <h3 class="mb-3 px-3 text-xs font-bold uppercase tracking-[.2em] text-white/40">{group.title}</h3>
          <ul class="menu menu-lg w-full gap-1 p-0 text-xl font-semibold">
            {#each group.items as item}
              <li><a href={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noreferrer' : undefined} onclick={handleLinkClick}>{item.label}</a></li>
            {/each}
          </ul>
        </section>
      {/each}
      {#if config.mobileAction}
        <div class="mt-4 border-t border-white/10 pt-7">
          <a href={config.mobileAction.href} class="btn btn-primary btn-lg w-full rounded-md" onclick={handleLinkClick}>{config.mobileAction.label}</a>
        </div>
      {/if}
      <div class="mt-10 flex flex-wrap gap-6 border-t border-white/10 pt-7 text-sm text-white/55">
        <a href="https://www.instagram.com/frokyte/" aria-label="Instagram" class="text-xl"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://discord.gg/" aria-label="Discord" class="text-xl"><i class="fa-brands fa-discord"></i></a>
      </div>
    </div>
  </div>
{/if}
