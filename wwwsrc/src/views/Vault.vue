<template>
  <div class="vault">
    {{vaultId.title}}
    <form v-on:submit.prevent="createVault">
      <input type="text" name="title" v-model="newVault.title" placeholder="New Vault">
      <input type="text" name="description" v-model="newVault.description" placeholder="description">
      <button class="btn btn-success" type="submit">Send It</button>
    </form>
    <list :listData="vault" v-for="vault in vaults" :key="vault._id" />

    <!-- <button class="btn btn-light" type="submit">Logout</button> -->
  </div>

</template>

<script>
  import vault from "../views/Vaults.vue"
  export default {
    name: "vault",
    data() {
      return {
        newVault: { title: "", description: "" }
      }
    },
    created() {
      //blocks users not logged in
      if (!this.$store.state.user._id) {
        this.$router.push({ name: "login" });
      }
      else (this.$store.dispatch("getVaults", this.boardId))
    },
    props: ["vaultId"],
    computed: {
      vaults() {
        return this.$store.state.vaults
      },
    },
    keeps() {
      return this.$store.state.keeps
    }
    ,
    components: {
      vault
    },
    methods: {
      getVault() { this.$store.dispatch("register", this.newUser); },
      createVault() {
        this.$store.dispatch("addVault", this.newVault)
        console.log("Hello from createVault")
      }
    }
  };
</script>