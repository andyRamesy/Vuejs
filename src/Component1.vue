<template>
  <div>
    <h1>list</h1>
    <ul>
      <li v-for="ls in list" :key="ls">{{ ls }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ["A", "B", "C"],
    };
  },
};
</script>

<style lang="scss" scoped>
    h1{
        color: red
    }
</style>