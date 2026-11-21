<script>
  let { game } = $props();
</script>

<svelte:head>
  <title>{game.title} — Frokyte Games</title>
  <meta name="description" content={game.shortDescription ?? game.description} />
</svelte:head>

<main class="max-w-none">
  <section class="relative isolate flex min-h-[min(780px,calc(100svh-5rem))] items-end overflow-hidden bg-[#08090c] text-white">
    {#if game.hero}
      <img src={game.hero} alt="" class="absolute inset-0 -z-20 h-full w-full object-cover" />
    {:else}
      <div class="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_70%_30%,#344054,#08090c_70%)]"></div>
    {/if}
    <div class="absolute inset-0 -z-10 bg-gradient-to-t from-[#08090c] via-black/45 to-black/10"></div>
    <div class="mx-auto w-full max-w-[1440px] px-6 pb-20 pt-40 sm:px-10 lg:px-16 lg:pb-28">
      <p class="text-xs font-bold uppercase tracking-[.25em] text-primary">{game.status ?? 'A Frokyte Games title'}</p>
      <h1 class="mt-5 max-w-5xl text-5xl font-black tracking-tight sm:text-7xl lg:text-8xl">{game.title}</h1>
      <p class="mt-6 max-w-2xl text-lg text-white/75">{game.shortDescription}</p>
      <div class="mt-8 flex flex-wrap items-center gap-3 text-sm text-white/70">
        {#if game.releaseDate}<span><i class="fa-regular fa-calendar mr-2"></i>{game.releaseDate}</span>{/if}
        {#if game.priceLabel}<span class="rounded border border-white/25 bg-black/30 px-3 py-1">{game.priceLabel}</span>{/if}
      </div>
      {#if game.downloads?.length}
        <a href="#downloads" class="btn btn-primary mt-8 rounded-md"><i class="fa-solid fa-download"></i> Download</a>
      {:else if game.stores?.length}
        <div class="mt-9 flex flex-wrap gap-3">{#each game.stores as store}<a class="btn btn-primary rounded-md" href={store.url} target="_blank" rel="noreferrer">{store.label}</a>{/each}</div>
      {/if}
    </div>
  </section>

  <section class="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
    <div class="grid gap-12 lg:grid-cols-[1.2fr_.8fr]">
      <div>
        <p class="text-xs font-bold uppercase tracking-wider text-primary">About the game</p>
        <h2 class="mt-4 text-3xl font-bold">Discover {game.title}</h2>
        <p class="mt-6 whitespace-pre-line leading-relaxed text-white/65">{game.description}</p>
      </div>
      <aside class="rounded-lg border border-white/10 bg-[#17191d] p-7">
        <h2 class="text-xl font-bold">Game information</h2>
        <dl class="mt-6 space-y-4 text-sm">
          {#each [['Release date',game.releaseDate],['Developer','Frokyte Games'],['Publisher','Frokyte Games'],['Platforms',(game.platforms??[]).join(', ')],['Genres',(game.genres??[]).join(', ')],['Price',game.priceLabel],['Age rating',game.ageRating]] as row}
            <div class="flex justify-between gap-4 border-b border-white/10 pb-3"><dt class="text-white/45">{row[0]}</dt><dd class="text-right">{row[1] ?? 'To be announced'}</dd></div>
          {/each}
        </dl>
      </aside>
    </div>

    {#if game.gallery?.length}
      <section class="mt-20">
        <div class="flex items-end justify-between gap-4"><div><p class="text-xs font-bold uppercase tracking-wider text-primary">Screenshots & artwork</p><h2 class="mt-3 text-3xl font-bold">Explore the world</h2></div><span class="text-xs text-white/35">{game.gallery.length} images</span></div>
        <div class="mt-7 grid gap-4 md:grid-cols-2">{#each game.gallery as item}<img src={item.src} alt={item.alt ?? game.title} class="aspect-video w-full rounded-lg border border-white/10 object-cover" loading="lazy" />{/each}</div>
      </section>
    {/if}

    {#if game.downloads?.length}
      <section id="downloads" class="mt-20 scroll-mt-24">
        <p class="text-xs font-bold uppercase tracking-wider text-primary">Get the game</p>
        <div class="mt-3 flex flex-wrap items-end justify-between gap-4"><h2 class="text-3xl font-bold">Downloads</h2><span class="text-sm text-white/45">Version {game.downloads[0].version}</span></div>
        <div class="mt-7 divide-y divide-white/10 rounded-lg border border-white/10 bg-[#17191d]">
          {#each game.downloads as download}
            <div class="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div class="flex items-start gap-4"><div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white/5 text-primary"><i class="fa-solid fa-file-zipper text-lg"></i></div><div><h3 class="font-bold">{download.label}</h3><p class="mt-1 text-sm text-white/45">{download.platform} · {download.size} · v{download.version}</p></div></div>
              <a class="btn btn-primary rounded-md" href={download.url} download><i class="fa-solid fa-download"></i> Download</a>
            </div>
          {/each}
        </div>
        {#if game.demoNotice}
          <p class="mt-4 rounded-md border border-amber-300/20 bg-amber-300/5 p-4 text-sm leading-relaxed text-amber-100/80"><i class="fa-solid fa-circle-info mr-2"></i>{game.demoNotice}</p>
        {/if}
        {#if game.releaseNotes?.length}
          <div class="mt-8"><h3 class="text-lg font-bold">Release notes</h3><ul class="mt-3 list-inside list-disc space-y-2 text-sm text-white/55">{#each game.releaseNotes as note}<li>{note}</li>{/each}</ul></div>
        {/if}
      </section>
    {/if}

    {#if game.systemRequirements}
      <section class="mt-20"><h2 class="text-3xl font-bold">System requirements</h2><div class="mt-7 grid gap-5 md:grid-cols-2">{#each ['minimum','recommended'] as tier}<div class="rounded-lg border border-white/10 bg-[#17191d] p-7"><h3 class="text-xl font-bold capitalize">{tier}</h3><dl class="mt-5 space-y-3 text-sm">{#each Object.entries(game.systemRequirements[tier]??{}) as item}<div class="flex justify-between gap-4"><dt class="text-white/45">{item[0]}</dt><dd>{item[1]}</dd></div>{/each}</dl></div>{/each}</div></section>
    {/if}
  </section>
</main>