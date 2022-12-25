export default {
	name: 'Home',

	setup() {
		const title = 'Home page';
		return {title};
	},

	template: `
		<div>
			{{ title }}
		</div>

		<!-- https://formkit.com/ -->
		<!-- TODO: add AutoAnimate plugin: https://formkit.com/plugins/auto-animate -->
		<!-- IDEAS: multi-step form: https://formkit.com/guides/build-a-multi-step-form (great multi-step form to get ideas from: https://my.postnord.no/send) -->
		<div>
			<FormKit
				type="text"
				name="name"
				label="Name"
				validation="length:0,5"
				validation-visibility="live"
				placeholder="“Jon Doe”"
				help="Your full name"
			/>
		</div>
	`,
};
