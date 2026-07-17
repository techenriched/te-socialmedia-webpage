/* =====================================================
   TechEnriched AI
   app.js
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    buildNavbar();

    buildHero();

    buildFeaturedSeries();

    buildEpisodes();

    buildLatestRelease();

    buildTopics();

    buildInsight();

    buildSocial();

    buildAbout();

    buildComingNext();

    buildFooter();

});

/* ================= NAVBAR ================= */

function buildNavbar() {

    document.getElementById("navbar").innerHTML = `

        <div class="container nav">

            <div class="logo">

                ${SITE.title}

            </div>

            <nav>

                <a href="#featured-series">Series</a>

                <a href="#episodes">Episodes</a>

                <a href="#learn-ai">Learn AI</a>

                <a href="#social">Follow</a>

            </nav>

        </div>

    `;

}

/* ================= HERO ================= */

function buildHero() {

    document.getElementById("hero").innerHTML = `

        <div class="container hero">

            <h1>${SITE.title}</h1>

            <p>${SITE.tagline}</p>

            <p>${SITE.description}</p>

            <div class="hero-buttons">

                <a href="#featured-series" class="btn primary">

                    ▶ Watch Series

                </a>

                <a href="#latest-release" class="btn secondary">

                    Latest Release

                </a>

            </div>

        </div>

    `;

}

/* ================= FEATURED ================= */

function buildFeaturedSeries() {

    const featured = SERIES.find(s => s.featured);

    document.getElementById("featured-series").innerHTML = `

        <div class="container">

            <h2>${featured.title}</h2>

            <img src="${featured.poster}" class="featured-poster">

            <h3>${featured.description}</h3>

            <p>Five-part cinematic AI learning journey.</p>

        </div>

    `;

}

/* ================= EPISODES ================= */

function buildEpisodes() {

    let html = '<div class="container">';

    html += '<h2>Episodes</h2>';

    html += '<div class="episode-grid">';

    SERIES[0].episodes.forEach(ep => {

        html += `

        <div class="episode-card">

            <img src="${ep.poster}">

            <h3>Part ${ep.number}</h3>

            <p>${ep.title}</p>

        </div>

        `;

    });

    html += '</div>';

    html += '</div>';

    document.getElementById("episodes").innerHTML = html;

}

/* ================= LATEST ================= */

function buildLatestRelease() {

    const latest = SERIES[0].episodes[3];

    document.getElementById("latest-release").innerHTML = `

        <div class="container">

            <h2>Latest Release</h2>

            <img src="${latest.poster}" class="latest-poster">

            <h3>${latest.title}</h3>

            <p>Watch the latest episode on Instagram and YouTube.</p>

        </div>

    `;

}

/* ================= TOPICS ================= */

function buildTopics() {

    let html = `

    <div class="container">

        <h2>Explore AI Topics</h2>

        <div class="topics-grid">

    `;

    AI_TOPICS.forEach(topic => {

        html += `

            <div class="topic-card">

                ${topic}

            </div>

        `;

    });

    html += "</div></div>";

    document.getElementById("learn-ai").innerHTML = html;

}

/* ================= INSIGHT ================= */

function buildInsight() {

    const insight = INSIGHTS[Math.floor(Math.random() * INSIGHTS.length)];

    document.getElementById("ai-insight").innerHTML = `

        <div class="container insight">

            <h2>Today's AI Insight</h2>

            <blockquote>

                "${insight}"

            </blockquote>

        </div>

    `;

}

/* ================= SOCIAL ================= */

function buildSocial() {

    document.getElementById("social").innerHTML = `

    <div class="container">

        <h2>Follow TechEnriched</h2>

        <div class="social-grid">

            <a href="${SITE.socials.instagram}" target="_blank">

                Instagram

            </a>

            <a href="${SITE.socials.youtube}" target="_blank">

                YouTube

            </a>

            <a href="${SITE.socials.x}" target="_blank">

                X

            </a>

            <a href="${SITE.socials.github}" target="_blank">

                GitHub

            </a>

        </div>

    </div>

    `;

}

/* ================= ABOUT ================= */

function buildAbout() {

    document.getElementById("about").innerHTML = `

    <div class="container">

        <h2>About TechEnriched</h2>

        <p>

        TechEnriched explains modern Artificial Intelligence through

        premium cinematic visual stories that anyone can understand.

        </p>

    </div>

    `;

}

/* ================= COMING NEXT ================= */

function buildComingNext() {

    document.getElementById("coming-next").innerHTML = `

    <div class="container">

        <h2>Coming Next</h2>

        <h3>Series 2</h3>

        <p>

        New cinematic AI concepts are already in production.

        </p>

    </div>

    `;

}

/* ================= FOOTER ================= */

function buildFooter() {

    document.querySelector("footer").innerHTML = `

        <div class="container">

            <p>

            © 2026 TechEnriched AI

            </p>

            <p>

            Understand AI. Visualize the Future.

            </p>

        </div>

    `;

}