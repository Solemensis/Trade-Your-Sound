import { ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, c as useSupabaseClient } from './server.mjs';

const _imports_0 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20xmlns:v='https://vecta.io/nano'%3e%3cpath%20d='M12%2022a10%2010%200%201%201%200-20%2010%2010%200%201%201%200%2020zm0-2a8%208%200%201%200%200-16%208%208%200%200%200%200%2016zM10.622%208.415l4.879%203.252a.4.4%200%200%201%200%20.666l-4.88%203.252a.4.4%200%200%201-.621-.332V8.747a.4.4%200%200%201%20.622-.332z'%20fill='rgba(63,207,142,1)'/%3e%3c/svg%3e";
const _imports_1 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20xmlns:v='https://vecta.io/nano'%3e%3cpath%20d='M12%2022a10%2010%200%201%201%200-20%2010%2010%200%201%201%200%2020zm0-2a8%208%200%201%200%200-16%208%208%200%200%200%200%2016zM9%209h2v6H9V9zm4%200h2v6h-2V9z'%20fill='rgba(204,85,255,1)'/%3e%3c/svg%3e";
const _sfc_main = {
  __name: "JukeBox",
  __ssrInlineRender: true,
  props: {
    src: String
  },
  setup(__props) {
    useSupabaseClient();
    const player = ref(null);
    ref(null);
    const timeline = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-3fe41851><audio type="audio/mpeg" data-v-3fe41851></audio><div class="jukebox" data-v-3fe41851><div class="buttons" data-v-3fe41851><button class="${ssrRenderClass({ invis: unref(player) && !unref(player).paused })}" data-v-3fe41851><img${ssrRenderAttr("src", _imports_0)} alt="play button" data-v-3fe41851></button><button class="${ssrRenderClass({ invis: unref(player) && unref(player).paused })}" data-v-3fe41851><img${ssrRenderAttr("src", _imports_1)} alt="pause button" data-v-3fe41851></button></div><input class="timeline"${ssrRenderAttr("value", unref(timeline))} type="range" data-v-3fe41851></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/JukeBox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3fe41851"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=JukeBox-SDk-7Re0.mjs.map
