<script setup lang="ts">
const route = useRoute()
const id = route.params.id
const baseUrl="https://clioapi.hi.u-tokyo.ac.jp/shipsapi/v1/W34/controlnumber/"

const fetchUrl = baseUrl + id
const {data} = await useFetch(fetchUrl)
</script>

<template>
<p>{{ data }}</p>
</template>