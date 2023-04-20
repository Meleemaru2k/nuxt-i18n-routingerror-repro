export default defineEventHandler(async (event) => {
  const t = await $fetch("https://dogapi.dog/api/v2/facts"); //https://cataas.com/cat?json=true
  const sd = new Date().getTime();
  let nd = new Date().getTime();
  const random = Math.floor(Math.random() * 4000) + 1000;

  while (nd - sd < random) {
    nd = new Date().getTime();
  }
  return t;
});
