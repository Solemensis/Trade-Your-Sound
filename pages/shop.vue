<script setup>
import { vIntersectionObserver } from '@vueuse/components';

const route = useRoute();
const category = computed(() => route.query.category);
const price = computed(() => route.query.price);
const processing = computed(() => route.query.processing);

const audios = ref([]);

onMounted(async () => {
	// onMounted içinde; useFetch, setTimeout dışındayken çalışmıyor.
	//setTimeout'suz birtek $fetch çalışıyor onMounted içinde.
	setTimeout(async () => {
		const { data, error, refresh, pending } = await useFetch('/api/audios', {
			query: {
				category: category.value,
				price: price.value,
				processing: processing.value
			}
		});

		if (!pending.value) {
			loading.value = false;
		}

		if (!data.value && error.value) {
			error.value = null;
			refresh();
		}
		audios.value = data.value;
	}, 1);
});

const loading = ref(true);

watch(
	() => route.query,
	async () => {
		const { data, error, refresh } = await useFetch(`/api/audios`, {
			query: {
				category: category.value,
				price: price.value,
				processing: processing.value
			}
		});

		if (!data.value && error.value) {
			error.value = null;
			refresh();
		}
		audios.value = data.value;
	}
);

//infinite scroll logic starts here
async function onIntersectionObserver([{ isIntersecting }]) {
	if (isIntersecting) {
		const { data: newAudios } = await useFetch(`/api/audios`, {
			method: 'post',
			body: audios.value.length,
			query: {
				category: category.value,
				price: price.value,
				processing: processing.value
			}
		});
		if (newAudios.value) {
			audios.value.push(...newAudios.value);
		}
	}
}
</script>

<template>
	<div>
		<AudioSearchSideBar />
		<div class="flex-box-center">
			<h2 class="scroll-audios">Scroll <span class="green-span">Audios</span></h2>
			<div class="audios" v-if="!loading && audios && audios.length">
				<AudioSearchCards :audios="audios" />

				<div
					style="margin-top: 40rem; opacity: 0"
					v-intersection-observer="onIntersectionObserver"
				>
					Loading...
				</div>
			</div>

			<h2 style="color: #ff4545" v-else-if="!loading && audios && !audios.length">
				No Audios Found With These Filters
			</h2>
			<div
				v-else-if="loading"
				class="lds-dual-ring"
				style="padding-left: 20rem; top: 100%"
			></div>
		</div>
	</div>
</template>

<style scoped>
.flex-box-center {
	display: flex;
	justify-content: center;
	padding-top: 27rem;
	margin-left: 5rem;
	position: relative;
	width: 50%;
	margin-inline: auto;
	padding-left: 20rem;
}

.scroll-audios {
	position: absolute;
	left: 50%;
	top: 17rem;
	padding-left: 20rem;
	width: 96vw;
	text-align: center;
	transform: translateX(-50%);
	font-weight: 500;
	font-size: 3.7rem;
	color: #bbb;
}

@media (orientation: portrait) {
	.scroll-audios {
		padding-left: 0;
	}
	.audios {
		margin-right: 5rem;
		padding-top: 1rem;
	}
}
</style>
