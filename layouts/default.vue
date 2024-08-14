<template>
  <div class="text-movie-grey bg-movie-blue min-h-screen">
    <header class="bg-movie-black">
      <nav
        class="mx-auto flex max-w-2xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <NuxtLink to="/" class="text-lg font-semibold leading-6 text-gray-900"
          >Home</NuxtLink
        >
        <NuxtLink
          to="/movies"
          class="text-lg font-semibold leading-6 text-gray-900"
          >Movies</NuxtLink
        >
        <NuxtLink
          to="/series"
          class="text-lg font-semibold leading-6 text-gray-900"
          >Series</NuxtLink
        >
        <NuxtLink
          to="/contact"
          class="text-lg font-semibold leading-6 text-gray-900"
          >Contact</NuxtLink
        >
      </nav>
    </header>
    <slot></slot>
  </div>
</template>
