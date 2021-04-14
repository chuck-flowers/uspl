<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Order Number</th>
          <th scope="col">Order Date</th>
          <th scope="col">Order Status</th>
          <th scope="col">Scheduled Date Time</th>
          <th scope="col">Delivered Date Time</th>
        </tr>
      </thead>
      <tbody>
        <order-table-row
          v-for="order in orders"
          :key="order.orderNumber"
          :orderNumber="order.orderNumber"
          :orderDate="stringToDate(order.orderDate)"
          :orderStatus="order.orderStatus"
          :scheduledDateTime="stringToDate(order.scheduledDateTime)"
          :deliveredDateTime="stringToDate(order.deliveredDateTime)"
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
  methods: {
    stringToDate(str) {
      if (str === null) {
        return null;
      } else {
        return new Date(str);
      }
    },
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
