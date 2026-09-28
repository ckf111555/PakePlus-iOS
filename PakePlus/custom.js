window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});const style = document.createElement('style');
style.innerText = `
div:has-text("豆包"),
div:has-text("AI生成"){
  display:none !important;
  visibility:hidden !important;
  pointer-events:none !important;
  width:0 !important;
  height:0 !important;
}
`;
document.head.appendChild(style);
