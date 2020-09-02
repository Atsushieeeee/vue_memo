<template>
  <div class="editor">
    <h1>New Memo</h1>
    <textarea name="memo" v-model="memobody"></textarea>
    <button @click="save">保存</button>
  </div>
</template>

