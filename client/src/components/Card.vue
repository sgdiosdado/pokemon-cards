<template>
  <article class="flex flex-col justify-between h-full">
    <header
      class="px-4 py-2 bg-gray-300"
    >
      No. {{ card.exportId }}
    </header>
    <main>
      <div class="w-full p-4">
        <img
          :src="card.imagePath"
          class="w-full mb-4"/>
        </div>
      <p class="px-4 py-2">
        {{ card.description }}
      </p>
    </main>
    <footer
      class="px-4 py-2 bg-gray-300"
    >
      Type: {{ card.type }}
    </footer>
  </article>
</template>

<script>
export default {
  name: "Card",
  props: {
    card: Object,
  }
}
</script>
