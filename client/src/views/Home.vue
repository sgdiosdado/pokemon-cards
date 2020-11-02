<template>
  <div class="w-4/5 ml-auto mr-auto">
    <div class="flex items-center justify-between pt-4 mb-4">
      <h1 class="text-3xl">Catch 'em all!</h1>
      <button
        class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        @click="draw"
      >
        Draw cards
      </button>
    </div>
    <div class="pb-8 grid lg:grid-cols-4 md:grid-cols-2 gap-4">
      <Card v-for="card in cards" :key="card._id" :card="card"/>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card'
export default {
  name: "Home",
  components: {
    Card,
  },
  data() {
    return {
      cards: [], 
      gameStatus: {}
    };
  },
  created() {
    this.game()
  },
  methods: {
    draw() {
      const url = `http://localhost:5000/draw`
      fetch(url)
        .then(res => res.json())
        .then(data => {
          const newCards = data.data
          this.cards = this.cards.concat(newCards)
        })
    },
    game() {
      const url = `http://localhost:5000/game`
      setInterval(() => {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log(data.data)
          this.gameStatus = data.data
        })}, 5000)
    }
  }
};
</script>
