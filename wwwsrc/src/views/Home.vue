<template>
  <div class="home">
    <header>
      <h1 class="font-weight-thin.font-italic">Welcome to Keepr</h1>
    </header>

    <!-- need to add onsubmit to create new keep -->
    <div class="row">
      <div class="col-sm-12">
        <form>Create a Keep:
          <input type="text" Default="name" v-model="newKeep.name" class="form-control">
          <input type="text" Default="description" v-model="newKeep.description" class="form-control">
          <!-- need to call newKeep on the onclick, might need function in repo -->
          Create Keep-><input type="button" class="btn btn-primary" v-on:click="createKeep()">
        </form>
        <button type="button" v-on:click="GetAll()" class="btn btn-primary">get all keeps</button>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <form>Create a Vault:
          <input type="text" Default="name" v-model="newVault.name" class="form-control">
          <input type="text" Default="description" v-model="newVault.description" class="form-control">
          <!-- need to call new vault function out of repo (i think, maybe vault model) -->
          Create Vault-> <input type="button" v-on:click="createVault()" class="btn btn-primary">
        </form>
        <button type="button" v-on:click="getAllVaults()" class="btn btn-primary">get all vaults</button>
      </div>
    </div>
    <ul>List of Keeps:</ul>
    <li v-for="keep in keeps">{{keep.name}}</li>

    <ul>List of Vaults:</ul>
    <li v-for="vault in vaults">{{vaults}}</li>
    <!-- need to add logic to logout and @click -->
    <button v-on:click="Logout()">Logout</button>

    <div>
      <!-- Vuetify CARD attempt (from docs) -->
      <v-layout>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-img class="white--text" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline">Vault: $"{vault}"</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-title>
              <div>
                <span class="grey--text">Vault name</span><br>
                <span>need interpolation for title</span><br>
                <span>need interpolation here (description)</span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="orange">View</v-btn>
              <v-btn flat color="orange">Like</v-btn>
              <v-btn flat color="orange">Share</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
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
      },
      Lougout() {
        return this.$store.state.setUser = false;
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