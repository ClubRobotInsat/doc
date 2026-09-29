// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="introduction.html"><strong aria-hidden="true">1.</strong> Introduction</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="outils_communs/index.html"><strong aria-hidden="true">2.</strong> ⚙️ Outils Communs</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="outils_communs/git.html"><strong aria-hidden="true">2.1.</strong> Git</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="outils_communs/dual_boot.html"><strong aria-hidden="true">2.2.</strong> Dual Boot</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="outils_communs/ide.html"><strong aria-hidden="true">2.3.</strong> IntelliJ et STM32Cube</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="management/index.html"><strong aria-hidden="true">3.</strong> 🧑‍💼 Organisation</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="management/gestion_de_projet.html"><strong aria-hidden="true">3.1.</strong> Gestion de projet</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="management/gestion_de_lequipe.html"><strong aria-hidden="true">3.2.</strong> Gestion de l&#39;équipe</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="management/gestion_de_la_communication.html"><strong aria-hidden="true">3.3.</strong> Gestion de la communication</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="management/gestion_de_la_documentation.html"><strong aria-hidden="true">3.4.</strong> Gestion de la documentation</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="regles_cdf_2024.html"><strong aria-hidden="true">4.</strong> 📏 Règles Coupe de France 2024</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="architecture.html"><strong aria-hidden="true">5.</strong> 📈 Architecture du projet</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="informatique/index.html"><strong aria-hidden="true">6.</strong> 💻 Informatique</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="informatique/mise_en_place/index.html"><strong aria-hidden="true">6.1.</strong> Mise en place</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="informatique/mise_en_place/connexion_a_la_raspberry.html"><strong aria-hidden="true">6.1.1.</strong> Connexion à la Raspberry</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="informatique/mise_en_place/ide.html"><strong aria-hidden="true">6.1.2.</strong> IDE</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="informatique/mise_en_place/repertoire_de_travail.html"><strong aria-hidden="true">6.1.3.</strong> Répertoire de travail</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="informatique/mise_en_place/python.html"><strong aria-hidden="true">6.1.4.</strong> Python</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="informatique/mise_en_place/ros2_dev_container_setup.html"><strong aria-hidden="true">6.1.5.</strong> ROS2 dev environment</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="informatique/architecture.html"><strong aria-hidden="true">6.2.</strong> Architecture du code</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="informatique/communication.html"><strong aria-hidden="true">6.3.</strong> Communication avec le hardware</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="informatique/lidar.html"><strong aria-hidden="true">6.4.</strong> Détection de l&#39;adversaire : LIDAR</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="informatique/robot.html"><strong aria-hidden="true">6.5.</strong> Création d&#39;un robot</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="informatique/ros2-random-issues.html"><strong aria-hidden="true">6.6.</strong> ROS2 issues</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="elec_soft/index.html"><strong aria-hidden="true">7.</strong> 👨‍💻 Electronique Logicielle</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="#.html"><strong aria-hidden="true">7.1.</strong> Code embarqué</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="elec_soft/code/c.html"><strong aria-hidden="true">7.1.1.</strong> Langage C</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="elec_soft/stm32/index.html"><strong aria-hidden="true">7.2.</strong> STM32</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="elec_soft/stm32cubeide/index.html"><strong aria-hidden="true">7.3.</strong> STM32CubeIDE</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="elec_soft/stm32cubeide/installation.html"><strong aria-hidden="true">7.3.1.</strong> Installation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="elec_soft/stm32cubeide/new_project.html"><strong aria-hidden="true">7.3.2.</strong> Création d&#39;un nouveau projet</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="elec_soft/stm32cubeide/peripheral_config.html"><strong aria-hidden="true">7.3.3.</strong> Configuration d&#39;un STM32</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="elec_soft/stm32cubeide/project_config.html"><strong aria-hidden="true">7.3.4.</strong> Configuration d&#39;un project</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="elec_soft/stm32cubeide/write_code.html"><strong aria-hidden="true">7.3.5.</strong> Astuce pour le code</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="elec_soft/stm32cubeide/build_and_flash.html"><strong aria-hidden="true">7.3.6.</strong> Compilation et flashage</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="elec_soft/stm32cubeide/debug.html"><strong aria-hidden="true">7.3.7.</strong> Debug</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="elec_soft/stmlib/index.html"><strong aria-hidden="true">7.4.</strong> STMLIB</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="elec_soft/elecsoft_checklist.html"><strong aria-hidden="true">7.5.</strong> Elecsoft Checklist 1o1 😢</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="elec_hard/index.html"><strong aria-hidden="true">8.</strong> ⚡ Electronique Matérielle (Elec-hard)</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="elec_hard/introduction.html"><strong aria-hidden="true">8.1.</strong> Introduction</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="elec_hard/Etapes-design.html"><strong aria-hidden="true">8.2.</strong> Procédé de design</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="elec_hard/PCB.html"><strong aria-hidden="true">8.3.</strong> Qu&#39;est-ce qu&#39;un PCB ?</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="elec_hard/KiCad.html"><strong aria-hidden="true">8.4.</strong> Une introduction au KiCad</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="elec_hard/Fabrication.html"><strong aria-hidden="true">8.5.</strong> Fabrication</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="elec_hard/design-rules.html"><strong aria-hidden="true">8.6.</strong> Règles de jeu - checklist</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="elec_hard/autres/index.html"><strong aria-hidden="true">8.7.</strong> Autres</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="elec_hard/autres/Moteur-Pas_a_pas.html"><strong aria-hidden="true">8.7.1.</strong> Moteur pas à pas</a></span></li></ol></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="mecanique/index.html"><strong aria-hidden="true">9.</strong> 🦾 Mécanique</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="mecanique/utilisation-de-creo.html"><strong aria-hidden="true">9.1.</strong> Guide d&#39;utilisation Creo</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="mecanique/installation-de-creo.html"><strong aria-hidden="true">9.2.</strong> Guide d&#39;installation de Creo</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="mecanique/tips-de-meca.html"><strong aria-hidden="true">9.3.</strong> Quelques Tips à connaitre</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="retour_dexperiences/index.html"><strong aria-hidden="true">10.</strong> 💡Retour d&#39;expériences</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="retour_dexperiences/retour_dexperiences/cdf_2024.html"><strong aria-hidden="true">10.1.</strong> Année 2023-2024</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="retour_dexperiences/retour_dexperiences/cdf_2023.html"><strong aria-hidden="true">10.2.</strong> Année 2022-2023</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="retour_dexperiences/retour_dexperiences/cdf_2022.html"><strong aria-hidden="true">10.3.</strong> Année 2021-2022</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/doc-pre-2021-index.html"><strong aria-hidden="true">11.</strong> 📚 Doc pre-2021</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/intro.html"><strong aria-hidden="true">11.1.</strong> Introduction</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/outils_communs/index.html"><strong aria-hidden="true">11.2.</strong> Outils Communs</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/outils_communs/dual_boot.html"><strong aria-hidden="true">11.2.1.</strong> Dual Boot</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/outils_communs/git.html"><strong aria-hidden="true">11.2.2.</strong> Git</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/outils_communs/ide.html"><strong aria-hidden="true">11.2.3.</strong> CLion</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/info/index.html"><strong aria-hidden="true">11.3.</strong> Informatique</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/info/mise_en_place/index.html"><strong aria-hidden="true">11.3.1.</strong> Mise en place</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/info/mise_en_place/ide.html"><strong aria-hidden="true">11.3.1.1.</strong> IDE</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/info/mise_en_place/repertoire_de_travail.html"><strong aria-hidden="true">11.3.1.2.</strong> Répertoire de travail</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/info/mise_en_place/compilation.html"><strong aria-hidden="true">11.3.1.3.</strong> Compilation</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/info/outils/index.html"><strong aria-hidden="true">11.3.2.</strong> Prise en main des outils</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/info/outils/cmake.html"><strong aria-hidden="true">11.3.2.1.</strong> CMake</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/info/outils/petrilab.html"><strong aria-hidden="true">11.3.2.2.</strong> PetriLab</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/info/explications/index.html"><strong aria-hidden="true">11.3.3.</strong> Explications du code</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/info/explications/racine.html"><strong aria-hidden="true">11.3.3.1.</strong> Architecture de la racine</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/info/explications/architecture.html"><strong aria-hidden="true">11.3.3.2.</strong> Vue globale du projet</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/info/explications/communication.html"><strong aria-hidden="true">11.3.3.3.</strong> Communication avec le hardware</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/info/explications/lidar.html"><strong aria-hidden="true">11.3.3.4.</strong> Détection de l&#39;adversaire : LIDAR</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/info/explications/robot.html"><strong aria-hidden="true">11.3.3.5.</strong> Création d&#39;un robot</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/info/explications/simu.html"><strong aria-hidden="true">11.3.3.6.</strong> Architecture du simulateur</a></span></li></ol></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/elec_soft/index.html"><strong aria-hidden="true">11.4.</strong> Electronique Logicielle</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/elec_soft/organisation/index.html"><strong aria-hidden="true">11.4.1.</strong> Organisation du code</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/elec_soft/mise_en_place/index.html"><strong aria-hidden="true">11.4.2.</strong> Mise en place</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/elec_soft/mise_en_place/compile.html"><strong aria-hidden="true">11.4.2.1.</strong> Compilation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/elec_soft/mise_en_place/repo.html"><strong aria-hidden="true">11.4.2.2.</strong> Répertoire de travail</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/elec_soft/mise_en_place/ide.html"><strong aria-hidden="true">11.4.2.3.</strong> IDE</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/elec_soft/mise_en_place/flash.html"><strong aria-hidden="true">11.4.2.4.</strong> Flashage</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/elec_soft/apprendre_rust.html"><strong aria-hidden="true">11.4.3.</strong> Apprendre Rust</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/elec_soft/modules/index.html"><strong aria-hidden="true">11.4.4.</strong> Communication des modules avec l&#39;info</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/elec_mat/index.html"><strong aria-hidden="true">11.5.</strong> Electronique matérielle</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/elec_mat/mise_en_place/tools.html"><strong aria-hidden="true">11.5.1.</strong> Mise en place</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/elec_mat/mise_en_place/folders.html"><strong aria-hidden="true">11.5.1.1.</strong> Organisation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/elec_mat/mise_en_place/install_git.html"><strong aria-hidden="true">11.5.1.2.</strong> Installation</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/elec_mat/kicad.html"><strong aria-hidden="true">11.5.2.</strong> Préparer ta carte</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/elec_mat/tips&tricks.html"><strong aria-hidden="true">11.5.3.</strong> Conseils et outils usuels</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/elec_mat/production.html"><strong aria-hidden="true">11.5.4.</strong> Tirer une carte</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/elec_mat/references/index.html"><strong aria-hidden="true">11.5.5.</strong> Références</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/elec_mat/references/ethernet.html"><strong aria-hidden="true">11.5.5.1.</strong> Utilisation du module ethernet</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/elec_mat/references/ref_cartes.html"><strong aria-hidden="true">11.5.5.2.</strong> Annexe : liste des cartes du Club</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/elec_mat/references/ref_composants.html"><strong aria-hidden="true">11.5.5.3.</strong> Annexe : liste des composants usuels</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/elec_mat/cablage.html"><strong aria-hidden="true">11.5.6.</strong> Cablage Robot</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/reference/index.html"><strong aria-hidden="true">11.6.</strong> Documents de référence</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/reference/commun.html"><strong aria-hidden="true">11.6.1.</strong> Communs</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/reference/deplacement.html"><strong aria-hidden="true">11.6.2.</strong> Carte déplacement</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/reference/servomoteur.html"><strong aria-hidden="true">11.6.3.</strong> Carte servomoteur</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/reference/evitement.html"><strong aria-hidden="true">11.6.4.</strong> Carte évitement</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/reference/couleur.html"><strong aria-hidden="true">11.6.5.</strong> Carte capteur couleur</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/reference/pompe.html"><strong aria-hidden="true">11.6.6.</strong> Carte pompe à vide</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/com/index.html"><strong aria-hidden="true">11.7.</strong> Communication (test)</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/com/int/index.html"><strong aria-hidden="true">11.7.1.</strong> Interne (entre nous)</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/com/int/gitter.html"><strong aria-hidden="true">11.7.1.1.</strong> Gitter</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/com/int/fb.html"><strong aria-hidden="true">11.7.1.2.</strong> Messenger/Facebook</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/com/ext/index.html"><strong aria-hidden="true">11.7.2.</strong> Externe</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/com/ext/site.html"><strong aria-hidden="true">11.7.2.1.</strong> Site</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/com/ext/fb.html"><strong aria-hidden="true">11.7.2.2.</strong> Page Facebook</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pre_2021/com/res/md.html"><strong aria-hidden="true">11.7.3.</strong> Ressources &amp; images</a></span></li></ol></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            // Check both with and without the '.html' suffix to be robust against pretty URLs
            if (link.href.replace(/\.html$/, '') === current_page.replace(/\.html$/, '')
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

