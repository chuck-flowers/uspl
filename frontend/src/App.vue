<template>
  <div>
    <h1>Current Orders</h1>
    <table class="table">
      <thead>
        <tr>
          <th>Order Number</th>
          <th>Order Date</th>
          <th>Order Status</th>
          <th>Scheduled Date Time</th>
          <th>Delivered Date Time</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </div>
</template>

<script>
import OrderTableRow from "./components/OrderTableRow.vue";
export default {
  name: "App",
  components: {
    OrderTableRow,
  },
};
</script>

<style>
</style>
