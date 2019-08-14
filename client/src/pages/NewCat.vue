<template>
  <div class="new-cat">
      <h1>Create Cat</h1>
      <div class="form">
        <div>
          <input type="text" name="name" placeholder="cat name" v-model="name">
        </div>
        <div>
          <input type="text"  name="color" placeholder="cat's color" v-model="color">
        </div>
        <div>
          <button class="app_post_btn" @click="createCat">Create</button>
        </div>
      </div>
  </div>
</template>

<script>
import catApi from '../services/catApi';

export default {
  name: 'NewCat',
  data() {
    return {
      name: '',
      color: '',
    };
  },
  methods: {
    createCat() {
      catApi.createCat({ name: this.name, color: this.color })
        .then(() => {
          // do success action
          this.$router.push('/cats');
        })
        .catch(() => {
          // console.log(err)
        });
    },
  },
};
</script>

<style scoped>

</style>
