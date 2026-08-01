import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let isRegistered = false;

export function initGSAP() {
  if (typeof window === "undefined" || isRegistered) return;
  
  gsap.registerPlugin(ScrollTrigger);
  
  // Enable lag smoothing to prevent visual stutters under CPU frame spikes
  gsap.ticker.lagSmoothing(500, 33);
  
  isRegistered = true;
}

export { gsap, ScrollTrigger };
