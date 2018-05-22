<template>
  <div class="food-details">
    <h5>{{food.food_name}}</h5>
    <img :src="food.photo.thumb" alt="">
    
  </div>
</template>

<script>
  export default {
    name: 'FoodDetails',
    data() {
      return {

      }
    },
    computed: {
      food(){
        return this.$store.state.myFood[this.$route.params.id]
      }
    },
    methods: {}
  }

</script>

<style>


</style>
