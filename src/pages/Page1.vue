<template>
  <div class="container">
    <h4>Title of page 1</h4>
    <div>
      <div class="form-group">
        <input class="form-control" type="text" v-model="link"/>
        <button @click="check">Check</button>
      </div>
      <div>
        <textarea id="page1-result" :value="checkResult"/>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      link: '',
      checkResult: ''
    }
  },
  methods: {
    check () {
      this.checkResult = 'This is check result of ' + this.link
    }
  }
}

</script>

<style>
  .form-group {
    margin: 10px 0;
  }
  .container {
    max-width: 900px;
    margin: 0 auto;
  }
  #page1-result {
    width: 100%;
    min-height: 400px;
  }
  textarea {
    padding: 5px;
  }
</style>
