<template>
  <div class="vaults">
    Here are your vaults:
    <form @submit.prevent="addVault">
      <input type="text" placeholder="New Vault" v-model="newVault.title" required>
      <input type="text" placeholder="description" v-model="newVaut.description">
      <button class="btn btn-success" type="submit">Create Vault</button>
    </form>
    <div v-for="Vault in vaults" :key="Vault._id">
      <router-link :to="{name: 'vault', params: {vaultId: Vault._id}}">{{Vault.title}}</router-link>
      <button class="btn btn-dark" @click="deleteVault(Vault._id)">Delete Vault</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "vaults",
    created() {
      //blocks users not logged in
      if (!this.$store.state.user._id) {
        this.$router.push({ name: "login" });
      }
    },
    mounted() {
      this.$store.dispatch("getVaults");
    },
    data() {
      return {
        newVault: {
          title: "",
          description: "",
          vaultId: "",
          userId: ""
        }
      };
    },
    computed: {
      vaults() {
        return this.$store.state.vaults;
      }
    },
    methods: {
      addVault() {
        this.$store.dispatch("addVault", this.newVault);
        this.newVault = { title: "", description: "", vaultId: "", userId: "" };
      },
      deleteVault(vaultId) {
        this.$store.dispatch("deleteVault", vaultId);
      }
    }
  };
</script>