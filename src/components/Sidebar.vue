<template>
  <div class="sidebar">
      <h1>Sidebar</h1>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
}
</script>

<style scoped>
    .sidebar {
        grid-area: a;
        position: fixed;
        top: 0;
        width: 250px;
        height: 100%;
        background: #fff;
        box-shadow: 0 0 2rem 0 rgba(136,152,170,.15);
    }
</style>