<template>
<div>
  <h1>h1>How to integrate GridStack.js with Vue.js</h1>
  <p>
    As with any virtual DOM based framework, you need to check if Vue has
    rendered the DOM (or any updates to it) <strong>before</strong> you
    initialize GridStack or call its methods. As a basic example, check this
    component's <code>mounted</code> hook.
  </p>
  <p>
    If your app requires more complex render logic than the inline template
    in `addWidget`, consider
    <a
      href="https://github.com/gridstack/gridstack.js/tree/master/doc#makewidgetel"
      >makeWidget</a
    >
    to let Vue deal with DOM rendering.
  </p>
  <button type="button" @click="addNewWidget()">Add Widget</button> {{ info }}
  <div class="grid-stack"></div>
</div>
</template>

<script setup>
import { GridStack } from 'gridstack';
import "gridstack/dist/gridstack.min.css";
import "gridstack/dist/gridstack-extra.min.css";

const count = ref(0);
const info = ref("");
let grid = shallowRef(); // DO NOT use ref(null) as proxies GS will break all logic when comparing structures... see https://github.com/gridstack/gridstack.js/issues/2115
const items = [
  { x: 2, y: 1, h: 2 },
  { x: 2, y: 4, w: 3 },
  { x: 4, y: 2 },
  { x: 3, y: 1, h: 2 },
  { x: 0, y: 6, w: 2, h: 2 },
];
const timerId = ref()

onMounted(() => {
  grid.value = GridStack.init({ // DO NOT use grid.value = GridStack.init(), see above
    float: true,
    cellHeight: "70px",
    minRow: 1,
  });

  grid.value.on("dragstop", function (event, element) {
    const node = element.gridstackNode;
    info.value = `you just dragged node #${node.id} to ${node.x},${node.y} – good job!`;
  });
});

function addNewWidget() {
  const node = items[count.value] || {
    x: Math.round(12 * Math.random()),
    y: Math.round(5 * Math.random()),
    w: Math.round(1 + 3 * Math.random()),
    h: Math.round(1 + 3 * Math.random()),
  };
  node.id = node.content = String(count.value++);
  grid.value.addWidget(node);
}

watch(info, (newVal) => {
  if (newVal.length === 0) return;

  clearTimeout(timerId.value);
  timerId.value = setTimeout(() => {
    info.value = ''
  }, 2000);
})

</script>

<style scoped>
.background-line{
  border: 1px solid red;
}
.stack-line{
  border: 1px solid blue
}
</style>

<style>
.grid-stack-item{
  background-color: red;
}
</style>