<script>
import { createOrder } from '../../services/OrderService.js';
export default {
  name: 'OrderForm',
  data() {
    return {
      form: {
        customer_name: '',
        item_name: '',
        price: null,
      },
    };
  },
  methods: {
    async submit() {
      try {
        await createOrder({ ...this.form, status: 'pending' })
        this.resetForm();
        this.$emit('order-submitted');
      } catch (error) {
        alert('Error submitting order');
        console.error('Error submitting order:', error);
      }
    },
    resetForm() {
      this.form = {
        customer_name: '',
        item_name: '',
        price: null,
      };
    },
  },
};
</script>
<template>
  <form class="bg-white shadow p-4 rounded mb-6" @submit.prevent="submit">
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <input required type="text" v-model="form.customer_name" placeholder="Customer Name" class="input" />
      <input required type="text" v-model="form.item_name" placeholder="Item Name" class="input" />
      <input required type="number" step="0.01" min="0" v-model="form.price" placeholder="Price" class="input" />
    </div>
    <button class="mt-4 px-4 py-2 bg-blue-600 text-white  rounded hover:bg-blue-700">
      Create Order
    </button>
  </form>
</template>
<style scoped>
.input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.375rem;
}
</style>