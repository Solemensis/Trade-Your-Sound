import { h as buildAssetsURL } from '../_/nitro.mjs';
import { mergeProps, ref, reactive, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc, c as useSupabaseClient } from './server.mjs';
import { u as useHead } from './index-BabADJUJ.mjs';
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

const _imports_0$2 = "" + buildAssetsURL("2.CQFRiTKc.webp");
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "hero-section" }, _attrs))} data-v-41bd7e61><div class="hero-text-box" data-v-41bd7e61><h1 class="hero-secondary-heading" data-v-41bd7e61>Audio Trading App</h1><h3 class="hero-heading" data-v-41bd7e61> Pick your <span class="green-span" data-v-41bd7e61>sound</span></h3><p class="hero-description" data-v-41bd7e61><span class="green-span" data-v-41bd7e61>Sell</span> your sounds, contact producers across the globe. <br data-v-41bd7e61>Just click the button to learn more! </p><a href="#things-you-can-do" data-v-41bd7e61><button class="hero-button" data-v-41bd7e61>What is This?</button></a></div><img class="hero-img"${ssrRenderAttr("src", _imports_0$2)} alt="an image of a sound wave" data-v-41bd7e61></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainPage/Hero.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-41bd7e61"]]);
const _imports_0$1 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='800'%20height='800'%20viewBox='0%200%20512%20512'%20xmlns:v='https://vecta.io/nano'%3e%3cpath%20d='M181.505%20397.711c-13.047-20.699-22.12-46.903-22.12-46.903s-9.074%2026.204-22.12%2046.903c-2.777%204.406-4.314%209.47-4.314%2014.678v4.648c0%2014.366%2011.41%2026.319%2025.775%2026.55l.66.005.66-.005c14.364-.23%2025.775-12.184%2025.775-26.55v-4.648c-.002-5.208-1.54-10.272-4.316-14.678z'%20fill='%23d6c6e1'/%3e%3cpath%20d='M159.385%20350.809c-.002.006-9.075%2026.205-22.12%2046.902-2.777%204.405-4.314%209.469-4.314%2014.677v4.649c0%2014.366%2011.411%2026.319%2025.775%2026.55l.66.005v-92.783z'%20fill='%23fff'/%3e%3cpath%20fill='%23ffd3cd'%20d='M274.792%2046.314h7.767v419.373h-7.767z'/%3e%3cpath%20d='M274.792%2080.181l7.767%206.896V46.314h-7.767zm0%20350.329v35.177h7.767v-40.742z'%20fill='%23de8280'/%3e%3cradialGradient%20cx='320.117'%20cy='256.008'%20gradientUnits='userSpaceOnUse'%20id='A'%20r='177.489'%3e%3cstop%20offset='0'%20stop-color='%23f0dd7a'/%3e%3cstop%20offset='1'%20stop-color='%23baa047'/%3e%3c/radialGradient%3e%3cpath%20d='M373.981%20180.814S360.94%2092.163%20279.205%2035.421c-2.695-1.87-3.27-5.778-.935-8.084l.18-.173c2.953-2.794%203.696-7.203%201.567-10.667l-.529-.862c-2.471-4.021-7.973-4.836-11.503-1.705l-.054.048c-8.813%207.83-8.948%2021.594-.666%2029.984%203.083%203.124%208.298%206.889%2013.898%2010.917%200%200%2082.221%2054.944%2061.474%20155.247-.837%204.042.791%208.158%204.075%2010.659%206.28%204.783%2015.552%2014.409%2015.758%2029.655v11.122c-.206%2015.247-9.478%2024.873-15.758%2029.656-3.284%202.501-4.912%206.616-4.075%2010.658%2020.747%20100.303-61.474%20155.248-61.474%20155.248-5.601%204.027-10.815%207.793-13.898%2010.916-8.282%208.391-8.147%2022.155.666%2029.984l.25.219c3.499%203.024%208.927%201.997%2011.348-1.943l.488-.795c2.129-3.464%201.388-7.876-1.568-10.668l-.179-.173c-2.335-2.306-1.761-6.213.935-8.084%2081.735-56.741%2094.776-145.394%2094.776-145.394C378.205%20305.842%20379.05%20256%20379.05%20256s-.845-49.842-5.069-75.186z'%20fill='url(%23A)'/%3e%3cpath%20d='M159.385%20450.826h0a6.95%206.95%200%200%201-6.95-6.95V141.81h13.9v302.066a6.95%206.95%200%200%201-6.95%206.95z'%20fill='%23b7486f'/%3e%3cpath%20fill='%237f153e'%20d='M152.435%20141.81h13.9v15.045h-13.9z'/%3e%3cpath%20d='M175.534%20138.272c-6.888-10.389-11.602-24.554-14.085-33.323-.722-2.55-3.407-2.55-4.129%200-2.483%208.77-7.197%2022.935-14.085%2033.323-2.414%203.641-.472%209.419%203.148%209.419h13.001%2013.001c3.621%200%205.563-5.777%203.149-9.419z'%20fill='%23fff'/%3e%3cpath%20d='M161.449%20104.949c-.361-1.275-1.213-1.913-2.064-1.912v44.654h13.001c3.62%200%205.563-5.777%203.148-9.418-6.888-10.389-11.601-24.554-14.085-33.324z'%20fill='%23d6c6e1'/%3e%3cpath%20d='M279.205%20476.579c10.51-7.296%2019.824-15.134%2028.177-23.229-1.587-6.245-2.314-12.229-2.541-17.554-12.823%2014.059-23.677%2021.325-23.677%2021.325-5.601%204.028-10.815%207.794-13.898%2010.917-8.282%208.39-8.147%2022.154.666%2029.984l.25.219c3.499%203.024%208.928%201.997%2011.348-1.943l.488-.795c2.129-3.464%201.386-7.873-1.567-10.668-.062-.057-.121-.115-.18-.173-2.335-2.305-1.761-6.213.934-8.083zm0-441.158c-2.695-1.87-3.27-5.778-.935-8.084l.18-.173c2.953-2.794%203.696-7.203%201.567-10.667l-.488-.795c-2.42-3.94-7.849-4.968-11.348-1.944l-.25.219c-8.813%207.83-8.948%2021.594-.666%2029.984%203.083%203.124%208.298%206.889%2013.898%2010.917%200%200%2011.022%207.382%2023.976%2021.655.481-5.26%201.471-10.991%203.283-16.885-8.609-8.451-18.275-16.63-29.217-24.227z'%20fill='%23998337'/%3e%3cpath%20d='M295.318%20464.436l-9.633-12.038c-1.372-1.714-3.872-1.991-5.586-.62-1.518%201.215-1.833%203.288-.951%204.942-1.421-1.224-3.514-1.37-5.03-.155h-.001c-1.713%201.371-1.99%203.872-.619%205.586l9.634%2012.037a3.97%203.97%200%200%200%205.585.62c1.518-1.214%201.833-3.287.951-4.942%201.421%201.224%203.514%201.37%205.031.156%201.713-1.372%201.99-3.873.619-5.586zm-.541-422.394c-1.586-1.27-3.811-1.069-5.226.317%201.043-1.685.751-3.898-.835-5.167-1.713-1.372-4.214-1.094-5.585.62l-9.634%2012.038c-1.371%201.714-1.094%204.214.619%205.585h.001c1.586%201.27%203.81%201.069%205.225-.318-1.043%201.685-.751%203.898.835%205.168%201.714%201.371%204.215%201.094%205.586-.62l9.633-12.038c1.372-1.714%201.094-4.214-.619-5.585z'%20fill='%23ffd3cd'/%3e%3cpath%20d='M346.713%20220.784c6.28%204.783%2015.552%2014.409%2015.758%2029.655v11.122c-.206%2015.246-9.478%2024.873-15.758%2029.656%2028.438-7.52%2026.757-35.209%2026.757-35.209%200-28.117-26.757-35.224-26.757-35.224z'%20fill='%23baa047'/%3e%3c/svg%3e";
const _imports_1$1 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='800'%20height='800'%20viewBox='0%200%20512%20512'%20xmlns:v='https://vecta.io/nano'%3e%3cpath%20d='M256%2022.974h-27.656c-4.731%200-8.367%204.188-7.705%208.872l4.904%2034.683H256h30.457l4.904-34.683c.662-4.685-2.974-8.872-7.705-8.872H256z'%20fill='%23ba8280'/%3e%3cpath%20fill='%23965c5c'%20d='M222.464%2044.751l3.079%2021.777H256h30.457l3.079-21.777z'/%3e%3clinearGradient%20gradientUnits='userSpaceOnUse'%20id='A'%20x1='256'%20x2='256'%20y1='475.661'%20y2='-13.83'%3e%3cstop%20offset='.01'%20stop-color='%23ffcce0'/%3e%3cstop%20offset='1'%20stop-color='%23ffe6fa'/%3e%3c/linearGradient%3e%3cpath%20d='M328.733%20181.56l.087.01-.139-.036-5.371-2.581c-14.48-6.648-25.809-18.919-29.865-34.328-.437-1.659-.792-3.245-1.082-4.725-1.135-5.801-1.559-11.743-.836-17.609%203.08-25.015%2021.564-36.845%2021.564-36.845H256h-57.092s18.484%2011.83%2021.564%2036.845c.723%205.866.299%2011.809-.836%2017.609a76.79%2076.79%200%200%201-1.082%204.725c-4.058%2015.409-15.385%2027.68-29.865%2034.328a170.96%20170.96%200%200%200-5.371%202.581c-.048.01-.091.026-.139.036l.087-.01c-56.602%2028.424-94.309%2088.938-89.133%20157.693%206.142%2081.592%2073.709%20146.511%20155.471%20149.65%2092.571%203.555%20168.735-70.437%20168.735-162.217.001-63.499-36.48-118.448-89.606-145.126z'%20fill='url(%23A)'/%3e%3cpath%20d='M312.854%2059.05H196.377a13.2%2013.2%200%200%200-13.197%2013.198h0a13.2%2013.2%200%200%200%2013.197%2013.197h116.477a13.2%2013.2%200%200%200%2013.198-13.197h0a13.2%2013.2%200%200%200-13.198-13.198z'%20fill='%23ffcce0'/%3e%3cpath%20d='M198.908%2085.445s7.582%204.887%2013.846%2014.958h86.492c6.264-10.071%2013.846-14.958%2013.846-14.958H256h-57.092z'%20fill='%23db8da5'/%3e%3cpath%20d='M384.15%20333.04c.521-9.888-.088-19.542-1.703-28.852-3.918-22.584-24.301-38.612-47.162-36.966-35.465%202.555-72.27%2023.617-83.893%2030.801-2.79%201.724-5.632%203.374-8.594%204.781-39.337%2018.691-69.826%2014.979-90.558%206.503-11.732-4.796-24.558%203.87-24.573%2016.546v.299c0%2073.722%2062.162%20132.925%20136.932%20128.052%2064.314-4.191%20116.159-56.803%20119.551-121.164z'%20fill='%23cc5697'/%3e%3cpath%20d='M186.041%20206.189s-35.918%207.771-43.749%2052.925c-.852%204.907%202.501%209.619%207.404%2010.492%207.724%201.376%2020.066%201.479%2034.174-6.28%206.333-3.482%2011.892-8.19%2016.729-13.561%205.931-6.581%2013.164-16.51%2014.123-26.594.947-9.973-7.45-18.322-17.468-18.325-3.356%200-7.208.335-11.213%201.343z'%20fill='%23fff'/%3e%3cg%20fill='%23a03774'%3e%3ccircle%20cx='182.974'%20cy='369.12'%20r='15.998'/%3e%3ccircle%20cx='244.055'%20cy='339.308'%20r='4.908'/%3e%3ccircle%20cx='282.23'%20cy='396.389'%20r='27.269'/%3e%3ccircle%20cx='332.041'%20cy='319.311'%20r='12.543'/%3e%3c/g%3e%3c/svg%3e";
const _imports_2$1 = "" + buildAssetsURL("shuriken.BRuTTh4i.svg");
const _sfc_main$2 = {
  __name: "Section1",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: { "position": "relative" },
        class: "flex"
      }, _attrs))} data-v-1ab4e709><p id="things-you-can-do" style="${ssrRenderStyle({ "position": "absolute", "left": "0", "top": "-35rem", "opacity": "0" })}" data-v-1ab4e709> things-you-can-do </p><h2 class="heading" data-v-1ab4e709> The Things <span class="green-span" data-v-1ab4e709>You Can Do...</span></h2><div data-aos="fade-down" data-aos-duration="2200" data-aos-easing="ease-out-back" data-v-1ab4e709><img${ssrRenderAttr("src", _imports_0$1)} alt="bow image" data-v-1ab4e709><h3 data-v-1ab4e709>Create your profile</h3><p data-v-1ab4e709> Fill your profile to display it on &quot;producer profiles&quot; page for potential opportunities! </p></div><div data-aos="fade-down" data-aos-duration="2200" data-aos-easing="ease-out-back" data-aos-delay="300" data-v-1ab4e709><img${ssrRenderAttr("src", _imports_1$1)} alt="potion image" data-v-1ab4e709><h3 data-v-1ab4e709>Sell your audios</h3><p data-v-1ab4e709> Sell commercial licences of your audios to people who wanna buy them, and make a passive income. </p></div><div data-aos="fade-down" data-aos-duration="2200" data-aos-easing="ease-out-back" data-aos-delay="600" data-v-1ab4e709><img${ssrRenderAttr("src", _imports_2$1)} alt="shuriken image" data-v-1ab4e709><h3 data-v-1ab4e709>Get inspirations</h3><p data-v-1ab4e709> Instead scrolling general social media; scroll here to get audial inspirations, and meet people who loves sfx! </p></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainPage/Section1.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-1ab4e709"]]);
const _imports_0 = "" + buildAssetsURL("eggCrack.1ukNnS_K.svg");
const _imports_1 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='800'%20height='800'%20viewBox='0%200%2024%2024'%20xmlns:v='https://vecta.io/nano'%3e%3cpath%20d='M16.288%2021.168c-1.043%201.043-2.137%201.037-2.815.359s-.684-1.771.359-2.815%203.419-.964%203.419-.964.08%202.376-.964%203.419z'%20fill='%23fa6d62'/%3e%3cpath%20d='M14.81%2021.357c-.496.496-1.015.493-1.337.171s-.325-.841.171-1.337a2.641%202.641%200%200%201%201.624-.458%202.641%202.641%200%200%201-.458%201.624z'%20fill='%23fff4ab'/%3e%3cpath%20d='M7.712%2021.168c1.044%201.043%202.137%201.037%202.815.359s.684-1.771-.359-2.815-3.419-.964-3.419-.964-.08%202.376.964%203.419z'%20fill='%23fa6d62'/%3e%3cpath%20d='M9.19%2021.357c.496.496%201.015.493%201.337.171s.325-.841-.171-1.337a2.641%202.641%200%200%200-1.624-.458%202.641%202.641%200%200%200%20.458%201.624z'%20fill='%23fff4ab'/%3e%3cpath%20d='M5.079,8A8,8,0,1,0,18.921,8Z'%20fill='%234b5661'/%3e%3cg%20fill='%2367c7a5'%3e%3ccircle%20cx='7.5'%20cy='5.5'%20r='1.5'/%3e%3ccircle%20cx='11'%20cy='2'%20r='1'/%3e%3ccircle%20cx='12.5'%20cy='7.5'%20r='2.5'/%3e%3c/g%3e%3cpath%20d='M20%2010H4a1%201%200%200%201-1-1h0a1%201%200%200%201%201-1h16a1%201%200%200%201%201%201h0a1%201%200%200%201-1%201z'%20fill='%234b5661'/%3e%3ccircle%20cx='17.5'%20cy='3.5'%20r='1.5'%20fill='%2367c7a5'/%3e%3cpath%20d='M13.736%2019.756C13.736%2021.231%2012.959%2022%2012%2022s-1.736-.769-1.736-2.244S12%2016.656%2012%2016.656s1.736%201.624%201.736%203.099z'%20fill='%23fa6d62'/%3e%3cpath%20d='M12.825%2020.934c0%20.701-.369%201.066-.825%201.066s-.825-.365-.825-1.066A2.64%202.64%200%200%201%2012%2019.462a2.64%202.64%200%200%201%20.825%201.472z'%20fill='%23fff4ab'/%3e%3c/svg%3e";
const _imports_2 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='800'%20height='800'%20viewBox='0%200%20512%20512'%20xmlns:v='https://vecta.io/nano'%3e%3cpath%20d='M464%20256h0c8.837%200%2016-7.163%2016-16V120h-32v120c0%208.837%207.163%2016%2016%2016zm-80-8v-16h-32v-16h-32v24h-32v143.548c0%208.615%206.621%2016.028%2015.226%2016.434C312.415%20400.415%20320%20393.093%20320%20384v-16c0-8.837%207.164-16%2016-16s16%207.163%2016%2016v7.548c0%208.615%206.621%2016.028%2015.226%2016.434C376.415%20392.415%20384%20385.093%20384%20376v-56c0%208.837%207.164%2016%2016%2016s16-7.163%2016-16v-72h-32z'%20fill='%23cf535a'/%3e%3cpath%20d='M34.755%20490.576L15.38%20477.607c-4.946-3.311-7.378-9.299-6.141-15.121h0a233.28%20233.28%200%200%201%2089.266-138.922l1.887-1.399c23.799-17.642%2044.119-39.547%2059.927-64.602L314.156%2014.171a13.25%2013.25%200%200%201%2018.565-3.931l23.407%2015.668a13.25%2013.25%200%200%201%203.829%2018.085l-154.21%20243.978a239.48%20239.48%200%200%201-59.927%2064.602l-11.242%208.333a202.51%20202.51%200%200%200-77.491%20120.598h0c-2.138%2010.074-13.775%2014.8-22.332%209.072z'%20fill='%2368572e'/%3e%3cpath%20d='M280.79%2041.265h0a24.15%2024.15%200%200%200-33.496%206.634l-54.23%2081.018a24.15%2024.15%200%200%200%206.634%2033.496h0a369.31%20369.31%200%200%201%2094.681%2091.672l51.71%2072.102h0A464.34%20464.34%200%200%200%20488%20114.178h0l-86.369-20.323a369.33%20369.33%200%200%201-120.841-52.59z'%20fill='%234d5166'/%3e%3cpath%20d='M431.885%20230.116c-23.884%2035.682-52.709%2068.057-85.796%2096.071l-27.912-38.912a400.55%20400.55%200%200%200%20123.209-184.069L488%20114.178a464.18%20464.18%200%200%201-56.115%20115.938z'%20fill='%239ea6d1'/%3e%3cg%20fill='%23cf535a'%3e%3cuse%20xlink:href='%23B'/%3e%3cuse%20xlink:href='%23B'%20x='64'%20y='32'/%3e%3cuse%20xlink:href='%23B'%20x='104'%20y='-32'/%3e%3cuse%20xlink:href='%23B'%20x='160'%20y='-128'/%3e%3c/g%3e%3cpath%20d='M488%20114.178l-83.249-19.589c-.91%206.561-5.432%2012.304-12.048%2014.51l-5.26%201.753c-12.608%204.203-16.386%2020.205-6.988%2029.603a17.88%2017.88%200%200%201%201.093%2024.087l-19.096%2022.915a17.88%2017.88%200%200%200%201.093%2024.087L408%20256l8.922-4.83c31.023-41.191%2055.123-87.45%2071.078-136.992h0z'%20fill='%23e65c64'/%3e%3cdefs%20%3e%3cpath%20id='B'%20d='M320%20456c0%208.837-7.163%2016-16%2016s-16-7.163-16-16%2016-32%2016-32%2016%2023.163%2016%2032z'/%3e%3c/defs%3e%3c/svg%3e";
const _imports_3 = "" + buildAssetsURL("man.CTjD6j95.svg");
const _imports_4 = "" + buildAssetsURL("woman.DnGOBYyp.svg");
const _imports_5 = "" + buildAssetsURL("grimReaper.DQpj9N9I.svg");
const _imports_6 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='800'%20height='800'%20viewBox='0%200%20512%20512'%20xmlns:v='https://vecta.io/nano'%3e%3cpath%20d='M159.247%20140.764l-10.856-.381s-10.788-3.436-2.194-16.714%2024.349-15.269%2032.306-34.355c-.001-.001%201.75%2037.342-19.256%2051.45z'%20fill='%23bc6662'/%3e%3cpath%20d='M207.413%2076.939c-3.08-5.057-9.303-6.885-14.434-4.19-6.944%203.647-15.999%2010.919-20.268%2024.966-.826%202.717-1.231%205.559-1.514%208.394-.675%206.766-4.229%2024.065-22.807%2034.274%200%200%2023.972%2017.368%2042.644%200%200%200%2025.738-23.158%2043.401-11.316.001-.001-16.655-35.107-27.022-52.128zm49.386%2048.829s-.29-18.089%2016.448-36.454c0%200%2018.718-18.938%2019.906-39.422.651-11.22-7.511-21.032-18.195-22.511-9.591-1.328-23.388.671-39.542%2014.53l-6.192%205.648c-2.578%202.352-3.176%206.282-1.4%209.336%207.631%2013.123%2026.839%2047.896%2028.975%2068.873z'%20fill='%23db8b84'/%3e%3cpath%20d='M203.528%2090.637s6.81%208.286%2022.225.511c4.873-2.458%209.024-6.448%2011.164-11.634%201.792-4.341%202.518-10.034-.762-16.387%200-.001%2020.479%2021.356%2023.949%2069.5H235.46s-23.949-13.393-31.932-41.99z'%20fill='%23f7bbb6'/%3e%3cpath%20d='M219.402%2095.122c-4.328.815-12.891.154-15.875-4.485-4.413-6.859-1.95-14.104%206.724-21.307%200%200%2019.555-15.094%2026.212-5.863%201.601%202.221%203.328%208.548%202.513%2013.73-1.108%207.06-5.908%2015.351-19.574%2017.925z'%20fill='%23bc6662'/%3e%3clinearGradient%20gradientUnits='userSpaceOnUse'%20id='A'%20x1='241.963'%20x2='302.729'%20y1='247.553'%20y2='749.431'%3e%3cstop%20offset='.01'%20stop-color='%23f7bbb6'/%3e%3cstop%20offset='1'%20stop-color='%23db8b84'/%3e%3c/linearGradient%3e%3cpath%20d='M236.934%20154.877s-10.45%206.399-14.464%2020.438c0%200-19.213%2063.96-69.268%20101.235-5.465%204.068-10.661%208.464-15.156%2013.584-15.415%2017.556-43.037%2060.91-20.768%20115.13%200%200%2023.333%2063.795%20122.699%2078.045%2036.654%205.257%2074.332-1.944%20105.282-22.274%2023.375-15.354%2046.291-39.707%2055.298-77.974%203.037-12.905%203.412-26.251.628-39.214-3.76-17.511-13.531-42.077-38.519-63.32-16.019-13.619-31.11-28.284-44.177-44.757-19.272-24.297-43.313-57.708-52.919-83.941l-28.636%203.048z'%20fill='url(%23A)'/%3e%3cpath%20d='M362.667%20280.527c-16.019-13.619-31.11-28.284-44.176-44.757l-9.402-12.128c5.937%2022.998%2010.708%2049.898%2011.044%2077.766%201.059%2087.645-68.787%20155.834-149.798%20159.113%2017.465%209.977%2040.192%2018.564%2069.643%2022.788%2036.654%205.257%2074.331-1.944%20105.282-22.274%2023.375-15.354%2046.291-39.707%2055.298-77.974%203.037-12.905%203.412-26.251.628-39.214-3.76-17.51-13.532-42.076-38.519-63.32zM245.515%20134.099s-7.19%2030.458-12.992%2045.102c-.555%201.4-.826%202.9-.657%204.406l.037.297c1.307%209.828%2015.175%209.394%2016.213-.482.239-2.28.328-5%20.158-8.226-.001-.001-4.585-25.448-2.759-41.097z'%20fill='%23db8b84'/%3e%3cpath%20d='M251.951%20151.52s19.108%2047.331-2.675%20100.732c-1.583%203.881.86%208.226%205.005%208.857h0c3.179.485%206.224-1.406%207.175-4.479%204.897-15.825%2017.456-64.084%203.036-104.265l-12.541-.845z'%20fill='%23a0376f'/%3e%3cpath%20d='M222.47%20135.7h0a7.81%207.81%200%200%200%206.856%207.75l32.909%204.042c4.655.571%208.761-3.061%208.761-7.75v-.517a7.81%207.81%200%200%200-6.977-7.764l-32.91-3.526c-4.614-.494-8.639%203.124-8.639%207.765zm29.897%2021.488s38.318%2046.093%2015.859%20170.947c-.753%204.185%201.956%208.211%206.132%209.014h0c4.191.807%208.234-1.916%209.045-6.107%205.226-27.018%2019.715-120.298-16.305-176.165l-14.731%202.311z'%20fill='%23c14c82'/%3e%3cpath%20d='M222.47%20150.009v.81c0%203.783%202.9%206.935%206.67%207.249l33.977%202.831c4.241.354%207.879-2.993%207.879-7.249h0c0-3.718-2.803-6.837-6.5-7.232l-33.977-3.641c-4.299-.462-8.049%202.908-8.049%207.232z'%20fill='%23a0376f'/%3e%3c/svg%3e";
const _imports_7 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='800'%20height='800'%20viewBox='0%200%20512%20512'%20xmlns:v='https://vecta.io/nano'%3e%3cpath%20fill='%235b153e'%20d='M286.189%2010.023l-88.355%2086.174-35.996%20137.442%2054.54%20221.432%2077.447%2046.906%2014.181-50.178%2029.451-311.97z'/%3e%3clinearGradient%20gradientUnits='userSpaceOnUse'%20id='A'%20x1='352.611'%20x2='198.471'%20y1='409.254'%20y2='40.885'%3e%3cstop%20offset='0'%20stop-color='%23cc5697'/%3e%3cstop%20offset='1'%20stop-color='%23e585be'/%3e%3c/linearGradient%3e%3cpath%20fill='url(%23A)'%20d='M337.457%20139.829l-54.54-58.903-75.266%20104.717%2086.174%20316.334%2014.181-50.177z'/%3e%3cpath%20fill='%23f49fd3'%20d='M337.457%20139.829h0L286.189%2010.023l-3.272%2070.903z'/%3e%3cg%20fill='%23a03774'%3e%3cpath%20d='M282.917%2080.926l3.272-70.903-88.355%2086.174%209.817%2089.446z'/%3e%3cpath%20d='M207.651%20185.643l8.727%20269.428%2077.447%2046.906z'/%3e%3c/g%3e%3cpath%20d='M135.817%2047.732s2.546%2024.612-17.54%2035.928c0%200%2020.086%206.602%2021.218%2030.459%200%200%20.849-27.347%2016.407-35.551%200%200-17.539-7.072-20.085-30.836zm237.82%20175.075s2.547%2024.611-17.539%2035.928c0%200%2020.086%206.602%2021.217%2030.459%200%200%20.849-27.347%2016.408-35.551%200%200-17.539-7.073-20.086-30.836zM154.63%20356.787s2.546%2024.612-17.54%2035.929c0%200%2020.086%206.602%2021.218%2030.459%200%200%20.849-27.347%2016.408-35.551%200%200-17.54-7.073-20.086-30.837z'%20fill='%23ffe9fb'/%3e%3c/svg%3e";
const _imports_8 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='800'%20height='800'%20viewBox='0%200%2048%2048'%20xmlns:v='https://vecta.io/nano'%3e%3cdefs%3e%3clinearGradient%20id='A'%20x1='.5'%20x2='.5'%20y2='1'%3e%3cstop%20offset='0'%20stop-color='%238f5bff'/%3e%3cstop%20offset='1'%20stop-color='%231600c8'/%3e%3c/linearGradient%3e%3cclipPath%20id='B'%3e%3cpath%20d='M0%200h48v48H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20clip-path='url(%23B)'%3e%3cpath%20fill='rgba(255,255,255,0)'%20d='M0%200h48v48H0z'/%3e%3cg%20fill='url(%23A)'%3e%3cpath%20d='M17%2030.526a12.53%2012.53%200%200%201%207.956-11.673C23.699%2017.55%2022.998%2015.81%2023%2014v-1a7%207%200%201%201%2014%200v1a6.98%206.98%200%200%201-2.259%205.15A12.53%2012.53%200%200%201%2042%2030.526C42%2034.105%2036.4%2035%2029.5%2035S17%2034.105%2017%2030.526z'/%3e%3cpath%20d='M29.5%2034.5c3.869%200%206.714-.286%208.697-.874%202.223-.659%203.303-1.673%203.303-3.1%200-2.341-.671-4.61-1.942-6.561a12.03%2012.03%200%200%200-5.028-4.361l-.679-.315.55-.507A6.52%206.52%200%200%200%2036.5%2014v-1A6.51%206.51%200%200%200%2030%206.5%206.51%206.51%200%200%200%2023.5%2013v1a6.47%206.47%200%200%200%201.816%204.506l.519.539-.697.273a11.99%2011.99%200%200%200-5.496%204.348%2011.97%2011.97%200%200%200-2.142%206.859c0%201.426%201.081%202.44%203.303%203.1%201.983.588%204.827.874%208.697.874m0%20.5c-6.904%200-12.5-.895-12.5-4.474%200-5.311%203.299-9.851%207.956-11.673C23.745%2017.595%2023%2015.884%2023%2014v-1A7%207%200%201%201%2037%2013v1a6.98%206.98%200%200%201-2.259%205.15A12.53%2012.53%200%200%201%2042%2030.526C42%2034.105%2036.404%2035%2029.5%2035z'%20fill='rgba(255,255,255,0.3)'/%3e%3c/g%3e%3cg%20fill='rgba(136,125,255,0.7)'%3e%3cpath%20d='M6%2037a14%2014%200%200%201%208.735-12.977A8%208%200%200%201%2020%2010a8%208%200%200%201%205.265%2014.023A14%2014%200%200%201%2034%2037c0%204-6.268%205-14%205S6%2041%206%2037z'/%3e%3cpath%20d='M20%2041.5c4.339%200%207.531-.32%209.757-.98C32.276%2039.775%2033.5%2038.623%2033.5%2037c0-2.739-.816-5.376-2.359-7.626-1.507-2.198-3.604-3.888-6.064-4.887l-.752-.305.611-.534C26.565%2022.221%2027.5%2020.163%2027.5%2018A7.51%207.51%200%200%200%2020%2010.5a7.51%207.51%200%200%200-7.5%207.5c0%202.163.935%204.222%202.564%205.647l.611.534-.752.305a13.49%2013.49%200%200%200-6.064%204.887C7.316%2031.624%206.5%2034.261%206.5%2037c0%201.623%201.224%202.775%203.742%203.521%202.227.659%205.419.98%209.758.98m0%20.5C12.268%2042%206%2041%206%2037c0-5.87%203.612-10.896%208.735-12.977A7.98%207.98%200%200%201%2012%2018%208%208%200%200%201%2028%2018c0%202.402-1.059%204.557-2.735%206.023C30.388%2026.104%2034%2031.13%2034%2037c0%204-6.268%205-14%205z'%20fill='rgba(255,255,255,0.3)'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
const _imports_9 = "" + buildAssetsURL("fireSpell.OfRE8z6_.svg");
const _imports_10 = "" + buildAssetsURL("windyScroll.qoYxhKoU.svg");
const _imports_11 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='800'%20height='800'%20viewBox='0%200%20512%20512'%20xmlns:v='https://vecta.io/nano'%3e%3cpath%20d='M162.027%20360.441v73.413c0%204.554%205.805%206.479%208.525%202.825l12.645-16.98c.451-.605%201.359-.599%201.801.013l11.992%2016.577c2.689%203.718%208.564%201.815%208.564-2.772v-73.075h-43.527z'%20fill='%237a2b5a'/%3e%3cg%20fill='%235b153e'%3e%3cpath%20d='M309.645%20360.441v113.088c0%203.281%204.313%204.476%205.987%201.653%206.298-10.608%2016.825-26.333%2027.974-34.318.852-.609%201.365-1.56%201.365-2.607v-77.815h-35.326z'/%3e%3cpath%20d='M340.555%2035.233h46.059c7.661%200%2013.872%206.211%2013.872%2013.872v305.021c0%207.661-6.211%2013.872-13.872%2013.872h-46.059V35.233z'/%3e%3c/g%3e%3cpath%20d='M268.258%2043.615h99.326a15.51%2015.51%200%200%201%2015.506%2015.507v293.369a15.51%2015.51%200%200%201-15.506%2015.507h-99.326V43.615z'%20fill='%23b57b76'/%3e%3clinearGradient%20gradientUnits='userSpaceOnUse'%20id='A'%20x1='371.308'%20x2='-26.587'%20y1='97.281'%20y2='404.969'%3e%3cstop%20offset='.01'%20stop-color='%2378264d'/%3e%3cstop%20offset='1'%20stop-color='%2393486f'/%3e%3c/linearGradient%3e%3cpath%20d='M129.536%2035.233h147.942l24.04%2035.087c2.444%203.568%208.002%202.232%208.558-2.057l4.282-33.03h30.595c7.175%200%2012.992%205.817%2012.992%2012.992v306.78c0%207.175-5.817%2012.992-12.992%2012.992H128.698c-9.49%200-17.183-7.693-17.183-17.184V53.255c0-9.953%208.068-18.022%2018.021-18.022z'%20fill='url(%23A)'/%3e%3cpath%20d='M367.051%2079.716v107.243l24.069-99.8c.915-3.793-1.96-7.443-5.86-7.443h-18.209z'%20fill='%23ddaea9'/%3e%3cpath%20d='M275.082%20201.306l17.881-33.115c1.902-3.522-.648-7.8-4.652-7.8h-35.32l-13.609-25.202c-1.998-3.7-7.306-3.7-9.304%200l-13.608%2025.202h-35.32c-4.003%200-6.554%204.277-4.652%207.8l17.881%2033.115-17.881%2033.115c-1.902%203.522.649%207.799%204.652%207.799h35.32l13.608%2025.203c1.998%203.7%207.307%203.7%209.304%200l13.609-25.203h35.32c4.004%200%206.555-4.276%204.652-7.799l-17.881-33.115zm3.705-29.947l-9.938%2018.403-9.938-18.403h19.876zm-16.17%2029.947l-16.171%2029.946h-23.435l-16.17-29.946%2016.17-29.946h23.435l16.171%2029.946zm-27.888-51.648l5.795%2010.732h-11.59l5.795-10.732zm-44.057%2021.701h19.874l-9.937%2018.403-9.937-18.403zm0%2059.893l9.937-18.403%209.937%2018.403h-19.874zm44.057%2021.7l-5.795-10.732h11.59l-5.795%2010.732zm34.121-40.104l9.938%2018.404h-19.875l9.937-18.404z'%20fill='%23fff'/%3e%3cpath%20d='M139.146%20323.046l1.483-20.025c.409-5.521%207.904-6.863%2010.204-1.829l7.456%2016.317c1.259%202.756-.018%206.006-2.816%207.167l-8.939%203.709c-3.682%201.527-7.682-1.364-7.388-5.339zM339.178%2088.399c-2.006-1.276-4.69-.465-5.613%201.727-1.633%203.878-3.373%209.453-1.102%2011.725.824.825%201.774%201.992%202.75%203.305%202.224%202.993%206.968%201.459%206.968-2.271V92.427c0-1.318-.673-2.545-1.785-3.253l-1.218-.775z'%20fill='%235b153e'/%3e%3cpath%20d='M159.483%20191.128c3.947-29.271%2025.252-53.812%2053.556-62.25%2015.352-4.577%2030.036-3.984%2043.285-.009%201.861.559%203.824-.438%204.377-2.301l2.209-7.428c.538-1.811-.461-3.758-2.27-4.3-8.214-2.463-16.907-3.803-25.912-3.803-22.875%200-43.782%208.536-59.74%2022.574-1.236%201.088-1.549%202.902-.801%204.369l3.387%206.646-5.525-3.885c-1.486-1.046-3.546-.853-4.759.501-14.373%2016.035-23.141%2037.191-23.141%2060.37%200%2035%2019.964%2065.407%2049.094%2080.482%201.972%201.02%204.397.019%205.177-2.061l2.541-6.775c.671-1.79-.131-3.756-1.817-4.654-26.823-14.297-44.157-44.134-39.661-77.476zm122.585-63.636l-5.615%207.279c-.977%201.266-.646%203.063.678%203.957%2020.631%2013.947%2034.114%2037.692%2033.535%2064.548-.773%2035.922-32.204%2070.089-67.935%2073.87-11.665%201.234-22.825-.279-33.021-3.864-1.682-.592-3.485.444-3.74%202.21l-1.316%209.114c-.194%201.343.592%202.657%201.881%203.081%2012.25%204.025%2025.635%205.523%2039.553%203.805%2042.821-5.285%2076.411-41.149%2079.047-84.214%202.04-33.317-14.061-63.08-39.33-80.401-1.2-.821-2.85-.535-3.737.615z'%20fill='%23fff'/%3e%3c/svg%3e";
const _sfc_main$1 = {
  __name: "Section2",
  __ssrInlineRender: true,
  setup(__props) {
    useSupabaseClient();
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    const playing = reactive({
      eggCrack: false,
      cauldron: false,
      axe: false,
      man: false,
      woman: false,
      grimReaper: false,
      ui1: false,
      ui2: false,
      ui3: false,
      fireSpell: false,
      windyScroll: false,
      spellBook: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-09a7143f><h2 class="heading" data-v-09a7143f> Categorization of <span class="green-span" data-v-09a7143f>Sounds</span></h2><div class="general-grid" data-v-09a7143f><div data-aos="zoom-out" data-aos-duration="700" class="ico-grid" data-v-09a7143f><div class="${ssrRenderClass({ playing: unref(playing).eggCrack })}" data-v-09a7143f><img${ssrRenderAttr("src", _imports_0)} alt="egg image" data-v-09a7143f>`);
      if (unref(playing).eggCrack == null) {
        _push(`<span class="lds-dual-ring" data-v-09a7143f></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<audio type="audio/mpeg" data-v-09a7143f></audio></div><div class="${ssrRenderClass({ playing: unref(playing).cauldron })}" data-v-09a7143f><img${ssrRenderAttr("src", _imports_1)} alt="cauldron image" data-v-09a7143f>`);
      if (unref(playing).cauldron == null) {
        _push(`<span class="lds-dual-ring" data-v-09a7143f></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<audio type="audio/mpeg" data-v-09a7143f></audio></div><div class="${ssrRenderClass({ playing: unref(playing).axe })}" data-v-09a7143f><img${ssrRenderAttr("src", _imports_2)} alt="axe image" data-v-09a7143f>`);
      if (unref(playing).axe == null) {
        _push(`<span class="lds-dual-ring" data-v-09a7143f></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<audio type="audio/mpeg" data-v-09a7143f></audio></div></div><div data-aos="zoom-out" data-aos-duration="700" class="text-box" data-v-09a7143f><h3 data-v-09a7143f>Foley Sounds</h3><ul data-v-09a7143f><li data-v-09a7143f> These are artificially created sounds that mimic real-life noises and enhance the audio library of movies, TV shows, video games, etc. </li></ul></div><div data-aos="zoom-out" data-aos-duration="700" class="text-box" data-v-09a7143f><h3 data-v-09a7143f>Dialogue</h3><ul data-v-09a7143f><li data-v-09a7143f> Anything that contains audible words, Human speach, or fictional races like orc, demon etc </li></ul></div><div data-aos="zoom-out" data-aos-duration="700" class="ico-grid" data-v-09a7143f><div class="${ssrRenderClass({ playing: unref(playing).man })}" data-v-09a7143f><img${ssrRenderAttr("src", _imports_3)} alt="man image" data-v-09a7143f>`);
      if (unref(playing).man == null) {
        _push(`<span class="lds-dual-ring" data-v-09a7143f></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<audio type="audio/mpeg" data-v-09a7143f></audio></div><div class="${ssrRenderClass({ playing: unref(playing).woman })}" data-v-09a7143f><img${ssrRenderAttr("src", _imports_4)} alt="woman image" data-v-09a7143f>`);
      if (unref(playing).woman == null) {
        _push(`<span class="lds-dual-ring" data-v-09a7143f></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<audio type="audio/mpeg" data-v-09a7143f></audio></div><div class="${ssrRenderClass({ playing: unref(playing).grimReaper })}" data-v-09a7143f><img${ssrRenderAttr("src", _imports_5)} alt="grim reaper image" data-v-09a7143f>`);
      if (unref(playing).grimReaper == null) {
        _push(`<span class="lds-dual-ring" data-v-09a7143f></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<audio type="audio/mpeg" data-v-09a7143f></audio></div></div><div data-aos="zoom-out" data-aos-duration="700" class="ico-grid" data-v-09a7143f><div class="${ssrRenderClass({ playing: unref(playing).ui1 })}" data-v-09a7143f><img${ssrRenderAttr("src", _imports_6)} alt="pocket image" data-v-09a7143f>`);
      if (unref(playing).ui1 == null) {
        _push(`<span class="lds-dual-ring" data-v-09a7143f></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<audio type="audio/mpeg" data-v-09a7143f></audio></div><div class="${ssrRenderClass({ playing: unref(playing).ui2 })}" data-v-09a7143f><img${ssrRenderAttr("src", _imports_7)} alt="crystal image" data-v-09a7143f>`);
      if (unref(playing).ui2 == null) {
        _push(`<span class="lds-dual-ring" data-v-09a7143f></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<audio type="audio/mpeg" data-v-09a7143f></audio></div><div class="${ssrRenderClass({ playing: unref(playing).ui3 })}" data-v-09a7143f><img${ssrRenderAttr("src", _imports_8)} alt="user interface image" data-v-09a7143f>`);
      if (unref(playing).ui3 == null) {
        _push(`<span class="lds-dual-ring" data-v-09a7143f></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<audio type="audio/mpeg" data-v-09a7143f></audio></div></div><div data-aos="zoom-out" data-aos-duration="700" class="text-box" data-v-09a7143f><h3 data-v-09a7143f>UI Sounds</h3><ul data-v-09a7143f><li data-v-09a7143f> When receiving something, activating something, deleting something, or an event happens in an app, we can be notified in audial way. These are user interface sounds. </li></ul></div><div data-aos="zoom-out" data-aos-duration="700" class="text-box" data-v-09a7143f><h3 data-v-09a7143f>Sound Effects</h3><ul data-v-09a7143f><li data-v-09a7143f> Similar to foley sounds, artificially created but rather than mimicing the real-life noises, these are mimicing non real-life sounds, so sound effects </li></ul></div><div data-aos="zoom-out" data-aos-duration="700" class="ico-grid" data-v-09a7143f><div class="${ssrRenderClass({ playing: unref(playing).fireSpell })}" data-v-09a7143f><img${ssrRenderAttr("src", _imports_9)} alt="fireball image" data-v-09a7143f>`);
      if (unref(playing).fireSpell == null) {
        _push(`<span class="lds-dual-ring" data-v-09a7143f></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<audio type="audio/mpeg" data-v-09a7143f></audio></div><div class="${ssrRenderClass({ playing: unref(playing).windyScroll })}" data-v-09a7143f><img${ssrRenderAttr("src", _imports_10)} alt="scroll image" data-v-09a7143f>`);
      if (unref(playing).windyScroll == null) {
        _push(`<span class="lds-dual-ring" data-v-09a7143f></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<audio type="audio/mpeg" data-v-09a7143f></audio></div><div class="${ssrRenderClass({ playing: unref(playing).spellBook })}" data-v-09a7143f><img${ssrRenderAttr("src", _imports_11)} alt="spell book image" data-v-09a7143f>`);
      if (unref(playing).spellBook == null) {
        _push(`<span class="lds-dual-ring" data-v-09a7143f></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<audio type="audio/mpeg" data-v-09a7143f></audio></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainPage/Section2.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-09a7143f"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Audio Trader"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MainPageHero = __nuxt_component_0;
      const _component_MainPageSection1 = __nuxt_component_1;
      const _component_MainPageSection2 = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_MainPageHero, null, null, _parent));
      _push(ssrRenderComponent(_component_MainPageSection1, null, null, _parent));
      _push(ssrRenderComponent(_component_MainPageSection2, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-YvMPq2vx.mjs.map
