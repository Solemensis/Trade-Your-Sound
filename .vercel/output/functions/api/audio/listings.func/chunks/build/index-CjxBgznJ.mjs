import { reactive, ref, watch, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
import { _ as _export_sfc, a as useRoute, b as useSupabaseUser, d as useState } from './server.mjs';
import { c as cutString, f as formatString, b as addHttpsIfNeeded } from './useStringFunctions-KS8YcS2G.mjs';
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

const _sfc_main$6 = {
  __name: "Categories",
  __ssrInlineRender: true,
  props: {
    title: String,
    name: String,
    data: Array
  },
  emits: ["changeInput"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    ref([...props.data]);
    const isChecked = {
      first: props.data.includes("sound-effects"),
      second: props.data.includes("environmental-sounds"),
      third: props.data.includes("ui-sounds"),
      fourth: props.data.includes("foley-sounds"),
      fifth: props.data.includes("dialogue"),
      sixth: props.data.includes("soundscapes")
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "categories-box" }, _attrs))} data-v-36a343e0><label class="heading" for="" data-v-36a343e0> Select your favourite categories to work with <span class="green-span" data-v-36a343e0>*</span></label><form class="categories" data-v-36a343e0><div data-v-36a343e0><input class="checkbox"${ssrIncludeBooleanAttr(Array.isArray(isChecked.first) ? ssrLooseContain(isChecked.first, "sound-effects") : isChecked.first) ? " checked" : ""} type="checkbox" value="sound-effects" data-v-36a343e0><label data-v-36a343e0>Sound Effects</label></div><div style="${ssrRenderStyle({ "opacity": "0.4" })}" data-v-36a343e0><input class="checkbox disabled-checkbox"${ssrIncludeBooleanAttr(Array.isArray(isChecked.second) ? ssrLooseContain(isChecked.second, "environmental-sounds") : isChecked.second) ? " checked" : ""} type="checkbox" value="environmental-sounds" disabled data-v-36a343e0><label data-v-36a343e0>Environmental Sounds</label></div><div data-v-36a343e0><input class="checkbox"${ssrIncludeBooleanAttr(Array.isArray(isChecked.third) ? ssrLooseContain(isChecked.third, "ui-sounds") : isChecked.third) ? " checked" : ""} type="checkbox" value="ui-sounds" data-v-36a343e0><label data-v-36a343e0>UI Sounds</label></div><div data-v-36a343e0><input class="checkbox"${ssrIncludeBooleanAttr(Array.isArray(isChecked.fourth) ? ssrLooseContain(isChecked.fourth, "foley-sounds") : isChecked.fourth) ? " checked" : ""} type="checkbox" value="foley-sounds" data-v-36a343e0><label data-v-36a343e0>Foley Sounds</label></div><div data-v-36a343e0><input class="checkbox"${ssrIncludeBooleanAttr(Array.isArray(isChecked.fifth) ? ssrLooseContain(isChecked.fifth, "dialogue") : isChecked.fifth) ? " checked" : ""} type="checkbox" value="dialogue" style="${ssrRenderStyle({})}" data-v-36a343e0><label data-v-36a343e0>Dialogue</label></div><div style="${ssrRenderStyle({ "opacity": "0.4" })}" data-v-36a343e0><input class="checkbox disabled-checkbox"${ssrIncludeBooleanAttr(Array.isArray(isChecked.sixth) ? ssrLooseContain(isChecked.sixth, "soundscapes") : isChecked.sixth) ? " checked" : ""} type="checkbox" value="soundscapes" disabled data-v-36a343e0><label data-v-36a343e0>Soundscapes</label></div></form></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Inputs/ProducerProfile/Categories.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-36a343e0"]]);
const _sfc_main$5 = {
  __name: "Equipment",
  __ssrInlineRender: true,
  props: {
    title: String,
    name: String,
    data: Array
  },
  emits: ["changeInput"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const state = ref("");
    const equipments = ref([...props.data]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "equipment-box" }, _attrs))} data-v-db1236f6><label class="heading" for="" data-v-db1236f6>Add your physical equipments <span class="green-span" data-v-db1236f6>*</span></label><div class="input-and-items" data-v-db1236f6><div class="items" data-v-db1236f6>`);
      if (unref(equipments) && unref(equipments).length) {
        _push(`<!--[-->`);
        ssrRenderList(unref(equipments), (equipment) => {
          _push(`<p class="item" data-v-db1236f6>${ssrInterpolate(equipment)}\u274C </p>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<p style="${ssrRenderStyle({ "color": "#bb4545", "font-size": "1.5rem" })}" data-v-db1236f6>add at least 1</p>`);
      }
      _push(`</div><div class="input-button" data-v-db1236f6><input type="text" placeholder="sm57 x2"${ssrRenderAttr("value", unref(state))} data-v-db1236f6><button data-v-db1236f6>+</button></div></div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Inputs/ProducerProfile/Equipment.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-db1236f6"]]);
const _sfc_main$4 = {
  __name: "SelfDescription",
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "self-description" }, _attrs))} data-v-f66e0efe><label for="" data-v-f66e0efe>${ssrInterpolate(__props.title)} <span class="green-span" data-v-f66e0efe>*</span></label><span style="${ssrRenderStyle({ "text-align": "center", "font-size": "1.4rem", "color": "#989898" })}" data-v-f66e0efe>${ssrInterpolate(750 - unref(state).length)}</span><textarea maxlength="750" type="text"${ssrRenderAttr("placeholder", __props.placeholder)} data-v-f66e0efe>${ssrInterpolate(unref(state))}</textarea></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Inputs/ProducerProfile/SelfDescription.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-f66e0efe"]]);
const _sfc_main$3 = {
  __name: "Checkboxes",
  __ssrInlineRender: true,
  props: {
    LFopportunity: Boolean,
    showProfile: Boolean,
    LFopportunityName: String,
    showProfileName: String
  },
  emits: ["changeInput"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const opportunityValue = ref(props.LFopportunity);
    const showProfileValue = ref(props.showProfile);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "checkbox-group" }, _attrs))} data-v-877eb3a2><div class="opportunity-check" data-v-877eb3a2><label for="" data-v-877eb3a2>Are you open to opportunities from other people?</label><input${ssrIncludeBooleanAttr(Array.isArray(unref(opportunityValue)) ? ssrLooseContain(unref(opportunityValue), null) : unref(opportunityValue)) ? " checked" : ""} class="checkbox" type="checkbox" data-v-877eb3a2></div><div class="visibility-check" data-v-877eb3a2><label for="" data-v-877eb3a2>Do you want your profile to be seen on producer profiles page?</label><input${ssrIncludeBooleanAttr(Array.isArray(unref(showProfileValue)) ? ssrLooseContain(unref(showProfileValue), null) : unref(showProfileValue)) ? " checked" : ""} class="checkbox" type="checkbox" data-v-877eb3a2></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Inputs/ProducerProfile/Checkboxes.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-877eb3a2"]]);
const _sfc_main$2 = {
  __name: "RelatedLink",
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "link-box" }, _attrs))} data-v-ba0e5ce0><label for="" data-v-ba0e5ce0>${ssrInterpolate(__props.title)}</label><input type="text"${ssrRenderAttr("placeholder", __props.placeholder)}${ssrRenderAttr("value", unref(state))} data-v-ba0e5ce0></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Inputs/ProducerProfile/RelatedLink.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-ba0e5ce0"]]);
const _sfc_main$1 = {
  __name: "ProfileEditMode",
  __ssrInlineRender: true,
  props: {
    data: Object
  },
  emits: ["toggle-close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    useSupabaseUser();
    const info = reactive({
      categories: [...props.data.categories],
      equipment: [...props.data.equipment],
      LFopportunity: props.data.LFopportunity,
      showProfile: props.data.showProfile,
      description: `${props.data.description}`,
      relatedLink1Desc: `${props.data.relatedLinks[0].relatedLink1Desc}`,
      relatedLink2Desc: `${props.data.relatedLinks[0].relatedLink2Desc}`,
      relatedLink3Desc: `${props.data.relatedLinks[0].relatedLink3Desc}`,
      relatedLink1: `${props.data.relatedLinks[0].relatedLink1}`,
      relatedLink2: `${props.data.relatedLinks[0].relatedLink2}`,
      relatedLink3: `${props.data.relatedLinks[0].relatedLink3}`
    });
    const errorMessage = ref("");
    const onChangeInput = (inputData, name) => {
      info[name] = inputData;
    };
    useState("carryRefetchSignal", () => false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputsProducerProfileCategories = __nuxt_component_0$1;
      const _component_InputsProducerProfileEquipment = __nuxt_component_1;
      const _component_InputsProducerProfileSelfDescription = __nuxt_component_2;
      const _component_InputsProducerProfileCheckboxes = __nuxt_component_3;
      const _component_InputsProducerProfileRelatedLink = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-aos": "fade-in",
        "data-aos-offset": "-2000",
        "data-aos-duration": "1500"
      }, _attrs))} data-v-c4cbd987><div class="inputs-group" data-v-c4cbd987>`);
      _push(ssrRenderComponent(_component_InputsProducerProfileCategories, {
        class: "categories",
        title: "Categories",
        name: "categories",
        data: __props.data.categories,
        onChangeInput
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputsProducerProfileEquipment, {
        title: "Equipment",
        name: "equipment",
        data: __props.data.equipment,
        onChangeInput
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputsProducerProfileSelfDescription, {
        class: "description",
        title: "Self description",
        name: "description",
        placeholder: "As an audio engineer specialized in creating UI sounds and environmental audio recording, I have worked on projects like video games, nature documentaries, and blockbuster films. I have also recorded and mixed albums for chart-topping artists. My job is to ensure the sound in any project is perfect and I have the experience and passion to bring it to the next level.",
        data: __props.data.description,
        onChangeInput
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputsProducerProfileCheckboxes, {
        LFopportunity: __props.data.LFopportunity,
        showProfile: __props.data.showProfile,
        onChangeInput,
        LFopportunityName: "LFopportunity",
        showProfileName: "showProfile"
      }, null, _parent));
      _push(`</div><label style="${ssrRenderStyle({ "font-size": "1.8rem", "color": "blueviolet", "font-weight": "500" })}" data-v-c4cbd987>Show us what you got!</label><div style="${ssrRenderStyle({ "margin-top": "3.5rem" })}" class="links-group" data-v-c4cbd987>`);
      _push(ssrRenderComponent(_component_InputsProducerProfileRelatedLink, {
        class: "link",
        style: { "width": "150%" },
        title: "Describe your link",
        name: "relatedLink1Desc",
        placeholder: "This is a link to my open source foley library samples",
        data: __props.data.relatedLinks[0].relatedLink1Desc,
        onChangeInput
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputsProducerProfileRelatedLink, {
        class: "link",
        style: { "width": "50%", "justify-self": "end" },
        title: "Paste link",
        name: "relatedLink1",
        placeholder: "Link",
        data: __props.data.relatedLinks[0].relatedLink1,
        onChangeInput
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputsProducerProfileRelatedLink, {
        class: "link",
        style: { "width": "150%" },
        title: "Describe your link",
        name: "relatedLink2Desc",
        placeholder: "It's my own track which is currently being used in a game",
        data: __props.data.relatedLinks[0].relatedLink2Desc,
        onChangeInput
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputsProducerProfileRelatedLink, {
        class: "link",
        style: { "width": "50%", "justify-self": "end" },
        title: "Paste link",
        name: "relatedLink2",
        placeholder: "Link",
        data: __props.data.relatedLinks[0].relatedLink2,
        onChangeInput
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputsProducerProfileRelatedLink, {
        class: "link",
        style: { "width": "150%" },
        title: "Describe your link",
        name: "relatedLink3Desc",
        placeholder: "This is my soundcloud profile",
        data: __props.data.relatedLinks[0].relatedLink3Desc,
        onChangeInput
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputsProducerProfileRelatedLink, {
        class: "link",
        style: { "width": "50%", "justify-self": "end" },
        title: "Paste link",
        name: "relatedLink3",
        placeholder: "Link",
        data: __props.data.relatedLinks[0].relatedLink3,
        onChangeInput
      }, null, _parent));
      _push(`</div><div class="bottom-group" data-v-c4cbd987><div class="buttons" style="${ssrRenderStyle({ "margin-bottom": "6rem" })}" data-v-c4cbd987><button class="hero-button" data-v-c4cbd987>Submit</button><button class="delete-button" data-v-c4cbd987>Cancel</button>`);
      if (unref(errorMessage)) {
        _push(`<p style="${ssrRenderStyle({ "position": "absolute", "top": "-4rem", "color": "brown", "font-size": "1.4rem" })}" data-v-c4cbd987>${ssrInterpolate(unref(errorMessage))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EditModes/ProfileEditMode.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c4cbd987"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const user = useSupabaseUser();
    reactive({
      room_name: ``,
      user1_id: null,
      user2_id: null,
      user1_deleted: {},
      user2_deleted: {},
      user1_nick: "",
      user2_nick: ""
    });
    const profile = ref({});
    const profileEditToggle = ref(false);
    const carryRefetchSignal = useState("carryRefetchSignal");
    watch(
      () => carryRefetchSignal.value,
      async () => {
        const { data, error, refresh } = await useFetch(
          `/api/producerProfile/${route.params.nickName}`,
          "$GXyfWd0wYK"
        );
        if (!data.value && error.value) {
          error.value = null;
          refresh();
        }
        profile.value = data.value;
      }
    );
    const errorMessage = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_EditModesProfileEditMode = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-70c9a469>`);
      if (unref(profile) && unref(profile).user_name) {
        _push(`<div data-v-70c9a469><div class="profile-of" data-v-70c9a469>`);
        if (!unref(profileEditToggle)) {
          _push(`<h2 data-v-70c9a469> Profile of <span style="${ssrRenderStyle({ "color": "#3fcf8e" })}" data-v-70c9a469>${ssrInterpolate(unref(profile).user_name)}</span></h2>`);
        } else {
          _push(`<h2 data-aos="fade-in" data-aos-offset="-2000" data-aos-duration="1500" class="edit-heading" data-v-70c9a469> You&#39;re editing <span style="${ssrRenderStyle({ "color": "#3fcf8e" })}" data-v-70c9a469>your profile</span></h2>`);
        }
        if (!unref(profileEditToggle)) {
          _push(`<div data-v-70c9a469><p class="update" data-v-70c9a469> updated: ${ssrInterpolate(("cutString" in _ctx ? _ctx.cutString : unref(cutString))(String(unref(profile).updated_at)))}</p>`);
          if (unref(profile).LFopportunity) {
            _push(`<p class="opportunity" data-v-70c9a469><span style="${ssrRenderStyle({ "font-size": "1.8rem" })}" data-v-70c9a469>\u{1F525}</span> This user is currently <span style="${ssrRenderStyle({ "color": "#3fcf8e" })}" data-v-70c9a469>open</span> to opportunities. <span style="${ssrRenderStyle({ "font-size": "1.8rem" })}" data-v-70c9a469>\u{1F525}</span></p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (!unref(profileEditToggle)) {
          _push(`<div data-v-70c9a469>`);
          if (unref(profile).description) {
            _push(`<article class="description" data-v-70c9a469><span style="${ssrRenderStyle({ "color": "#3fcf8e" })}" data-v-70c9a469>&quot;\xA0</span>${ssrInterpolate(unref(profile).description)}<span style="${ssrRenderStyle({ "color": "#3fcf8e" })}" data-v-70c9a469>\xA0&quot;</span></article>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="user-data" data-v-70c9a469><div class="category-equipment" data-v-70c9a469><div data-v-70c9a469><h3 data-v-70c9a469>Categories</h3><div class="categories" data-v-70c9a469>`);
          if (unref(profile).categories && unref(profile).categories.length) {
            _push(`<ul data-v-70c9a469><!--[-->`);
            ssrRenderList(unref(profile).categories, (category) => {
              _push(`<li data-v-70c9a469> \u2714\uFE0F ${ssrInterpolate(("formatString" in _ctx ? _ctx.formatString : unref(formatString))(category))}</li>`);
            });
            _push(`<!--]--></ul>`);
          } else {
            _push(`<ul data-v-70c9a469><li data-v-70c9a469>...</li><li data-v-70c9a469>...</li><li data-v-70c9a469>...</li></ul>`);
          }
          _push(`</div></div><div data-v-70c9a469><h3 data-v-70c9a469>Equipment</h3><div class="items" data-v-70c9a469>`);
          if (unref(profile).equipment && unref(profile).equipment.length) {
            _push(`<ul data-v-70c9a469><!--[-->`);
            ssrRenderList(unref(profile).equipment, (item) => {
              _push(`<li data-v-70c9a469>\u2714\uFE0F ${ssrInterpolate(item)}</li>`);
            });
            _push(`<!--]--></ul>`);
          } else {
            _push(`<ul data-v-70c9a469><li data-v-70c9a469>...</li><li data-v-70c9a469>...</li><li data-v-70c9a469>...</li></ul>`);
          }
          _push(`</div></div></div><div class="projects" data-v-70c9a469><h3 data-v-70c9a469>Projects</h3>`);
          if (unref(profile).relatedLinks && unref(profile).relatedLinks.length) {
            _push(`<div class="links" data-v-70c9a469>`);
            if (unref(profile).relatedLinks[0].relatedLink1Desc) {
              _push(`<a target="_blank"${ssrRenderAttr("href", ("addHttpsIfNeeded" in _ctx ? _ctx.addHttpsIfNeeded : unref(addHttpsIfNeeded))(unref(profile).relatedLinks[0].relatedLink1))} data-v-70c9a469> \u2714\uFE0F ${ssrInterpolate(unref(profile).relatedLinks[0].relatedLink1Desc)}</a>`);
            } else {
              _push(`<!---->`);
            }
            if (unref(profile).relatedLinks[0].relatedLink2Desc) {
              _push(`<a target="_blank"${ssrRenderAttr("href", ("addHttpsIfNeeded" in _ctx ? _ctx.addHttpsIfNeeded : unref(addHttpsIfNeeded))(unref(profile).relatedLinks[0].relatedLink2))} data-v-70c9a469>\u2714\uFE0F ${ssrInterpolate(unref(profile).relatedLinks[0].relatedLink2Desc)}</a>`);
            } else {
              _push(`<!---->`);
            }
            if (unref(profile).relatedLinks[0].relatedLink3Desc) {
              _push(`<a target="_blank"${ssrRenderAttr("href", ("addHttpsIfNeeded" in _ctx ? _ctx.addHttpsIfNeeded : unref(addHttpsIfNeeded))(unref(profile).relatedLinks[0].relatedLink3))} data-v-70c9a469>\u2714\uFE0F ${ssrInterpolate(unref(profile).relatedLinks[0].relatedLink3Desc)}</a>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div><div class="buttons" data-v-70c9a469>`);
          if (!unref(profileEditToggle) && unref(user) && unref(user).id === unref(profile).lister_id) {
            _push(`<div data-v-70c9a469><button class="hero-button" data-v-70c9a469> Edit page </button></div>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(user) && unref(user).id !== unref(profile).lister_id) {
            _push(`<button class="hero-button" data-v-70c9a469> Send message </button>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(errorMessage)) {
            _push(`<p class="errorMessage" data-v-70c9a469>${ssrInterpolate(unref(errorMessage))}</p>`);
          } else {
            _push(`<!---->`);
          }
          if (!unref(user)) {
            _push(`<h2 class="no-user" data-v-70c9a469> You have to be a user to send a message. </h2>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(profileEditToggle)) {
          _push(`<div data-v-70c9a469>`);
          _push(ssrRenderComponent(_component_EditModesProfileEditMode, {
            data: unref(profile),
            onToggleClose: (response) => profileEditToggle.value = response
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div class="lds-dual-ring" data-v-70c9a469></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/[nickName]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-70c9a469"]]);

export { index as default };
//# sourceMappingURL=index-CjxBgznJ.mjs.map
