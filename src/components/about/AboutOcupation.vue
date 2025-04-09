<template>
  <div class="p-6 max-w-7xl mx-auto">
    <h2 class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light my-8">My Occupations</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div
        v-for="job in occupations"
        :key="job.title"
        class="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition"
      >
        <div v-html="getIcon(job.icon)" class="mb-3 w-10 h-10 text-gray-700"></div>
        <h3 class="font-general-medium">{{ job.title }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import feather from 'feather-icons';

export default {
  name: 'OccupationSection',
  data() {
    return {
      occupations: [
        {
          title: 'Full Stack Developer',
          company: 'Freelance',
          icon: 'code'
        },
        {
          title: 'IT Support',
          company: 'Local Company',
          icon: 'monitor'
        },
        {
          title: 'UI/UX Designer',
          company: 'Personal Projects',
          icon: 'layout'
        },
        {
          title: 'Network Technician',
          company: 'Private Client',
          icon: 'wifi'
        },
        {
          title: 'CCTV Installer',
          company: 'Freelance',
          icon: 'camera'
        },
        {
          title: 'Desktop App Developer',
          company: 'Custom Orders',
          icon: 'cpu'
        }
      ]
    };
  },
  methods: {
    getIcon(name) {
      return feather.icons[name]?.toSvg({ class: 'w-10 h-10' }) || '';
    }
  }
};
</script>

<style scoped>
svg {
  stroke: #4b5563; /* Tailwind's text-gray-700 */
}
</style>
