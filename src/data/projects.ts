import type { Project } from '../types';

const image = (src: string, alt: string, caption?: string) => ({ src, alt, caption });

export const projects: Project[] = [
  {
    slug: 'vulkan-renderer',
    title: 'Vulkan Realtime Rendering Engine',
    thumbnail: '/assets/generated/thumbnails/vulkan-renderer.webp',
    summary:
      'A C++20 and Vulkan renderer exploring GPU pipelines, physically based shading, environment lighting, shadows, and real-time performance.',
    tldr: 'A real-time graphics engine built close to the GPU, with explicit Vulkan resource management and a collection of graphics and compute pipelines.',
    tags: ['C++20', 'Vulkan', 'GLSL', 'GPU compute'],
    categories: ['Rendering'],
    graphics: true,
    media: [
      image(
        '/assets/projects/Vulkan_render/Vulkan_sporsa_scene.gif',
        'Vulkan renderer showing a stone arcade scene with indirect lighting',
        'Real-time scene rendered by the Vulkan engine.',
      ),
    ],
    links: [
      {
        label: 'View repository',
        href: 'https://github.com/JeffreyYijiWang/Vulkan-Render',
        kind: 'repository',
      },
    ],
    facts: [
      { label: 'Focus', value: 'Real-time rendering' },
      { label: 'Core stack', value: 'C++20, Vulkan, GLSL' },
      { label: 'Role', value: 'Graphics programmer' },
    ],
    sections: [
      {
        heading: 'Goal',
        paragraphs: [
          'Build a renderer that makes modern GPU work explicit: resource lifetimes, synchronization, shader stages, image processing, and frame-level performance all live in the application rather than behind a high-level engine.',
        ],
      },
      {
        heading: 'Technical architecture',
        paragraphs: [
          'The repository separates scene and runtime support from dedicated object, environment, mirror, shadow, line, and physically based rendering pipelines. Compute shaders generate irradiance, specular environment data, and a BRDF lookup used by the lighting path.',
        ],
        bullets: [
          'Explicit Vulkan images, buffers, descriptors, barriers, and pipeline layouts.',
          'GLSL vertex, fragment, and compute shaders for PBR and environment processing.',
          'Frustum-culling, shadow-atlas, tone-mapping, and scene-loading code in the checked-in source.',
        ],
      },
      {
        heading: 'Documentation note',
        paragraphs: [
          'The public README still reflects the course starter project. This page therefore limits its technical claims to features visible in the repository and the existing portfolio media.',
        ],
      },
    ],
    related: ['monte-carlo-caustics', 'scotty3d-render'],
    todo: 'Add measured frame-time results, hardware details, and a concise development timeline.',
  },
  {
    slug: 'human-body-visualization',
    title: 'Human Visualization Imaging',
    thumbnail: '/assets/generated/thumbnails/human-body-visualization.webp',
    summary:
      'An experimental system for slicing, bending, transforming, and recomposing volumetric anatomical imagery through interactive views.',
    tldr: 'A Python-based visualization instrument that treats anatomical volumes as both spatial data and material for image-making.',
    tags: ['Python', 'OpenGL', 'OpenCV', 'Volumetric imaging'],
    categories: ['Visualization', 'Creative Coding'],
    graphics: true,
    media: [
      image(
        '/assets/projects/Human_visualization_project/combined_viewer.gif',
        'Combined anatomical volume viewer moving through multiple slice orientations',
        'Interactive comparison of multiple volume views.',
      ),
      image(
        '/assets/projects/Human_visualization_project/curve.png',
        'Curved sampling surface passing through a volumetric body dataset',
        'A deformable surface replaces a conventional flat slice.',
      ),
      image(
        '/assets/projects/Human_visualization_project/Segmentation human slices.png',
        'Segmented anatomical slices arranged as a grid',
      ),
      image(
        '/assets/projects/Human_visualization_project/top_down_viewer.gif',
        'Top-down interactive view of stacked anatomical slices',
      ),
      image(
        '/assets/projects/Human_visualization_project/tripdrict-gif.gif',
        'Three-panel anatomical visualization changing over time',
      ),
    ],
    links: [
      {
        label: 'View repository',
        href: 'https://github.com/JeffreyYijiWang/human-body-visualization',
        kind: 'repository',
      },
    ],
    facts: [
      { label: 'Format', value: 'Interactive visualization tool' },
      { label: 'Core stack', value: 'Python, NumPy, OpenGL' },
      { label: 'Role', value: 'Artist and developer' },
    ],
    sections: [
      {
        heading: 'Context',
        paragraphs: [
          'The work begins with the visual language of medical imaging and asks how a slice can also behave like a sculptural, cultural, and computational object. It moves between scientific instrument, studio tool, and exhibition interface.',
        ],
      },
      {
        heading: 'Interaction model',
        bullets: [
          'Axis-aligned, oblique, curved, and multi-volume comparison views.',
          'Screen-space transformations, masking objects, reflection, and fragment effects.',
          'Timeline waypoints and replay for revisiting camera and slice configurations.',
          'Visual heuristics including filled area, connected components, and an interest score.',
        ],
      },
      {
        heading: 'Key technical problem',
        paragraphs: [
          'Curved viewing treats every screen pixel as a local point on a parameterized surface. A curve displaces that point along the plane normal before the volume is sampled, turning a flat multi-planar reconstruction into a deformable spatial probe.',
        ],
      },
      {
        heading: 'Future work',
        paragraphs: [
          'The repository proposes pen-plotter integration, easier switching between volumes, and a future Three.js version that could bring the work to the web.',
        ],
      },
    ],
    related: ['ultrasound-tongue-imaging', 'generative-lego-pipeline'],
  },
  {
    slug: 'generative-lego-pipeline',
    title: 'Generative Lego Figure Pipeline',
    thumbnail: '/assets/generated/thumbnails/generative-lego-pipeline.webp',
    summary:
      'A Python, CAD, and Blender pipeline that turns generated LEGO minifigures into optimized SVG illustrations and visual typologies.',
    tldr: 'The system moves from LEGO part metadata to generated figures, 3D interchange files, Blender renders, extracted edges, and plotter-ready SVG layouts.',
    tags: ['Python', 'Blender', 'LDraw', 'SVG', 't-SNE'],
    categories: ['Creative Coding', 'Visualization'],
    graphics: true,
    media: [
      image(
        '/assets/projects/Lego_pipeline/tsne_grids.gif',
        'Animated t-SNE grid of generated LEGO minifigures',
        'A typology organized in a learned two-dimensional embedding.',
      ),
      image(
        '/assets/projects/Lego_pipeline/querying_grid.gif',
        'Interactive querying of a grid of generated LEGO minifigures',
      ),
      image(
        '/assets/projects/Lego_pipeline/final_mosaic.png',
        'Dense mosaic of generated LEGO minifigure line drawings',
      ),
      image(
        '/assets/projects/Lego_pipeline/output (1).png',
        'Generated LEGO figure render and extracted contours',
      ),
      image(
        '/assets/projects/Lego_pipeline/Post-Card.jpg',
        'Printed postcard made from the generated LEGO figure pipeline',
      ),
    ],
    links: [
      {
        label: 'View repository',
        href: 'https://github.com/JeffreyYijiWang/Generative-Lego-Figure-Pipeline',
        kind: 'repository',
      },
    ],
    facts: [
      { label: 'Output', value: 'SVG and print layouts' },
      { label: 'Core stack', value: 'Python, Blender, LeoCAD, VPype' },
      { label: 'Role', value: 'Artist and developer' },
    ],
    sections: [
      {
        heading: 'Goal',
        paragraphs: [
          'Explore how ordinary modular parts form larger visual patterns, then turn classification and embedding tools into an artistic process for generating irregular figures, collisions, repetition, and new typologies.',
        ],
      },
      {
        heading: 'Pipeline',
        bullets: [
          'Query part IDs and categories from LEGO-compatible CAD metadata.',
          'Generate seeded minifigures, apply part transforms, and export LDraw/DAE files through LeoCAD.',
          'Batch scenes through Blender and render both plain imagery and Freestyle contours.',
          'Extract fine raster edges, merge them with the mesh contours, simplify the paths with VPype, and arrange the results into grids.',
        ],
      },
      {
        heading: 'Design decision',
        paragraphs: [
          'Mesh-derived Freestyle contours produce crisp silhouettes but miss creases, faces, and lighting detail. Combining them with pixel-derived edges keeps the precise outline while retaining surface texture for plotting and print.',
        ],
      },
      {
        heading: 'Future work',
        paragraphs: [
          'The public documentation identifies web hosting and motion prediction for the generated figures as open directions.',
        ],
      },
    ],
    related: ['human-body-visualization', 'ultrasound-tongue-imaging'],
  },
  {
    slug: 'cmu-maps',
    title: 'CMU Maps',
    thumbnail: '/assets/generated/thumbnails/cmu-maps.webp',
    summary:
      'A campus map for finding buildings and rooms, viewing floorplans, and navigating indoor and outdoor spaces at Carnegie Mellon University.',
    tldr: 'A multi-surface campus navigation platform maintained by ScottyLabs, with web clients, services, and data-processing tools.',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Maps'],
    categories: ['Web & Mobile', 'Visualization'],
    graphics: true,
    media: [
      image('/assets/projects/CMU Maps/cmu_maps.png', 'CMU Maps campus overview'),
      image('/assets/projects/CMU Maps/navigation.gif', 'CMU Maps route navigation interaction'),
      image('/assets/projects/CMU Maps/levels.gif', 'Switching building levels in CMU Maps'),
      image('/assets/projects/CMU Maps/satillite.png', 'Satellite view in CMU Maps'),
      image('/assets/projects/CMU Maps/cmu_maps_2.jpg', 'CMU Maps building information view'),
      image('/assets/projects/CMU Maps/CMU_maps.jpeg', 'CMU Maps mobile interface'),
      image('/assets/projects/CMU Maps/cmu_1.jpg', 'CMU Maps floorplan detail'),
    ],
    links: [
      { label: 'View repository', href: 'https://github.com/ScottyLabs/maps', kind: 'repository' },
      { label: 'Open CMU Maps', href: 'https://maps.scottylabs.org/', kind: 'site' },
    ],
    facts: [
      { label: 'Organization', value: 'ScottyLabs' },
      { label: 'Role', value: 'Software developer' },
      { label: 'Status', value: 'Ongoing' },
    ],
    sections: [
      {
        heading: 'Product',
        paragraphs: [
          'CMU Maps makes campus spatial information easier to use by combining building search, room details, floorplans, and route guidance in one interface.',
        ],
      },
      {
        heading: 'Contribution',
        paragraphs: [
          'The existing portfolio records work on indoor and outdoor navigation features and authentication workflows. The current public repository is a TypeScript monorepo with React web and visualization clients, a server package, shared UI and data types, and a Python dataflow application.',
        ],
      },
      {
        heading: 'Repository architecture',
        bullets: [
          'React interfaces for the primary web application and internal visualization tools.',
          'Shared TypeScript packages for UI, common types, and real-time communication.',
          'A server layer backed by PostgreSQL and generated API types.',
          'Python tooling for ingesting, processing, and validating map data.',
        ],
      },
    ],
    related: ['o-quest'],
    todo: 'Add a precise contribution window and screenshots tied to individual features.',
  },
  {
    slug: 'monte-carlo-caustics',
    title: 'Monte Carlo Refractive Caustics Raytracer',
    thumbnail: '/assets/generated/thumbnails/monte-carlo-caustics.webp',
    summary:
      'A physically based C++ ray tracer for reflective and refractive caustics, path-space light transport, and layered dielectric materials.',
    tldr: 'A rendering study combining Monte Carlo path tracing with targeted light-path techniques for difficult specular caustics.',
    tags: ['C++', 'CMake', 'Path tracing', 'BVH'],
    categories: ['Rendering'],
    graphics: true,
    media: [
      image(
        '/assets/projects/physics_based_rendering/final3.png',
        'Final refractive caustics render',
      ),
      image(
        '/assets/projects/physics_based_rendering/caustic_ao-2026-04-27-03-53-25.png',
        'Caustic and ambient-occlusion rendering test',
      ),
      image(
        '/assets/projects/physics_based_rendering/teapot-256spp.png',
        'Teapot path trace at 256 samples per pixel',
      ),
      image(
        '/assets/projects/physics_based_rendering/beckmann-ref.png',
        'Beckmann material reference render',
      ),
      image(
        '/assets/projects/physics_based_rendering/power_veach_mis-2026-03-15-03-04-01.png',
        'Multiple-importance-sampling test scene',
      ),
      image(
        '/assets/projects/physics_based_rendering/ajax-ao-2026-02-23-19-54-28.png',
        'Ajax model ambient-occlusion render',
      ),
      image(
        '/assets/projects/physics_based_rendering/marble-2026-02-09-16-08-40.png',
        'Marble material render',
      ),
      image(
        '/assets/projects/physics_based_rendering/lake_bg-2026-03-15-00-45-51.png',
        'Environment-lit lake render',
      ),
    ],
    links: [],
    facts: [
      { label: 'Focus', value: 'Physically based rendering' },
      { label: 'Core stack', value: 'C++, CMake' },
      { label: 'Role', value: 'Rendering programmer' },
    ],
    sections: [
      {
        heading: 'Challenge',
        paragraphs: [
          'Specular and refractive paths are difficult for an unbiased renderer to discover. The project investigates path-tracing and targeted sampling strategies for light transported through mirrors, glass, and layered dielectric materials.',
        ],
      },
      {
        heading: 'Existing implementation summary',
        bullets: [
          'Monte Carlo path tracing and multiple importance sampling.',
          'Newton-based light-path solving and specular-manifold sampling.',
          'BVH acceleration and multithreaded rendering.',
          'Reflective, refractive, and microfacet material studies.',
        ],
      },
    ],
    related: ['vulkan-renderer', 'scotty3d-render'],
    todo: 'Link the public repository and add verified implementation notes, dates, and render-time comparisons.',
  },
  {
    slug: 'ahn-chill-room',
    title: 'AHN Chill Room',
    thumbnail: '/assets/generated/thumbnails/ahn-chill-room.webp',
    summary:
      'A Unity self-help experience created for Allegheny Health Network, supported by a data-driven content pipeline and Firebase services.',
    tldr: 'A mobile interactive environment that pairs a Unity client with tooling for producing and validating dialogue, triggers, events, and item data.',
    tags: ['Unity', 'C#', 'Python', 'Firebase'],
    categories: ['Games', 'Web & Mobile'],
    graphics: true,
    media: [
      image('/assets/projects/AHN/splash_art.gif', 'Animated AHN Chill Room title artwork'),
      image('/assets/projects/AHN/idle_walking.gif', 'Character walking through the Chill Room'),
      image('/assets/projects/AHN/interaction.gif', 'Interactive scene in the Chill Room'),
      image('/assets/projects/AHN/exercise.gif', 'Guided activity inside the Chill Room'),
      image('/assets/projects/AHN/Building.gif', 'Building the Chill Room environment in Unity'),
      image('/assets/projects/AHN/minigameSketches.png', 'Sketches for Chill Room minigames'),
      image(
        '/assets/projects/AHN/ChillRoom_Relationship_Sketch.png',
        'Relationship diagram for Chill Room systems',
      ),
    ],
    links: [{ label: 'Project site', href: 'https://ctp.cs.cmu.edu/ahn', kind: 'site' }],
    facts: [
      { label: 'Organization', value: 'CMU Center for Transformational Play' },
      { label: 'Role', value: 'Software engineering intern' },
      { label: 'Dates', value: 'May–Nov 2025' },
    ],
    sections: [
      {
        heading: 'Contribution',
        paragraphs: [
          'Developed the Unity/C# application with the Center for Transformational Play for Allegheny Health Network and supported the content team with production tooling.',
        ],
      },
      {
        heading: 'Pipeline result',
        paragraphs: [
          'A Python CSV import and validation pipeline reduced reported content-integration time from about ten minutes to one minute for dialogue, triggers, events, and item attributes.',
        ],
      },
      {
        heading: 'Design process',
        paragraphs: [
          'The included sketches and system diagrams show an iterative process that connected minigame concepts, character interaction, content relationships, and the final Unity scenes.',
        ],
      },
    ],
    related: ['unity-games'],
    todo: 'Add a public repository or a fuller approved case study if client permissions allow.',
  },
  {
    slug: 'o-quest',
    title: 'O-Quest — CMU Orientation App',
    thumbnail: '/assets/generated/thumbnails/o-quest.webp',
    summary:
      'A gamified mobile orientation experience that helps incoming Carnegie Mellon students learn campus through location-aware quests.',
    tldr: 'A Rust service and React/Tauri client ecosystem for challenges, progress, rewards, geolocation, QR workflows, and first-year orientation.',
    tags: ['Rust', 'React', 'Tauri', 'PostgreSQL', 'Geolocation'],
    categories: ['Web & Mobile'],
    graphics: false,
    media: [
      image(
        '/assets/projects/O-Quest/screens.jpeg',
        'O-Quest mobile screens showing orientation challenges and progress',
      ),
    ],
    links: [
      {
        label: 'View repository',
        href: 'https://github.com/ScottyLabs/quest-old',
        kind: 'repository',
      },
      {
        label: 'View on Google Play',
        href: 'https://play.google.com/store/apps/details?id=quest.cmu.twa&hl=en-US',
        kind: 'site',
      },
    ],
    facts: [
      { label: 'Organization', value: 'ScottyLabs' },
      { label: 'Role', value: 'Software developer' },
      { label: 'Dates', value: 'Sept 2024–present' },
    ],
    sections: [
      {
        heading: 'Contribution',
        paragraphs: [
          'Built and maintained Rust and PostgreSQL backend work for the scavenger-hunt experience, using modular handler and service layers plus operational tools for challenge data.',
        ],
      },
      {
        heading: 'Architecture',
        bullets: [
          'Axum services with SeaORM entities and PostgreSQL migrations.',
          'Cached challenge, completion, reward, leaderboard, and user service boundaries.',
          'React/Tauri clients with generated API types and native device integrations.',
          'CSV seeding and QR export tools for operating an orientation event.',
        ],
      },
      {
        heading: 'Product constraints',
        paragraphs: [
          'The system has to connect physical campus locations, a large set of challenges, mobile permissions, event operations, and participant progress without making the first-year experience feel like administrative software.',
        ],
      },
    ],
    related: ['cmu-maps'],
  },
  {
    slug: 'scotty3d-render',
    title: 'Scotty3D Render',
    thumbnail: '/assets/generated/thumbnails/scotty3d-render.webp',
    summary:
      'A C++ graphics application spanning software rasterization, half-edge mesh editing, path tracing, animation, particles, rigging, and inverse kinematics.',
    tldr: 'A broad graphics-systems implementation covering the path from editable mesh data to physically based rendering and animated results.',
    tags: ['C++', 'Rasterization', 'Path tracing', 'Animation'],
    categories: ['Rendering'],
    graphics: true,
    media: [
      image('/assets/projects/Scotty3D/render.png', 'Scotty3D physically based render'),
      image('/assets/projects/Scotty3D/bvh.png', 'Scotty3D BVH visualization'),
      image('/assets/projects/Scotty3D/I_samples.png', 'Scotty3D sampling comparison'),
      image('/assets/projects/Scotty3D/light_emissive.png', 'Emissive lighting render in Scotty3D'),
      image(
        '/assets/projects/Scotty3D/light_sampling.png',
        'Light-sampling comparison in Scotty3D',
      ),
      image('/assets/projects/Scotty3D/iK.gif', 'Inverse-kinematics animation in Scotty3D'),
      image('/assets/projects/Scotty3D/particles.gif', 'Particle simulation in Scotty3D'),
    ],
    links: [],
    facts: [
      { label: 'Focus', value: 'Graphics foundations' },
      { label: 'Core stack', value: 'C++' },
      { label: 'Role', value: 'Graphics programmer' },
    ],
    sections: [
      {
        heading: 'Scope',
        paragraphs: [
          'The project follows a graphics application across multiple representations: software triangle pipelines, mesh topology, accelerated ray queries, physically based shading, rigging, procedural motion, and inverse kinematics.',
        ],
      },
      {
        heading: 'Implemented areas',
        bullets: [
          'Triangle rasterization and interpolation pipelines.',
          'Half-edge mesh operations and geometry editing.',
          'BVH-accelerated ray tracing and light sampling.',
          'Particles, rigging, animation, and inverse kinematics.',
        ],
      },
    ],
    related: ['vulkan-renderer', 'monte-carlo-caustics'],
    todo: 'Replace the previously incorrect repository link with the correct public source, if available.',
  },
  {
    slug: 'ultrasound-tongue-imaging',
    title: 'Ultrasound Tongue Imaging',
    thumbnail: '/assets/generated/thumbnails/ultrasound-tongue-imaging.webp',
    summary:
      'A real-time tongue-recognition and image-making system connecting ultrasound capture, phonetic classification, shaders, and print.',
    tldr: 'A self-recorded ultrasound dataset becomes both a six-class short-vowel classifier and material for p5.js graphics, screen prints, and a flipbook.',
    tags: ['Python', 'p5.js', 'TensorFlow', 'OpenCV', 'Shaders'],
    categories: ['Computer Vision', 'Creative Coding'],
    graphics: true,
    media: [
      image(
        '/assets/projects/Ultrasound_tongue/demo.gif',
        'Live ultrasound tongue classification demo',
      ),
      image(
        '/assets/projects/Ultrasound_tongue/shaders.gif',
        'Shader experiments using ultrasound tongue imagery',
      ),
      image(
        '/assets/projects/Ultrasound_tongue/prints.png',
        'Screen prints made from ultrasound tongue frames',
      ),
    ],
    links: [
      {
        label: 'View repository',
        href: 'https://github.com/JeffreyYijiWang/ultrasonic_tongue_imaging',
        kind: 'repository',
      },
    ],
    facts: [
      { label: 'Dataset', value: '3,000 self-recorded images' },
      { label: 'Classes', value: 'Six short-vowel sounds' },
      { label: 'Role', value: 'Artist and developer' },
    ],
    sections: [
      {
        heading: 'Motivation',
        paragraphs: [
          'The project looks inward for a portrait, using the grain and motion of ultrasound imagery to connect bodily observation, machine classification, typography, and printmaking.',
        ],
      },
      {
        heading: 'Capture and model pipeline',
        bullets: [
          'A handheld ultrasound probe records the tongue from beneath the chin.',
          'An iPad, HDMI recorder, capture card, OBS, and browser sketch connect the probe output to the computer.',
          'A Teachable Machine/TensorFlow CNN classifies 3,000 labeled frames across six short-vowel positions.',
          'p5.js and shader studies reinterpret the live images beyond the classifier interface.',
        ],
      },
      {
        heading: 'Physical output',
        paragraphs: [
          'Selected frames were printed to acetate, exposed onto a 180-mesh screen, and transferred to paper. A forty-frame perfect-bound flipbook extends the dataset into a tactile sequence.',
        ],
      },
      {
        heading: 'Future work',
        paragraphs: [
          'The documented next steps include a t-SNE mosaic, a phonetic alphabet print, generated ultrasound imagery, and traversal of the learned visual space.',
        ],
      },
    ],
    related: ['human-body-visualization', 'computer-vision-studies'],
  },
  {
    slug: 'computer-vision-studies',
    title: 'Computer Vision Studies',
    thumbnail: '/assets/generated/thumbnails/computer-vision-studies.webp',
    summary:
      'A collection of image-processing and vision work across filtering, Hough transforms, planar AR, 3D reconstruction, recognition, and tracking.',
    tldr: 'Course and independent studies that connect classical vision algorithms with neural methods in Python.',
    tags: ['Python', 'PyTorch', 'TensorFlow', 'OpenCV', 'SciPy'],
    categories: ['Computer Vision'],
    graphics: true,
    media: [
      image('/assets/projects/CV_projects/cv_1.png', 'Computer vision feature and geometry study'),
      image(
        '/assets/projects/CV_projects/cv_2.jpeg',
        'Computer vision image transformation result',
      ),
      image('/assets/projects/CV_projects/cv_3.png', 'Planar computer vision reconstruction'),
      image('/assets/projects/CV_projects/cv_4.png', 'Computer vision recognition output'),
      image('/assets/projects/CV_projects/cv_5.png', 'Video tracking and motion analysis result'),
    ],
    links: [],
    facts: [
      { label: 'Format', value: 'Project collection' },
      { label: 'Core stack', value: 'Python, OpenCV, PyTorch' },
    ],
    sections: [
      {
        heading: 'Topics',
        bullets: [
          'Image filtering and feature extraction.',
          'Hough transforms and geometric estimation.',
          'Planar augmented reality and 3D reconstruction.',
          'Scene recognition, neural networks, and video tracking.',
        ],
      },
      {
        heading: 'Approach',
        paragraphs: [
          'The collection uses direct Python implementations to make the assumptions behind classical algorithms visible, then compares those ideas with library-backed deep-learning workflows.',
        ],
      },
    ],
    related: ['ultrasound-tongue-imaging'],
    todo: 'Add source repositories, individual project dates, and captions tied to each result.',
  },
  {
    slug: 'tindoori-website',
    title: 'Tindoori Community Platform',
    thumbnail: '/assets/generated/thumbnails/tindoori-website.webp',
    summary:
      'A professional-development and language-learning platform built around profiles, community posts, messaging, events, and progress systems.',
    tldr: 'A full-stack social product developed with React, JavaScript, Python, MongoDB Atlas, and PostgreSQL.',
    tags: ['React', 'JavaScript', 'Python', 'MongoDB', 'PostgreSQL'],
    categories: ['Web & Mobile'],
    graphics: false,
    media: [
      image('/assets/projects/Tindoori_website/start.gif', 'Tindoori application landing flow'),
      image('/assets/projects/Tindoori_website/profile.gif', 'Editing a Tindoori user profile'),
      image('/assets/projects/Tindoori_website/Project.gif', 'Browsing projects in Tindoori'),
      image(
        '/assets/projects/Tindoori_website/images.gif',
        'Sharing images in the Tindoori community',
      ),
      image(
        '/assets/projects/Tindoori_website/text.gif',
        'Messaging and text interaction in Tindoori',
      ),
    ],
    links: [
      {
        label: 'Watch demo',
        href: 'https://www.youtube.com/watch?v=A94oRW8xUtQ',
        kind: 'demo',
      },
    ],
    facts: [
      { label: 'Organization', value: 'Tindoori Labs' },
      { label: 'Role', value: 'Research intern' },
      { label: 'Dates', value: 'Aug 2023–Aug 2024' },
    ],
    sections: [
      {
        heading: 'Product',
        paragraphs: [
          'Users create profiles and posts, track language-learning progress, message other members in real time, and coordinate community events in a shared professional-development space.',
        ],
      },
      {
        heading: 'Contribution',
        paragraphs: [
          'Implemented frontend and backend features across authentication, profile systems, social interaction, messaging, gamification, and event coordination while collaborating with the founder on architecture and feature planning.',
        ],
      },
    ],
    todo: 'Add an approved public repository or a more detailed architecture diagram.',
  },
  {
    slug: 'unity-games',
    title: 'Unity Games + Game Engines',
    thumbnail: '/assets/generated/thumbnails/unity-games.webp',
    summary:
      'A collection of browser-playable 3D games and engine experiments made in Unity and C#.',
    tldr: 'Rapid game prototypes that explore character control, systems design, interaction, and visual feedback across several small projects.',
    tags: ['Unity', 'C#', 'Game development'],
    categories: ['Games'],
    graphics: true,
    media: [
      image(
        '/assets/projects/Games/intro_1.gif',
        'Animated introduction from Trials of the Forest',
      ),
      image(
        '/assets/projects/Games/intro_2.gif',
        'Second animated introduction from Trials of the Forest',
      ),
      image('/assets/projects/Games/game_play.gif', 'Trials of the Forest gameplay'),
      image('/assets/projects/Games/bike_of_fury.gif', 'Bike of Fury gameplay'),
      image('/assets/projects/Games/cheese.gif', 'Cheese-themed Unity game prototype'),
      image('/assets/projects/Games/thumb_war.gif', 'Thumb War Unity game prototype'),
    ],
    links: [{ label: 'Play on itch.io', href: 'https://jeffreyyijiwang.itch.io/', kind: 'site' }],
    facts: [
      { label: 'Format', value: 'Game collection' },
      { label: 'Core stack', value: 'Unity, C#' },
    ],
    sections: [
      {
        heading: 'Collection',
        paragraphs: [
          'The projects use short development cycles to test game feel, character movement, visual direction, interaction rules, and the systems needed to turn a mechanic into a playable browser build.',
        ],
      },
      {
        heading: 'Play',
        paragraphs: [
          'Public builds are collected on itch.io. Individual repositories, dates, and team credits are not yet documented in the portfolio source.',
        ],
      },
    ],
    related: ['ahn-chill-room'],
    todo: 'Add individual game titles, credits, dates, repositories, and concise postmortems.',
  },
];

export const projectBySlug = new Map(projects.map((project) => [project.slug, project]));

export const graphicsProjects = projects.filter((project) => project.graphics);

export const graphicsCategories = Array.from(
  new Set(graphicsProjects.flatMap((project) => project.categories)),
).sort();
