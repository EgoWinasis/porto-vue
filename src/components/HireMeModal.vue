<template>
  <transition name="fade">
    <div v-show="modal" class="fixed inset-0 z-50 flex items-center justify-center">
      <!-- Backdrop -->
      <div class="fixed inset-0 bg-black bg-opacity-50" @click="showModal()"></div>

      <!-- Modal -->
      <div class="bg-white w-full max-w-lg rounded-lg shadow-lg z-50 flex flex-col">
        <!-- Header -->
        <div class="flex justify-between items-center px-4 py-3 border-b border-gray-200">
          <h5 class="font-semibold">Hire Me Form</h5>
          <button @click="showModal()">
            <i data-feather="x"></i>
          </button>
        </div>

        <!-- Body -->
        <div class="p-4 space-y-3">
          <input
            v-model="name"
            type="text"
            placeholder="Full Name"
            class="w-full border-b focus:outline-none pb-1"
          />
          <input
            v-model="email"
            type="email"
            placeholder="Your Email"
            class="w-full border-b focus:outline-none pb-1"
          />
          <select v-model="projectType" class="w-full border-b focus:outline-none pb-1">
            <option disabled value="">Select Project Type</option>
            <option v-for="category in categories" :key="category.id" :value="category.name">
              {{ category.name }}
            </option>
          </select>
          <textarea
            v-model="details"
            rows="5"
            placeholder="Project Details"
            class="w-full resize-none focus:outline-none"
          ></textarea>
        </div>

        <!-- Footer -->
        <div class="flex items-center justify-between px-4 py-3 border-t border-gray-200">
          <a
            :href="gmailLink"
            target="_blank"
            rel="noopener"
            class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Send via Gmail
          </a>
          <button @click="showModal()" class="hover:bg-gray-200 p-2 rounded">Close</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import feather from 'feather-icons';

export default {
  props: ['showModal', 'modal', 'categories'],
  data() {
    return {
      name: '',
      email: '',
      projectType: '',
      details: '',
    };
  },
  computed: {
    gmailLink() {
      const subject = encodeURIComponent(`Hire Me - ${this.projectType}`);
      const body = encodeURIComponent(
        `Full Name: ${this.name}\nEmail: ${this.email}\n\nDetails:\n${this.details}`
      );
      return `https://mail.google.com/mail/?view=cm&fs=1&to=egowinasis12@gmail.com&su=${subject}&body=${body}`;
    },
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>
