export default async function useRedirect() {
  const route = useRouter().currentRoute.value.path;
  if (route.includes("akademie")) {
    // akademie path will still render on the server -> https://github.com/nuxt/nuxt/issues/20294
    return await navigateTo("/notAkademie");
  }
}
