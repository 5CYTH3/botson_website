<script lang="ts">
	import Card from "$lib/components/pages/extensions/Card.svelte";
	import Grid from "$lib/components/pages/extensions/Grid.svelte";
	import Text from "$lib/components/utils/Text.svelte";

	export let data;
	const { extensions } = data;
</script>

<section>
	<div
		class="bg-[url('/extensions/extensions-bg.svg')] flex justify-center items-center w-full bg-cover bg-no-repeat h-[618.75px]">
		<Text class="text-5xl font-bold">
			Choose the extensions<br />that best suit your bot
		</Text>
	</div>
</section>
<main class="flex justify-center items-center flex-col">
	<section id="trends" class="w-fit mt-16">
		<div class="flex flex-row justify-center items-center w-fit mb-4">
			<img
				src="/extensions/trophy-icon.svg"
				alt="Trophy icon, standing for the trends" />
			<Text class="text-5xl font-bold">Trends :</Text>
		</div>
		{#if extensions !== undefined}
			<Grid>
				{#each extensions as e}
					<Card
						name={e.data.name}
						description={e.data.description}
						bannerUrl={e.data.banner.url}
						id={e.id}
						isVerified={e.data.verified} />
				{/each}
			</Grid>
		{:else}
			<div class="w-[60vw] flex justify-center items-center h-36">
				<Text class="text-3xl">Is nothing trending? 🤔</Text>
			</div>
		{/if}
	</section>
	<section id="all" class="w-fit mt-20">
		<div class="flex flex-row justify-center items-center w-fit mb-4">
			<img
				src="/extensions/puzzle-icon.svg"
				alt="Puzzle icon, standing for all the extensions"
				class="mr-8" />
			<Text class="text-5xl font-bold">All Extensions :</Text>
		</div>

		{#if extensions !== undefined}
			<Grid>
				{#each extensions as e}
					<Card
						name={e.data.name}
						description={e.data.description}
						bannerUrl={e.data.banner.url}
						id={e.id}
						isVerified={e.data.verified} />
				{/each}
			</Grid>
		{:else}
			<div class="w-[60vw] flex justify-center items-center h-36">
				<Text class="text-3xl"
					>Nothing to show here ! Publish an extension to make it change!</Text>
			</div>
		{/if}
	</section>
</main>
