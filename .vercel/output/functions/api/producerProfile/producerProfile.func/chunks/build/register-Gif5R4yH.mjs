import { _ as _export_sfc, c as useSupabaseClient, l as __nuxt_component_0$1 } from './server.mjs';
import { ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    useSupabaseClient();
    const email = ref("");
    const password = ref("");
    const errorMessage = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-a499cea4><h2 style="${ssrRenderStyle({ "font-weight": "400", "color": "#ddd", "font-size": "3rem" })}" data-v-a499cea4> Register to <span class="green-span" data-v-a499cea4>Sound Trader</span></h2><div class="auth" data-v-a499cea4><div class="inputs" data-v-a499cea4><input${ssrRenderAttr("value", unref(email))} placeholder="e-mail" type="text" data-v-a499cea4><input${ssrRenderAttr("value", unref(password))} placeholder="password" type="password" data-v-a499cea4></div><div class="buttons" data-v-a499cea4><button class="hero-button" data-v-a499cea4>Register</button>`);
      if (unref(errorMessage)) {
        _push(`<p data-v-a499cea4>${ssrInterpolate(unref(errorMessage).message)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><p style="${ssrRenderStyle({ "text-align": "center", "margin-top": "6rem", "font-size": "1.4rem", "color": "#aaa" })}" data-v-a499cea4> Got an account? Login from `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "green-span",
        style: { "border-bottom": "1px solid #3fcf8e" },
        to: "/login"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`here`);
          } else {
            return [
              createTextVNode("here")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const register = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a499cea4"]]);

export { register as default };
//# sourceMappingURL=register-Gif5R4yH.mjs.map
