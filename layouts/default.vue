<template>
  <div class="text-white bg-movie-black h-screen">
    <header class="bg-movie-blue">
      <nav
        class="mx-auto flex max-w-2xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <NuxtLink to="/" class="text-sm font-semibold leading-6 text-gray-900"
          >Home</NuxtLink
        >
        <NuxtLink
          to="/movies"
          class="text-sm font-semibold leading-6 text-gray-900"
          >Movies</NuxtLink
        >
        <NuxtLink
          to="/series"
          class="text-sm font-semibold leading-6 text-gray-900"
          >Series</NuxtLink
        >
        <NuxtLink
          to="/contact"
          class="text-sm font-semibold leading-6 text-gray-900"
          >Contact</NuxtLink
        >
      </nav>
    </header>
    <slot></slot>
  </div>
</template>
