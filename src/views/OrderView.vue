<script>
import OrderTable from '../components/Orders/OrderTable.vue';
import { fetchOrders } from '../services/OrderService.js'; // Assuming you have an API function to fetch orders
export default {
  name: 'OrderView',
  components: {
    OrderTable,
  },
  data() {
    return {
      orders: [],
    };
  },
  methods: {
    async loadOrders() {
      try {
        const response = await fetchOrders();
        this.orders = response?.data?.data || [];
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    }
  },
  mounted() {
    this.loadOrders();
  },
};
</script>

<template>
  <main>
    <section class="min-h-screen bg-gray-50 p-6">
      <div class="max-w-5xl mx-auto">
        <h1 class="text-3xl font-bold mb-4">Orders</h1>
        <OrderTable :orders="orders" @status-updated="loadOrders" />
      </div>
    </section>
  </main>
</template>
