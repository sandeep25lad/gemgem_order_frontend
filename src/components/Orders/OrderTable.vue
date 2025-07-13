<script>
export default {
  name: 'OrderTable',
  props: {
    orders: Array,
  },
  methods: {
    updateStatus(order) {
      // Logic to update the order status
      console.log(`Updating status for order ${order.id} to ${order.status}`);
    },
  },
};
</script>

<template>
  <table class="w-full text-left bg-white shadow rounded">
    <thead>
      <tr class="border-b">
        <th class="p-2">Customer</th>
        <th class="p-2">Item</th>
        <th class="p-2">Price</th>
        <th class="p-2">Status</th>
        <th class="p-2">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="order in orders" :key="order.id" class="border-b">
        <td class="p-2">{{ order.customer_name }}</td>
        <td class="p-2">{{ order.item_name }}</td>
        <td class="p-2">${{ order.price }}</td>
        <td class="p-2 capitalize">{{ order.status }}</td>
        <td class="p-2">
          <select v-model="order.status" @change="updateStatus(order)" class="border rounded px-2 py-1 capitalize">
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </td>
      </tr>
    </tbody>
  </table>
</template>