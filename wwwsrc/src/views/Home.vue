<template>
  <div class="home">
    <h1>Welcome to Keepr</h1>
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