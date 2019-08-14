<template>
  <div class="cats">
    <h1> this is list of cats </h1>
    <div class="list-cat">
      <table>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Color</th>
        </tr>
        <tr v-for="(cat, index) in cats" v-bind:key="cat._id">
          <td>{{ index }}</td>
          <td>{{ cat.name }}</td>
          <td>{{ cat.color }}</td>
        </tr>
      </table>
    </div>
    <button @click="goToNewCat"> Create Cat </button>
  </div>
</template>

<script>
import CatApi from '../services/catApi';

export default {
  name: 'Cats',
  data() {
    return {
      cats: [],
    };
  },
  created() {
    this.fetchCats();
  },
  methods: {
    fetchCats() {
      CatApi.fetchCats().then((response) => {
        this.cats = response.data.cats;
      })
        .catch(() => {
        });
    },
    goToNewCat() {
      this.$router.push('/cats/new');
    },
  },
};
</script>

<style scoped>
.list-cat {
  text-align: center;
}

</style>
