/* ==========================================================
   TechEnriched AI
   UI Components
========================================================== */

function createButton(text, href, primary = false) {

    return `
        <a href="${href}"
           class="btn ${primary ? 'primary' : 'secondary'}">
            ${text}
        </a>
    `;

}

function createEpisodeCard(ep){

    return `

    <div class="episode-card">

        <img src="${ep.poster}"
             alt="${ep.title}"
             loading="lazy">

        <h3>Part ${ep.number}</h3>

        <p>${ep.title}</p>

        <div style="padding:0 22px 22px">

            ${createButton("Watch","#",true)}

        </div>

    </div>

    `;

}

function createTopicCard(topic){

    return `

    <div class="topic-card">

        ${topic}

    </div>

    `;

}

function createSocialCard(name,url,logo){

    return `

    <a
        href="${url}"
        target="_blank"
        class="social-card">

        <img
            src="${logo}"
            alt="${name}">

        <span>

            ${name}

        </span>

    </a>

    `;

}

function createSectionTitle(title,subtitle=""){

    return `

    <div class="section-title">

        <h2>${title}</h2>

        <p>${subtitle}</p>

    </div>

    `;

}