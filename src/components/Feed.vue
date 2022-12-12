<script lang="ts">
import { usePostsStore } from '@/stores/posts';
import type { Post } from '@/types/post';
import { getDatabase, ref, set, onValue, push } from "firebase/database";




export default {
  setup() {
    const posts = usePostsStore()
    let db = getDatabase();
    let postsRef = ref(db, 'posts/');
    onValue(postsRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data)
      // posts.$patch({ posts: data });
    });
    // counter.count++
    // with autocompletion ✨
    // counter.$patch({ count: counter.count + 1 })
    // or using an action instead
    // counter.increment()
    return { posts: posts.posts }
  },
}
</script>


<template>
    <div class="item">
      <i>
        <slot name="icon"></slot>
      </i>
      <div class="details">
        <h3>
          <slot name="heading"></slot>
        </h3>
        <li v-for="item in posts">
            {{ item.text }}
        </li>
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
  