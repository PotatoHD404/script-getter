<script lang="ts">
import {initializeApp} from '@firebase/app';
import {RouterLink, RouterView} from 'vue-router'
import HomeView from './views/HomeView.vue';

export default {
  components: {
    RouterLink,
    RouterView,
    HomeView
  },
  setup() {
    const firebase = initializeApp({
      projectId: 'potatohd-database',
      databaseURL: "https://potatohd-database-default-rtdb.europe-west1.firebasedatabase.app"
    })
    return {}
  }
}

</script>

<template>
  <header>
    <!-- <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div> -->
  </header>
  <h1>Submit form</h1>
  <RouterView/>
</template>

<style scoped>

</style>
