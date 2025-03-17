<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio: "I am a diploma graduate in Computer Engineering and currently pursuing a bachelor's degree in Information Systems. With a strong educational background and diverse professional experience, I have developed expertise in IT support, programming, network engineering, and specialization in CCTV, software, and hardware. I also have experience in data entry, graphic design, and digital marketing. Throughout my career, I have worked on various projects such as IT system and network management, CCTV installation, creative design, and digital marketing campaigns. My skills are supported by relevant professional certifications, which reflect my dedication to continuous learning and delivering the best technology solutions. My key skills include IT support (administration, troubleshooting, maintenance), programming (web and application development), network administration and CCTV installation, hardware and software maintenance, high-accuracy data entry, graphic design using tools like Canva, CorelDraw, and Photoshop, as well as digital marketing and social media management. I am always open to new opportunities and collaborations in the technology and creative fields. Let's connect and discuss how we can work together!"
				}
				
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profile2.jpeg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
