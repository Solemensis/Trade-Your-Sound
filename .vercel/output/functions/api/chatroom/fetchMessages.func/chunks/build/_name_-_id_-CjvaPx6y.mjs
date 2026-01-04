import { _ as __nuxt_component_1$2 } from './JukeBox-SDk-7Re0.mjs';
import { ref, watch, mergeProps, unref, reactive, withAsyncContext, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { _ as _export_sfc, a as useRoute, d as useState, b as useSupabaseUser, c as useSupabaseClient, u as useRuntimeConfig } from './server.mjs';
import { c as cutString, g as getContentBeforeUnderscore } from './useStringFunctions-KS8YcS2G.mjs';
import { u as useHead } from './index-BabADJUJ.mjs';
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

const _sfc_main$a = {
  __name: "File",
  __ssrInlineRender: true,
  props: {
    audio: String
  },
  setup(__props) {
    const config = useRuntimeConfig();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_JukeBox = __nuxt_component_1$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "box" }, _attrs))} data-v-b18094f6>`);
      _push(ssrRenderComponent(_component_JukeBox, {
        src: `${unref(config).public.supabase.url}/storage/v1/object/public/audios/${__props.audio}`
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AudioDetail/File.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-b18094f6"]]);
const _sfc_main$9 = {
  __name: "Hero",
  __ssrInlineRender: true,
  props: {
    audio: Object
  },
  setup(__props) {
    const reRenderComponent = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AudioDetailFile = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-c98ad9a7><p class="category-processing" data-v-c98ad9a7>${ssrInterpolate(__props.audio.category)} | ${ssrInterpolate(__props.audio.processing)}</p><div class="name-box" data-v-c98ad9a7><h2 class="listing-name" data-v-c98ad9a7>${ssrInterpolate(__props.audio.name)}</h2><div class="creator-tag" data-v-c98ad9a7><p class="creator-box" data-v-c98ad9a7> Created by: <span class="creator" data-v-c98ad9a7>${ssrInterpolate(__props.audio.user_name)}</span></p><div data-v-c98ad9a7><p class="created-updated" data-v-c98ad9a7> Listed: ${ssrInterpolate(("cutString" in _ctx ? _ctx.cutString : unref(cutString))(String(__props.audio.created_at)))} - Updated: ${ssrInterpolate(("cutString" in _ctx ? _ctx.cutString : unref(cutString))(String(__props.audio.updated_at)))}</p></div></div></div><div data-v-c98ad9a7><div class="price-file-box" data-v-c98ad9a7><p class="price" data-v-c98ad9a7><span class="dollar-sign" data-v-c98ad9a7>$</span>${ssrInterpolate(__props.audio.price)}</p>`);
      if (unref(reRenderComponent)) {
        _push(ssrRenderComponent(_component_AudioDetailFile, {
          audio: __props.audio.audio
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><p class="description" data-v-c98ad9a7>${ssrInterpolate(__props.audio.description)}</p></div></div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AudioDetail/Hero.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-c98ad9a7"]]);
const _sfc_main$8 = {
  __name: "Buttons",
  __ssrInlineRender: true,
  props: {
    audio: Object
  },
  emits: ["toggle-open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    useRoute();
    const user = useSupabaseUser();
    useSupabaseClient();
    reactive({
      room_name: ``,
      user1_id: null,
      user2_id: null,
      user1_deleted: {},
      user2_deleted: {},
      user1_nick: "",
      user2_nick: "",
      listing_path: ""
    });
    const errorMessage = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "text-align": "center" } }, _attrs))} data-v-2ae5967d>`);
      if (unref(user)) {
        _push(`<div data-v-2ae5967d>`);
        if (unref(user).id != props.audio.lister_id) {
          _push(`<div style="${ssrRenderStyle({ "position": "relative" })}" data-v-2ae5967d><button class="hero-button" data-v-2ae5967d>Send Message</button>`);
          if (unref(errorMessage)) {
            _push(`<p style="${ssrRenderStyle({ "color": "orangered", "position": "absolute", "bottom": "-3.5rem", "left": "50%", "transform": "translateX(-50%)", "font-size": "1.2rem" })}" data-v-2ae5967d>${ssrInterpolate(unref(errorMessage))}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<div class="user-buttons" data-v-2ae5967d><button class="hero-button" data-v-2ae5967d>Edit listing</button><button class="delete-button" data-v-2ae5967d> Delete listing </button></div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<div data-v-2ae5967d><h3 class="no-user" data-v-2ae5967d>You have to be a user to send a message.</h3></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AudioDetail/Buttons.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-2ae5967d"]]);
const _sfc_main$7 = {
  __name: "Name",
  __ssrInlineRender: true,
  props: {
    title: String,
    name: String,
    placeholder: String,
    data: String
  },
  emits: ["changeInput"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const state = ref(`${props.data}`);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-6737334c><div class="label-and-input" data-v-6737334c><span style="${ssrRenderStyle({ "position": "absolute", "left": "-2rem", "top": "2.8rem", "color": "#aaa" })}" data-v-6737334c>${ssrInterpolate(25 - unref(state).length)}</span><label for="" data-v-6737334c>${ssrInterpolate(__props.title)} <span class="green-span" data-v-6737334c>*</span></label><input maxlength="25" type="text"${ssrRenderAttr("placeholder", __props.placeholder)}${ssrRenderAttr("value", unref(state))} data-v-6737334c></div></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Inputs/EditListing/Name.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-6737334c"]]);
const _sfc_main$6 = {
  __name: "Price",
  __ssrInlineRender: true,
  props: {
    title: String,
    name: String,
    placeholder: String,
    data: String
  },
  emits: ["changeInput"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const state = ref(`${props.data}`);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "label-and-input" }, _attrs))} data-v-f8f1745b><label for="" data-v-f8f1745b>${ssrInterpolate(__props.title)} <span class="green-span" data-v-f8f1745b>*</span></label><input class="price-input" type="text"${ssrRenderAttr("placeholder", __props.placeholder)}${ssrRenderAttr("value", unref(state))} data-v-f8f1745b></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Inputs/EditListing/Price.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-f8f1745b"]]);
const _sfc_main$5 = {
  __name: "Categories",
  __ssrInlineRender: true,
  props: {
    title: String,
    name: String,
    data: String
  },
  emits: ["changeInput"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const state = ref(`${props.data}`);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "label-and-input" }, _attrs))} data-v-c669b7de><label data-v-c669b7de>${ssrInterpolate(__props.title)} <span class="green-span" data-v-c669b7de>*</span></label><select data-v-c669b7de><option value="sound-effects" data-v-c669b7de${ssrIncludeBooleanAttr(Array.isArray(unref(state)) ? ssrLooseContain(unref(state), "sound-effects") : ssrLooseEqual(unref(state), "sound-effects")) ? " selected" : ""}>Sound Effects</option><option value="ui-sounds" data-v-c669b7de${ssrIncludeBooleanAttr(Array.isArray(unref(state)) ? ssrLooseContain(unref(state), "ui-sounds") : ssrLooseEqual(unref(state), "ui-sounds")) ? " selected" : ""}>UI Sounds</option><option value="foley-sounds" data-v-c669b7de${ssrIncludeBooleanAttr(Array.isArray(unref(state)) ? ssrLooseContain(unref(state), "foley-sounds") : ssrLooseEqual(unref(state), "foley-sounds")) ? " selected" : ""}>Foley Sounds</option><option value="dialogue" data-v-c669b7de${ssrIncludeBooleanAttr(Array.isArray(unref(state)) ? ssrLooseContain(unref(state), "dialogue") : ssrLooseEqual(unref(state), "dialogue")) ? " selected" : ""}>Dialogue</option><option disabled value="soundscapes" data-v-c669b7de${ssrIncludeBooleanAttr(Array.isArray(unref(state)) ? ssrLooseContain(unref(state), "soundscapes") : ssrLooseEqual(unref(state), "soundscapes")) ? " selected" : ""}>Soundscapes</option><option disabled value="environmental-sounds" data-v-c669b7de${ssrIncludeBooleanAttr(Array.isArray(unref(state)) ? ssrLooseContain(unref(state), "environmental-sounds") : ssrLooseEqual(unref(state), "environmental-sounds")) ? " selected" : ""}> Environmental Sounds </option></select></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Inputs/EditListing/Categories.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-c669b7de"]]);
const _sfc_main$4 = {
  __name: "Processing",
  __ssrInlineRender: true,
  props: {
    title: String,
    name: String,
    data: String
  },
  emits: ["changeInput"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const state = ref(`${props.data}`);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "label-and-input" }, _attrs))} data-v-481f64b2><label for="" data-v-481f64b2>${ssrInterpolate(__props.title)} <span class="green-span" data-v-481f64b2>*</span></label><select data-v-481f64b2><option value="raw" data-v-481f64b2${ssrIncludeBooleanAttr(Array.isArray(unref(state)) ? ssrLooseContain(unref(state), "raw") : ssrLooseEqual(unref(state), "raw")) ? " selected" : ""}>Raw</option><option value="edited" data-v-481f64b2${ssrIncludeBooleanAttr(Array.isArray(unref(state)) ? ssrLooseContain(unref(state), "edited") : ssrLooseEqual(unref(state), "edited")) ? " selected" : ""}>Edited</option><option value="mastered" data-v-481f64b2${ssrIncludeBooleanAttr(Array.isArray(unref(state)) ? ssrLooseContain(unref(state), "mastered") : ssrLooseEqual(unref(state), "mastered")) ? " selected" : ""}>Mastered</option></select></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Inputs/EditListing/Processing.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-481f64b2"]]);
const _sfc_main$3 = {
  __name: "Description",
  __ssrInlineRender: true,
  props: {
    title: String,
    name: String,
    placeholder: String,
    data: String
  },
  emits: ["changeInput"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const state = ref(`${props.data}`);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "label-and-input" }, _attrs))} data-v-7369e9db><div style="${ssrRenderStyle({ "display": "flex", "gap": "1rem" })}" data-v-7369e9db><label for="" data-v-7369e9db>${ssrInterpolate(__props.title)} <span class="green-span" data-v-7369e9db>*</span></label><span style="${ssrRenderStyle({ "position": "absolute", "left": "1rem", "color": "#aaa" })}" data-v-7369e9db>${ssrInterpolate(550 - unref(state).length)}</span></div><textarea maxlength="550" type="text"${ssrRenderAttr("placeholder", __props.placeholder)} data-v-7369e9db>${ssrInterpolate(unref(state))}</textarea></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Inputs/EditListing/Description.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-7369e9db"]]);
const _sfc_main$2 = {
  __name: "File",
  __ssrInlineRender: true,
  props: {
    data: String,
    title: String
  },
  emits: ["changeInput"],
  async setup(__props, { emit: __emit }) {
    let __temp, __restore;
    const props = __props;
    useState("audioAudio", () => {
      return {
        audio: null
      };
    });
    function removePublic(str) {
      if (str.startsWith("public/")) {
        return str.substring("public/".length);
      } else {
        return str;
      }
    }
    const uploadedAudio = ref(removePublic(props.data));
    const errorMessage = ref("");
    const supabase = useSupabaseClient();
    const { data, error } = ([__temp, __restore] = withAsyncContext(() => supabase.storage.from("audios").download(props.data)), __temp = await __temp, __restore(), __temp);
    new File([data], removePublic(props.data), { type: "audio/mpeg" });
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "input-box" }, _attrs))} data-v-f1499cd8><label for="" data-v-f1499cd8>${ssrInterpolate(__props.title)}<span class="green-span" data-v-f1499cd8> *</span></label><div class="input" data-v-f1499cd8><input type="file" accept="audio/mpeg" style="${ssrRenderStyle({ "height": "100%", "width": "100%", "opacity": "0", "z-index": "100" })}" title="" data-v-f1499cd8><div data-v-f1499cd8>`);
      if (!unref(uploadedAudio)) {
        _push(`<p data-v-f1499cd8>+ drop audio...</p>`);
      } else {
        _push(`<p style="${ssrRenderStyle({ "color": "#3fcf8e" })}" data-v-f1499cd8>${ssrInterpolate(("getContentBeforeUnderscore" in _ctx ? _ctx.getContentBeforeUnderscore : unref(getContentBeforeUnderscore))(unref(uploadedAudio)))} <br data-v-f1499cd8>is placed. </p>`);
      }
      _push(`</div>`);
      if (unref(errorMessage)) {
        _push(`<div style="${ssrRenderStyle({ "top": "-5rem", "white-space": "nowrap" })}" data-v-f1499cd8><p style="${ssrRenderStyle({ "font-size": "1.1rem", "color": "orangered" })}" data-v-f1499cd8>${ssrInterpolate(unref(errorMessage))}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Inputs/EditListing/File.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-f1499cd8"]]);
const _sfc_main$1 = {
  __name: "ListingEditMode",
  __ssrInlineRender: true,
  props: {
    audio: Object
  },
  emits: ["toggle-close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    useSupabaseUser();
    useSupabaseClient();
    useRoute();
    const info = reactive({
      name: `${props.audio.name}`,
      price: `${props.audio.price}`,
      category: `${props.audio.category}`,
      processing: `${props.audio.processing}`,
      description: `${props.audio.description}`,
      audio: null
    });
    const errorMessage = ref("");
    const onChangeInput = (inputData, name) => {
      info[name] = inputData;
    };
    useState(
      "listingEditRefetchSignal",
      () => false
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputsEditListingName = __nuxt_component_0;
      const _component_InputsEditListingPrice = __nuxt_component_1;
      const _component_InputsEditListingCategories = __nuxt_component_2$1;
      const _component_InputsEditListingProcessing = __nuxt_component_3;
      const _component_InputsEditListingDescription = __nuxt_component_4;
      const _component_InputsEditListingFile = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "box" }, _attrs))} data-v-b777ca42><h2 class="youre-editing" data-v-b777ca42> You&#39;re editing <span class="green-span" data-v-b777ca42>&quot;${ssrInterpolate(__props.audio.name)}&quot;</span></h2><div class="inputs-group" data-v-b777ca42>`);
      _push(ssrRenderComponent(_component_InputsEditListingName, {
        title: "Listing Name",
        name: "name",
        placeholder: "Fireball Sound",
        data: __props.audio.name,
        onChangeInput
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputsEditListingPrice, {
        title: "Price",
        name: "price",
        placeholder: "5",
        data: String(__props.audio.price),
        onChangeInput
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputsEditListingCategories, {
        title: "Category",
        name: "category",
        data: __props.audio.category,
        onChangeInput,
        class: "categories"
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputsEditListingProcessing, {
        title: "Processing",
        name: "processing",
        data: __props.audio.processing,
        onChangeInput,
        class: "processing"
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputsEditListingDescription, {
        title: "Description",
        name: "description",
        placeholder: "When a beautiful fireball erupted, I pressed record and captured its deep rumble and sharp crack perfectly. Back in my studio, I spent hours editing and mastering the recording to ensure it sounded just as incredible on the recording as it did in the forest.",
        data: __props.audio.description,
        onChangeInput,
        class: "description"
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputsEditListingFile, {
        title: "Audio",
        data: __props.audio.audio,
        onChangeInput,
        class: "file"
      }, null, _parent));
      _push(`</div><div data-v-b777ca42><div class="buttons" data-v-b777ca42><button class="hero-button" data-v-b777ca42>Submit</button><button class="delete-button" data-v-b777ca42>Cancel</button></div>`);
      if (unref(errorMessage)) {
        _push(`<p style="${ssrRenderStyle({ "position": "absolute", "bottom": "-3rem", "color": "orangered", "font-size": "1.2rem" })}" data-v-b777ca42>${ssrInterpolate(unref(errorMessage))}</p>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EditModes/ListingEditMode.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b777ca42"]]);
const _sfc_main = {
  __name: "[name]-[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useHead({
      title: route.params.name
    });
    const audio = ref({});
    const listingEditRefetchSignal = useState("listingEditRefetchSignal");
    watch(
      () => listingEditRefetchSignal.value,
      async () => {
        const { data } = await useFetch(`/api/audio/${route.params.id}`, "$Zs78z2Orrd");
        audio.value = data.value;
        reRenderComponent.value = !reRenderComponent.value;
        setTimeout(() => {
          reRenderComponent.value = !reRenderComponent.value;
        }, 300);
      }
    );
    const reRenderComponent = ref(true);
    const listingEditToggle = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AudioDetailHero = __nuxt_component_0$1;
      const _component_AudioDetailButtons = __nuxt_component_1$1;
      const _component_EditModesListingEditMode = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-a94cb18a>`);
      if (unref(audio) && unref(audio).name) {
        _push(`<div data-v-a94cb18a>`);
        if (!unref(listingEditToggle)) {
          _push(`<div data-v-a94cb18a>`);
          _push(ssrRenderComponent(_component_AudioDetailHero, {
            style: {},
            audio: unref(audio)
          }, null, _parent));
          _push(ssrRenderComponent(_component_AudioDetailButtons, {
            audio: unref(audio),
            onToggleOpen: (response) => listingEditToggle.value = response
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<div data-aos="fade-in" data-aos-offset="-2000" data-aos-duration="1500" data-v-a94cb18a>`);
          _push(ssrRenderComponent(_component_EditModesListingEditMode, {
            audio: unref(audio),
            onToggleClose: (response) => listingEditToggle.value = response
          }, null, _parent));
          _push(`</div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<div class="lds-dual-ring" data-v-a94cb18a></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/audio/[name]-[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _name___id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a94cb18a"]]);

export { _name___id_ as default };
//# sourceMappingURL=_name_-_id_-CjvaPx6y.mjs.map
