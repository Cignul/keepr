<!-- need to get this linked when clicking a specific vault -->
<!-- this serves as my dashboard -->

<template>
  <div class="vaults">
    Here are your vaults:
    <form @submit.prevent="addVault">
      <input type="text" placeholder="New Vault" v-model="newVault.title" required>
      <input type="text" placeholder="description" v-model="newVault.description">
      <button class="btn btn-success" type="submit">Create Vault</button>
    </form>
    <div v-for="Vault in vaults" :key="Vault._id">
      <router-link :to="{name: 'vault', params: {vaultId: Vault.id}}">{{Vault.name}}</router-link>
      <button class="btn btn-dark" @click="deleteVault(Vault._id)">Delete Vault</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "vaults",
    created() {
      //blocks users not logged in
      if (!this.$store.state.user.id) {
        this.$router.push({ name: "login" });
      }
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