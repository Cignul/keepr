<template>
  <div class="vault">
    {{vault.name}}

    <!-- EDIT TO MAKE PRETTY -->
    <ul>
      <li v-for="vk in vaultKeeps">
        <h4>vk.name</h4>
        <h5>vk.description</h5>
        <!-- button for deleting vk -->
        <button @click="">delete keep from this vault</button>
      </li>
    </ul>
  </div>

</template>

<script>
  import vault from "../views/Vaults.vue"
  export default {
    name: "vault",
    mounted() {
      this.$store.dispatch("getVaultKeeps", this.vaultId)
    },
    data() {
      return {
        newVault: { title: "", description: "" }
      }
    },
    props: ["vaultId"],
    computed: {
      vault() {
        return this.$store.state.vaults.find(v => v.id == this.vaultId) || {}
      },
      vaultKeeps() {
        return this.$store.state.vaultKeeps
      }
    },
    methods: {
      getVaultKeeps() { }
    }
  };
</script>