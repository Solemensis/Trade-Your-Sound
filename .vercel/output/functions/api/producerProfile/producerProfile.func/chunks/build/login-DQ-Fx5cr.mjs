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

const _imports_0 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='800'%20height='800'%20viewBox='-3%200%20262%20262'%20preserveAspectRatio='xMidYMid'%20xmlns:v='https://vecta.io/nano'%3e%3cpath%20d='M255.878%20133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45%2012.04-9.283%2030.172-26.69%2042.356l-.244%201.622%2038.755%2030.023%202.685.268c24.659-22.774%2038.875-56.282%2038.875-96.027'%20fill='%234285f4'/%3e%3cpath%20d='M130.55%20261.1c35.248%200%2064.839-11.605%2086.453-31.622l-41.196-31.913c-11.024%207.688-25.82%2013.055-45.257%2013.055-34.523%200-63.824-22.773-74.269-54.25l-1.531.13-40.298%2031.187-.527%201.465C35.393%20231.798%2079.49%20261.1%20130.55%20261.1'%20fill='%2334a853'/%3e%3cpath%20d='M56.281%20156.37c-2.756-8.123-4.351-16.827-4.351-25.82s1.595-17.697%204.206-25.82l-.073-1.73L15.26%2071.312l-1.335.635C5.077%2089.644%200%20109.517%200%20130.55s5.077%2040.905%2013.925%2058.602l42.356-32.782'%20fill='%23fbbc05'/%3e%3cpath%20d='M130.55%2050.479c24.514%200%2041.05%2010.589%2050.479%2019.438l36.844-35.974C195.245%2012.91%20165.798%200%20130.55%200%2079.49%200%2035.393%2029.301%2013.925%2071.947l42.211%2032.783c10.59-31.477%2039.891-54.251%2074.414-54.251'%20fill='%23eb4335'/%3e%3c/svg%3e";
const _imports_1 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='800'%20height='800'%20viewBox='0%20-28.5%20256%20256'%20preserveAspectRatio='xMidYMid'%20xmlns:v='https://vecta.io/nano'%3e%3cpath%20d='M216.856%2016.597A208.5%20208.5%200%200%200%20164.042%200a154.86%20154.86%200%200%200-6.765%2014.046c-19.692-2.961-39.203-2.961-58.533%200C96.911%209.645%2094.193%204.113%2091.897%200a207.81%20207.81%200%200%200-52.855%2016.638C5.618%2067.147-3.443%20116.401%201.087%20164.956c22.169%2016.555%2043.653%2026.612%2064.775%2033.193%205.215-7.177%209.866-14.807%2013.873-22.848-7.631-2.9-14.94-6.478-21.846-10.632%201.832-1.357%203.624-2.777%205.356-4.237%2042.123%2019.702%2087.89%2019.702%20129.51%200a131.66%20131.66%200%200%200%205.356%204.237%20136.07%20136.07%200%200%201-21.887%2010.653c4.007%208.02%208.638%2015.671%2013.873%2022.848%2021.142-6.581%2042.646-16.637%2064.815-33.213%205.316-56.288-9.081-105.089-38.056-148.359zM85.474%20135.095c-12.645%200-23.015-11.805-23.015-26.18s10.148-26.2%2023.015-26.2%2023.236%2011.804%2023.015%2026.2c.02%2014.375-10.148%2026.18-23.015%2026.18zm85.051%200c-12.645%200-23.015-11.805-23.015-26.18s10.148-26.2%2023.015-26.2%2023.236%2011.804%2023.015%2026.2c0%2014.375-10.148%2026.18-23.015%2026.18z'%20fill='%235865f2'/%3e%3c/svg%3e";
const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useSupabaseClient();
    const email = ref("");
    const password = ref("");
    const errorMessage = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-68d958c7><h2 style="${ssrRenderStyle({ "font-weight": "400", "color": "#ddd", "font-size": "3rem" })}" data-v-68d958c7> Login to <span class="green-span" data-v-68d958c7>Sound Trader</span></h2><div class="auth" data-v-68d958c7><div class="inputs" data-v-68d958c7><input${ssrRenderAttr("value", unref(email))} placeholder="e-mail" type="text" data-v-68d958c7><input${ssrRenderAttr("value", unref(password))} placeholder="password" type="password" data-v-68d958c7></div><div class="buttons" data-v-68d958c7><button class="hero-button" data-v-68d958c7>Login</button>`);
      if (unref(errorMessage)) {
        _push(`<p data-v-68d958c7>${ssrInterpolate(unref(errorMessage).message)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="oauth" data-v-68d958c7><p data-v-68d958c7> Have no account? Register from `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "green-span",
        style: { "border-bottom": "1px solid #3fcf8e" },
        to: "/register"
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
      _push(` or sign in using 3rd party auth: </p><button class="google" data-v-68d958c7><img${ssrRenderAttr("src", _imports_0)} alt="google logo" data-v-68d958c7><span data-v-68d958c7>Sign in with Google</span></button><button class="discord" data-v-68d958c7><img${ssrRenderAttr("src", _imports_1)} alt="discord logo" data-v-68d958c7><span data-v-68d958c7>Sign in with Discord</span></button></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-68d958c7"]]);

export { login as default };
//# sourceMappingURL=login-DQ-Fx5cr.mjs.map
