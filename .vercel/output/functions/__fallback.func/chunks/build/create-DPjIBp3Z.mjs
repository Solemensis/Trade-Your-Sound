import { reactive, ref, mergeProps, withCtx, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { _ as _export_sfc, b as useSupabaseUser, c as useSupabaseClient, l as __nuxt_component_0$1, d as useState } from './server.mjs';
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

const _sfc_main$6 = {
  __name: "Name",
  __ssrInlineRender: true,
  props: {
    title: String,
    name: String,
    placeholder: String
  },
  emits: ["changeInput"],
  setup(__props, { emit: __emit }) {
    const state = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-f18b24f1><div class="label-and-input" data-v-f18b24f1><span style="${ssrRenderStyle({ "position": "absolute", "left": "-2rem", "top": "2.8rem", "color": "#aaa" })}" data-v-f18b24f1>${ssrInterpolate(25 - unref(state).length)}</span><label for="" data-v-f18b24f1>${ssrInterpolate(__props.title)} <span class="green-span" data-v-f18b24f1>*</span></label><input maxlength="25" type="text"${ssrRenderAttr("placeholder", __props.placeholder)}${ssrRenderAttr("value", unref(state))} data-v-f18b24f1></div></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Inputs/CreateListing/Name.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-f18b24f1"]]);
const _sfc_main$5 = {
  __name: "Price",
  __ssrInlineRender: true,
  props: {
    title: String,
    name: String,
    placeholder: String
  },
  emits: ["changeInput"],
  setup(__props, { emit: __emit }) {
    const state = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "label-and-input" }, _attrs))} data-v-f0600748><label for="" data-v-f0600748>${ssrInterpolate(__props.title)} <span class="green-span" data-v-f0600748>*</span></label><input class="price-input" type="text"${ssrRenderAttr("placeholder", __props.placeholder)}${ssrRenderAttr("value", unref(state))} data-v-f0600748></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Inputs/CreateListing/Price.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-f0600748"]]);
const _sfc_main$4 = {
  __name: "Categories",
  __ssrInlineRender: true,
  props: {
    title: String,
    name: String
  },
  emits: ["changeInput"],
  setup(__props, { emit: __emit }) {
    const state = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "label-and-input" }, _attrs))} data-v-e22fdaac><label data-v-e22fdaac>${ssrInterpolate(__props.title)} <span class="green-span" data-v-e22fdaac>*</span></label><select data-v-e22fdaac><option value="sound-effects" data-v-e22fdaac${ssrIncludeBooleanAttr(Array.isArray(unref(state)) ? ssrLooseContain(unref(state), "sound-effects") : ssrLooseEqual(unref(state), "sound-effects")) ? " selected" : ""}>Sound Effects</option><option value="ui-sounds" data-v-e22fdaac${ssrIncludeBooleanAttr(Array.isArray(unref(state)) ? ssrLooseContain(unref(state), "ui-sounds") : ssrLooseEqual(unref(state), "ui-sounds")) ? " selected" : ""}>UI Sounds</option><option value="foley-sounds" data-v-e22fdaac${ssrIncludeBooleanAttr(Array.isArray(unref(state)) ? ssrLooseContain(unref(state), "foley-sounds") : ssrLooseEqual(unref(state), "foley-sounds")) ? " selected" : ""}>Foley Sounds</option><option value="dialogue" data-v-e22fdaac${ssrIncludeBooleanAttr(Array.isArray(unref(state)) ? ssrLooseContain(unref(state), "dialogue") : ssrLooseEqual(unref(state), "dialogue")) ? " selected" : ""}>Dialogue</option><option disabled value="soundscapes" data-v-e22fdaac${ssrIncludeBooleanAttr(Array.isArray(unref(state)) ? ssrLooseContain(unref(state), "soundscapes") : ssrLooseEqual(unref(state), "soundscapes")) ? " selected" : ""}>Soundscapes</option><option disabled value="environmental-sounds" data-v-e22fdaac${ssrIncludeBooleanAttr(Array.isArray(unref(state)) ? ssrLooseContain(unref(state), "environmental-sounds") : ssrLooseEqual(unref(state), "environmental-sounds")) ? " selected" : ""}> Environmental Sounds </option></select></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Inputs/CreateListing/Categories.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-e22fdaac"]]);
const _sfc_main$3 = {
  __name: "Processing",
  __ssrInlineRender: true,
  props: {
    title: String,
    name: String,
    options: Array
  },
  emits: ["changeInput"],
  setup(__props, { emit: __emit }) {
    const state = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "label-and-input" }, _attrs))} data-v-528588d3><label for="" data-v-528588d3>${ssrInterpolate(__props.title)} <span class="green-span" data-v-528588d3>*</span></label><select data-v-528588d3><option value="raw" data-v-528588d3${ssrIncludeBooleanAttr(Array.isArray(unref(state)) ? ssrLooseContain(unref(state), "raw") : ssrLooseEqual(unref(state), "raw")) ? " selected" : ""}>Raw</option><option value="edited" data-v-528588d3${ssrIncludeBooleanAttr(Array.isArray(unref(state)) ? ssrLooseContain(unref(state), "edited") : ssrLooseEqual(unref(state), "edited")) ? " selected" : ""}>Edited</option><option value="mastered" data-v-528588d3${ssrIncludeBooleanAttr(Array.isArray(unref(state)) ? ssrLooseContain(unref(state), "mastered") : ssrLooseEqual(unref(state), "mastered")) ? " selected" : ""}>Mastered</option></select></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Inputs/CreateListing/Processing.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-528588d3"]]);
const _sfc_main$2 = {
  __name: "Description",
  __ssrInlineRender: true,
  props: {
    title: String,
    name: String,
    placeholder: String
  },
  emits: ["changeInput"],
  setup(__props, { emit: __emit }) {
    const state = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "label-and-input" }, _attrs))} data-v-9ca210f9><label for="" data-v-9ca210f9>${ssrInterpolate(__props.title)} <span class="green-span" data-v-9ca210f9>*</span></label><span style="${ssrRenderStyle({ "position": "absolute", "left": "1rem", "color": "#aaa" })}" data-v-9ca210f9>${ssrInterpolate(550 - unref(state).length)}</span><textarea maxlength="550" type="text"${ssrRenderAttr("placeholder", __props.placeholder)} data-v-9ca210f9>${ssrInterpolate(unref(state))}</textarea></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Inputs/CreateListing/Description.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-9ca210f9"]]);
const _sfc_main$1 = {
  __name: "File",
  __ssrInlineRender: true,
  props: {
    title: String
  },
  emits: ["changeInput"],
  setup(__props, { emit: __emit }) {
    useState("audioAudio", () => {
      return {
        audio: null
      };
    });
    const uploadedAudio = ref("");
    const errorMessage = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "input-box" }, _attrs))} data-v-87feabb3><label for="" data-v-87feabb3>${ssrInterpolate(__props.title)}<span class="green-span" data-v-87feabb3> *</span></label><div class="input" data-v-87feabb3><input type="file" accept="audio/mpeg" style="${ssrRenderStyle({ "height": "100%", "width": "100%", "opacity": "0", "z-index": "100" })}" title="" data-v-87feabb3><div data-v-87feabb3>`);
      if (!unref(uploadedAudio)) {
        _push(`<p data-v-87feabb3>+ drop audio...</p>`);
      } else {
        _push(`<p style="${ssrRenderStyle({ "color": "#3fcf8e" })}" data-v-87feabb3>${ssrInterpolate(unref(uploadedAudio))} <br data-v-87feabb3>is placed. </p>`);
      }
      _push(`</div>`);
      if (unref(errorMessage)) {
        _push(`<div style="${ssrRenderStyle({ "top": "-5rem", "white-space": "nowrap" })}" data-v-87feabb3><p style="${ssrRenderStyle({ "font-size": "1.1rem", "color": "orangered" })}" data-v-87feabb3>${ssrInterpolate(unref(errorMessage))}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Inputs/CreateListing/File.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-87feabb3"]]);
const _sfc_main = {
  __name: "create",
  __ssrInlineRender: true,
  setup(__props) {
    useSupabaseUser();
    useSupabaseClient();
    const info = reactive({
      name: "",
      price: "",
      category: "",
      processing: "",
      description: "",
      audio: null
    });
    const errorMessage = ref("");
    const onChangeInput = (data, name) => {
      info[name] = data;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputsCreateListingName = __nuxt_component_0;
      const _component_InputsCreateListingPrice = __nuxt_component_1;
      const _component_InputsCreateListingCategories = __nuxt_component_2;
      const _component_InputsCreateListingProcessing = __nuxt_component_3;
      const _component_InputsCreateListingDescription = __nuxt_component_4;
      const _component_InputsCreateListingFile = __nuxt_component_5;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-ead47f63><h2 class="youre-creating" data-v-ead47f63> You&#39;re creating a <span class="green-span" data-v-ead47f63>new listing</span></h2><div class="inputs-group" data-v-ead47f63>`);
      _push(ssrRenderComponent(_component_InputsCreateListingName, {
        title: "Listing Name",
        name: "name",
        placeholder: "Fireball Sound",
        onChangeInput
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputsCreateListingPrice, {
        title: "Price",
        name: "price",
        placeholder: "5",
        onChangeInput
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputsCreateListingCategories, {
        title: "Category",
        name: "category",
        onChangeInput,
        class: "categories"
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputsCreateListingProcessing, {
        title: "Processing",
        name: "processing",
        onChangeInput,
        class: "processing"
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputsCreateListingDescription, {
        title: "Description",
        name: "description",
        placeholder: "When a beautiful fireball erupted, I pressed record and captured its deep rumble and sharp crack perfectly. Back in my studio, I spent hours editing and mastering the recording to ensure it sounded just as incredible on the recording as it did in the forest.",
        onChangeInput,
        class: "description"
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputsCreateListingFile, {
        title: "Audio",
        class: "file",
        onChangeInput
      }, null, _parent));
      _push(`</div><div class="buttons" data-v-ead47f63><button class="hero-button"${ssrIncludeBooleanAttr(_ctx.isButtonDisabled) ? " disabled" : ""} data-v-ead47f63> Submit </button>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/profile/listings" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="delete-button" data-v-ead47f63${_scopeId}>Cancel</button>`);
          } else {
            return [
              createVNode("button", { class: "delete-button" }, "Cancel")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(errorMessage)) {
        _push(`<p style="${ssrRenderStyle({ "position": "absolute", "bottom": "-3rem", "color": "orangered", "font-size": "1.2rem" })}" data-v-ead47f63>${ssrInterpolate(unref(errorMessage))}</p>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/listings/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const create = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ead47f63"]]);

export { create as default };
//# sourceMappingURL=create-DPjIBp3Z.mjs.map
