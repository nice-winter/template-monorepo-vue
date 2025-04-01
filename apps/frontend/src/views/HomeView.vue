<script setup lang="ts"></script>

<template>
  <main class="min-h-[calc(100vh-4.5rem-310px)]">
    <div>
      <div class="max-w-[80rem] px-6 mx-auto flex gap-3 max-[1024px]:flex-col">
        <UCard class="w-[300px] flex-shrink-0 bg-white">
          <Placeholder class="h-32" />
        </UCard>

        <UCard class="flex-1 bg-white">Content</UCard>
      </div>
    </div>
    <!-- <TheWelcome /> -->
  </main>
</template>
