<template>
  <tr
    :class="{
      'table-success': isCompletedOnTime,
      'table-danger': isCompletedLate,
    }"
  >
    <td>{{ orderNumber }}</td>
    <td>{{ orderDate | date }}</td>
    <td>{{ formattedStatus }}</td>
    <td>{{ scheduledDateTime | dateTime }}</td>
    <td>{{ deliveredDateTime | dateTime }}</td>
  </tr>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    isCompletedOnTime() {
      return (
        this.orderStatus === "C" &&
        this.scheduledDateTime >= this.deliveredDateTime
      );
    },
    isCompletedLate() {
      return (
        this.orderStatus === "C" &&
        this.scheduledDateTime < this.deliveredDateTime
      );
    },
    formattedStatus() {
      switch (this.orderStatus) {
        case "C":
          return "Completed";
        case "A":
          return "In Progress";
        default:
          console.error(`Unexpected status code '${this.orderStatus}'`);
          return "";
      }
    },
  },
  props: {
    orderNumber: String,
    orderDate: Date,
    orderStatus: String,
    scheduledDateTime: Date,
    deliveredDateTime: Date,
  },
};
</script>