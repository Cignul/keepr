<template>
  <div class="vault">
    {{vault.title}}
    <!-- this might not work here wrong var name i think-->
    <keep :keepData="keep" v-for="keep in keeps" :key="keep._id" />
    <form v-on:submit.prevent="createKeep">
      <input type="text" name="description" v-model="newKeep.description" placeholder="keep description">
      <button class="btn btn-success" type="submit">Add Keep</button>
    </form>
    <button class="btn btn-light" v-on:submit.prevent="deleteVault" @click="deleteVault">Delete Vault</button>
  </div>
</template>

<script>
  // draw keeps on vault
  import keep from "../../Models/Keep.cs"
  export default {
    name: "vault",
    created() {
      this.$store.dispatch("getKeeps", this.vault._id)
    },
    props: ["keepData"],
    data() {
      return {
        newKeep: {
          vaultId: this.keepData._id,
          description: ''
        }
      }
    },
    methods: {
      createKeep() {
        this.$store.dispatch('addKeep', this.newKeep)
      },
      deleteKeep() {
        this.$store.dispatch('deleteKeep', this.keepData._id)
      }
    },
    computed: {
      keeps() {
        return this.$store.state.keeps[this.keepData._id] || []
      }
    },
    components: {
      keep
    }
  }
</script>