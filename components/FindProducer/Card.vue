<script setup>
const props = defineProps({
	profile: Object
});
</script>

<template>
	<NuxtLink :to="`/profile/${profile.user_name}`">
		<div class="profile-card">
			<h2>
				{{ profile.user_name }}
			</h2>
			<p class="description">
				{{ truncateString(profile.description) }}
			</p>
			<div>
				<ul>
					<li class="categories" v-for="category in profile.categories" :key="category">
						✔️ {{ formatString(category) }}
					</li>
				</ul>

				<div
					v-if="profile.relatedLinks && profile.relatedLinks[0].relatedLink1Desc"
					class="related-link"
				>
					<span class="purple-span" style="font-size: 1.5rem">➜</span>
					<p>
						{{ truncateShortString(profile.relatedLinks[0].relatedLink1Desc) }}
					</p>
				</div>
				<div class="fire" v-if="profile.LFopportunity" :key="profile.id">
					🔥
					<p :key="profile.id" class="opportunity">
						User currently looking for opportunities!
					</p>
				</div>

				<p class="updated">Updated at {{ cutString(profile.updated_at) }}</p>
			</div>
		</div>
	</NuxtLink>
</template>

<style scoped>
.profile-card {
	background-color: #25252587;
	border-radius: 0.8rem;
	padding: 1.8rem;
	position: relative;
	width: 30rem;
	height: 21rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	transition: 0.2s;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.profile-card:hover {
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	transform: translateY(-1%);
}

.profile-card h2 {
	color: #3fcf8e;
	font-size: 2.3rem;
	margin-bottom: 0.9rem;
	font-weight: 500;
	transition: 0.2s;
}

.profile-card ul {
	list-style: none;
	font-size: 1.2rem;
	display: grid;
	grid-auto-flow: column;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	grid-column-gap: 0.6rem;
	grid-row-gap: 0.2rem;
	margin-bottom: 1.5rem;
}
.profile-card ul li {
	color: #888;
	white-space: nowrap;
}
.description {
	font-size: 1.3rem;
	color: #aaa;
	margin-bottom: 1.5rem;
	word-wrap: break-word;
	word-break: break-word;
}
.related-link {
	margin-bottom: 0.5rem;
	display: flex;
	align-items: center;
	gap: 0.5rem;
}
.related-link p {
	color: #999;
	font-size: 1.1rem;
	transition: 0.2s;
}

.fire {
	position: absolute;
	right: 1.5rem;
	top: 1.5rem;
	font-size: 1.5rem;
}
.fire:hover .opportunity {
	opacity: 1;
}

.opportunity {
	opacity: 0;
	position: absolute;
	background-color: #5e2544;
	transition: 0.2s;
	border-radius: 0.3rem;
	top: -0.8rem;
	right: 3rem;
	font-size: 1.2rem;
	width: 15rem;
	padding: 0.5rem 1rem;
	color: #ddd;
}
.opportunity:hover {
	opacity: 0 !important;
}
.updated {
	position: absolute;
	bottom: 0.5rem;
	right: 1rem;
	color: #989898;
	font-size: 0.9rem;
}

@media (orientation: portrait) {
	.cards {
		grid-template-columns: 1fr;
		padding-left: 8rem;
		grid-row-gap: 2rem;
		padding-top: 5rem;
	}
	.profile-card {
		width: 27rem;
		height: 17.5rem;
		padding: 1.1rem 1.3rem;
	}
	.profile-card h2 {
		font-size: 2rem;
	}
	.updated {
		bottom: 0.1rem;
		right: 0.8rem;
		font-size: 0.8rem;
	}
	.fire {
		top: 1.1rem;
	}
	.description {
		font-size: 1.3rem;
		margin-bottom: 1rem;
	}
	.profile-card ul {
		grid-row-gap: 0;
		margin-bottom: 1rem;
	}

	.find-producer {
		transform: translateX(-55%);
		padding-left: 0;
	}
}
</style>
