<template>
<div>
  <h1>How to integrate GridStack.js with Vue.js</h1>
  <p>
    As with any virtual DOM based framework, you need to check if Vue has
    rendered the DOM (or any updates to it) <strong>before</strong> you
    initialize GridStack or call its methods. As a basic example, check this
    component's <code>mounted</code> hook.
  </p>
  <p>
    If your app requires more complex render logic than the inline template
    in `addWidget`, consider
    <a href="https://github.com/gridstack/gridstack.js/tree/master/doc#makewidgetel">makeWidget</a>
    to let Vue deal with DOM rendering.
  </p>
  <button type="button" @click="addNewWidget2()">Add Widget pos [0,0]</button>
  <button type="button" @click="removeLastWidget()">Remove Last Widget</button>
  <br>
  <br>
  <button type="button" @click="changeFloat()">Float: {{gridFloat}}</button>

  <div>{{ info }}</div>
  <br>
  <div><b :style="{color: color}">{{ gridInfo }}</b></div>
  <br>

  <div class="grid-stack">
    <div v-for="(w, indexs) in items" class="grid-stack-item" :gs-x="w.x" :gs-y="w.y" :gs-w="w.w" :gs-h="w.h"
      :gs-id="w.id" :id="w.id" :key="w.id">
      <div class="grid-stack-item-content">
        <button @click="remove(w)">remove</button>
        {{w}}
      </div>
    </div>
  </div>
</div>
</template>

<script setup >
import { GridStack } from 'gridstack';
import "gridstack/dist/gridstack.min.css";
import "gridstack/dist/gridstack-extra.min.css";

const count = ref(0);
const info = ref("");
const gridFloat = ref(false);
const color = ref("black");
const gridInfo = ref("");
const grid = ref(null); // DO NOT use ref(null) as proxies GS will break all logic when comparing structures... see https://github.com/gridstack/gridstack.js/issues/2115
const items = ref([]);

// 여기는 ref써도 잘되네.....>???????? 
// 후에 자세한 확인 필요 

onMounted(() => {
  grid.value = GridStack.init({ // DO NOT user grid.value = GridStack.init(), see above
    float: false,
    cellHeight: "70px",
    minRow: 1,
  });

  grid.value.on("dragstop", function (event, element) {
    const node = element.gridstackNode;
    info.value = `you just dragged node #${node.id} to ${node.x},${node.y} – good job!`;
  });
  
  grid.value.on('change', onChange);
  // gridFloat.value = grid.float();
});

function changeFloat() {
  gridFloat.value = !gridFloat.value;
  grid.value.float(gridFloat.value);
}

function onChange(event, changeItems) {
  updateInfo();
  // update item position
  changeItems.forEach(item => {
    var widget = items.value.find(w => w.id == item.id);
    if (!widget) {
      alert("Widget not found: " + item.id);
      return;
    }
    widget.x = item.x;
    widget.y = item.y;
    widget.w = item.w;
    widget.h = item.h;            
  });
}

function addNewWidget2() {
  const node = items[count.value] || { x: 0, y: 0, w: 2, h: 2 };
  node.id = 'w_'+ (count.value++);
//          grid.addWidget(node);
  items.value.push(node);
  nextTick(()=>{
    grid.value.makeWidget(node.id);
    updateInfo();
  });
}

function removeLastWidget() {
  if (count.value == 0) return;
  var id = `w_${count.value-1}`;
  var index = items.value.findIndex(w => w.id == id);    
  if (index < 0) return;
  var removed = items.value[index];
  remove(removed);
}

function remove(widget) {
  var index = items.value.findIndex(w => w.id == widget.id);
  items.value.splice(index, 1);
  const selector = `#${widget.id}`;
  grid.value.removeWidget(selector, false);
  updateInfo();            
}

function updateInfo() {
  color.value = grid.value.engine.nodes.length == items.value.length ? "black" : "red";
  gridInfo.value = `Grid engine: ${grid.value.engine.nodes.length}, widgets: ${items.value.length}`;
}


</script>

