<script>
import AboutClientSingle from './AboutClientSingle.vue';

export default {
	components: {
		AboutClientSingle,
	},
	data: () => {
		return {
			clientsHeading: 'Some of the brands I have worked with',
			clients: [
				{
					id: 1,
					title: 'Dinsa Pendidikan',
					img: require('@/assets/images/brands/dikbud.png'),
				},
				{
					id: 2,
					title: 'MI Bandasari',
					img: require('@/assets/images/brands/mi_bandasari.png'),
				},
				{
					id: 3,
					title: 'PT BPR Nusamba Adiwerna',
					img: require('@/assets/images/brands/nusamba.png'),
				}
			],
		};
	},
};
</script>

<template>
	<div class="mt-10 sm:mt-20">
		<p
			class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
		>
			{{ clientsHeading }}
		</p>
		<div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
			<AboutClientSingle
				v-for="client in clients"
				:key="client.id"
				:client="client"
			/>
		</div>
	</div>
</template>
