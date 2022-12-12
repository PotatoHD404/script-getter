<script lang="ts">
import {getDatabase, ref, set} from "firebase/database";
import type {Post} from '@/types/post';
// import { v4 as uuidv4 } from 'uuid';


export default {

  methods: {
    writePost: async function () {
      let text: Pick<Post, "text">;
      // get text from input
      let date = new Date();
      let timestamp = date.getTime();
      let db = getDatabase();
      let postsRef = ref(db, `posts/${(new Date()).getTime()}`);

      // add new post to posts list
      // let newPostRef = push(postsRef);
      await set(postsRef, {
            text: this.text,
          }
      );

      // clear input
      this.text = "";

    },
  },
  data() {
    return {
      text: "",
    }
  },
}


</script>

<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <input v-model="text"/>
    <button @click="writePost()">Add</button>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>

</style>
