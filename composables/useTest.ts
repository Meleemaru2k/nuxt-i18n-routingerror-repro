export async function useTest() {
  const route = useRouter().currentRoute.value.path;
  const { data } = await useFetch("/api/cat");
  return {
    route,
    test: "test",
    cat: data.value,
  };
}
