<template>
  <tr>
    <td>{{ orderNumber }}</td>
    <td>{{ formattedOrderDate }}</td>
    <td>{{ formattedStatus }}</td>
    <td>{{ formattedScheduledDateTime }}</td>
    <td>{{ formattedDeliveredDateTime }}</td>
  </tr>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    padNumber(number, minDigits) {
      var numberStr = number.toString();
      const originalLength = numberStr.length;
      for (var i = 0; i < minDigits - originalLength; i++) {
        numberStr = "0" + numberStr;
      }

      return numberStr;
    },
    formatDate(date) {
      if (date === null) {
        return "";
      }

      const year = this.padNumber(date.getFullYear(), 4);
      const month = this.padNumber(date.getMonth() + 1, 2);
      const day = this.padNumber(date.getDate(), 2);
      return `${year}-${month}-${day}`;
    },
    formatDateTime(date) {
      const hour = this.padNumber(date.getHours() % 12, 2);
      const minute = this.padNumber(date.getMinutes(), 2);
      const amPm = date.getHours() > 12 ? "PM" : "AM";

      return `${this.formatDate(date)} ${hour}:${minute} ${amPm}`;
    },
  },
  computed: {
    formattedOrderDate() {
      if (this.orderDate === null) {
        return "";
      }

      return this.formatDate(this.orderDate);
    },
    formattedScheduledDateTime() {
      if (this.scheduledDateTime === null) {
        return "";
      }

      return this.formatDateTime(this.scheduledDateTime);
    },
    formattedDeliveredDateTime() {
      if (this.deliveredDateTime === null) {
        return "";
      }

      return this.formatDateTime(this.deliveredDateTime);
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