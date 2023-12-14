<template>
  <header>
    <div
      id="nav"
      class="bg-red-200"
    >
      <router-link to="/">Home</router-link> |
      <router-link to="/board/list">게시판</router-link>
    </div>
  </header>
  <hr />
</template>

<script>
export default {
  name: "PageHeader",
};
</script>

<style scoped>
</style>