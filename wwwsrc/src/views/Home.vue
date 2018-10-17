<!-- main vue, need to partition to others for improved ux -->
<template>
  <div class="home">
    <!-- title (header) -->
    <header>
      <h1 class="font-weight-thin.font-italic">Welcome to Keepr</h1>
    </header>
    <!-- will need to add v-if="user.id" to render if no user exists -->
    <button type="button" v-on:click="Logout()" class="btn btn-primary">Logout</button>

    <div class="row">
      <div class="col-sm-12">
        <form @submit.prevent="createKeep">Create a Keep:
          <input type="text" Default="name" v-model="newKeep.name" class="form-control" placeholder="Name">
          <input type="text" Default="description" v-model="newKeep.description" class="form-control" placeholder="Description">
          <input type="text" Default="imgUrl" v-model="newKeep.imgUrl" class="form-control" placeholder="imgUrl">


          <!-- need to call newKeep on the onclick, might need function in repo -->
          <button type="submit" class="btn btn-primary">Create Keep</button>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <form @submit.prevent="createVault">Create a Vault:
          <input type="text" Default="name" v-model="newVault.name" class="form-control" placeholder="name">
          <input type="text" Default="description" v-model="newVault.description" class="form-control" placeholder="description">
          <button type="submit" class="btn btn-primary" @click="createVault">Create Vault</button>
        </form>
      </div>
    </div>
    <!-- left in for now to display data needs some better styling  -->
    <ul>
      <h1>List of Keeps:</h1>
    </ul>
    <li v-for="keep in keeps">
      <div>
        <h4>{{keep.name}}</h4>
        <h5>{{keep.description}}</h5>
        <!-- add to vault -->


        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="menuButton" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Add Keep to Vault
          </button>

          <div class="dropdown-menu" aria-labelledby="menuButton">

            <a @click="addToVault(keep.id, vault.id)" v-for="vault in vaults"><button class="btn btn-primary" @click="addToVault(keep.id, vault.id)">{{vault.name}}</button></a>


          </div>
        </div>
      </div>
    </li>




    <router-link :to="{name: 'vaults'}" v-if="user.id">GO TO VAULTS</router-link>


  </div>

</template>

<script>
  export default {
    name: "home",
    mounted() {
      this.$store.dispatch("getAllKeeps")
      if (!this.$store.state.user.id) {
        this.$router.push({ name: "login" });
      } else {
        this.$store.dispatch("getAllVaults")
      }
    },
    data() {
      return {
        newKeep: {
          title: "",
          description: "",
          imgUrl: "",
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
      user() {
        return this.$store.state.user
      }
    },
    methods: {
      addToVault(keepid, vaultid) {
        console.log(keepid, vaultid)
        this.$store.dispatch("addToVault", this.vaultid)
      },
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
        console.log("hitting getallVaultsfrom button")
        this.$store.dispatch("getAllVaults")
      },
      getKeepsByVaultId() {
        console.log("htitingKeepsByVaultIdfrom button in store")
        this.$store.dispatch("getKeepsByVaultId")
      },
      Logout() { }
    }
  };
</script>