<script setup lang="ts">
import variantsHng from '@/public/variants_hng.json'
import variantsOpencc from '@/public/variants_s2t.json'

const route = useRoute()
const character = route.params.character as string

const inputCharacter = ref<string>(character)
const variantsNum = ref<string>("")
const variantsListHng = ref<string[]>(null)
const variantsListOpencc = ref<string[]>(null)

watch(inputCharacter, (newInputedCharacter) => {
  variantsListHng.value = variantsHng[newInputedCharacter]
  variantsListOpencc.value = variantsOpencc[newInputedCharacter]

  variantsNum.value = (variantsListHng.value || variantsListOpencc.value) ? "[☑]" : "[X]"
})




function move(character) {
  if (character)
    return navigateTo({
      path: `/search/${character}`,
    })
}

// TODO: auto header update
</script>

<template>
  <div class="container mx-auto flex flex-col p-1 md:py-10 md:px-20  md:gap-4">
    <div class="flex flex-row items-center justify-center gap-1">
      <input type="text" placeholder="検索" v-model="inputCharacter" @keyup.enter.prevent="move(inputCharacter)"
        class=" border-transparent appearance-none border border-gray-300 py-2 px-4 w-2/3 md:w-1/5 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
      <button type="button" @click="move(inputCharacter)"
        class="w-1/3 md:w-1/12 text-white bg-blue-500 rounded px-4 py-2 hover:bg-white hover:text-black duration-300">{{
        $t('search')
        }}</button>
    </div>

    <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
      <div class="collapse-title text-xl font-medium">
        Variants {{ variantsNum }}
      </div>
      <div class="collapse-content">
        <h2>OpenCC</h2>
        <div>
          <div class="badge badge-primary pointer-events-auto" v-for="item of variantsListOpencc" @click="move(item)">
            {{item}}</div>
        </div>
        <h2>HNG</h2>
        <div>
          <div class="badge badge-primary pointer-events-auto" v-for="item of variantsListOpencc" @click="move(item)">
            {{item}}</div>
        </div>
      </div>
    </div>

    <!-- Results -->
    <NuxtPage />
  </div>
</template>