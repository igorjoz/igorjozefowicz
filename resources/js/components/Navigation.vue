<template>
    <nav class="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">My Site</span>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <router-link to="/" class="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
            Home
          </router-link>
          <router-link to="/services" class="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
            Services
          </router-link>
          <router-link to="/about" class="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
            About
          </router-link>
          <router-link to="/contact" class="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white">
            Contact
          </router-link>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navigation',
  };
  </script>
  
  <style scoped>
  /* Add any additional styling here if needed */
  </style>