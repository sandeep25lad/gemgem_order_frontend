<script>
import OrderTable from '../components/Orders/OrderTable.vue';

export default {
  name: 'OrderView',
  components: {
    OrderTable,
  },
  data() {
    return {
      orders: [
        { id: 1, customer: 'John Doe', item: 'Widget A', price: '$10.00', status: 'pending' },
        { id: 2, customer: 'Jane Smith', item: 'Widget B', price: '$20.00', status: 'paid' },
      ],
    };
  },
};
</script>

<template>
  <main>
    <section class="min-h-screen bg-gray-50 p-6">
      <div class="max-w-5xl mx-auto">
        <h1 class="text-3xl font-bold mb-4">Orders</h1>

        <OrderTable :orders="orders" />
      </div>
    </section>
  </main>
</template>
