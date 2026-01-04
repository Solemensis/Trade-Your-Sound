import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    AOS.init();
  }
});
