<script>
import {onDestroy} from 'svelte';import {page} from '$app/state';import {NAVBAR_CONFIG,DEFAULT_NAVBAR} from '$lib/navigation.js';
let mobileOpen=$state(false);const path=$derived(page.url.pathname.replace(/\/+$/,'')||'/');const config=$derived(NAVBAR_CONFIG[path]??DEFAULT_NAVBAR);
function close(){mobileOpen=false;if(typeof document!=='undefined')document.body.classList.remove('overflow-hidden')}
function open(){mobileOpen=true;document.body.classList.add('overflow-hidden')}
function keydown(e){if(e.key==='Escape')close()}
onDestroy(()=>{if(typeof document!=='undefined')document.body.classList.remove('overflow-hidden')});
</script>
<svelte:window onkeydown={keydown}/>
<header class="sticky top-0 z-50 border-b border-white/10 bg-[#101012]/95 text-white shadow-sm backdrop-blur-xl"><div class="navbar mx-auto min-h-20 max-w-[1600px] px-5 sm:px-8 lg:px-12">
<div class="navbar-start flex-1"><a href="/" class="text-xl font-black tracking-[-.06em] sm:text-2xl" onclick={close}>FROKYTE <span class="ml-2 text-[10px] tracking-[.22em] text-white/45">GAMES</span></a></div>
<nav class="navbar-center hidden flex-1 justify-center lg:flex" aria-label="Main navigation"><ul class="menu menu-horizontal items-center gap-2 text-sm font-semibold text-white/70">{#each config.desktopLinks as item}<li><a href={item.href} onclick={close}>{item.label}</a></li>{/each}</ul></nav>
<div class="navbar-end hidden flex-1 justify-end lg:flex">{#if config.desktopAction}<a href={config.desktopAction.href} class="btn btn-primary rounded-md px-6">{config.desktopAction.label}</a>{/if}</div>
<div class="navbar-end flex flex-1 justify-end lg:hidden"><button class="btn btn-ghost btn-square" aria-label="Open navigation" onclick={open}><i class="fa-solid fa-bars text-lg"></i></button></div>
</div></header>
{#if mobileOpen}<div class="fixed inset-0 z-[100] overflow-y-auto bg-[#101012] text-white" role="dialog" aria-modal="true" aria-label="Mobile navigation"><div class="sticky top-0 flex min-h-20 items-center justify-between border-b border-white/10 bg-[#101012] px-6"><a href="/" class="text-2xl font-black" onclick={close}>FROKYTE GAMES</a><button class="btn btn-ghost btn-square btn-lg" aria-label="Close navigation" onclick={close}><i class="fa-solid fa-xmark text-xl"></i></button></div><div class="mx-auto max-w-3xl px-6 py-10">{#each config.mobileGroups as group}<section class="mb-9"><h2 class="mb-3 px-3 text-xs font-bold uppercase tracking-[.2em] text-white/40">{group.title}</h2><ul class="menu menu-lg w-full gap-1 p-0 text-xl font-semibold">{#each group.items as item}<li><a href={item.href} onclick={close}>{item.label}</a></li>{/each}</ul></section>{/each}{#if config.mobileAction}<a href={config.mobileAction.href} class="btn btn-primary btn-lg mt-3 w-full" onclick={close}>{config.mobileAction.label}</a>{/if}</div></div>{/if}
