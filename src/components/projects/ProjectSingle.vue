<script>
export default {
  props: ['project'],
};
</script>

<template>
  <a
    :href="project.link"
    target="_blank"
    class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
    aria-label="Single Project"
  >
    <div>
      <img
        :src="project.img"
        :alt="project.title"
        class="rounded-t-xl border-none"
      />
    </div>
    <div class="text-center px-4 py-6">
      <p
        class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
      >
        {{ project.title }}
      </p>
      <span
        class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light"
      >
        {{ project.category }}
      </span>

      <!-- Project Details -->
      <div class="mt-4">
        <!-- Project Description -->
        <div class="mb-4">
          
          <p class="text-ternary-dark dark:text-ternary-light">
            {{ project.description }}
          </p>
        </div>

      
        <div
          class="bubble-container mb-4"
          style="display: flex; flex-wrap: wrap; gap: 8px; justify-content: center;"
        >
          <!-- Loop through stack and create a bubble for each word -->
          <span
            v-for="(stack, index) in project.stack.split(' ')"  
            :key="index"
            style="
              background-color: #007bff;
              color: #fff;
              padding: 8px;
              border-radius: 20px;
              font-size: 11px;
              font-weight: 500;
              transition: background-color 0.3s ease;
            "
            @mouseover="(event) => event.target.style.backgroundColor = '#0056b3'"
            @mouseleave="(event) => event.target.style.backgroundColor = '#007bff'"
          >
            {{ stack }}
          </span>
        
          <!-- Loop through languages and create a bubble for each word -->
          <span
            v-for="(language, index) in project.languages.split(' ')" 
            :key="index"
            style="
              background-color: #007bff;
              color: #fff;
              padding: 8px ;
              border-radius: 20px;
              font-size: 11px;
              font-weight: 500;
              transition: background-color 0.3s ease;
            "
            @mouseover="(event) => event.target.style.backgroundColor = '#0056b3'"
            @mouseleave="(event) => event.target.style.backgroundColor = '#007bff'"
          >
            {{ language }}
          </span>
        </div>
      </div>
    </div>
  </a>
</template>
