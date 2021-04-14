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
      <tbody>
        <order-table-row
          v-for="order in orders"
          :key="order.orderNumber"
          :orderNumber="order.orderNumber"
          :orderDate="new Date(order.orderDate)"
          :orderStatus="order.orderStatus"
          :scheduledDateTime="new Date(order.scheduledDateTime)"
          :deliveredDateTime="new Date(order.deliveredDateTime)"
        />
      </tbody>
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
  data() {
    return {
      orders: [],
    };
  },
  async created() {
    const response = await fetch("http://localhost:8081/orders", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    this.orders = await response.json();
  },
};
</script>

<style>
</style>
