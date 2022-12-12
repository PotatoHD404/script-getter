<script lang="ts">
import { getDatabase, ref, set, onValue, push } from "firebase/database";
import type { Post } from '@/types/post';




export default {
  
methods: {writePost: function () {
    let text: Pick<Post, "text">;
    // get text from input
    text = {
      text: this.text
    }
    let date = new Date();
    let timestamp = date.getTime();
    let db = getDatabase();
    let postsRef = ref(db, 'posts/');
    
    // add new post to posts list
    let newPostRef = push(postsRef);
    set(newPostRef,{
      text: text,
      timestamp: timestamp
    });

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
    <button @click="writePost()">Add 1</button>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
