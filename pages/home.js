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

        <div>
             <FormKit type="text" />
             <form-kit type="text" />
        </div>
	`,
};
