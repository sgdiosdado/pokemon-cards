<template>
  <div class="w-full mb-6 md:w-1/3 md:mb-0">
    <label
      class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
      :for="id"
      >{{ label }}</label
    >
    <div class="relative">
      <select
        class="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
        :id="id"
        v-bind="$attrs"
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
</template>

<script>
export default {
  name: "BaseSelect",
  props: ["options", "label"],
  computed: {
    id() {
      return this.label
        .toLowerCase()
        .split(" ")
        .join("-");
    }
  }
};
</script>

<style>
</style>