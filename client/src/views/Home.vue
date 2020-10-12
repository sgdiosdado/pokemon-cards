<template>
  <div class="w-4/5 ml-auto mr-auto">
    <h1 class="text-4xl">Catch 'em all!</h1>
    <div class="grid grid-cols-2 gap-4">
      <form @submit.prevent>
         <div class="mb-4">
          <label
            class="block mb-2 text-sm font-bold text-gray-700 capitalize"
            for="export"
            >Export id</label
          >
          <input
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="export"
            type="text"
            v-model="card.exportId"
            placeholder="I001"
          />
        </div>
        <div class="mb-4">
          <label
            class="block mb-2 text-sm font-bold text-gray-700 capitalize"
            for="name"
            >Name</label
          >
          <input
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            v-model="card.name"
            placeholder="Pokeball"
          />
        </div>
        <div class="mb-4">
          <label
            class="block mb-2 text-sm font-bold text-gray-700 capitalize"
            for="description"
            >description</label
          >
          <input
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="description"
            type="text"
            v-model="card.description"
            placeholder="This is a cool description!"
          />
        </div>
        <div class="w-full mb-6 md:w-1/3 md:mb-0">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
            for="type"
            >Card type</label
          >
          <div class="relative">
            <select
              class="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="type"
              v-model="card.type"
            >
              <option
                v-for="option of options"
                :key="option.id"
                :value="option.value"
                >{{ option.text }}</option
              >
            </select>
            <div
              class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none"
            >
              <svg
                class="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="mb-4">
          <label
            class="block mb-2 text-sm font-bold text-gray-700 capitalize"
            for="image-path"
            >image path</label
          >
          <input
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="image-path"
            type="text"
            v-model="card.imagePath"
            placeholder="https://my-cool.website/image/route.png"
          />
        </div>
      <button @click="createCard" class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Save card</button>
      </form>
      <div>
        Use Postman to checkout the existing data at <strong><pre>http://localhost:5000/cards</pre></strong>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {
      card: {
        exportId: "",
        name: "",
        description: "",
        type: "",
        imagePath: ""
      },
      options: [
        { id: 0, text: "Item", value: "Item" },
        { id: 1, text: "Berry", value: "Berry" },
        { id: 2, text: "Element", value: "Element" }
      ]
    };
  },
  methods: {
    createCard() {
      const url = "http://localhost:5000/card/"
      const headers = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.card)
      }
      fetch(url, headers)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.log(err))
      .then(_ => this.resetFields())
    },
    resetFields() {
      this.card = {
        exportId: "",
        name: "",
        description: "",
        type: "",
        imagePath: ""
      }
    }
  }
};
</script>
