<script>
import AboutMe from '@/components/about/AboutMe';
import AboutCounter from '@/components/about/AboutCounter';
import AboutClients from '@/components/about/AboutClients';
import SkillSection from '@/components/about/AboutSkill';
import OccupationSection from '@/components/about/AboutOcupation';
import feather from 'feather-icons';

export default {
	name: 'About',
	components: {
		AboutMe,
		OccupationSection,
		SkillSection,
		AboutCounter,
		AboutClients,
	},
	data: () => {
		return {};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div>
		<!-- About me -->
		<div class="container mx-auto">
			<AboutMe />
		</div>
		<OccupationSection />
		
		<SkillSection />

		<!-- About counter -->
		<AboutCounter />

		<!-- About counter -->
		<div class="container mx-auto">
			<AboutClients />
		</div>
	</div>
</template>

<style scoped></style>
