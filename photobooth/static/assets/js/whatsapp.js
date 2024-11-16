function whatsappButton({brandName:t="",buttonName:e="",brandSubtitleText:a="",welcomeMessage:o="",phoneNumber:r="",brandImageUrl:i="",callToAction:n="",buttonSize:l="large",buttonMargin:p="false",buttonIconSize:s=22,prefillMessage:d="",buttonPosition:w="right"}){var c=""===d?o:d;let b=`
      <div>
        
<style>
 @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  
    @font-face {
      font-family: 'Helvetica';
      font-style: normal;
      font-weight: normal;
      font-display: optional;
      src: local('Helvetica');
  }
  
   :root {
      --color-primary-900: hsl(230, 54%, 11%);
      --color-gray-700: hsl(240, 1%, 31%);
      --color-text-secondary: var(--color-gray-700);
      --color-whatsapp-green-light:hsl(210, 70%,25%);
      --color-whatsapp-green-dark:hsl(173, 86%, 20%)
  }
  
  .font-header {
      font-family: "Inter", "Noto Sans TC", "Noto Sans SC", "Helvetica", "Arial", sans-serif;
      font-weight: 700 !important;
  }
  *,
*:before,
*:after {
  box-sizing: border-box;
}

.aOMIkmHl pre {
  font-family: 'Inter', 'Noto Sans TC', 'Noto Sans SC', 'Helvetica', 'Arial',
    sans-serif !important;
  white-space: pre-wrap !important;
  background: white !important;
  color: var(--color-gray-700) !important; 
  margin: 0 !important;
}

.UAAnDewf + .xeiSmBmF {
  font-family: 'Inter', 'Noto Sans TC', 'Noto Sans SC', 'Helvetica', 'Arial',
  sans-serif !important;
}

.UAAnDewf {
  position: fixed;
  right: 40px;
  bottom: 0;
  display: flex;
  flex-direction: column;
  z-index: 99999;
}

.xRrsJTID {
  left: 40px;
  right: unset;
}

.xRrsJTID .yQjdMkgo {
  justify-content: flex-start;
}

.xRrsJTID .rHQkLqje {
  text-align: left;
}

@media screen and (max-width: 640px) {
  .UAAnDewf {
    right: 24px;
  }

  .xRrsJTID {
    left: 24px;
    right: unset;
  }

  .HXmFelKQ {
    display: none !important;
  }
}

.UIZSOBvO {
  width: 48px;
  height: 48px;
  border-radius: 500px;
}

.aOMIkmHl {
  font-family: 'Inter', 'Noto Sans TC', 'Noto Sans SC', 'Helvetica', 'Arial',
    sans-serif;
  margin-bottom: 16px !important;
  display: grid;
  height: 453px !important;
  grid-template-rows: 81px minmax(0px, 1fr);
  overflow: hidden;
  border-radius: 24px !important;
  background-color: white !important;
  box-shadow: 0 24px 50px 10px rgba(0, 102, 255, 0.07);
  max-width: 498px;
  width: calc(100vw - 60px);
}

.ZNbjFOGk {
  padding: 16px 24px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-color: var(--color-whatsapp-green-dark) !important;
}

.qOfWGPqU {
  flex-direction: column;
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  background-color: white !important;
  padding: 24px;
}

.SeIgMRxs {
  z-index: 10;
  display: flex;
  height: max-content;
  max-height: 100%;
  max-width: 80%;
  flex-direction: column;
  overflow: auto;
  border-radius: 16px;
  background-color: white !important;
  padding: 10px 18px;
}

.nhaDZciQ {
  z-index: 50;
  display: flex;
  width: 100%;
  background-color: white !important;
  padding: 20px 24px;

  flex-direction: column;
}

.FIFPZyir:hover {
  opacity: 80%;
  transition: 0.3s;
}

.FIFPZyir {
  cursor: pointer;
  justify-content: center;
  border-width: 0;
  display: flex;
  height: 56px;
  width: 100%;
  align-items: center;
  align-self: end;
  border-radius: 500px !important;
  background-color: var(--color-whatsapp-green-light) !important;
}

.xqAKQjxD {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.VAfZCOiW {
  color: white;
  font-size: 16px !important;
  padding-left: 8px;
  margin: 0;
}

.BoCnaPBN:hover {
  opacity: 80%;
  transition: 0.3s;
}

.BoCnaPBN {
  cursor: pointer;
  justify-content: center;
  border-width: 0;
  display: flex;
  width: auto;
  align-items: center;
  align-self: end;
  border-radius: 500px !important;
  background-color: var(--color-whatsapp-green-light) !important;
}

.xRrsJTID .BoCnaPBN {
  align-self: start;
}

.wGCDalPc {
  padding: 9px;
}

.wa-button-size-medium {
  padding: 13px;
}

.uEMiIorK {
  padding: 17px;
}

.MumhJBYx {
  padding-right: 40px !important;
  padding-left: 40px !important;
}

.PFwbuFtb {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

#wfzzuxwY {
  cursor: pointer;
}

.gZQEgirC {
  margin-left: 8px;
}

.VamAfmVP {
  color: white;
  font-size: 16px !important;
  margin-top: 0;
  margin-bottom: 0;
}

.KzvTpnfb {
  color: hsl(209 77% 60%) !important;
  text-decoration: none;
}

.uCfiNVEw {
  display: inline-block;
  position: relative;
  top: 2px;
}

.uCfiNVEw svg {
  margin-right: 6px;
  margin-bottom: 1px;
}

.BXYMXXcm {
  margin-top: 12px;
  margin-bottom: 0;
  text-align: center;
  font-size: 16px !important;
}


.rHQkLqje {
  margin-top: 12px;
  text-align: right;
  padding-right: 12px;
  font-size: 13px;
}

.xeiSmBmF {
  font-size: 14px;
  position: fixed;
  mix-blend-mode: difference;
  bottom: 14px;

  z-index: 99999;
  color: #888888;
}

.xeiSmBmF.right {
  right: 123px;
}

.xeiSmBmF.left {
  left: 55px;
}


@media screen and (max-width: 640px) {
  .xeiSmBmF.right {
    right: 107px;
  }
  .xeiSmBmF.left {
    left: 40px;
  }
}

#CBpdqsNJ {
  font-family: 'Inter', 'Noto Sans TC', 'Noto Sans SC', 'Helvetica', 'Arial',
    sans-serif;
  width: 100%;
  min-width: 180px;
}

#eTsYpoEA {
  margin: 14px 0;
  text-align: right;
  padding-right: 12px;
  font-size: 14px;
}

.xRrsJTID #CBpdqsNJ {
  right: unset;
}

.xRrsJTID #eTsYpoEA {
  text-align: left;
}

#YaUKDcYm {
  /* inline-block relative top-[1px] */
  position: relative;
  display: inline-block;
  top: 1px;
}

#CclZQbNy {
  color: hsl(209 77% 60%) !important;
  text-decoration: none;
}

#CoImRoQe {
  width: 100%;
  min-width: 180px;
}

.yQjdMkgo {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.QnMTexBu .yQjdMkgo {
  position: relative !important;
}

.Zehwrhca {
  z-index: 10;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.eSbwXQOB {
  display: flex;
  background-color: #dcf7c5 !important;
  margin-top: 16px;
  padding: 18px;
  border-radius: 16px;
  width: 80%;
  overflow: auto;
  max-height: 80px;
}

.SeIgMRxs::-webkit-scrollbar {
  width: 4px !important;
  border-radius: 20px !important;
}

.SeIgMRxs::-webkit-scrollbar-track {
  border-radius: 10px !important;
}

.SeIgMRxs::-webkit-scrollbar-thumb {
  background: #c8c8c8 !important;
  border-radius: 10px !important;
}

.eSbwXQOB::-webkit-scrollbar {
  width: 4px !important;
  border-radius: 20px !important;
}

.eSbwXQOB::-webkit-scrollbar-track {
  border-radius: 10px !important;
}

.eSbwXQOB::-webkit-scrollbar-thumb {
  background: #c8c8c8 !important;
  border-radius: 10px !important;
}

.NCpsgYwo {
  margin: 0;
  font-size: 14px !important;
  line-height: 18px !important;
  color: white !important;
}

.FSXiUkne {
  font-size: 20px !important;
  font-weight: 500 !important;
  line-height: 25px !important;
  margin: 0 !important;
}

.kVDRyhKx {
  font-size: 14px !important;
  font-weight: 500 !important;
  font-family: 'Inter', 'Noto Sans TC', 'Noto Sans SC', 'Helvetica', 'Arial',
    sans-serif;
  margin-bottom: 8px !important;
  margin-top: 0 !important;
  color: var(--color-primary-900) !important;
  min-height: 17px !important;
}
</style>

        
<div class='UAAnDewf {{buttonPosition}}'>
   <div id='bgtGYAps' class='aOMIkmHl'>
      <div class='ZNbjFOGk'>
         <div style='display:flex;width:100%'>
            <img alt='logo' src='{{brandImageUrl}}' class='UIZSOBvO'/>
            <div style='padding-left:8px;display:flex;flex-direction:column;color:white'>
               <p class='FSXiUkne'>
                  {{brandName}}
               </p>
               <p class='NCpsgYwo'>{{brandSubtitleText}}</p>
            </div>
         </div>
         <svg viewBox='0 0 15 14' fill='#000' xmlns='http://www.w3.org/2000/svg' id='wfzzuxwY' width='20'
            height='20' style='background-color:transparent;fill:white;color:white'>
            <path
               d='m2.674.569.106.093 4.754 4.754L12.288.662a1.12 1.12 0 0 1 1.678 1.48l-.094.105L9.118 7l4.754 4.753a1.12 1.12 0 0 1-1.479 1.678l-.105-.093-4.754-4.754-4.754 4.754a1.12 1.12 0 0 1-1.678-1.479l.093-.105L5.95 7 1.195 2.247A1.12 1.12 0 0 1 2.675.569Z'>
            </path>
         </svg>
      </div>
      <div class='qOfWGPqU'>
         <div class='SeIgMRxs'>
            <p
            class='kVDRyhKx'
            >
               {{brandName}}
            </p>
            <pre>{{welcomeMessage}}</pre>
         </div>
         {{prefillMessageSection}}
         <img style='max-width:100%;top:0;left:0;position:absolute;object-fit:cover' alt='WhatsApp Background' src='https://sleekflow.io/static/images/wts-bg.jpg'/>
      </div>
      <div class='nhaDZciQ'>
         <a rel='noopener noreferrer' target='_blank'
            style='text-decoration:none;width:100%'
            href='https://api.whatsapp.com/send?phone={{phoneNumber}}&amp;text={{defaultChatMessage}}'>
            <button class='FIFPZyir'>
               <div class='xqAKQjxD'>
                  <svg viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg' width='22' height='22'>
                     <path d='m.76 21.24 1.412-5.12A10.324 10.324 0 0 1 .76 10.93C.76 5.35 5.35.76 10.964.76 16.58.76 21.24 5.35 21.24 10.93c0 5.578-4.661 10.31-10.276 10.31-1.765 0-3.46-.565-4.978-1.413L.76 21.24Z' fill='#EDEDED'></path>
                     <path d='m6.268 17.991.318.177c1.307.812 2.825 1.306 4.414 1.306 4.626 0 8.474-3.848 8.474-8.545 0-4.696-3.848-8.404-8.51-8.404-4.66 0-8.439 3.743-8.439 8.404 0 1.624.46 3.213 1.307 4.555l.212.318-.812 2.966 3.036-.777Z' fill='#25D366'></path>
                     <path d='m8.245 6.198-.671-.036a.802.802 0 0 0-.565.212c-.318.283-.848.812-.989 1.519-.247 1.059.141 2.33 1.06 3.601.918 1.271 2.683 3.32 5.79 4.202.989.283 1.766.106 2.402-.282.494-.318.812-.812.918-1.342l.105-.494a.355.355 0 0 0-.176-.389l-2.225-1.024a.337.337 0 0 0-.423.106l-.883 1.13a.275.275 0 0 1-.283.07c-.6-.211-2.613-1.059-3.707-3.177-.036-.106-.036-.212.035-.283l.848-.953c.07-.106.105-.247.07-.353L8.527 6.41a.308.308 0 0 0-.282-.212Z' fill='#FEFEFE'></path>
                  </svg>
                  <p class='VAfZCOiW font-header'>{{callToAction}}</p>
               </div>
            </button>
         </a>
         
          <p class='BXYMXXcm'>
            <span>
              <span class='uCfiNVEw'>
                 <svg width='10' height='14' viewBox='0 0 10 14' fill='none' xmlns='http://www.w3.org/2000/svg' className='mb-[]'>
                 </svg>
              </span>
           
            </span>
          </p>
         
      </div>
   </div>
   <button id='LlTIbmSa' class='BoCnaPBN {{buttonSize}} {{buttonPadding}}'>
      <div class='PFwbuFtb'>
        <div style='width: {{buttonIconSize}};height: {{buttonIconSize}}'>
         <svg viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'  width='{{buttonIconSize}}' height='{{buttonIconSize}}'>
            <path d='m.76 21.24 1.412-5.12A10.324 10.324 0 0 1 .76 10.93C.76 5.35 5.35.76 10.964.76 16.58.76 21.24 5.35 21.24 10.93c0 5.578-4.661 10.31-10.276 10.31-1.765 0-3.46-.565-4.978-1.413L.76 21.24Z' fill='#EDEDED'></path>
            <path d='m6.268 17.991.318.177c1.307.812 2.825 1.306 4.414 1.306 4.626 0 8.474-3.848 8.474-8.545 0-4.696-3.848-8.404-8.51-8.404-4.66 0-8.439 3.743-8.439 8.404 0 1.624.46 3.213 1.307 4.555l.212.318-.812 2.966 3.036-.777Z' fill='#25D366'></path>
            <path d='m8.245 6.198-.671-.036a.802.802 0 0 0-.565.212c-.318.283-.848.812-.989 1.519-.247 1.059.141 2.33 1.06 3.601.918 1.271 2.683 3.32 5.79 4.202.989.283 1.766.106 2.402-.282.494-.318.812-.812.918-1.342l.105-.494a.355.355 0 0 0-.176-.389l-2.225-1.024a.337.337 0 0 0-.423.106l-.883 1.13a.275.275 0 0 1-.283.07c-.6-.211-2.613-1.059-3.707-3.177-.036-.106-.036-.212.035-.283l.848-.953c.07-.106.105-.247.07-.353L8.527 6.41a.308.308 0 0 0-.282-.212Z' fill='#FEFEFE'></path>
         </svg>
        </div>
        <p class='VamAfmVP font-header {{buttonMargin}}'>{{buttonName}}</p>
      </div>
   </button>
   <div id='CBpdqsNJ'>
      <p id='eTsYpoEA'>
      <span id='YaUKDcYm'>
         <svg width='10' height='14' viewBox='0 0 10 14' fill='none' xmlns='http://www.w3.org/2000/svg'
            class='mr-[8px]'
         >
         </svg>
      </span>
      
      </p>
   </div>
</div>


      </div>  
       `;var f={regular:'wGCDalPc',large:'uEMiIorK',small:'LmhaGCfE'};b=(b=(b=(b=(b=(b=(b=(b=b.replaceAll("{{buttonName}}",e)).replaceAll("{{brandImageUrl}}",i)).replaceAll("{{brandName}}",t)).replaceAll("{{brandSubtitleText}}",a)).replaceAll("{{buttonSize}}",f[l]||f.large)).replaceAll("{{callToAction}}",n)).replaceAll("{{phoneNumber}}",r)).replaceAll("{{prefillMessage}}",d),b=""===d?b.replaceAll("{{prefillMessageSection}}",""):b.replaceAll("{{prefillMessageSection}}","<div class='Zehwrhca'><div class='eSbwXQOB'>"+d+"</div></div>"),b=(b=(b=(b="left"===w?b.replaceAll("{{buttonPosition}}",'xRrsJTID'):b.replaceAll("{{buttonPosition}}","")).replaceAll("text={{defaultChatMessage}}","text="+c.replace(/(?:\r\n|\r|\n)/g,"%0a"))).replaceAll("{{welcomeMessage}}",o)).replaceAll("{{buttonIconSize}}",s),"true"===p&&(b=(b=b.replaceAll("{{buttonMargin}}",'gZQEgirC')).replaceAll("{{buttonPadding}}",'MumhJBYx')),b=(b="false"===p?(b=b.replaceAll("{{buttonMargin}}","")).replaceAll("{{buttonPadding}}",""):b).replaceAll("{{poweredByBlendLabel}}","left"===w?"left":"right"),document.querySelector("body").insertAdjacentHTML("beforeend",b),document.querySelector("#bgtGYAps").style.display="none",document.querySelector("#LlTIbmSa").onclick=()=>{var t=document.querySelector("#bgtGYAps"),e=window.getComputedStyle(t).display;t.style.display="none"===e?"grid":"none"},document.querySelector("#wfzzuxwY").onclick=()=>{document.querySelector("#bgtGYAps").style.display="none"}}