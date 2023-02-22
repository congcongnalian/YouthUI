<template>
  <div class="table" ref="Table">
    <spin :spinning="loading"></spin>

    <div :class="innerClass">
      <table-header :header-list="columns" :width="_table_width"></table-header>

      <div class="table-body-area" :style="bodyAreaStyle">
        <div class="scrollbar"></div>

        <table class="table-body" :style="`width:${_table_width}px`">
          <col-group :cols="columns"></col-group>

          <tbody class="table-body-tbody">
            <table-empty v-if="isEmpty" :colspan="columns.length"></table-empty>

            <template v-else>
              <tr v-for="(item, index) in dataSource" :key="`table-tbody-tr-${index}`">
                <td
                  v-for="(v, k) in columns"
                  :key="`table-tbody-td-${index}-${k}`"
                  :class="tdClass(v)"
                >
                  <template v-if="!v.scope">{{ item[v.key] }}</template>

                  <slot
                    v-else
                    :name="v.scope.customRender"
                    :row="item"
                    :index="index"
                    :data="item[v.key]"
                  ></slot>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import { useTable } from './table.js';
import TableHeader from "./table-header.vue";
import TableEmpty from "./empty.vue";
import ColGroup from "./col-group.vue";

const props = defineProps({
  cols: { type: Array, default: () => [] }, // 表格头部列表 Table header list
  dataSource: { type: Array, default: () => [] }, // 表格数据 Table data source
  height: { type: String, default: "" }, // 固定高度 Fixed height
  loading: { type: Boolean, default: false }, // 加载状态 loading or not
  border: { type: Boolean, default: false }, // 展示边框 Bordered or not
  stripe: { type: Boolean, default: false }, // 斑马纹 Stripe or not
});

const { Table, columns, _table_width } = useTable(props);

const isEmpty = computed(() => props.dataSource.length === 0);
const hasBorder = computed(() => props.border);
const isStripe = computed(() => props.stripe);
const fixedHeight = computed(() => props.height);

const bodyAreaStyle = computed(() => {
  if (props.height) {
    return `width:${_table_width.value}px;max-height:${props.height}px;height:${props.height}px;overflow-y:auto`
  }
  return `width:${_table_width.value}px`;
});

const innerClass = computed(() => {
  let name = ["table-inner",
    { "table-border": hasBorder.value },
    { "table-stripe": isStripe.value },
    { "table-fixed-header": fixedHeight.value }
  ];
  return name;
});

const tdClass = (v) => {
  let align = `text-${v['align'] || 'left'}`;

  let name = [align];
  return name;
}

</script>

<script>
export default { name: "table" };
</script>
