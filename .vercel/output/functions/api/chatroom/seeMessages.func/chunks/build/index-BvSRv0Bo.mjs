import { _ as _export_sfc, b as useSupabaseUser, c as useSupabaseClient, l as __nuxt_component_0$1, u as useRuntimeConfig } from './server.mjs';
import { _ as __nuxt_component_1 } from './JukeBox-SDk-7Re0.mjs';
import { d as truncateShorterString } from './useStringFunctions-KS8YcS2G.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_1 } from './delete-but-YjZxxmXX.mjs';
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

const _imports_0 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20xmlns:v='https://vecta.io/nano'%3e%3cpath%20d='M16.757%203l-2%202H5v14h14V9.243l2-2V20a1%201%200%200%201-1%201H4a1%201%200%200%201-1-1V4a1%201%200%200%201%201-1h12.757zm3.728-.9L21.9%203.516l-9.192%209.192-1.412.003-.002-1.417L20.485%202.1z'%20fill='%233fcf8e'/%3e%3c/svg%3e";
const _sfc_main$1 = {
  __name: "ListingCard",
  __ssrInlineRender: true,
  props: {
    listing: Object
  },
  emits: ["deleteClick"],
  setup(__props, { emit: __emit }) {
    const config = useRuntimeConfig();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_JukeBox = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "listing-boxy" }, _attrs))} data-v-d7e102ae>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "edit-but",
        to: `/audio/${__props.listing.name}-${__props.listing.id}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="heading" data-v-d7e102ae${_scopeId}>${ssrInterpolate(("truncateShorterString" in _ctx ? _ctx.truncateShorterString : unref(truncateShorterString))(__props.listing.name))} <span class="green-span" data-v-d7e102ae${_scopeId}>|</span> $${ssrInterpolate(__props.listing.price)}</h3>`);
          } else {
            return [
              createVNode("h3", { class: "heading" }, [
                createTextVNode(toDisplayString(("truncateShorterString" in _ctx ? _ctx.truncateShorterString : unref(truncateShorterString))(__props.listing.name)) + " ", 1),
                createVNode("span", { class: "green-span" }, "|"),
                createTextVNode(" $" + toDisplayString(__props.listing.price), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="listing-content" data-v-d7e102ae>`);
      _push(ssrRenderComponent(_component_JukeBox, {
        src: `${unref(config).public.supabase.url}/storage/v1/object/public/audios/${__props.listing.audio}`
      }, null, _parent));
      _push(`<div class="buttons" data-v-d7e102ae>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "edit-but",
        to: `/audio/${__props.listing.name}-${__props.listing.id}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="edit button" data-v-d7e102ae${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "edit button"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="delete-but" data-v-d7e102ae><img${ssrRenderAttr("src", _imports_1)} alt="delete button" data-v-d7e102ae></p></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UserListings/ListingCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d7e102ae"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSupabaseUser();
    const supabase = useSupabaseClient();
    const listings = ref([]);
    const loading = ref(true);
    async function handleDelete(id) {
      const { data: audio } = await useFetch(`/api/audio/${id}`, "$q61TqoGab8");
      await useFetch(`/api/audio/listings/${id}`, {
        method: "delete"
      }, "$ig2HmEoshY");
      listings.value = listings.value.filter((listing) => listing.id !== id);
      const { error } = await supabase.storage.from("audios").remove([audio.value.audio]);
    }
    const errorMessage = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UserListingsListingCard = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "listing-box" }, _attrs))} data-v-2af4f554><button class="hero-button" data-v-2af4f554> New Listing </button>`);
      if (!unref(loading) && unref(listings) && unref(listings).length) {
        _push(`<div class="listings" data-v-2af4f554><!--[-->`);
        ssrRenderList(unref(listings), (listing) => {
          _push(ssrRenderComponent(_component_UserListingsListingCard, {
            key: listing.id,
            listing,
            onDeleteClick: handleDelete
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else if (!unref(loading) && unref(listings) && !unref(listings).length) {
        _push(`<span style="${ssrRenderStyle({ "font-size": "1.4rem", "color": "orangered" })}" data-v-2af4f554>No audios.</span>`);
      } else if (unref(loading)) {
        _push(`<div class="lds-dual-ring" style="${ssrRenderStyle({ "top": "110%" })}" data-v-2af4f554></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(errorMessage)) {
        _push(`<p style="${ssrRenderStyle({ "font-size": "1.5rem", "color": "brown", "position": "absolute", "top": "11rem" })}" data-v-2af4f554>${ssrInterpolate(unref(errorMessage))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/listings/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2af4f554"]]);

export { index as default };
//# sourceMappingURL=index-BvSRv0Bo.mjs.map
