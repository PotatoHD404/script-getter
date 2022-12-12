<script lang="ts">
import {usePostsStore} from '@/stores/posts';
import {getDatabase, onValue, orderByChild, orderByKey, query, ref} from "firebase/database";


export default {
  setup() {
    const posts = usePostsStore()
    let db = getDatabase();
    let postsRef = query(ref(db, 'posts/'), orderByKey());
    // console.log("1234")
    onValue(postsRef, (snapshot) => {
      // console.log("1234")
      const data = snapshot.val();
      // console.log(data)
      let newPosts = Object.entries(data).map((el: any) =>
          ({
            ...el[1]
          })
      );
      // console.log(newPosts)
      posts.setPosts(newPosts.reverse())

      // console.log(posts.posts)
    });
    // counter.count++
    // with autocompletion ✨
    // counter.$patch({ count: counter.count + 1 })
    // or using an action instead
    // counter.increment()
    return {posts: posts}
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
      <div v-for="item in posts.posts">
        {{ item.text }}
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>

</style>
