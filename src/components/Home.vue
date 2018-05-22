<template>
  <div class="Home">
    <!-- Search Bar -->
    <input type="text" v-model="query">
    <button @click="search">SEARCH</button>
    <!-- Results -->
    <div class="results">
      <h3>Results</h3>
      <ul>
        <li v-for="result in results">{{result.food_name}} - {{result.nf_calories}} kCal
          <button @click="addToMyFood(result)">Add to MyFood</button>
        </li>
      </ul>
    </div>
    <!-- MyFood -->
    <div class="myfood">
      <h3>MyFood</h3>
      <ul>
        <li v-for="(food, index) in myFood">
          <router-link :to="{name: 'FoodDetails', params: {id: index}}">{{food.food_name}} - {{food.nf_calories}} kCal</router-link>
        </li>
      </ul>
      <div>
        <p>Total Calories: {{cals}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        query: ''
      }
    },
    computed: {
      results() {
        return this.$store.state.results
      },
      myFood() {
        return this.$store.state.myFood
      },
      cals(){
        return this.$store.state.totalCals
      }
    },
    methods: {
      search() {
        this.$store.dispatch('search', this.query)
        this.query = ''
      },
      addToMyFood(food) {
        this.$store.dispatch('addToMyFood', food)
      }
    }
  }

</script>

<style>


</style>
