<template>
  <div class="home">
    <h1>Welcome to Keepr</h1>
    <!-- need to add onsubmit to create new keep -->
    <form>form for creating keeps
      <input type="text" Default="name">
      <input type="text" Default="description">
      <input type="submit">
    </form>
    <form>form for creating vaults
      <input type="text" Default="name">
      <input type="text" Default="description">
      <input type="submit">
    </form>
    <ul>spot for keeps</ul>
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