const links = [

{
title:"Instagram",
icon:"📸",
url:"https://instagram.com/techenriched.ai"
},

{
title:"YouTube",
icon:"▶️",
url:"https://youtube.com/@techenriched-ai"
},

{
title:"X (Twitter)",
icon:"𝕏",
url:"https://x.com/techenrichedai"
},

{
title:"Website",
icon:"🌐",
url:"https://mvnishant.com"
}

];

const container=document.getElementById("links");

links.forEach(link=>{

container.innerHTML+=`

<a
class="card"
href="${link.url}"
target="_blank">

<span>${link.icon}</span>

${link.title}

</a>

`;

});