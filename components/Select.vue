<script setup lang="ts">
defineProps({
  selected: String,
  list: Array,
  label: String
})
defineEmits(['update:selected'])

</script>

<template>
  <label class="text-gray-700 flex flex-col" :for="label">
    {{ label }}
    <select :id="label"
      class="md:w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
      :value="selected" @change="$emit('update:selected', $event.target.value)" :name="label">
      <option value="all">{{ $t('all') }}</option>
      <option v-for="item in list" :value="item" :selected="item === selected">
        {{ item.replace('@ja','') }}
      </option>
    </select>
  </label>
</template>