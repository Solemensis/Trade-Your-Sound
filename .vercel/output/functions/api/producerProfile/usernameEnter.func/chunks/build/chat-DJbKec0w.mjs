import { e as extractTime } from './useStringFunctions-KS8YcS2G.mjs';
import { ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { _ as _imports_1 } from './delete-but-YjZxxmXX.mjs';
import { _ as _export_sfc, b as useSupabaseUser, c as useSupabaseClient, d as useState } from './server.mjs';
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
  __name: "chat",
  __ssrInlineRender: true,
  setup(__props) {
    const user = useSupabaseUser();
    useSupabaseClient();
    const chatRooms = ref([]);
    const loading = ref(true);
    const messages = ref();
    const relatedRoomId = ref("");
    const chat2 = ref({});
    const userName = useState("userName");
    const textMessage = ref("");
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-1fcaf2d3><div style="${ssrRenderStyle({ "position": "relative" })}" data-v-1fcaf2d3>`);
      if (unref(chatRooms) && unref(chatRooms).length) {
        _push(`<div class="container" data-v-1fcaf2d3><div class="left-part" data-v-1fcaf2d3><!--[-->`);
        ssrRenderList(unref(chatRooms), (chatroom) => {
          _push(`<div class="chatrooms" data-v-1fcaf2d3><h3 data-v-1fcaf2d3>${ssrInterpolate(chatroom.room_name)}</h3><img${ssrRenderAttr("src", _imports_1)} alt="delete button" data-v-1fcaf2d3></div>`);
        });
        _push(`<!--]--></div>`);
        if (unref(relatedRoomId)) {
          _push(`<div data-aos="fade-out" data-v-1fcaf2d3><div class="right-part" data-v-1fcaf2d3><div class="heading-box" data-v-1fcaf2d3><p data-v-1fcaf2d3>${ssrInterpolate(unref(userName) == unref(chat2).user1_nick ? unref(chat2).user2_nick : unref(chat2).user1_nick)}</p>`);
          if (unref(chat2).listing_path) {
            _push(`<h2 class="roomNameListing" data-v-1fcaf2d3>${ssrInterpolate(unref(chat2).room_name)}</h2>`);
          } else {
            _push(`<h2 class="roomNameChat" data-v-1fcaf2d3>${ssrInterpolate(unref(chat2).room_name)}</h2>`);
          }
          _push(`<p data-v-1fcaf2d3>${ssrInterpolate(unref(userName) == unref(chat2).user1_nick ? unref(chat2).user1_nick : unref(chat2).user2_nick)}</p></div><div class="message-box" data-v-1fcaf2d3><!--[-->`);
          ssrRenderList(unref(messages), (message) => {
            _push(`<p class="${ssrRenderClass(
              unref(user).id == message.lister_id ? "myMessage" : "itsMessage"
            )}" data-v-1fcaf2d3>${ssrInterpolate(message.content)} <span data-v-1fcaf2d3>${ssrInterpolate(("extractTime" in _ctx ? _ctx.extractTime : unref(extractTime))(message.created_at))}</span></p>`);
          });
          _push(`<!--]--></div><div class="input-and-button" data-v-1fcaf2d3><input class="text-input"${ssrRenderAttr("value", unref(textMessage))} type="text" placeholder="hi, i like your work! do you wanna collab for a project?" data-v-1fcaf2d3><button class="hero-button send-button" data-v-1fcaf2d3> Send </button></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else if (!unref(loading) && unref(chatRooms) && !unref(chatRooms).length) {
        _push(`<h3 class="errorMessage" data-v-1fcaf2d3> No chat rooms. </h3>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(loading)) {
        _push(`<div class="lds-dual-ring" style="${ssrRenderStyle({ "top": "35rem" })}" data-v-1fcaf2d3></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/chat.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chat = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1fcaf2d3"]]);

export { chat as default };
//# sourceMappingURL=chat-DJbKec0w.mjs.map
