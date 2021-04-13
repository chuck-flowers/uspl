<template>
  <tr>
    <td>{{ orderNumber }}</td>
    <td>{{ orderDate }}</td>
    <td>{{ orderStatus }}</td>
    <td>{{ scheduledDateTime }}</td>
    <td>{{ deliveredDateTime }}</td>
  </tr>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  props: {
    orderNumber: String,
    orderDate: String,
    orderStatus: String,
    scheduledDateTime: String,
    deliveredDateTime: String,
  },
};
</script>