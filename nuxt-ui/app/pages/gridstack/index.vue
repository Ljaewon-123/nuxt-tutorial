<template>
<div class="background-line my-4">
  <button @click="addWidget">add</button>
  <br>
  <button @click="deleteWidget" disabled>delete xx</button>
  <br>
  <button @click="grid.compact()">compact</button>
  <br>
  <button @click="currentItem">current gird item</button>
  <div class="p-8 bg-gray-50 min-h-screen">
    <div class="grid-stack stack-line">
      <div
        v-for="widget in widgets"
        :key="widget.id"
        :id="widget.id"
        :gs-id="widget.id"
        :gs-x="widget.grid.x"
        :gs-y="widget.grid.y"
        :gs-w="widget.grid.w"
        :gs-h="widget.grid.h"
        @click="deleteWidget(widget)"
      >
        <div
          class="grid-stack-item-content p-4 bg-white rounded-md shadow-md flex items-center justify-center text-gray-700"
        >
          <span class="text-2xl">
            {{ widget.title }}
          </span>
        </div>
      </div>
    </div>
  </div>
  <!-- <button @click="toggleEdit" outline>
    {{ isEditing ? "Stop Editing" : "Start Editing" }}
  </button> -->
</div>
</template>

<!-- 초기 학습위한 js -->
<script setup >
import { GridStack } from 'gridstack';
import "gridstack/dist/gridstack.min.css";
import "gridstack/dist/gridstack-extra.min.css";

/* 
가끔 법칙무시하는 놈은 필수인 grid-stack-item가 포함이 안되어 있다 
ref로 잡던지 쿼리셀렉토로 class추가하던지 해야한다 
*/

const widgets = ref([
  {
    id: 1,
    title: "First Widget",
    grid: {
      x: 0,
      y: 0,
      w: 2,
      h: 2,
    },
  },
  {
    id: 2,
    title: "Second Widget",
    grid: {
      x: 2,
      y: 0,
      w: 2,
      h: 1,
    },
  },
  {
    id: 3,
    title: "Third Widget",
    grid: {
      x: 0,
      y: 2,
      w: 2,
      h: 1,
    },
  },
  {
    id: 4,
    title: "Fourth Widget",
    grid: {
      x: 2,
      y: 2,
      w: 1,
      h: 2,
    },
  },
  {
    id: 5,
    title: "Fifth Widget",
    grid: {
      x: 3,
      y: 2,
      w: 1,
      h: 2,
    },
  },
])
const grid = ref();
function toggleEdit() {
  if (isEditing.value) {
    grid.value.disable();
  } else {
    grid.value.enable();
  }
  isEditing.value = !isEditing.value;
}
function initGridStack() {
  // disableResize , disableDrag 수정 불가능하게도 가능 
  grid.value = GridStack.init({
    column: 4,
    cellHeight: 100,
    minRow: 1,
    margin: 10,
  });
  makeWidgets(widgets.value);
}
function makeWidgets(widgets) {
  widgets.forEach((widget) => {
    makeWidget(widget);
  });
}
function makeWidget(item) {
  const elSelector = `#${item.id}`;
  return grid.value.makeWidget(elSelector);
}

async function addWidget() {
  const widgetCount = widgets.value.length + 1;
  const widget = {
    id: widgetCount,
    title: `Widget ${widgetCount}`,
    grid: {
      w: 1,
      h: 1,
    },
  };
  widgets.value.push(widget);
  // debugger
  // // 여기에서 비대화형으로 추가되고 
  await nextTick();
  // // 이 디버거 에서 제대로 걸렸어야함 
  // // 삭제후 처음만 제대로 추가안됨 
  // 콘솔에는 있는데 template가면 없네;;; 
  // debugger
  makeWidget(widget)

}
function deleteWidget(widget) {
  const index = widgets.value.findIndex((w) => w.id === widget.id);
  if (index === -1) {
    return;
  }
  const selector = `#${CSS.escape(widget.id)}`;
  grid.value.removeWidget(selector);
  widgets.value.splice(index, 1);

}
const currentItem = () => {
  console.log(grid.value, 'grid')
  console.log(widgets.value, 'widgets')
}
/* 
cellHeight: 100 h 5면 한 위젯당 500px의 크기 
*/

// ssr 불친화적 라이브러리 사용시 
// spa or 컴포넌트 분리후 client-only or 확실한 client-side hook 이용 
onMounted(() => {
  initGridStack();
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