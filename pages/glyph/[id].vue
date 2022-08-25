<script setup lang="ts">
import * as UV from "universalviewer/dist/esm/";
import "../../assets/uv.css"
import {KanjiItem } from "@/types/KanjiItem"

const route = useRoute()
const id = route.params.id
const baseUrl = "https://clioapi.hi.u-tokyo.ac.jp/shipsapi/v1/W34/controlnumber/"
const fetchUrl = baseUrl + id

const { data: displayData, pending } = await useFetch<KanjiItem>(fetchUrl, { pick: ['data'] })

const manifest_url = displayData.value.data.flat()[0].manifest_url
const unihanBaseUrl = "https://www.unicode.org/cgi-bin/GetUnihanData.pl?codepoint="

function hexStr2dec(hexStr: string) {
  return parseInt(hexStr, 16)
}

function code2char(code: number) {
  return String.fromCodePoint(code)
}


function getClioimgUrl(call_number, page, id) {
  call_number = call_number.replace('@ja', '')
  let callNum1, callNum2, callNum3
  [callNum1, callNum2, callNum3] = call_number.split('-')
  callNum1 = callNum1.replace("貴", "_000ki_")
  return `https://clioimg.hi.u-tokyo.ac.jp/viewer/view/idata/000/${callNum1}/${callNum2}/${callNum3}/${page}?ci=1&kts=2&dts=34&mts=${id}`
}

// TODO add copyright

onMounted(async () => {
  const uvConfig = {
    manifest: manifest_url,
  };
  const uv = UV.init("uv", uvConfig);
  uv.on("configure", function ({ config, cb }) {
    cb({
      options: {
        footerPanelEnabled: true,
        headerPanelEnabled: false,
        navigatorEnabled: false,
        rightPanelEnabled: true,
        leftPanelEnabled: false,
      },
      modules: {
        // TODO add i18n support for universalviewer
        "footerPanel": {
          "options": {
            "downloadEnabled": true,
            "embedEnabled": false,
            // "feedbackEnabled": true,
            "fullscreenEnabled": true,
            // "minimiseButtons": true,
            "moreInfoEnabled": true,
            // "openEnabled": true,
            "printEnabled": true,
            "shareEnabled": true
          },
          "moreInfoRightPanel": {
            "options": {
              "canvasDisplayOrder": "",
              "canvasExclude": "",
              "copyToClipboardEnabled": false,
              "manifestDisplayOrder": "",
              "manifestExclude": "",
              "panelAnimationDuration": 250,
              "panelCollapsedWidth": 30,
              "panelExpandedWidth": 255,
              "panelOpen": true,
              "rtlLanguageCodes": "ar, ara, dv, div, he, heb, ur, urd",
              "showAllLanguages": false,
              "textLimit": 4,
              "textLimitType": "lines"
            },

          },
        },
      }
    });
  });
})</script>

<template>
  <section class="container mx-auto flex flex-col" v-if="!pending">
    <div id="uv" class="uv h-64 mb-10"></div>
    <div class="flex flex-col gap-2">
      <div class="flex flex-row flex-wrap gap-2">
        <!-- <img class="w-5/6 md:w-1/4 border-2" :src="displayData.data[0].thumbnail_url" alt=""> -->
        <div class="flex flex-col justify-center">
          <h2 class="text-xl font-bold">ID: {{ displayData.data[0].id }}</h2>
          <h2 class="text-xl font-bold">Character: {{ displayData.data[0].title.replace("@ja","") }}</h2>
          <h2 class="text-xl font-bold">
            Unicode:
            <a class="underline hover:text-blue-500"
              :href="unihanBaseUrl + code2char(hexStr2dec(displayData.data[0].unicode))" target="blank">
              U+{{ displayData.data[0].unicode }}
            </a>
          </h2>
          <h2 class="text-xl font-bold">Daikanwa Code: {{ displayData.data[0].daikanwa_code }}</h2>
          <h2 class="text-xl font-bold">Chinese Reading: {{ displayData.data[0].chinese_reading.replace("@ja", "") }}
          </h2>
          <h2 class="text-xl font-bold">Japanese Reading: {{ displayData.data[0].japanese_reading.replace("@ja", "") }}
          </h2>
        </div>
      </div>

      <div class="flex flex-col p-1 border-2 rounded border-blue-500">
        <h1 class="text-xl font-bold">Source:</h1>
        <h2 class="">division: {{ displayData.data[0].source.division.replace("@ja", "") }}</h2>
        <h2 class="">call_number: {{ displayData.data[0].source.call_number.replace("@ja", "") }}</h2>
        <h2 class="">page: {{ displayData.data[0].source.page }}</h2>
        <h2 class="">date: {{ displayData.data[0].source.date.replace("@ja", "") }}</h2>
        <h2 class="">document: {{ displayData.data[0].source.document.replace("@ja", "") }}</h2>
        <h2 class="">value: {{ displayData.data[0].source.value.replace("@ja", "") }}</h2>
        <h2 class="">send: {{ displayData.data[0].source.send.replace("@ja", "") }}</h2>
        <h2 class="">to: {{ displayData.data[0].source.to.replace("@ja", "") }}</h2>
        <h2 class="">remarks: {{ displayData.data[0].source.remarks.replace("@ja", "") }}</h2>
        <h2 class="">occupation: {{ displayData.data[0].source.occupation.replace("@ja", "") }}</h2>
      </div>

      <div class="flex flex-col p-1 border-2 border-blue-500 rounded">
        <h1 class="text-xl font-bold">CLIOIMG URL:</h1>
        <h2>
          <a class="underline hover:text-blue-500" target="blank"
            :href="getClioimgUrl(displayData.data[0].source.call_number, displayData.data[0].source.page, displayData.data[0].id)">
            {{ getClioimgUrl(displayData.data[0].source.call_number, displayData.data[0].source.page,
            displayData.data[0].id)
            }}
          </a>
        </h2>
      </div>

      <div class="flex flex-col p-2 border-2 rounded border-blue-500">
        <h3 class="text-xl font-bold">IIIF Manifest</h3>
        <!-- TODO: add button for copy to clipboard -->
        <p>URL: <a :href="displayData.data[0].manifest_url" target="blank" class="underline hover:text-blue-500">{{
        displayData.data[0].manifest_url
        }}</a> </p>
      </div>
    </div>
  </section>
</template>

