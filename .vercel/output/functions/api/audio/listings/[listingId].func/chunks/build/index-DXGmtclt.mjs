import { ref, reactive, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, b as useSupabaseUser } from './server.mjs';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const user = useSupabaseUser();
    const errorMessage = ref("");
    const termsAccepted = ref(false);
    const username = reactive({
      lister_id: user.value.id,
      user_name: "",
      terms: termsAccepted.value,
      relatedLinks: [
        {
          relatedLink1: "",
          relatedLink2: "",
          relatedLink3: "",
          relatedLink1Desc: "",
          relatedLink2Desc: "",
          relatedLink3Desc: ""
        }
      ],
      description: "",
      showProfile: false,
      admin: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-e9afbf04><h2 class="pick-username" data-v-e9afbf04><span style="${ssrRenderStyle({ "color": "#3fcf8e" })}" data-v-e9afbf04>Pick a</span> Username </h2><div class="username" data-v-e9afbf04><input type="text" placeholder="SoundMage31"${ssrRenderAttr("value", unref(username).user_name)} data-v-e9afbf04></div><div class="terms-button" data-v-e9afbf04><div class="terms" data-v-e9afbf04><label for="" data-v-e9afbf04>Do you accept our terms of concern? <span style="${ssrRenderStyle({ "color": "#3fcf8e" })}" data-v-e9afbf04>*</span></label><input${ssrIncludeBooleanAttr(Array.isArray(unref(termsAccepted)) ? ssrLooseContain(unref(termsAccepted), null) : unref(termsAccepted)) ? " checked" : ""} class="checkbox" type="checkbox" data-v-e9afbf04></div><button style="${ssrRenderStyle({ "margin-bottom": "1rem" })}" class="hero-button" data-v-e9afbf04> Initiate Profile </button>`);
      if (unref(errorMessage)) {
        _push(`<p style="${ssrRenderStyle({ "position": "absolute", "bottom": "-6rem", "width": "100%", "text-align": "center", "font-size": "1.2rem", "color": "#aaa" })}" data-v-e9afbf04><span style="${ssrRenderStyle({ "color": "#ff4545" })}" data-v-e9afbf04>Error:</span> ${ssrInterpolate(unref(errorMessage))}</p>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e9afbf04"]]);

export { index as default };
//# sourceMappingURL=index-DXGmtclt.mjs.map
