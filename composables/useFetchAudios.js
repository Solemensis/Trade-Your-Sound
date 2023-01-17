export default async (routeParam, filters) => {
  const { data, error, refresh } = await useFetch(`/api/audios/${routeParam}`, {
    params: {
      ...filters,
    },
  });

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: "Unable to fetch cars",
    });
  }

  return { data, refresh };
};
