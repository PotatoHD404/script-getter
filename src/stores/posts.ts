import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Post } from '@/types/post';


// export const usePostStore = defineStore('post', () => {
//   const posts = ref([])
//   const post = computed(() => posts.value[0])
  
//   function setPosts(newPosts) {
//     posts.value = newPosts
//   }

//   return { posts, post, setPosts }
// })


export const usePostsStore = defineStore('post', {
  state: () => {
    return {
      posts: [] as Post[],
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    setPosts(newPosts: Post[]) {
      this.posts = newPosts
    }
  },
});

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })
