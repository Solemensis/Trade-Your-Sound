import { f as formatString, d as truncateShorterString } from './useStringFunctions-KS8YcS2G.mjs';
import { computed, ref, watch, unref, mergeProps, reactive, getCurrentScope, onScopeDispose, withCtx, createVNode, createTextVNode, toDisplayString, getCurrentInstance, useSSRContext, toRef as toRef$1, readonly, customRef } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useCategories } from './useCategories-CLjNoZHS.mjs';
import { _ as _export_sfc, a as useRoute, k as useRouter, l as __nuxt_component_0$1$1, u as useRuntimeConfig } from './server.mjs';
import { _ as __nuxt_component_1$1 } from './JukeBox-SDk-7Re0.mjs';
import { u as useFetch } from './fetch-1IMCeXHX.mjs';
import '../_/nitro.mjs';
import '@prisma/client';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@supabase/ssr';

const _sfc_main$3 = {
  __name: "SideBar",
  __ssrInlineRender: true,
  setup(__props) {
    const { categories } = useCategories();
    const { prices } = useCategories();
    const { processing } = useCategories();
    useRouter();
    reactive({});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-779a2e00><div class="search-bar" data-v-779a2e00><div data-v-779a2e00><h3 data-v-779a2e00>Category</h3><ul data-v-779a2e00><li data-v-779a2e00>All Categories</li><!--[-->`);
      ssrRenderList(unref(categories), (category) => {
        _push(`<li data-v-779a2e00>${ssrInterpolate(("formatString" in _ctx ? _ctx.formatString : unref(formatString))(category))}</li>`);
      });
      _push(`<!--]--></ul></div><div data-v-779a2e00><h3 data-v-779a2e00>Price</h3><ul data-v-779a2e00><li data-v-779a2e00>All Prices</li><!--[-->`);
      ssrRenderList(unref(prices), (price) => {
        _push(`<li data-v-779a2e00> $ ${ssrInterpolate(price)}</li>`);
      });
      _push(`<!--]--></ul></div><div data-v-779a2e00><h3 data-v-779a2e00>Processing</h3><ul data-v-779a2e00><li data-v-779a2e00>All Processings</li><!--[-->`);
      ssrRenderList(unref(processing), (option) => {
        _push(`<li data-v-779a2e00>${ssrInterpolate(option)}</li>`);
      });
      _push(`<!--]--></ul></div><button class="filter-remove" data-v-779a2e00> Remove Filters </button></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AudioSearch/SideBar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-779a2e00"]]);
const _sfc_main$2 = {
  __name: "Card",
  __ssrInlineRender: true,
  props: { audio: Object },
  setup(__props) {
    const config = useRuntimeConfig();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1$1;
      const _component_JukeBox = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-6823e0dd><div class="listing-boxy" data-v-6823e0dd>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "edit-but",
        to: `/audio/${__props.audio.name}-${__props.audio.id}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="heading" data-v-6823e0dd${_scopeId}>${ssrInterpolate(("truncateShorterString" in _ctx ? _ctx.truncateShorterString : unref(truncateShorterString))(__props.audio.name))} <span class="green-span" data-v-6823e0dd${_scopeId}>|</span> $${ssrInterpolate(__props.audio.price)}</h3>`);
          } else {
            return [
              createVNode("h3", { class: "heading" }, [
                createTextVNode(toDisplayString(("truncateShorterString" in _ctx ? _ctx.truncateShorterString : unref(truncateShorterString))(__props.audio.name)) + " ", 1),
                createVNode("span", { class: "green-span" }, "|"),
                createTextVNode(" $" + toDisplayString(__props.audio.price), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="listing-content" data-v-6823e0dd>`);
      _push(ssrRenderComponent(_component_JukeBox, {
        src: `${unref(config).public.supabase.url}/storage/v1/object/public/audios/${__props.audio.audio}`
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/audio/${__props.audio.name}-${__props.audio.id}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="go-to-listing" data-v-6823e0dd${_scopeId}>\u2192</p>`);
          } else {
            return [
              createVNode("p", { class: "go-to-listing" }, "\u2192")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AudioSearch/Card.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-6823e0dd"]]);
const _sfc_main$1 = {
  __name: "Cards",
  __ssrInlineRender: true,
  props: {
    audios: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AudioSearchCard = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-245492d4><div class="cards" data-v-245492d4><!--[-->`);
      ssrRenderList(__props.audios, (audio) => {
        _push(ssrRenderComponent(_component_AudioSearchCard, {
          key: audio.id,
          audio
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AudioSearch/Cards.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-245492d4"]]);
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function toValue(r) {
  return typeof r === "function" ? r() : unref(r);
}
const directiveHooks = {
  mounted: "mounted"
};
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const notNullish = (val) => val != null;
const noop = () => {
};
function toRef(...args) {
  if (args.length !== 1)
    return toRef$1(...args);
  const r = args[0];
  return typeof r === "function" ? readonly(customRef(() => ({ get: r, set: noop }))) : ref(r);
}
const defaultWindow = void 0;
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
function useMounted() {
  const isMounted = ref(false);
  getCurrentInstance();
  return isMounted;
}
function useSupported(callback) {
  const isMounted = useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
function useIntersectionObserver(target, callback, options = {}) {
  const {
    root,
    rootMargin = "0px",
    threshold = 0,
    window: window2 = defaultWindow,
    immediate = true
  } = options;
  const isSupported = useSupported(() => window2 && "IntersectionObserver" in window2);
  const targets = computed(() => {
    const _target = toValue(target);
    return (Array.isArray(_target) ? _target : [_target]).map(unrefElement).filter(notNullish);
  });
  let cleanup = noop;
  const isActive = ref(immediate);
  const stopWatch = isSupported.value ? watch(
    () => [targets.value, unrefElement(root), isActive.value],
    ([targets2, root2]) => {
      cleanup();
      if (!isActive.value)
        return;
      if (!targets2.length)
        return;
      const observer = new IntersectionObserver(
        callback,
        {
          root: unrefElement(root2),
          rootMargin,
          threshold
        }
      );
      targets2.forEach((el) => el && observer.observe(el));
      cleanup = () => {
        observer.disconnect();
        cleanup = noop;
      };
    },
    { immediate, flush: "post" }
  ) : noop;
  const stop = () => {
    cleanup();
    stopWatch();
    isActive.value = false;
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    isActive,
    pause() {
      cleanup();
      isActive.value = false;
    },
    resume() {
      isActive.value = true;
    },
    stop
  };
}
function resolveElement(el) {
  if (typeof Window !== "undefined" && el instanceof Window)
    return el.document.documentElement;
  if (typeof Document !== "undefined" && el instanceof Document)
    return el.documentElement;
  return el;
}
const vIntersectionObserver = {
  [directiveHooks.mounted](el, binding) {
    if (typeof binding.value === "function")
      useIntersectionObserver(el, binding.value);
    else
      useIntersectionObserver(el, ...binding.value);
  }
};
const elInitialOverflow = /* @__PURE__ */ new WeakMap();
function useScrollLock(element, initialState = false) {
  const isLocked = ref(initialState);
  let initialOverflow = "";
  watch(toRef(element), (el) => {
    const target = resolveElement(toValue(el));
    if (target) {
      const ele = target;
      if (!elInitialOverflow.get(ele))
        elInitialOverflow.set(ele, ele.style.overflow);
      if (ele.style.overflow !== "hidden")
        initialOverflow = ele.style.overflow;
      if (ele.style.overflow === "hidden")
        return isLocked.value = true;
      if (isLocked.value)
        return ele.style.overflow = "hidden";
    }
  }, {
    immediate: true
  });
  const lock = () => {
    const el = resolveElement(toValue(element));
    if (!el || isLocked.value)
      return;
    el.style.overflow = "hidden";
    isLocked.value = true;
  };
  const unlock = () => {
    const el = resolveElement(toValue(element));
    if (!el || !isLocked.value)
      return;
    el.style.overflow = initialOverflow;
    elInitialOverflow.delete(el);
    isLocked.value = false;
  };
  tryOnScopeDispose(unlock);
  return computed({
    get() {
      return isLocked.value;
    },
    set(v) {
      if (v)
        lock();
      else unlock();
    }
  });
}
function onScrollLock() {
  let isMounted = false;
  const state = ref(false);
  return (el, binding) => {
    state.value = binding.value;
    if (isMounted)
      return;
    isMounted = true;
    const isLocked = useScrollLock(el, binding.value);
    watch(state, (v) => isLocked.value = v);
  };
}
onScrollLock();
const _sfc_main = {
  __name: "shop",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const category = computed(() => route.query.category);
    const price = computed(() => route.query.price);
    const processing = computed(() => route.query.processing);
    const audios = ref([]);
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
        }, "$UpU1FzSz5W");
        if (!data.value && error.value) {
          error.value = null;
          refresh();
        }
        audios.value = data.value;
      }
    );
    async function onIntersectionObserver([{ isIntersecting }]) {
      if (isIntersecting) {
        const { data: newAudios } = await useFetch(`/api/audios`, {
          method: "post",
          body: audios.value.length,
          query: {
            category: category.value,
            price: price.value,
            processing: processing.value
          }
        }, "$sCsmQfsUVD");
        if (newAudios.value) {
          audios.value.push(...newAudios.value);
        }
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AudioSearchSideBar = __nuxt_component_0$1;
      const _component_AudioSearchCards = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-33c1f4c9>`);
      _push(ssrRenderComponent(_component_AudioSearchSideBar, null, null, _parent));
      _push(`<div class="flex-box-center" data-v-33c1f4c9><h2 class="scroll-audios" data-v-33c1f4c9>Scroll <span class="green-span" data-v-33c1f4c9>Audios</span></h2>`);
      if (!unref(loading) && unref(audios) && unref(audios).length) {
        _push(`<div class="audios" data-v-33c1f4c9>`);
        _push(ssrRenderComponent(_component_AudioSearchCards, { audios: unref(audios) }, null, _parent));
        _push(`<div${ssrRenderAttrs(mergeProps({ style: { "margin-top": "40rem", "opacity": "0" } }, ssrGetDirectiveProps(_ctx, unref(vIntersectionObserver), onIntersectionObserver)))} data-v-33c1f4c9> Loading... </div></div>`);
      } else if (!unref(loading) && unref(audios) && !unref(audios).length) {
        _push(`<h2 style="${ssrRenderStyle({ "color": "#ff4545" })}" data-v-33c1f4c9> No Audios Found With These Filters </h2>`);
      } else if (unref(loading)) {
        _push(`<div class="lds-dual-ring" style="${ssrRenderStyle({ "padding-left": "20rem", "top": "100%" })}" data-v-33c1f4c9></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const shop = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-33c1f4c9"]]);

export { shop as default };
//# sourceMappingURL=shop-0-8qfI85.mjs.map
