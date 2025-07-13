<script>
import OrderForm from '../components/Orders/OrderForm.vue';
import OrderTable from '../components/Orders/OrderTable.vue';
import { fetchOrders } from '../services/OrderService.js'; // Assuming you have an API function to fetch orders
export default {
  name: 'OrderView',
  components: {
    OrderForm,
    OrderTable
  },
  data() {
    return {
      orders: [],
      meta: {
        current_page: 1,
        last_page: 1,
        total: 0,
        per_page: 10
      }
    };
  },
  methods: {
    async loadOrders(page = 1) {
      try {
        const response = await fetchOrders({ page });
        this.orders = response?.data?.data || [];
        this.meta = response?.data?.meta || {
          current_page: 1,
          last_page: 1,
          total: 0,
          per_page: 10
        };
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    },
    handlePageChange(page) {
      this.loadOrders(page);
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
        <OrderForm @order-submitted="loadOrders" />
        <div class="mb-6">
          <OrderTable :orders="orders" @status-updated="loadOrders" />
          <div class="mt-4 flex justify-between items-center">
            <span class="text-sm text-gray-600">Showing {{ meta.per_page }} of {{ meta.total }} orders</span>
            <nav>
              <ul class="flex space-x-2">
                <li v-for="page in meta.last_page" :key="page">
                  <button @click="handlePageChange(page)"
                    :class="['px-3 py-1 rounded', page === meta.current_page ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700']">
                    {{ page }}
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
