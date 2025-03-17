<script>
export default {
	data() {
		return {
			subject: '',
			message: ''
		};
	},
	methods: {
		sendEmail() {
			const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=egowinasis12@gmail.com&su=${encodeURIComponent(this.subject)}&body=${encodeURIComponent(this.message)}`;
			window.open(gmailUrl, '_blank');
		}
	}
};
</script>

<template>
	<div class="w-full md:w-1/2">
		<div class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left">
			<p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
				Contact Form
			</p>
			<form @submit.prevent="sendEmail" class="font-general-regular space-y-7">
				<!-- Subject Input -->
				<div>
					<label class="block mb-1">Subject</label>
					<input
						type="text"
						v-model="subject"
						class="w-full p-2 border rounded"
						placeholder="Enter Subject"
					/>
				</div>

				<!-- Message Textarea -->
				<div>
					<label class="block mb-1">Message</label>
					<textarea
						v-model="message"
						class="w-full p-2 border rounded"
						placeholder="Enter Message"
						rows="5"
					></textarea>
				</div>

				<!-- Button -->
				<div>
					<button
						class="px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
						type="submit"
					>
						Send
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<style scoped>
/* Optional custom styling */
</style>
