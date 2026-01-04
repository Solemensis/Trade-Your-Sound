import { f as formatString, t as truncateString, a as truncateShortString, c as cutString } from './useStringFunctions-KS8YcS2G.mjs';
import { reactive, mergeProps, unref, computed, ref, watch, withCtx, createVNode, toDisplayString, createBlock, createCommentVNode, openBlock, Fragment, renderList, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { u as useCategories } from './useCategories-CLjNoZHS.mjs';
import { _ as _export_sfc, k as useRouter, a as useRoute, l as __nuxt_component_0$1$1 } from './server.mjs';
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
    useRouter();
    reactive({});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "search-bar" }, _attrs))} data-v-ebb4f484><div data-v-ebb4f484><h3 data-v-ebb4f484>Category</h3><ul data-v-ebb4f484><li data-v-ebb4f484>All Categories</li><!--[-->`);
      ssrRenderList(unref(categories), (category) => {
        _push(`<li data-v-ebb4f484>${ssrInterpolate(("formatString" in _ctx ? _ctx.formatString : unref(formatString))(category))}</li>`);
      });
      _push(`<!--]--></ul></div><div data-v-ebb4f484><h3 data-v-ebb4f484>Opportunity</h3><ul data-v-ebb4f484><li data-v-ebb4f484>All</li><li data-v-ebb4f484>Looking</li><li data-v-ebb4f484>Not looking</li></ul></div><div data-v-ebb4f484><h3 data-v-ebb4f484>Updated</h3><ul data-v-ebb4f484><li data-v-ebb4f484>Recently</li><li data-v-ebb4f484>Older</li></ul></div><button class="filter-remove" data-v-ebb4f484> Remove Filters </button></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FindProducer/SideBar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-ebb4f484"]]);
const _sfc_main$2 = {
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    profile: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1$1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: `/profile/${__props.profile.user_name}`
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="profile-card" data-v-804f223e${_scopeId}><h2 data-v-804f223e${_scopeId}>${ssrInterpolate(__props.profile.user_name)}</h2><p class="description" data-v-804f223e${_scopeId}>${ssrInterpolate(("truncateString" in _ctx ? _ctx.truncateString : unref(truncateString))(__props.profile.description))}</p><div data-v-804f223e${_scopeId}><ul data-v-804f223e${_scopeId}><!--[-->`);
            ssrRenderList(__props.profile.categories, (category) => {
              _push2(`<li class="categories" data-v-804f223e${_scopeId}> \u2714\uFE0F ${ssrInterpolate(("formatString" in _ctx ? _ctx.formatString : unref(formatString))(category))}</li>`);
            });
            _push2(`<!--]--></ul>`);
            if (__props.profile.relatedLinks && __props.profile.relatedLinks[0].relatedLink1Desc) {
              _push2(`<div class="related-link" data-v-804f223e${_scopeId}><span class="purple-span" style="${ssrRenderStyle({ "font-size": "1.5rem" })}" data-v-804f223e${_scopeId}>\u279C</span><p data-v-804f223e${_scopeId}>${ssrInterpolate(("truncateShortString" in _ctx ? _ctx.truncateShortString : unref(truncateShortString))(__props.profile.relatedLinks[0].relatedLink1Desc))}</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.profile.LFopportunity) {
              _push2(`<div class="fire" data-v-804f223e${_scopeId}> \u{1F525} <p class="opportunity" data-v-804f223e${_scopeId}> User currently looking for opportunities! </p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<p class="updated" data-v-804f223e${_scopeId}>Updated at ${ssrInterpolate(("cutString" in _ctx ? _ctx.cutString : unref(cutString))(__props.profile.updated_at))}</p></div></div>`);
          } else {
            return [
              createVNode("div", { class: "profile-card" }, [
                createVNode("h2", null, toDisplayString(__props.profile.user_name), 1),
                createVNode("p", { class: "description" }, toDisplayString(("truncateString" in _ctx ? _ctx.truncateString : unref(truncateString))(__props.profile.description)), 1),
                createVNode("div", null, [
                  createVNode("ul", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.profile.categories, (category) => {
                      return openBlock(), createBlock("li", {
                        class: "categories",
                        key: category
                      }, " \u2714\uFE0F " + toDisplayString(("formatString" in _ctx ? _ctx.formatString : unref(formatString))(category)), 1);
                    }), 128))
                  ]),
                  __props.profile.relatedLinks && __props.profile.relatedLinks[0].relatedLink1Desc ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "related-link"
                  }, [
                    createVNode("span", {
                      class: "purple-span",
                      style: { "font-size": "1.5rem" }
                    }, "\u279C"),
                    createVNode("p", null, toDisplayString(("truncateShortString" in _ctx ? _ctx.truncateShortString : unref(truncateShortString))(__props.profile.relatedLinks[0].relatedLink1Desc)), 1)
                  ])) : createCommentVNode("", true),
                  __props.profile.LFopportunity ? (openBlock(), createBlock("div", {
                    class: "fire",
                    key: __props.profile.id
                  }, [
                    createTextVNode(" \u{1F525} "),
                    (openBlock(), createBlock("p", {
                      key: __props.profile.id,
                      class: "opportunity"
                    }, " User currently looking for opportunities! "))
                  ])) : createCommentVNode("", true),
                  createVNode("p", { class: "updated" }, "Updated at " + toDisplayString(("cutString" in _ctx ? _ctx.cutString : unref(cutString))(__props.profile.updated_at)), 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FindProducer/Card.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-804f223e"]]);
const _sfc_main$1 = {
  __name: "Cards",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const category = computed(() => route.query.category);
    const LFopportunity = computed(() => route.query.opportunity);
    const updated = computed(() => route.query.updated);
    const profiles = ref([]);
    const loading = ref(true);
    watch(
      () => route.query,
      async () => {
        const { data, error, refresh } = await useFetch(
          "/api/producerProfile/getProfiles",
          {
            query: {
              category: category.value,
              opportunity: LFopportunity.value,
              updated: updated.value
            }
          },
          "$3E8NngA6oF"
        );
        if (!data.value && error.value) {
          error.value = null;
          refresh();
        }
        profiles.value = data.value;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FindProducerCard = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: { "position": "relative" },
        class: "cards"
      }, _attrs))} data-v-15a18b91><h2 class="find-producer" data-v-15a18b91> Find <span class="green-span" data-v-15a18b91>Producers</span></h2>`);
      if (!unref(loading) && unref(profiles) && unref(profiles).length) {
        _push(`<!--[-->`);
        ssrRenderList(unref(profiles), (profile) => {
          _push(`<div class="flex-box" data-v-15a18b91>`);
          _push(ssrRenderComponent(_component_FindProducerCard, { profile }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]-->`);
      } else if (!unref(loading) && unref(profiles) && !unref(profiles).length) {
        _push(`<h2 style="${ssrRenderStyle({ "color": "#ff4545", "grid-column-start": "span 2" })}" data-v-15a18b91> No Producer Found With These Filters </h2>`);
      } else if (unref(loading)) {
        _push(`<div class="lds-dual-ring" style="${ssrRenderStyle({ "padding-left": "20rem", "top": "20%" })}" data-v-15a18b91></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FindProducer/Cards.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-15a18b91"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_FindProducerSideBar = __nuxt_component_0$1;
  const _component_FindProducerCards = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-506f119c>`);
  _push(ssrRenderComponent(_component_FindProducerSideBar, null, null, _parent));
  _push(`<div class="flex-box-center" data-v-506f119c>`);
  _push(ssrRenderComponent(_component_FindProducerCards, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/find-producer/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-506f119c"]]);

export { index as default };
//# sourceMappingURL=index-MGv1BGKD.mjs.map
