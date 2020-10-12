<template>
  <div class="mb-4">
    <label
     class="block mb-2 text-sm font-bold text-gray-700 capitalize"
     :for="id">{{ label }}</label>
    <input
      class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
      :id="id"
      type="text"
      v-bind="$attrs"
    />
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: ["label"],
  computed: {
    id() {
      return this.label.split(" ").join("-")
    }
  }
};
</script>

<style>
</style>