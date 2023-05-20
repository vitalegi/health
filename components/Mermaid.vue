<script setup>
import { ref } from "vue";
import mermaid from "mermaid";
mermaid.initialize({ startOnLoad: false });

const props = defineProps({
  diagram: String,
});

const svgHtml = ref("");

const drawDiagram = async function () {
  const { svg } = await mermaid.render(`mermaid_${Math.round(Math.random()*1000000000)}`, props.diagram);
  svgHtml.value = svg;
};

drawDiagram();
</script>

<template>
  <div>
    <div v-html="svgHtml" />
  </div>
</template>
