<script setup lang="ts"></script>

<template>
  <UApp>
    <!-- <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <HelloWorld msg="You did it!" />

        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header> -->
    <HHeader />
    <RouterView />
  </UApp>
</template>

<style scoped></style>
