<template>
  <div class="container">
    <h4>Title of page 2</h4>
    <div>
      <div class="filter-section">
        <strong>Filter</strong>
        <div style="display: flex">
          <div class="filter-group">
            <div class="form-group">
              <label>XXX</label>
              <input type="text">
            </div>
            <div class="form-group">
              <label>
                XXX
                <input type="checkbox">
              </label>
            </div>
          </div>
          <div class="filter-group">
            <div class="form-group">
              <label>
                XXX
                <input type="radio">
              </label>
            </div>
            <div class="form-group">
              <label>
                XXX
                <input type="radio">
              </label>
            </div>
          </div>
          <div class="filter-group">
            <button @click="filter">Filter</button>
          </div>
        </div>
      </div>
      <div class="data-group">
        <div class="data-item">
          <label>Data 1</label>
          <textarea class="page2-data" :value="data1"/>
        </div>
        <div class="data-item">
          <label>Data 2</label>
          <textarea class="page2-data" :value="data2"/>
        </div>
        <div class="data-item">
          <label>Data 3</label>
          <textarea class="page2-data" :value="data3"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data1: 'this is data 1',
      data2: 'this is data 2',
      data3: '',
      filterOptions: {}
    }
  },
  methods: {
    filter () {
      this.data3 = 'this is filtered result'
    }
  }
}
</script>

<style>
  .filter-section {
    border: 1px solid gray;
    padding: 10px;
  }
  .filter-group {
    padding: 5px;
  }
  .filter-group:last-child {
    flex: 1;
    text-align: right;
  }
  .data-group {
    display: flex;
  }
  .data-item {
    display: flex;
    padding: 5px;
    flex-direction: column;
    flex-basis: 33.33%;
  }
  .page2-data {
    height: 600px;
  }
</style>
