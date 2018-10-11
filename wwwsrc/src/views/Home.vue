<template>
  <div class="home">
    <h1>Welcome to Keepr</h1>

    <!-- need to add onsubmit to create new keep -->
    <form>form for creating keeps
      <input type="text" Default="name" v-model="newKeep.name">
      <input type="text" Default="description" v-model="newKeep.description">
      <!-- need to call newKeep on the onclick, might need function in repo -->
      <input type="button" v-on:click="createKeep()">
    </form>
    <button type="button" v-on:click="GetAll()">get all keeps</button>

    <form>form for creating vaults
      <input type="text" Default="name" v-model="newVault.name">
      <input type="text" Default="description" v-model="newVault.description">
      <!-- need to call new vault function out of repo (i think, maybe vault model) -->
      <input type="button" v-on:click="createVault()">
    </form>
    <button type="button" v-on:click="getAllVaults()">get all vaults</button>

    <ul>unordered list for keeps here</ul>
    <li v-for="keep in keeps">{{keep.name}}</li>
    <!-- need to add logic to logout and @click -->
    <button v-on:click="Logout()">Logout</button>

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
    },
    data() {
      return {
        newKeep: {
          title: "",
          description: ""
        },
        newVault: {
          title: "",
          description: ""
        }
      };
    },
    computed: {
      keeps() {
        return this.$store.state.keeps
      },
      vaults() {
        return this.$store.state.vaults
      }
    },
    methods: {
      createKeep() {
        console.log("hitting create keep from button")
        this.$store.dispatch("createKeep", this.newKeep)
      },
      GetAll() {
        console.log("hitting getAll from button")
        this.$store.dispatch("getAllKeeps")
      },
      createVault() {
        console.log("hitting create vault from button")
        this.$store.dispatch("createVault", this.newVault)
      },
      getAllVaults() {
        console.log("hitting getallVAultsfrom button")
        this.$store.dispatch("getAllVaults")
      }
      // },
      // GetById() {
      //   console.log("hitting getBYId in home.vue")
      //   this.$store.dispatch("GetById", this.GetById)
    }
  };
</script>