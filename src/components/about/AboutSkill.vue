<template>
  <div class="p-6 max-w-7xl mx-auto">
    <h2 class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light my-8">My Skills</h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      <div
        v-for="skill in skills"
        :key="skill.name"
        class="bg-white shadow-md rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:shadow-lg transition"
      >
        <div v-html="getIcon(skill.icon)" class="w-8 h-8 text-gray-700 mb-2"></div>
        <h3 class="font-general-medium text-base">{{ skill.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import feather from 'feather-icons';
export default {
  name: 'SkillSection',
  data() {
    return {
      skills: [
        { name: 'HTML', icon: 'code' },
        { name: 'CSS', icon: 'sliders' },
        { name: 'JavaScript', icon: 'cpu' },
        { name: 'Vue', icon: 'layers' },
        { name: 'React', icon: 'activity' },
        { name: 'Next.js', icon: 'cloud' },
        { name: 'Laravel', icon: 'terminal' },
        { name: 'CodeIgniter', icon: 'server' },
        { name: 'PHP', icon: 'code' },
        { name: 'MySQL', icon: 'database' },
        { name: 'Python', icon: 'terminal' },
        { name: 'Linux', icon: 'command' },
        { name: 'GitHub', icon: 'git-branch' },
        { name: 'Vercel', icon: 'cloud' },
        { name: 'Network', icon: 'share-2' },
        { name: 'CCTV', icon: 'monitor' },
        { name: 'UI/UX', icon: 'eye' },
        { name: 'Desktop App', icon: 'monitor' },
        { name: 'Design', icon: 'layout' },
        { name: 'Data Entry', icon: 'edit-3' } 
      ]
    };
  },
  methods: {
    getIcon(name) {
      return feather.icons[name]?.toSvg({ class: 'w-8 h-8' }) || '';
    }
  }
};
</script>

<style scoped>
svg {
  stroke: #4b5563; /* Tailwind's text-gray-700 */
}
</style>
