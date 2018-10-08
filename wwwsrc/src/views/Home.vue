<template>
  <div class="home">
    <h1>Welcome to Keepr</h1>
    <!-- need to add onsubmit to create new keep -->
    <form>form for creating keeps
      <input type="text" Default="name">
      <input type="text" Default="description">
      <!-- need to call newKeep on the onclick, might need function in repo -->
      <input type="submit" v-on:submit="newKeep()">
    </form>
    <form>form for creating vaults
      <input type="text" Default="name">
      <input type="text" Default="description">
      <!-- need to call new vault function out of repo (i think, maybe vault model) -->
      <input type="submit" v-on:submit="">
    </form>
    <ul>unordered list for keeps here</ul>
    <!-- need to add logic to logout and @click -->
    <button>Logout</button>
  </div>
</template>

<script>
  export default {
    name: "home",
    mounted() {
      //blocks users not logged in
      if (!this.$store.state.user.id) {
        this.$router.push({ name: "login" });
      }
    }
  };
</script>