<template>
  User：{{ userInfo.name }} == {{ userInfo.age }}
  <br>
  <div style="display: flex">
    <a-button type="primary" @click="fun" style="margin-right: 20px;">修改值</a-button>
    <a-button type="primary" @click="fun1" :loading="loading">请求数据</a-button>
  </div>
  <div>
<!--    <div>{{userStore.getHits}}</div>-->
    <div v-for="item in (userStore.getHits)" :key="item.objectID">
      111{{item.author}}
    </div>
    <ul id="example-1">
      <li v-for="item in []">
        {{ item.message }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {useUserStore} from "@/stores/module/user"
import {storeToRefs} from "pinia"
import {ref, reactive} from "vue";

const userStore = useUserStore()
const {userInfo} = storeToRefs(userStore)

const loading = ref(false);
let listData = reactive([])

const fun = () => {
  // userStore.name = "zhangsan"
  // userStore.age = 18

  userStore.setInfo({
    name: 'zhangsan',
    age: 18,
  })
}

async function fun1() {
  try {
    loading.value = true;
    const userInfo = await userStore.getHitsApi({
      query: 'react'
    })
    listData  = (userInfo as unknown as any).hits
    console.log(listData);
  }catch (error) {
    console.log(error);
  } finally {
      loading.value = false;
  }
}
</script>
<style scoped>

</style>
