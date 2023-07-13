<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'I am a full stack web developer with 1 year experience in web application development and maintenance. I have strong skills in HTML, CSS, JavaScript, PHP and MySQL. I am able to work independently and in a team. I am detail oriented and results oriented. I believe that I have the skills and experience needed to be an asset to your company. I am very interested in learning more about the full stack web developer position at your company. Thank you for your time and consideration.',
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
				src="@/assets/images/profile.jpeg"
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
