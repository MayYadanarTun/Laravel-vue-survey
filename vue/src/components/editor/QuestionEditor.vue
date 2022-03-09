<template>
  <!-- Question index -->
  <div class="flex items-center justify-between">
    <h3 class="text-lg font-bold">{{ index + 1 }}. {{ model.question }}</h3>
    <div class="flex items-center">
      <!-- Add new question -->
      <button
        type="button"
        @click="addQuestion()"
        class="flex items-center text-xs py-1 px-3 mr-2 rounded-sm text-white bg-gray-600 hover:bg-gray-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4v16m8-8H4"
          /></svg
        >Add
      </button>
      <!--/ Add new question -->

      <!-- Delete question -->
      <button
        type="button"
        @click="deleteQuestion()"
        class="flex items-center text-xs py-1 px-3 rounded border border-transparent text-red-500 hover:border-red-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          /></svg
        >Delete
      </button>
      <!--/ Delete question -->
    </div>
  </div>
  <!--/ Question index -->

  <div class="grid gap-3 grid-cols-12">
    <!-- Question -->
    <div class="mt-3 col-span-9">
      <label
        :for="'question_text_' + model.data"
        class="block text-sm font-medium text-gray-700"
        >Question Text</label
      >
      <input
        type="text"
        :name="'question_text_' + model.data"
        v-model="model.question"
        @change="dataChange"
        :id="'question_text_' + model.data"
        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
    </div>
    <!-- /Question -->

    <!-- Question Type -->
    <div class="mt-3 col-span-3"></div>
    <!-- /Question Type -->
  </div>

  <!-- Question Description -->
  <!-- /Question Description -->
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  question: Object,
  index: Number,
});
const emit = defineEmits(["change", "addQuestion", "deleteQuestion"]);

//Re-create the whole question data to avoid uniintentional reference change
const model = ref(JSON.parse(JSON.stringify(props.question)));
</script>

<style></style>
